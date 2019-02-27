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
 * @param type 1正常列表 2带序号列表 3显示开服表时间,否则显示游戏福利 4下载还是预约
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
