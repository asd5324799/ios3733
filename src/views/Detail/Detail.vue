<template>
  <div class="game-detail">
    <!-- header -->
    <Navigation :title="gameInfo.title" />
    <main>
      <!-- background-image -->
      <div 
        :style="{backgroundImage: `url(${gameInfo.titlepic})`}"
        class="background-image"
      >
      </div>
      <!-- game-info -->
      <div 
        class="game-info" 
        ref="gameInfo">
        <img 
        :src="gameInfo.titlepic"
        class="game-img">
        <div class="game-container">
          <div class="game-name">{{gameInfo.title}}</div>
          <div class="game-number">{{gameInfo.totaldown}}人在玩</div>
          <div class="game-type" v-if="gameInfo.app_tag !== []">
            <div class="type-item"
              v-for="(item, index) in gameInfo.app_tag"
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
          :to="{name: item.name, id: gameInfo.id}"
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
      <a v-if="type" :href="gameInfo.down_ip" class="download">下载《{{gameInfo.title}}》</a>
      <div @click="appointment" v-if="!type" class="download appointment" :class="{already: alreadyAppointment}">{{text}}</div>
      <!-- <div class="right"><i class="icon icon-right"></i><div class="text">分享</div></div>  -->
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';

export default {
  name: 'Detail',
  data() {
    return {
      gameInfo: {},
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
      if(this.alreadyAppointment) {
        return '已预约'
      } else {
        return `预约《${this.gameInfo.title}》`
      }
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.gameInfo.id !== JSON.parse(sessionStorage.getItem('gameInfo')).id) {
      this.createdMethod();
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop >= 110) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    })
  },
  methods: {
    createdMethod() {
      this.gameInfo = JSON.parse(sessionStorage.getItem('gameInfo'));
      this.$set(this.gameInfo, 'add', 'add');
      this.type = JSON.parse(sessionStorage.getItem('type'));
      if(this.gameInfo.subscribed) {
        this.alreadyAppointment = true;
      }
    },
    changeDetail() {
      this.createdMethod();
    },
    appointment() {
      if(!this.gameInfo.subscribed) {
        this.$axios({
          url: '/api/game/subscribe',
          data: {
            token: sessionStorage.getItem('token'),
            gameId: this.gameInfo.id
          }
        })
        .then(res => {
          this.alreadyAppointment = true;
          this.$toast(res.msg); 
        })
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