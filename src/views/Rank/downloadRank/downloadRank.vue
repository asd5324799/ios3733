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
        title: "下载榜",
        bg: "download-billboard",
        order: 103
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