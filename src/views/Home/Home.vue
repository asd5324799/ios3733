<template>
  <div class="home">
    <!-- header -->
    <header>
      <div class="search">
        <div class="ewm"></div>
        <router-link
          :to="{name: 'Search'}"
          tag="div"
          class="search-container"
        >搜索</router-link>
      </div>
      <ul class="tab-list">
        <router-link 
          :to="{name: 'HomeQualitySelect'}" 
          tag="li" 
          class="tab-item"
        >
        <span class="text">精选</span>
        </router-link>
        <router-link 
          :to="{name: 'HomeNewGame'}" 
          tag="li" 
          class="tab-item"
        >
        <span class="text">新游</span>
        </router-link>
        <router-link 
          :to="{name: 'HomeCategory'}" 
          tag="li"
          class="tab-item"
        >
          <span class="text">分类</span>
        </router-link>
      </ul>
    </header>
    <TabSlider 
      :comp="slider">
    </TabSlider>
    <!-- <router-view></router-view> -->
    <!-- footer -->
    <NavCom :pageIndex="index" />
  </div>
</template>

<script>
import NavCom from '@/components/navcom/navcom.vue';
import TabSlider from '@/components/tabslider/tabslider';
import QualitySelect from './qualityselect/qualityselect';
import NewGame from './newgame/newgame';
import CateGory from './category/category';

export default {
  name: 'Home',
  data(){
    return{
      index:0,
      slider: [{
        name: 'QualitySelect', 
        component: QualitySelect
      }, {
        name: 'NewGame',
        component: NewGame
      }, {
        name: 'CateGory',
        component: CateGory
      }]
    }
  },
  components: {
    NavCom,
    TabSlider,
    QualitySelect,
    NewGame,
    CateGory
  }
}
</script>
<style lang="less" scoped>
  @import './home.less';
</style>

