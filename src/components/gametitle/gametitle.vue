<template>
  <div class="game-title">
    {{headerTitle}}
    <router-link 
    to=""
    tag="span"
    class="more">更多</router-link>
  </div>
</template>
<script>
export default {
  props: {
    headerTitle: String
  }
}
</script>
<style lang="less">
  @import './gametitle.less';
</style>
