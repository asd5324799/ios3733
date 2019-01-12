<template>
  <div class="game-list2">
    <ul class="list">
      <li 
      v-for="(item, index) in list" 
      :key="index"
      class="game-item">
        <router-link class="container" to="/detail">
          <img :src="item.titlepic" class="game-img">
          <div class="game-name">{{item.title}}</div>
        </router-link>
        <a :href="item.down_ip" class="button">下载</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  mounted() {
  },
};
</script>
<style lang="less">
  @import './gamelist2.less';
</style>