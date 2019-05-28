<template>
  <div class="home">
    <!-- header -->
    <TopBar :list="list"/>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <!-- footer -->
    <NavCom :pageIndex="0" />
  </div>
</template>

<script>
import TopBar from '@/components/topbar/topbar.vue';
import NavCom from '@/components/navcom/navcom.vue';

export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      list: [
        {
          title: '精选',
          name: 'QualitySelect'
        }, {
          title: '新游', 
          name: 'NewGame'
        }, {
          title:  '分类',
          name: 'CateGory'
        }
      ],
    }
  },
  components: {
    TopBar,
    NavCom,
  }
}
</script>
<style lang="less" scoped>
  @import './home.less';
</style>

