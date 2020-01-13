<template>
  <div class="game-list">
    <GameInfo
      v-for="(item, index) in list"
      :key="index"
      :type="type"
      :item="item"
      :index="index"
      :isNum="isNum"
      :isBoon="isBoon"></GameInfo>
  </div>
</template>
<script>
/**
 * @param list 传入的列表
 * @param type 1正常列表 3开服列表 4预约列表 5h5列表 6下载管理列表
 * @param isNum 是否显示序号
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
      default: 1,
    },
    isNum: {
      type: Boolean,
      default: false,
    },
    isBoon: {
      type: Boolean,
      default: true,  
    }
  },
  components: {
    GameInfo
  }
}
</script>
