<template>
  <transition name="move">
    <div class="qualityselect">
      <!-- swiper -->
      <div class="swiper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide
            v-for="(item, index) in bannerList"
            :key="index" 
            class="swiper-slide">
            <router-link to="/detail">
              <img :src="item.titleimg" alt="">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <!-- nav -->
      <ul class="nav-list">
        <li 
        v-for="(item, index) in navList"
        :key="index"
        class="nav-item" @click="routeToTopic">
          <div 
          :style="{backgroundColor: item.bg_color,backgroundImage: 'url(' + item.icon_url + ')'}"
          class="nav-icon">
          </div>
          <div class="nav-text">{{item.text1}}</div>
        </li>
      </ul>
      <!-- qualityRecommend -->
      <GameTitle 
        :headerTitle="qualityRecommend.header_title"
        :router="'RankSellWell'">
      </GameTitle>
      <GameList2
        :list="qualityRecommend.game_list"
      ></GameList2>
      <!-- qualityFirstList -->
      <GameTitle
      :headerTitle="'精品首发'"
      :router="'/newgame'"></GameTitle>
      <GameList 
        :list="qualityFirstList"
        :type="1">
      </GameList>
      <!-- newGameAppointment -->
      <GameTitle
        :headerTitle="newGameAppointment.header_title"
      ></GameTitle>
      <GameList2
        :list="newGameAppointment.game_list"
      ></GameList2>
      <!-- newGameFirstList -->
      <GameList
        :list="newGameFirstList"
        :type="1"
      >
      </GameList>
    </div>
  </transition>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'QualitySelect',
  data() {
    return {
      bannerList: [],
      navList: [],
      qualityRecommend: {},
      qualityFirstList: [],
      newGameAppointment: {},
      newGameFirstList: [],
      swiperOption: {
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
        loop : true,
      },
      touch: {},
      touchStartTime: 0,
      touchEndTime: 0,
      currentDistance: 0,
      totalDiff: 0,
    }
  },
  methods: {
    routeToTopic(){
      this.$router.push({name:"Topic"})
    },
    handleInitData(res) {   
      this.bannerList = res.data.banner;
      this.navList = res.data.tab_action;
      let temp = 0;
      // 过滤列表以外的节点
      res.data.game_list.forEach((item, index) => {
        // 判断是否包含view_type字段
        if(item.hasOwnProperty('view_type')) {
          if(temp === 0) {
            this.qualityRecommend = res.data.game_list.slice(0, 1)[0];
            temp++;
          } else {
            this.qualityFirstList = res.data.game_list.slice(1, index);
            this.newGameAppointment = res.data.game_list.splice(index, 1)[0];
            this.newGameFirstList = res.data.game_list.splice(index);
          }
        }
      });
    },
    touchStart(ev) {
      let touch = ev.changedTouches[0];
      this.touch.x1 = touch.pageX
    }
  },
  created() {
    this.$axios.post('/api/index/index')
    .then(this.handleInitData);    
  },
  components: {
    GameList,
    GameList2,
    GameTitle,
    swiper,
    swiperSlide,
  }
}
</script>
<style lang="less" scoped>
  @import './qualityselect.less';
</style>