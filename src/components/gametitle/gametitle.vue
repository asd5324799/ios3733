<template>
  <div class="game-title">
    {{headerTitle}}
    <router-link 
    :to="{name: router}"
    tag="span"
    class="more">更多</router-link>
  </div>
</template>
<script>
export default {
  name: 'GameTitle',
  props: {
    headerTitle: String,
    router: String
  }
}
</script>
<style lang="less">
  @import './gametitle.less';
</style>
