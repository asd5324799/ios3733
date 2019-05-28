<template>
  <div class="kaifu">
    <TopBar :list="list" />
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <NavCom :pageIndex="2" />
  </div>
</template>
<script>
import TopBar from '@/components/topbar/topbar.vue';
import NavCom from '@/components/navcom/navcom.vue';

export default {
  data() {
    return {
      list:[
        {
          title: '今日开服',
          name: 'TodayKaifu',
        },
        {
          title: '即将开服',
          name: 'WillKaifu',
        },
        {
          title: '已开新服',
          name: 'AlreadyKaifu',
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
  @import './kaifu.less';
</style>
