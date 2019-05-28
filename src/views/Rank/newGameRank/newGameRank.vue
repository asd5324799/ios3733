<template>
  <div>
    <RankList :rank="rank"/>
  </div>
</template>
<script>
import RankList from '../ranklist/ranklist';
export default {
  data() {
    return {
      rank: {
        title: '新游榜',
        bg: 'newgame-billboard',
        order: 101,
      }
    }
  },
  components: {
    RankList
  }
}
</script>
<style lang="less" scoped>
  
</style>