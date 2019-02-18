<template>
  <div class="game-list2">
    <ul class="list">
      <li 
      v-for="(item, index) in list" 
      :key="index"
      class="game-item">
        <div
          class="container" 
          @click="toDetail(item)">
          <img :src="item.titlepic" class="game-img">
          <div class="game-name">{{item.title}}</div>
          <div class="game-type" v-if="type === '3'">{{item.totaldown}}人在玩</div>
        </div>
        <a :href="item.down_ip" class="button" :class="{orange: type === 2}">{{type === 2 ? '预约' : '下载'}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * @param 1正常列表 2预约列表 3显示玩家人数
 */
export default {
  props: {
    list: Array,
    type: Number
  },
  methods: {
    toDetail(item) {
      this.$router.push({ 
        name: 'Detail', 
        query: {
          id: JSON.stringify(item.id), 
          app_tag: JSON.stringify(item.app_tag), 
          titlepic: JSON.stringify(item.titlepic), 
          title: JSON.stringify(item.title), 
          totaldown: JSON.stringify(item.totaldown),
          down_ip: JSON.stringify(item.down_ip),
        }
      })
    }
  },
};
</script>
<style lang="less">
  @import './gamelist2.less';
</style>