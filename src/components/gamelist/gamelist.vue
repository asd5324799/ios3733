<template>
  <div class="game-list">
    <div 
      v-for="(item, index) of list"
      :key="index"
      class="game-info">
      <div @click="toDetail(item)">
        <img class="big-img" v-if="showBigImg(index)" :src="BigImgSrc(index)">
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
                <span class="red">{{handleTimestamp(item)}}</span>
                <span>{{item.kaifuState}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a :href="item.down_ip" class="game-download" :class="{orange: type === 4}" v-if="!showBigImg(index)">{{text}}</a>
    </div>
  </div>
</template>
<script>
/**
 * @param type 1正常列表 2带序号列表 3显示开服表时间,否则显示游戏福利 4下载还是预约
 */
export default {
  name: 'GameList',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    type: {
      type: Number,
      default : 1
    },
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
    showBigImg(index) {
      // 判断是否含有大图
      if(this.list[index].hasOwnProperty('thumb')) {
        if(typeof(this.list[index].thumb) == 'string') {
          return true;
        } else {
          return false;
        }
      }
    },
    BigImgSrc(index) {
      if(this.list[index].hasOwnProperty('thumb')) {
        return this.list[index].thumb;
      }
    },
    handleTimestamp(item) {
      let time = new Date(item.kaifuNewstime*1000),
          m = time.getMonth() + 1,
          d = time. getDate(),
          h = time.getHours(),
          min = time.getMinutes();
      h = h < 10 ? `0${h}` : h;
      min = min < 10 ? `0${min}` : min;
      return `${m}-${d} ${h}: ${min}`;
    },
    toDetail(item) {
      this.$router.push({ 
        name: 'Detail', 
        query: {
          id: JSON.stringify(item.id), 
          title: JSON.stringify(item.title), 
          down_ip: JSON.stringify(item.down_ip),
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import './gamelist.less';
</style>
