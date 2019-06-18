<template>
  <div class="container">
    <iframe src="http://api2.a3733.com/h5/game/index" frameborder="0"></iframe>
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
@rem: 0.0267rem;
  .container {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>
