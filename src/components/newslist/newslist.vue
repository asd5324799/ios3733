<template>
  <div class="news-list">
    <router-link to="/home" class="news-item" v-for="(item,index) of list" :key="index" tag='div'>
      <div class="news-info">
        <p :class="item.titlepic?'':'o_height'"><i v-if="item.class_name && item.class_name != '攻略'" :style="{background:item.tag_color}">{{item.class_name}}</i><span>{{item.title}}</span></p>
        <div class="look-num">{{item.onclick}}</div>
      </div>
      <div class="news-pic" v-if="item.titlepic">
        <img :src="item.titlepic" alt="">
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'GameList',
  props: {
    list: Array,
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>
  @import './newslist.less';
</style>
