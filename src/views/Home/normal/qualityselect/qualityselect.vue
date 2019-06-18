<template>
  <div class="qualityselect">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="content">
          <!-- swiper -->
          <div class="swiper">
            <Swiper :options="swiperOption">
              <!-- slides -->
              <SwiperSlide
                v-for="(item, index) in bannerList"
                :key="index" 
                class="swiper-slide"
                @click="toDetail"
              >
                <img :src="item.titleimg" alt="">
              </SwiperSlide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </Swiper>
          </div>
          <!-- nav -->
          <ul class="nav-list">
            <li 
            v-for="(item, index) in navList"
            :key="index"
            class="nav-item"
            @click="toTypePage(index)">
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
            :name="'SellWellRank'"
          ></GameTitle>
          <GameList2
            :list="qualityRecommend.game_list"
          ></GameList2>
          <!-- qualityFirstList -->
          <GameTitle
            :headerTitle="'精品首发'"
            :name="'NewGame'"
          ></GameTitle>
          <GameList 
            :list="qualityFirstList"
            :type="1">
          </GameList>
          <!-- newGameAppointment -->
          <GameTitle
            :headerTitle="newGameAppointment.header_title"
            :type="false"
          ></GameTitle>
          <GameList2
            :type="2"
            :list="newGameAppointment.game_list"
          ></GameList2>
          <!-- newGameFirstList -->
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            finished-text="没有更多了"
            @load="pullUp"
          >
            <GameList
              :list="newGameFirstList"
              :type="1"
            >
            </GameList>
          </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
import Loading from '@/components/loading/loading.vue';
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
      page : 2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
    }
  },
  created() { 
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        method: 'post',
        url: '/api/index/index',
        data: {},
      })
      .then(res => {
        this.handleInitData(res);
        this.$nextTick(() => {
          // loading消失
          this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail';
      })
    },
    // 数据初始化
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
    pullDown() {  
      this.$axios({
        url: '/api/index/index',
        data: {}
      })
      .then((res) => {
        this.handleInitData(res);
        this.page = 2;
        this.pullDownState = false;
        this.$toast('刷新成功');
      })
      .catch(() => {
        this.pullDownState = false;
        this.$toast('刷新失败');
      })
    },
    pullUp() {
      this.$axios({
        url: '/api/game/index',
        data: {
          order: 7,
          page: this.page
        }
      }).then(res => {
        this.page++;
        this.pullUpState = false;
        this.newGameFirstList = [...this.newGameFirstList, ...res.data.list];
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
      })
      .catch(() => {   
        this.pullUpState = false;
      })
    },
    toTypePage(index) {
      if(index === 3) {
        this.$router.push({
          name: 'Topic'
        })
      } else {
        this.$router.push({
          name: 'GameClass',
          query: {
            type: JSON.stringify(index),
          }
        })
      }
    },
    toDetail() {
      sessionStorage.setItem('goBack', this.$route.name);
      sessionStorage.setItem('gameInfo', JSON.stringify(this.item));
      sessionStorage.setItem('item', 1);
      this.$router.push({
        name: 'DetailIndex'
      });
    }
  },
  components: {
    GameList,
    GameList2,
    GameTitle,
    Swiper,
    SwiperSlide,
    Loading
  }
}
</script>
<style lang="less" scoped>
  @import './qualityselect.less';
</style>