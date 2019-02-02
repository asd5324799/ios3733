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
    <keep-alive>
      <router-view class="content"></router-view>
    </keep-alive>
    <!-- footer -->
    <NavCom :pageIndex="index" />
  </div>
</template>

<script>
import NavCom from '@/components/navcom/navcom.vue';
export default {
  name: 'Home',
  data(){
    return{
      index:0
    }
  },
  components: {
    NavCom
  }
}
</script>
<style lang="less" scoped>
  @import './home.less';
</style>

