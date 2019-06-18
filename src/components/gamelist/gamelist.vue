<template>
  <div class="game-list">
    <GameInfo
      v-for="(item, index) in list"
      :key="index"
      :type="type"
      :item="item"
      :index="index"></GameInfo>
  </div>
</template>
<script>
/**
 * @param type 1正常列表 2带序号列表 3开服列表 4预约列表 5h5列表
 */
import GameInfo from './gameinfo/gameinfo';
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
      default: 1
    },
  },
  components: {
    GameInfo
  }
}
</script>
