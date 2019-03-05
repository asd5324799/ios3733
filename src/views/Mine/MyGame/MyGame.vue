<template>
  <div class="my-game">
      <Navigation title="我的游戏"/>
    <!-- header -->
    <div class="tab-list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="tab-item"
        :class="{current: currentTab === index}"
        @click="changeSlide(index)">
      <span class="text">{{item.title}}</span>
      </div>
    </div>
    <main>
      <Swiper :options="swiperOption" class="swiper" ref="Swiper">
          <SwiperSlide
          v-for="(item, index) in list"
          :key="index"><MyGameList :requestInfo="item" /></SwiperSlide>
        
      </Swiper>
    </main>
  </div>
</template>

<script>
import MyGameList from './mygamelist/mygamelist.vue';
import Navigation from '@/components/navigation/navigation.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'Home',
  data(){
    return{
      currentTab: 0,
      selectedList: [0, 0, 0, 0],
      swiperOption: {
        on: {
          slideChange: () => {
            this.currentTab = this.swiper.activeIndex;
          }
        }
      },
      list: [
        {
          title: '收藏',
          requestUrl: '/api/resource/collection',
          page:1,
          listRows:20,
          noneText:'空即是色,色即是空' 
        },
        {
          title: '已预约',
          requestUrl: '/api/user/subscribeGames',
          page:1,
          listRows:20,
          noneText:'您还没有预约游戏'
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
    changeSelectedList(number, index) {
      this.selectedList.splice(number, 1, index);
    },
    toTypePage(data) {
      if(data !== 3) {
        this.swiper.slideTo(2);
        data++;
        this.selectedList.splice(0, 1, data);
      } else {
        this.$router.push({name: 'Topic'})
      }
    },
    toNewGame() {
      this.swiper.slideTo(1);
    },
  },
  components: {
    MyGameList,
    Swiper,
    SwiperSlide,
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './mygame.less';
</style>

