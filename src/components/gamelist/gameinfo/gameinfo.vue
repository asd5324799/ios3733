<template>
    <div class="game-info">
      <div @click="toDetail">
        <img class="big-img" v-if="showBigImg()" :src="BigImgSrc()">
        <div class="container" v-else>
          <div class="game-number" v-if="isNum">{{index + 4}}</div>
          <img 
            :src="item.titlepic"
            class="game-img">
          <!-- <div class="discount" v-if="type === 5">4.5折</div> -->
          <div class="game-content">
            <div class="game-name">
              <span>{{item.title}}</span>
              <!-- <i v-if="type === 5">精品首发</i> -->
            </div>
            <div class="game-type" v-if="type !== 5">
              <span 
                v-for="(items, indexs) in item.app_tag"
                :key="indexs"
                :style="{backgroundColor: items.color}"
                class="type" 
              >
                {{items.name}}
              </span>
              <span class="size">{{item.size_ip}}</span>
            </div>
            <div class="h5-type" v-if="type === 5">
              <span class="type">BT版</span>|<span class="number">123人在玩</span>
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
      <div 
        @click="clickEvent(item.down_ip, item.h5_url)" 
        class="game-download" 
        v-if="!showBigImg() && type !== 4"
        ref="down"
        :class="{
          orange: type === 4, 
          already: alreadyAppointment,
          h5: type === 5
        }"
      >
        <span></span>
        <div>{{text}}</div>
      </div>
    </div>
</template>
<script>
/**
 * @param item 游戏信息
 * @param type 1为正常列表(有大图) 3开服列表 4预约列表 5h5列表
 * @param index 在列表里的所在位置
 * @param isNum 是否显示序号
  */
  import Box from '@/common/box.js';

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
      default: 0,
    },
    isNum: {
      type: Boolean,
      default: false,
    }
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
      if(this.type === 4) {
        // 如果预约列表
        if(this.alreadyAppointment) {
          return '已预约';
        } else {
          return '预约';
        }
      } else if(this.type === 5) {
        // 如果H5列表
        return '打开';
      } else {
        // 如果下载列表
        return '下载';
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
      this.$store.commit('setGameInfo', this.item);
      let type;
      if(this.type === 4) {
        // 如果是预约详情页
        type = 0;
      } else if(this.type === 5) {
        // 如果是H5详情页
        type = 2;
      } else {
        type = 1;
      }
      this.$store.commit('setGameType', type);
      this.$router.push({
        name: 'DetailIndex',
      });
    },
    IfSubscribed() {
      if(this.item.subscribed) {
        this.alreadyAppointment = true;
      } else {
        this.alreadyAppointment = false;
      }
    },
    clickEvent(url = '', gameUrl = '') {
      if(this.type === 5) {
        // 如果是H5列表
        let box = new Box();
        box.openH5Game(gameUrl);
      } else if(this.type === 4) {
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
      } else {
        // 如果是下载列表
        this.$refs.down.classList.add('loading');
        let box = new Box();
        box.openInBrowser(url);
        setTimeout(() => {
          this.$refs.down.classList.remove('loading');
        }, 2000)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import './gameinfo.less';
</style>
