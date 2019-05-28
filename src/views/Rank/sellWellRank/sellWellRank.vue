<template>
  <div>
    <RankList :rank="rank"/>
  </div>
</template>
<script>
import RankList from "../ranklist/ranklist";
export default {
  data() {
    return {
      rank: {
        title: "畅销榜",
        bg: "sellwell-billboard",
        order: 102
      }
    };
  },
  components: {
    RankList
  }
};
</script>
<style lang="less" scoped>
</style>