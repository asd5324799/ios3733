<template>
  <div class="qualityselect">
    <Loading 
      :loading="loading" 
      @refresh="createdMethod">
      <Scroll 
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp"
        slot="loading-content">
        <div class="content" slot="content">
          <!-- swiper -->
          <div class="swiper">
            <Swiper :options="swiperOption">
              <!-- slides -->
              <SwiperSlide
                v-for="(item, index) in bannerList"
                :key="index" 
                class="swiper-slide">
                <router-link to="/detail">
                  <img :src="item.titleimg" alt="">
                </router-link>
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
            @click="toTypePageParent(index)">
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
            @clickDo="toRankSellWell"
          ></GameTitle>
          <GameList2
            :list="qualityRecommend.game_list"
          ></GameList2>
          <!-- qualityFirstList -->
          <GameTitle
            :headerTitle="'精品首发'"
            @clickDo="toNewGameParent"
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
            :list="newGameAppointment.game_list"
          ></GameList2>
          <!-- newGameFirstList -->
          <GameList
            :list="newGameFirstList"
            :type="1"
          >
          </GameList>
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';
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
      page : 2,
      ajaxSwitch: true,
      loading: 'ready',
      pullDownState: 'ready',
      pullUpState: 'ready',
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
        data: {
          token: '0f955a36d0b3e252e34254f79ac76026',
        },
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
    // 通知父组件跳转类型页
    toTypePageParent(data) {
      this.$emit('toTypePage', data);
    },
    toNewGameParent() {
      this.$emit('toNewGame');
    },
    toRankSellWell() {
      this.$router.push({name: 'Rank', query: {page: 'sellwell'}})
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: '/api/index/index',
          data: {
            token: '0f955a36d0b3e252e34254f79ac76026',
          }
        })
        .then(() => {
          this.pullDownState = 'success';
          this.ajaxSwitch = true;
          setTimeout(()=> {
            this.pullDownState = 'ready';
          }, 20)
        })
        .catch(() => {
          this.pullDownState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(()=> {
            this.pullDownState = 'ready';
          }, 20)
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: '/api/game/index',
          data: {
            order: 7,
            page: this.page
          }
        }).then(res => {
          if(res.data.list === []) {
            this.pullUpState = 'nomore';
            this.ajaxSwitch = true;
          } else {
            this.page++;
            this.newGameFirstList = [...this.newGameFirstList, ...res.data.list]
            this.pullUpState = 'success';
            this.ajaxSwitch = true;
            setTimeout(() => {
              this.pullUpState = 'ready';
            }, 50);
          }
        })
        .catch(() => {
          this.pullUpState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(() => {
            this.pullUpState = 'ready';
          }, 50);      
        })
      }
    },
  },
  components: {
    GameList,
    GameList2,
    GameTitle,
    Swiper,
    SwiperSlide,
    Loading,
    Scroll
  }
}
</script>
<style lang="less" scoped>
  @import './qualityselect.less';
</style>