<template>
  <div class="rank">
    <TopBar :list="tabList" :currentTab="currentTab" @changeSlide="changeSlide"></TopBar>
    <div class="main">
      <Swiper :options="swiperOption" class="swiper" ref="Swiper">
        <SwiperSlide
          v-for="(item, index) in list"
          :key="index"><RankList :rank="item" /></SwiperSlide>
      </Swiper>
    </div>
    <NavCom :pageIndex="1" />
  </div>
</template>
<script>
import TopBar from '@/components/topbar/topbar.vue';
import RankList from './ranklist/ranklist.vue';
import NavCom from '@/components/navcom/navcom.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  data() {
    return {
      tabList: ['新游榜', '畅销榜', '下载榜'],
      currentTab: 0,
      swiperOption: {
        on: {
          slideChange: () => {
            this.currentTab = this.swiper.activeIndex;
          }
        }
      },
      list: [
        {
          title: '新游榜',
          bg: 'newgame-billboard',
          order: 101,
        },
        {
          title: '畅销榜',
          bg: 'sellwell-billboard',
          order: 102
        },
        {
          title: '下载榜',
          bg: 'download-billboard',
          order: 103
        }
      ]
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
    RankList,
    Swiper,
    SwiperSlide,
  }
}
</script>
<style lang="less" scoped>
    @import './rank.less';
</style>
