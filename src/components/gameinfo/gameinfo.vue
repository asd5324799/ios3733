<template>
  <div class="game-info">
    <img 
    :src="list.titlepic"
    class="game-img">
    <div class="game-content">
      <div class="game-name">{{list.title}}</div>
      <div class="game-type">
        <span 
        v-for="(item, index) in list.app_tag"
        :key="index"
        :style="{backgroundColor: item.color}"
        class="type" >{{item.name}}</span>
        <span class="size">{{list.size_ip}}</span>
      </div>
      <div class="game-boon">{{list.yxftitle}}</div>
    </div>
    <a :href="list.down_ip" class="game-download">下载</a>
  </div>
</template>
<script>
export default {
  name: 'GameList',
  props: {
    list: Object,
  },
  mounted() {
  },
}
</script>
<style lang="less">
  @import './gameinfo.less';
</style>
