<template>
  <div class="rank">
    <TopBar :list="list" />
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <NavCom :pageIndex="1" />
  </div>
</template>
<script>
import TopBar from '@/components/topbar/topbar.vue';
import NavCom from '@/components/navcom/navcom.vue';

export default {
  data() {
    return {
      active: 0,
      list: [
        {
          title: '新游榜',
          name: 'NewGameRank',
        },
        {
          title: '畅销榜',
          name: 'SellWellRank',
        },
        {
          title: '下载榜',
          name: 'DownloadRank',
        }
      ]
    }
  },
  components: {
    NavCom,
    TopBar,
  }
}
</script>
<style lang="less" scoped>
    @import './rank.less';
</style>
