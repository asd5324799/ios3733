<template>
  <div class="h5">
    <!-- banner -->
    <div class="banner">  
      <img src="http://pic5.3733.com/dynamic/201902/1e3a78084cbd374e397650bdd6d6b7a2_n.jpeg">
    </div>
    <!-- nav -->
    <ul class="nav-list">
      <li 
      v-for="(item, index) in navList"
      :key="index"
      class="nav-item"
      @click="toTypePage(index)">
        <div class="nav-icon" :class="item.class"></div>
        <div class="nav-text">{{item.title}}</div>
      </li>
    </ul>
    <!-- lately -->
    <div class="lately"> 
      <div class="left">
        <div class="title">最近在玩</div>
      </div>
      <div class="right">
        <Swiper 
          :options="swiperOption"
          class="list"
        >
          <SwiperSlide 
            class="item"
            v-for="(item, index) in latelyList"
            :key="index"
          >
            <img :src="item.titlepic">
            <div class="game-name">{{item.title}}</div>
          </SwiperSlide>
        </Swiper> 
      </div>
    </div>
    <!-- quality -->
    <div class="quality">
      <GameTitle :name="''" />
      <GameList2 :type="4" :list="qualityList"/>
    </div>
    <!-- hotList -->
    <GameTitle :headerTitle="'热门推荐'" :type="false"/>
    <GameList :list="hotList" :type="5"/>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'H5',
  data() {
    return {
      swiperOption: { 
        slidesPerView : 'auto',
        freeMode: true,
        preventClicks : false,
        spaceBetween : 10,
      },
      navList: [{
        class: 'bt',
        title: '变态版'
      }, {
        class: 'vip',
        title: '满V版'
      }, {
        class: 'discount',
        title: '折扣'
      }, {
        class: 'quality',
        title: '精品'
      }],
      latelyList: [],
      qualityList: [],
      hotList: []
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.$axios({
        // test
        url: '/api/game/newList',
        data: {
          page: 1
        }
      })
      .then(res => {
        this.latelyList = res.data.today_list;
      })
      this.$axios({
        // test
        url: '/api/game/newList',
        data: {
          page: 1
        }
      })
      .then(res => {
        this.qualityList = res.data.today_list;
      })
      this.$axios({
        // test
        url: '/api/game/newList',
        data: {
          page: 1
        }
      })
      .then(res => {
        this.hotList = res.data.today_list;
      })
    },
    toTypePage(index) {

    }
  },
  components: {    
    Swiper,
    SwiperSlide,
    Loading,
    GameTitle,
    GameList2,
    GameList
  }
}
</script>
<style lang="less" scoped>
  @import './qualityselect.less';
</style>