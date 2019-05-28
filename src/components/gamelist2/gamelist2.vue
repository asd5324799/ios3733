<template>
  <div class="game-list2">
    <ul class="list">
      <li 
      v-for="(item, index) in list" 
      :key="index"
      class="game-item">
        <div
          class="container" 
          @click="toDetail(item)">
          <img :src="item.titlepic" class="game-img">
          <div class="game-name">{{item.title}}</div>
          <div class="game-type" v-if="type === '3'">{{item.totaldown}}人在玩</div>
        </div>
        <a :href="item.down_ip" v-if="type !== 2" class="button" :class="{orange: type === 2}">{{'下载'}}</a>
        <div 
          @click="appointment" 
          class="button" 
          v-if="type === 2" 
          :class="{orange: type === 2, already: alreadyAppointment}"
        >
          {{text}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * @param 1正常列表 2预约列表 3显示玩家人数
 */
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
      } else {
        return '预约';
      }
    }
  },
  methods: {
    toDetail(item) {
      sessionStorage.setItem('goBack', this.$route.name);
      sessionStorage.setItem('gameInfo', JSON.stringify(item));
      if(this.type === 2) {
        sessionStorage.setItem('type', 0);
      } else {
        sessionStorage.setItem('type', 1);
      }
      this.$router.push({
          name: 'DetailIndex',
      });
    },
    appointment() {
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
    },
    IfSubscribed() {
      // if(subscribed) {
      //   this.alreadyAppointment = true;
      //   return true;
      // } else {
      //   this.alreadyAppointment = false;
      //   return false;
      // }
    }
  },
};
</script>
<style lang="less">
  @import './gamelist2.less';
</style>