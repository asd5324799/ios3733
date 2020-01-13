<template>
  <div class="game-info">
    <div @click="toDetail()">
      <img class="big-img" v-if="showBigImg()" :src="BigImgSrc()" />
      <div class="container" v-else>
        <div class="game-number" v-if="isNum">{{index + 4}}</div>
        <img :src="item.titlepic" class="game-img" />
        <!-- <div class="discount" v-if="item.h5_url !== null">4.5折</div> -->
        <div class="game-content">
          <div class="game-name">
            <span>{{item.title}}</span>
            <!-- <i v-if="item.h5_url !== null">精品首发</i> -->
          </div>
          <div class="game-type" v-if="item.h5_url === null">
            <span
              v-for="(items, indexs) in item.app_tag"
              :key="indexs"
              :style="{backgroundColor: items.color}"
              class="type"
            >{{items.name}}</span>
            <span class="size">{{item.size_ip}}</span>
          </div>
          <div class="h5-type" v-if="item.h5_url !== null">
            <span class="type">BT版</span>|
            <span class="number">123人在玩</span>
          </div>
          <div class="game-boon">
            <div class="text" v-if="isBoon">{{item.yxftitle}}</div>
            <div class="text" v-else>
              <span class="red">{{handleTimestamp()}}</span>
              <span>{{item.kaifuState}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="clickEvent(item.h5_url)"
      class="game-download"
      v-if="!showBigImg()"
      ref="down"
      :class="{
          orange: item.state === '2', 
          already: item.subscribed === 1 || alreadyAppointment,
          h5: item.hasOwnProperty('h5_url') && item.h5_url !== null, 
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
 * @param index 在列表里的所在位置
 * @param isNum 是否显示序号
 * @param isBoon 显示福利还是显示开服
 */
import Box from "@/common/box.js";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0
    },
    isNum: {
      type: Boolean,
      default: false
    },
    isBoon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      alreadyAppointment: false,
    };
  },
  computed: {
    text() {
      if (this.item.state === '2') {
        // 如果预约列表
        if (this.item.subscribed === 0 && this.alreadyAppointment === false) {
          return "预约";
        } else {
          return "已预约";
        }
      } else if (this.item.hasOwnProperty('h5_url') && this.item.h5_url !== null) {
        // 如果H5列表
        return "打开";
      } else {
        // 如果下载列表
        return "下载";
      }
    }
  },
  methods: {
    showBigImg() {
      // 判断是否含有大图
      if (this.item.hasOwnProperty("thumb")) {
        if (typeof this.item.thumb == "string") {
          return true;
        } else {
          return false;
        }
      }
    },
    BigImgSrc() {
      if (this.item.hasOwnProperty("thumb")) {
        return this.item.thumb;
      }
    },
    handleTimestamp() {
      let time = new Date(this.item.kaifuNewstime * 1000),
        m = time.getMonth() + 1,
        d = time.getDate(),
        h = time.getHours(),
        min = time.getMinutes();
      h = h < 10 ? `0${h}` : h;
      min = min < 10 ? `0${min}` : min;
      return `${m}-${d} ${h}: ${min}`;
    },
    toDetail() {
      sessionStorage.setItem("goBack", this.$route.name);
      this.$store.commit("setGameInfo", this.item);
      this.$router.push({
        name: "DetailIndex"
      });
    },
    clickEvent(gameUrl = "") {
      if(!sessionStorage.getItem('token') && sessionStorage.getItem('token') === '') {
        this.$router.push({
          name: 'Login'
        })
      } else {
        if (this.item.hasOwnProperty("h5_url") && this.item.h5_url !== null) {
          // 如果是H5列表
          let box = new Box();
          box.openH5Game(gameUrl);
        } else if (this.item.state === '2') {
          // 如果是预约列表
          this.$axios({
            url: "/api/game/subscribe",
            data: {
              token: sessionStorage.getItem("token"),
              gameId: this.item.id
            }
          }).then(res => {
            this.alreadyAppointment = true;
            this.$store.commit("setSubscribed");
            this.$toast(res.msg);
          })
        } else {
          // 如果是下载列表
            this.$store.commit("setDownloadInfo", this.item);
            this.$store.commit("setShowDownloadInfo", true);

          // this.$refs.down.classList.add("loading");
          // let box = new Box();
          // box.openInBrowser(url);
          // setTimeout(() => {
          //   this.$refs.down.classList.remove("loading");
          // }, 2000);
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "./gameinfo.less";
</style>
