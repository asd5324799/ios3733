<template>
  <div class="game-list2">
    <ul class="list">
      <li 
      v-for="(item, index) in list" 
      :key="index"
      class="game-item">
        <router-link 
          class="container" 
          :to="{name: 'Detail', params: {gameId: item.id}}">
          <img :src="item.titlepic" class="game-img">
          <div class="game-name">{{item.title}}</div>
          <div class="game-type" v-if="type === '3'">{{item.totaldown}}人在玩</div>
        </router-link>
        <a :href="item.down_ip" class="button">{{type === 2 ? '预约' : '下载'}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
    type: String
  }
};
</script>
<style lang="less">
  @import './gamelist2.less';
</style>