<template>
  <div class="top-bar">
     <router-link class="search" to="/search" >搜索
        <object>
          <router-link class="qrcode" to="/qrcode">
            <i class="code-icon"></i>
          </router-link>
        </object>
     </router-link>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  data(){
      return {
      }
  },
  mounted() {
  },
}
</script>
<style lang="less">
  @import './topbar.less';
</style>
