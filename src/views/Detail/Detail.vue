<template>
  <div class="game-detail">
    <!-- header -->
    <div class="detail-header">
      <i class="back-icon" @click="goback"></i>
      <div class="title">{{title}}</div>
    </div>
    <!-- container -->
    <div class="container">
    <!-- background-image -->
    <!-- 动态改container的margin-top和 main的 padding-top-->
    <div class="background-image"
      :style="{backgroundImage: `url(${titlepic})`}">
    </div>
      <!-- game-info -->
      <div class="game-info">
        <img 
        :src="titlepic"
        class="game-img">
        <div class="game-container">
          <div class="game-name">{{title}}</div>
          <div class="game-number">{{totaldown}}人在玩</div>
          <div class="game-type" v-if="app_tag !== []">
            <div class="type-item"
              v-for="(item, index) in app_tag"
              :key="index">
              <img 
                :src="item.icon"
                class="icon">
              <span class="text">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- tab-list -->
      <ul class="tab-list">
        <li 
          class="tab-item"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{current: currentTab === index}"
          @click="changeSlide(index)"><div class="text">{{item}}</div></li>
      </ul>
    </div>
    <!-- main -->
    <main>
      <Swiper :options="swiperOption" class="swiper" ref="Swiper">
        <SwiperSlide><DetailIndex :id="id"  /></SwiperSlide>
        <SwiperSlide><DetailComment :id="id" /></SwiperSlide>
        <SwiperSlide><DetailGift :id="id" /></SwiperSlide>
        <SwiperSlide><DetailNews :id="id" /></SwiperSlide>
      </Swiper>
    </main>
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
      id: 0,
      titlepic: '',
      title: '',
      totaldown: 0,
      app_tag: [],
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
    this.id = JSON.parse(this.$route.query.id);
    this.titlepic = JSON.parse(this.$route.query.titlepic);
    this.title= JSON.parse(this.$route.query.title);
    this.totaldown = JSON.parse(this.$route.query.totaldown);
    this.app_tag = JSON.parse(this.$route.query.app_tag);
    this.down_ip = JSON.parse(this.$route.query.down_ip);
    this.$axios({
      method: 'post',
      url: '/api/comment/comments',
      data: {
        page: 1,
        listRows: 20,
        classId: 103,
        sourceId: this.id,
        order: 0
      }
    })
    .then((res) => {
      this.comments = res.data;
    })
  },
  beforeRouteEnter(to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
        if(vm.id !== JSON.parse(vm.$route.query.id)) {
          vm.des
        }
      })
  },
  methods: {
    goback() {
      this.$router.back();
    },
    changeSlide(index) {
      this.swiper.slideTo(index);
      this.currentTab = index;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    DetailIndex,
    DetailComment,
    DetailGift,
    DetailNews
  }
}
</script>
<style lang="less" scoped>
  @import './detail.less';
</style>