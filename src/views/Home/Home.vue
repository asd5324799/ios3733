<template>
  <div class="home">
    <!-- header -->
    <TopBar :list="tabList" :currentTab="currentTab" @changeSlide="changeSlide">
      <div slot="content">
        <main>
          <Swiper :options="swiperOption" class="swiper" ref="Swiper">
            <SwiperSlide>
                <QualitySelect @toTypePage="toTypePage" @toNewGame="toNewGame"/>
            </SwiperSlide>
            <SwiperSlide><NewGame /></SwiperSlide>
            <SwiperSlide><CateGory :selectedList="selectedList" @changeSelectedList="changeSelectedList"/></SwiperSlide>
          </Swiper>
        </main>
      </div>
    </TopBar>
    <!-- footer -->
    <NavCom :pageIndex="0" />
  </div>
</template>

<script>
import TopBar from '@/components/topbar/topbar.vue';
import NavCom from '@/components/navcom/navcom.vue';
import QualitySelect from './qualityselect/qualityselect';
import NewGame from './newgame/newgame';
import CateGory from './category/category';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'Home',
  data(){
    return{
      tabList: ['精选', '新游', '分类'],
      currentTab: 0,
      selectedList: [0, 0, 0, 0],
      swiperOption: {
        touchAngle : 30,
        resistanceRatio : 0,
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
  watch: {
    '$route' (to, from) {
      if(to.name === 'Home' && from.name === 'Detail' && this.$route.params.tag !== undefined) {
        let arr = JSON.parse(sessionStorage.typeList);
        arr.forEach((ele, index) => {
          if(this.$route.params.tag === `"${ele.title}"`) {
            this.swiper.slideTo(2);
            this.changeSelectedList(1, index); 
          }
        });
      }
      
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
        this.changeSelectedList(0, data);
      } else {
        this.$router.push({name: 'Topic'})
      }
    },
    toNewGame() {
      this.swiper.slideTo(1);
    },
  },
  components: {
    TopBar,
    NavCom,
    QualitySelect,
    NewGame,
    CateGory,
    Swiper,
    SwiperSlide
  }
}
</script>
<style lang="less" scoped>
  @import './home.less';
</style>

