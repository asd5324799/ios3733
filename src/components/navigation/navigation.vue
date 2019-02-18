<template>
  <div class="header">
    <div class="back" @click="goBack"></div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '游戏列表'
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
}
</script>
<style lang="less" scoped>
  @import './navigation.less';
</style>