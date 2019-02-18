<template>
  <div class="game-title">
    {{headerTitle}}
    <span
    v-if="type"
    @click="clickDo"
    class="more">更多</span>
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
    }
  },
  methods: {
    clickDo() {
      this.$emit('clickDo')
    }
  },
}
</script>
<style lang="less" scoped>
  @import './gametitle.less';
</style>
