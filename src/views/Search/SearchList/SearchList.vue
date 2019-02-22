<template>
    <div class="search-list">
        <div class="page-nav">
            <div class="nav-item" :class="isCurrent?'active':''" @click="toGame">游戏</div>
            <div class="nav-item" :class="!isCurrent?'active':''" @click="toGift">礼包</div>
        </div>

    </div>
</template>
<script>
export default {
  name:"SearchList",
  data() {
    return {
      clearKeyShow:false,
      // isCurrent:true,
    }
  },
  computed:{
    searchKey: () => {
      return this.$route.params.keyword;
    },
    isCurrent: () => {

    }
  },
}
</script>
<style lang="less" scoped>
  @import './searchlist.less';
</style>
