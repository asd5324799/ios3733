<template>
  <div class="top-bar">
     <router-link class="search-button" to="/search" >搜索
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
<style lang="less" scoped>
  @import './topbar.less';
</style>
