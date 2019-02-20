<template>
  <div class="game-detail">
    <!-- background-image -->
    <div class="background-image"
      :style="{backgroundImage: `url(${titlepic})`}">
    </div>
    <!-- header -->
    <div class="detail-header">
      <i class="back-icon" @click="goback"></i>
      <div class="title">{{title}}</div>
    </div>
    <!-- container -->
    <div class="container" ref="wrapper">
      <div class="content">
        <!-- game-info -->
        <div class="game-info" ref="gameInfo">
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
        <!-- main -->
        <main>
          <Swiper :options="swiperOption" class="swiper" ref="Swiper">
            <SwiperSlide><DetailIndex :id="id" :able="able" /></SwiperSlide>
            <SwiperSlide><DetailComment :id="id" :able="able" /></SwiperSlide>
            <SwiperSlide><DetailGift :id="id" able="able" /></SwiperSlide>
            <SwiperSlide><DetailNews :id="id" able="able" /></SwiperSlide>
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
import BScroll from 'better-scroll';

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
      able: false,
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
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {click: true, probeType: 2,});
      let height = this.$refs.gameInfo.offsetHeight;
      this.scroll.on('scroll', (pos) => {
        if(pos.y <= -(height)) {
          this.able = true;
          this.scroll.disable();
        } 
      })
    }, 20);
    // 
    // let scrollTop;
    // window.addEventListener('scroll', () => {
    //   scrollTop = document.body.scrollTop !== 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    //   if(scrollTop >= height) { 
    //     this.able = true;
    //   }
    // })
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
    DetailNews,
  }
}
</script>
<style lang="less" scoped>
  @import './detail.less';
</style>