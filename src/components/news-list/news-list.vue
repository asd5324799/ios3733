<template>
  <ul class="news-list">
    <li 
      class="news-item"
      v-for="(item, index) in list"
      :key="index"
      @click="BOX_openInNewWindow(`http://m.3733.com/appnews/${item.id}.html`)">
      <img class="news-img" :src="item.titlepic">
      <div class="container">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.smalltext}}</div>
        <div class="time">{{handleTimestamp(item.newstime)}}</div>
      </div>
    </li>
  </ul>
</template>
<script>
import Box from '@/common/box.js';
export default {
  name: 'NewsList',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    handleTimestamp(ts) {
      let temp = new Date(ts*1000),
          y = temp.getFullYear(),
          m = temp.getMonth() + 1,
          d = temp.getDate();
      return `${y}-${m}-${d}`;
    },
    BOX_openInNewWindow(url) {
      let box = new Box();
      box.openInNewWindow(url);
    }
  },
}
</script>
<style lang="less" scoped>
  @import './news-list.less';
</style>