<template>
  <div class="game-list">
    <div 
      v-for="(item, index) of list"
      :key="index"
      class="game-info">
      <router-link
        to="/detail"
        tag="div">
        <img class="big-img" v-if="item.thumb" :src="item.thumb">
        <div class="container" v-if="!item.thumb">
          <div class="game-number" v-if="type === 2 ? true : false">{{index+4}}</div>
          <img 
            :src="item.titlepic"
            class="game-img">
          <div class="game-content">
            <div class="game-name">
              {{item.title}}
              <span 
                class="game-district" 
                v-if="type === 3 ? true : false"
              >{{item.state}}</span>
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
            <div class="game-boon">{{type === 3 ? handleTimestamp() : item.yxftitle}}</div>
          </div>
        </div>
      </router-link>
      <a :href="item.down_ip" class="game-download" v-if="!showBigImg(index)">下载</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameList',
  props: {
    list: Array,
    type: Number,
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
    handleTimestamp() {
      
    }
  },
}
</script>
<style lang="less">
  @import './gamelist.less';
</style>
