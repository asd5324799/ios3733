<template>
  <div class="header">
    <div class="back" @click="goBack"></div>
    <div class="title">{{title}}</div>
    <div class="right" v-if="type === 2" @click="rightClick">{{assTitle}}</div>
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
    },
    assTitle: {
      type: String,
      default: '发布'
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    rightClick() {
      this.$emit('rightClick');
    }
  },
}
</script>
<style lang="less" scoped>
  @import './navigation.less';
</style>