<template>
  <div class="my-message">
    <Navigation :title="'我的信息'"/>
    <div class="main">
      <div class="empty">
        <div class="text">暂无信息</div> 
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
export default {
  components: {
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './MyMessage.less';
</style>