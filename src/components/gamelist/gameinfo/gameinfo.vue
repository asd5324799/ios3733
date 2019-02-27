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
      <a :href="item.down_ip" class="game-download" :class="{orange: type === 4}" v-if="!showBigImg()">{{text}}</a>
    </div>
</template>
<script>
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
    }
  },
  computed: {
    text() {
      if(this.type === 4) {
        return '预约';
      } else {
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
      this.$router.push({ 
        name: 'Detail', 
        query: {
          id: JSON.stringify(this.item.id), 
          title: JSON.stringify(this.item.title), 
          down_ip: JSON.stringify(this.item.down_ip),
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import './gameinfo.less';
</style>
