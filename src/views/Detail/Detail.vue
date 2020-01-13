<template>
  <div class="game-detail">
    <!-- header -->
    <Navigation :title="$store.getters.gameInfo.title" />
    <main>
      <!-- background-image -->
      <div 
        :style="{backgroundImage: `url(${$store.getters.gameInfo.titlepic})`}"
        class="background-image"
      >
      </div>
      <!-- game-info -->
      <div 
        class="game-info" 
        ref="gameInfo">
        <img 
        :src="$store.getters.gameInfo.titlepic" 
        class="game-img">
        <div class="game-container">
          <div class="game-name">{{$store.getters.gameInfo.title}}</div>
          <div class="game-number">{{$store.getters.gameInfo.totaldown}}人在玩</div>
          <div class="game-type" v-if="$store.getters.gameInfo.app_tag !== []">
            <div class="type-item"
              v-for="(item, index) in $store.getters.gameInfo.app_tag"
              :key="index">
              <img 
                :src="item.icon"
                class="icon">
              <span class="text">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- tab-list -->
      <ul class="tab-list" :class="{fixed: fixed}">
        <router-link
          tag="li"
          class="tab-item"
          v-for="(item, index) in tabList"
          :key="index"
          :to="{name: item.name}"
          replace
        >
          <div class="text">{{item.title}}</div>
        </router-link>
      </ul>
      <div class="content" :class="{fixed: fixed}">
        <keep-alive>
          <router-view @changeDetail="changeDetail"></router-view>
        </keep-alive>
      </div>
      </main>
    <!-- download -->
    <div class="game-download">
      <!-- <div class="left"><i class="icon icon-left"></i><div class="text">收藏</div></div>  -->
      <div 
        @click="clickEvent($store.getters.gameInfo.h5_url)" 
        class="download"
        ref="down"
        :class="{
          appointment: this.$store.getters.gameInfo.state === 2,
          already: this.$store.getters.gameInfo.subscribed === 1 || alreadyAppointment,
          h5: this.$store.getters.gameInfo.hasOwnProperty('h5_url') && this.$store.getters.gameInfo.h5_url !== null,
        }"

      >
        <span></span>
        <div>{{text}}</div>
      </div>
      <!-- <div class="right"><i class="icon icon-right"></i><div class="text">分享</div></div>  -->
    </div>
  </div>
</template>
<script>

import Navigation from '@/components/navigation/navigation.vue';
import Box from '@/common/box.js';

export default {
  name: 'Detail',
  data() {
    return {
      id: 0,
      tabList: [
        {
          title: '详情', 
          name: 'DetailIndex'
        }, {
          title: '评论', 
          name: 'DetailComments'
        }, {
          title: '礼包', 
          name: 'DetailGift'
        }, {
          title: '资讯',
          name: 'DetailNews'
        }
      ],
      fixed: false,
      alreadyAppointment: false,
    }
  },
  computed: {
    text() {
      if(this.$store.getters.gameInfo.state === 2) {
        // 如果是预约页面
        if(this.$store.getters.gameInfo.subscribed === 1 || this.alreadyAppointment) {
          return '已预约'
        } else {
          return `预约《${this.$store.getters.gameInfo.title}》`
        }
      } else if(this.$store.getters.gameInfo.hasOwnProperty("h5_url") && this.$store.getters.gameInfo.h5_url !== null) {
        //如果是H5页面
        return `打开《${this.$store.getters.gameInfo.title}》`
      } else {
        return `下载《${this.$store.getters.gameInfo.title}》`
      }
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.id !== this.$store.getters.gameInfo.id) {
      this.createdMethod();
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop >= 110) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    })
  },
  methods: {
    createdMethod() {
      this.id = this.$store.getters.gameInfo.id;
      if(this.$store.getters.gameInfo.subscribed) {
        this.alreadyAppointment = true;
      } else {
        this.alreadyAppointment = false;
      }
    },
    changeDetail() {
      this.createdMethod();
    },
    clickEvent(h5Url = '') {
      if(!sessionStorage.getItem('token') && sessionStorage.getItem('token') === '') {
        this.$router.push({
          name: 'Login'
        })
      } else {
        if(this.$store.getters.gameInfo.state === 2) { 
          // 如果是预约详情页
          this.$axios({
            url: '/api/game/subscribe',
            data: {
              token: sessionStorage.getItem('token'),
              gameId: this.id
            }
          })
          .then(res => {
            this.alreadyAppointment = true;
            this.$toast(res.msg); 
          })
        } else if (this.$store.getters.gameInfo.hasOwnProperty("h5_url") && this.$store.getters.gameInfo.h5_url !== null) {
          //如果是H5详情页 
          let box = new Box();
          box.openH5Game(h5Url);
        } else {
          // 如果是游戏详情页
          // this.$refs.down.classList.add('loading');
          // let box = new Box();
          // box.openInBrowser(url);
          // setTimeout(() => {
          //   this.$refs.down.classList.remove('loading');
          // }, 2000)

          this.$store.commit("setDownloadInfo", this.$store.getters.gameInfo);
          this.$store.commit("setShowDownloadInfo", true);
        }
      }
    }
  },
  components: {
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './detail.less';
</style>