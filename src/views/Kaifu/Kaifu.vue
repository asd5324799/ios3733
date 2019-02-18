<template>
  <div class="kaifu">
    <TopBar :list="tabList" :currentTab="currentTab" @changeSlide="changeSlide"/>
    <div class="main">
      <Swiper :options="swiperOption" class="swiper" ref="Swiper">
        <SwiperSlide><KaiFuList :kaiFuType="1" /></SwiperSlide>
        <SwiperSlide><KaiFuList :kaiFuType="2" /></SwiperSlide>
        <SwiperSlide><KaiFuList :kaiFuType="3" /></SwiperSlide>
      </Swiper>
    </div>
    <NavCom :pageIndex="2" />
  </div>
</template>
<script>
import KaiFuList from './kaifulist/kaifulist.vue';
import TopBar from '@/components/topbar/topbar.vue';
import NavCom from '@/components/navcom/navcom.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  data() {
    return {
      tabList: ['今日开服', '即将开服', '已开新服'],
      currentTab: 0,
      swiperOption: {
        on: {
          slideChange: () => {
            this.currentTab = this.swiper.activeIndex;
          }
        }
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.Swiper.swiper
    }
  },
  methods: {
    changeSlide(index) {
      this.swiper.slideTo(index);
      this.currentTab = index;
    },
  },
  components: {
    NavCom,
    TopBar,
    Swiper, 
    SwiperSlide,
    KaiFuList
  }
}
</script>
<style lang="less" scoped>
  @import './kaifu.less';
</style>
