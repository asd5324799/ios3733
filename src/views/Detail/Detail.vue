<template>
  <div class="game-detail">
    <!-- header -->
    <div class="detail-header">
      <i class="back-icon" @click="goback"></i>
      <div class="title">{{title}}</div>
    </div>
    <!-- container -->
    <div class="container" ref="wrapper">
      <div class="content">
        <!-- tab-list -->
        <ul class="tab-list">
          <li 
            class="tab-item"
            v-for="(item, index) in tabList"
            :key="index"
            :class="{current: currentTab === index}"
            @click="changeSlide(index)"><div class="text">{{item}}</div></li>
        </ul>
        <!-- main -->
        <main>
          <Swiper :options="swiperOption" class="swiper" ref="Swiper">
            <SwiperSlide><DetailIndex /></SwiperSlide>
            <SwiperSlide><DetailComment /></SwiperSlide>
            <SwiperSlide><DetailGift /></SwiperSlide>
            <SwiperSlide><DetailNews /></SwiperSlide>
          </Swiper>
        </main>
      </div>
    </div>
    <!-- download -->
    <div class="game-download">
      <div class="left"><i class="icon icon-left"></i><div class="text">收藏</div></div> 
      <a :href="down_ip" class="download">下载《{{title}}》</a>
      <div class="right"><i class="icon icon-right"></i><div class="text">分享</div></div> 
    </div>
  </div>
</template>
<script>
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';
import DetailIndex from './detail-index/detail-index';
import DetailComment from './detail-comments/detail-comments';
import DetailGift from './detail-gift/detail-gift';
import DetailNews from './detail-news/detail-news';

export default {
  name: 'Detail',
  data() {
    return {
      detail: {},
      title: '',
      down_ip: '',
      tabList: ['详情', '评论', '礼包', '资讯'],
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
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.id !== JSON.parse(this.$route.query.id)) {
      this.swiper.slideTo(0);
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.id = JSON.parse(this.$route.query.id);
      this.title = JSON.parse(this.$route.query.title);
      this.down_ip = JSON.parse(this.$route.query.down_ip);
    },
    goback() {
      this.$router.back();
    },
    changeSlide(index) {
      this.swiper.slideTo(index);
      this.currentTab = index;
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    DetailIndex,
    DetailComment,
    DetailGift,
    DetailNews,
  }
}
</script>
<style lang="less" scoped>
  @import './detail.less';
</style>