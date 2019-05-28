<template>
  <div class="game-title">
    {{headerTitle}}
    <router-link
      tag="span"
      v-if="type"
      class="more"
      :to="{name: name}"
    >更多
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'GameTitle',
  props: {
    headerTitle: {
      type: String,
      default: '精品推荐'
    },
    type: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: ''
    }
  },
}
</script>
<style lang="less" scoped>
  @import './gametitle.less';
</style>
