<template>
  <div class="game-list2">
    <ul class="list">
      <li 
      v-for="(item, index) in list" 
      :key="index"
      class="game-item">
        <div class="discount" v-if="type === 4">4.5折</div>
        <div
          class="container" 
          @click="toDetail(item)">
          <img :src="item.titlepic" class="game-img">
          <div class="game-name">{{item.title}}</div>
          <div class="game-type" v-if="type === 3">{{item.totaldown}}人在玩</div>
        </div>
        <div 
          @click="clickEvent(item.down_ip, index, item.h5_url)" 
          class="button" 
          :class="{
            orange: type === 2,
            already: alreadyAppointment,
            h5: type === 4
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
 * @param 1.正常列表 2.预约列表 3.显示玩家人数 4.h5列表
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
    this.IfSubscribed();
  },
  computed: {
    text() {
      if(this.alreadyAppointment) {
        return '已预约';
      } else if(this.type === 4) {
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
      sessionStorage.setItem('gameInfo', JSON.stringify(item));
      if(this.type === 2) {
        sessionStorage.setItem('type', 0);
      } else if(this.type === 4) {
        sessionStorage.setItem('type', 2);
      } else {
        sessionStorage.setItem('type', 1);
      }
      this.$router.push({
          name: 'DetailIndex',
      });
    },
    appointment() {

    },
    IfSubscribed() {
      // if(subscribed) {
      //   this.alreadyAppointment = true;
      //   return true;
      // } else {
      //   this.alreadyAppointment = false;
      //   return false;
      // }
    },
    clickEvent(url = '', index = 0, gameUrl = '') {
      if(this.type === 2) {
        // 如果是预约列表
        if(!this.alreadyAppointment) {
          this.$axios({
            url: '/api/game/subscribe',
            data: {
              token: sessionStorage.getItem('token'),
              gameId: this.item.id
            }
          })
          .then(res => {
            this.alreadyAppointment = true;
            this.$toast(res.msg); 
          })
        }
      } else if(this.type === 4) {
        // 如果是H5列表
        let box = new Box();
        box.openH5Game(gameUrl);
      } else {
        // 如果是正常列表
        this.$refs.down[index].classList.add('loading');
        let box = new Box();
        box.openInBrowser(url);
        setTimeout(() => {
          this.$refs.down[index].classList.remove('loading');
        }, 2000)
      }
    }
  },
};
</script>
<style lang="less">
  @import './gamelist2.less';
</style>