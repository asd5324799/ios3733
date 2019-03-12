<template>
  <div class="header">
    <div class="back" @click="goBack"></div>
    <div class="title">{{title}}</div>
    <div class="right" v-if="type === 2" @click="reply">发布  </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '游戏列表'
    },
    type: {
      type: Number,
      default: 1
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    reply() {
      this.$emit('reply');
    }
  },
}
</script>
<style lang="less" scoped>
  @import './navigation.less';
</style>