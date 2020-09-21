<template>
  <div class="game-list2">
    <ul class="list">
      <li 
      v-for="(item, index) in list" 
      :key="index"
      class="game-item">
        <!-- <div class="discount" v-if="type === 5">4.5折</div> -->
        <div
          class="container" 
          @click="toDetail(item)">
          <img :src="item.titlepic" class="game-img">
          <div class="game-name">{{item.title}}</div>
          <div class="game-type" v-if="type === 3">{{item.totaldown}}人在玩</div>
        </div>
        <div 
          @click="clickEvent(item, item.h5_url)" 
          class="button" 
          :class="{
            orange: type === 2,
            already: alreadyAppointment,
            h5: type === 5
          }"
          ref="down"
        >
          <span></span>
          <div>{{text}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * @param 1.正常列表 2.预约列表 3.显示玩家人数 5.h5列表
 */
import Box from '@/common/box.js';

export default {
  props: {
    list: Array,
    type: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {  
      alreadyAppointment: false,
    }
  },
  created() {
  },
  computed: {
    text() {
      if(this.alreadyAppointment) {
        return '已预约';
      } else if(this.type === 5) {
        return '打开';
      } else if(this.type === 2) {
        return '预约';
      } else {
        return '下载';
      }
    }
  },
  methods: {
    toDetail(item) {
      sessionStorage.setItem('goBack', this.$route.name);
      this.$store.commit('setGameInfo', item);
      if(this.$route.name === 'DetailIndex') {
        this.$emit('refresh');
      }
      let type;
      if(this.type === 2) {
        type = 0; 
      } else if(this.type === 5) {
        type = 2;
      } else {
        type = 1;
      }
      this.$store.commit('setGameType', type);
      this.$router.push({
          name: 'DetailIndex',
      });
    },
    clickEvent(item = {}, gameUrl = '') {
      if(!sessionStorage.getItem('token') || sessionStorage.getItem('token') === '') {
        this.$router.push({
          name: 'Login'
        })
      } else {
        if(this.type === 2) {
          // 如果是预约列表
          if(!this.alreadyAppointment) {
            this.$axios({
              url: '/api/game/subscribe',
              data: {
                token: sessionStorage.getItem('token'),
                gameId: item.id
              }
            })
            .then(res => {
              this.alreadyAppointment = true;
              this.$toast(res.msg); 
            })
          }
        } else if(this.type === 5) {
          // 如果是H5列表
          let box = new Box();
          box.openH5Game(gameUrl);
        } else {
          // 如果是正常列表
            this.$store.commit("setDownloadInfo", item);
            this.$store.commit("setShowDownloadInfo", true);
          // this.$refs.down[index].classList.add('loading');
          // let box = new Box();
          // box.openInBrowser(url);
          // setTimeout(() => {
          //   this.$refs.down[index].classList.remove('loading');
          // }, 2000)
        }
      }
    }
  },
};
</script>
<style lang="less">
  @import './gamelist2.less';
</style>