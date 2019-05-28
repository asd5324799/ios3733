<template>
    <div class="game-info">
      <div @click="toDetail">
        <img class="big-img" v-if="showBigImg()" :src="BigImgSrc()">
        <div class="container" v-else>
          <div class="game-number" v-if="type === 2 ? true : false">{{index + 4}}</div>
          <img 
            :src="item.titlepic"
            class="game-img">
          <div class="game-content">
            <div class="game-name">
              {{item.title}}
            </div>
            <div class="game-type">
              <span 
                v-for="(items, indexs) in item.app_tag"
                :key="indexs"
                :style="{backgroundColor: items.color}"
                class="type" >{{items.name}}
              </span>
              <span class="size">{{item.size_ip}}</span>
            </div>
            <div class="game-boon">
              <div class="text" v-if="type != 3">{{item.yxftitle}}</div>
              <div class="text" v-else>
                <span class="red">{{handleTimestamp()}}</span>
                <span>{{item.kaifuState}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a :href="item.down_ip" class="game-download" v-if="!showBigImg() && type !== 4">{{'下载'}}</a>
      <div @click="appointment" class="game-download"  v-if="!showBigImg() && type === 4" :class="{orange: type === 4, already: alreadyAppointment}">{{text}}</div>
    </div>
</template>
<script>
/**
 * @param type 1为正常列表 2为有序号的列表 3取消游戏福利栏显示开服时间 4为游戏预约
  */
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1
    },
    index: {
      type: Number,
      default: 0
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
    showBigImg() {
      // 判断是否含有大图
      if(this.item.hasOwnProperty('thumb')) {
        if(typeof(this.item.thumb) == 'string') {
          return true;
        } else {
          return false;
        }
      }
    },
    BigImgSrc() {
      if(this.item.hasOwnProperty('thumb')) {
        return this.item.thumb;
      }
    },
    handleTimestamp() {
      let time = new Date(this.item.kaifuNewstime*1000),
          m = time.getMonth() + 1,
          d = time. getDate(),
          h = time.getHours(),
          min = time.getMinutes();
      h = h < 10 ? `0${h}` : h;
      min = min < 10 ? `0${min}` : min;
      return `${m}-${d} ${h}: ${min}`;
    },
    toDetail() {
      sessionStorage.setItem('goBack', this.$route.name);
      sessionStorage.setItem('gameInfo', JSON.stringify(this.item));
      if(this.type === 4) {
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
      if(this.item.subscribed) {
        this.alreadyAppointment = true;
      } else {
        this.alreadyAppointment = false;
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import './gameinfo.less';
</style>
