<template>
  <div class="h5">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="content">
          <!-- swiper -->
          <div class="swiper" v-if="bannerList.length !== 0">
            <Swiper :options="swiperOption">
              <!-- slides -->
              <SwiperSlide
                v-for="(item, index) in bannerList"
                :key="index" 
                class="swiper-slide"
              >
                <img :src="item.titleimg" @click="toDetail(item)" alt="">
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
                class="nav-icon"
                :style="{backgroundImage: `url(${item.icon_url})`}"
              ></div>
              <div class="nav-text">{{item.text1}}</div>
            </li>
          </ul>
          <!-- lately -->
          <div class="lately" v-if="latelyList.length != 0"> 
            <div class="left">
              <div class="title">最近在玩</div>
            </div>
            <div class="right">
              <Swiper 
                :options="swiperOption2"
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
            <GameTitle :headerTitle="qualityRecommend.header_title" /> 
            <!-- <GameList2 :type="5" :list="qualityRecommend.game_list"/>
            <GameList :list="qualityFirstList" :type="5"/> -->
            <GameList2 :list="qualityRecommend.game_list"/>
            <GameList :list="qualityFirstList"/>
          </div>
          <!-- newGameList -->
          <GameTitle 
            v-if="newGameAppointment.game_list.length != 0" 
            :headerTitle="newGameAppointment.header_title" 
            :type="false"  
          />
          <!-- <GameList2 :list="newGameAppointment.game_list" :type="5"/> -->
          <GameList2 :list="newGameAppointment.game_list" :type="2" />
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            finished-text="没有更多了"
            @load="pullUp"
          >
            <!-- <GameList :list="newGameFirstList" :type="5" /> -->
            <GameList :list="newGameFirstList" />
          </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
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
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
        loop : true,
      },
      swiperOption2: { 
        slidesPerView : 'auto',
        freeMode: true,
        preventClicks : false,
        spaceBetween : 10,
      },
      navList: [],
      bannerList: [],
      latelyList: [],
      qualityRecommend: {},
      newGameAppointment: {
        'game_list': []
      },
      qualityFirstList: [],
      newGameFirstList: [],
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
      page: 2,
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios.all([
        this.$axios({
          // test
          url: '/api/index/index',
          data: {}
        }), 
        this.$axios({
          // test
          url: '/api/user/downloadedGame',
          data: {
            isH5: 1
          }
        }), 
      ]).then(this.$axios.spread((res, res2) => {
        this.handleInitData(res, res2);
        this.$nextTick(() => {
          // loading消失
          this.loading = 'success';
        })
      }))
      .catch(() => {
        this.loading = 'fail';
      })
    },
    handleInitData(res, res2) {
      this.bannerList = res.data.banner;
      this.latelyList = res2.data.list;
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
    pullDown() {
      this.$axios.all([
        this.$axios({
          // test
          url: '/api/index/index',
          data: {}
        }), 
        this.$axios({
          // test
          url: '/api/user/downloadedGame',
          data: {
            isH5: 1
          }
        }), 
      ]).then(this.$axios.spread((res, res2) => {
        this.handleInitData(res, res2);
        this.page = 2;
        this.pullDownState = false;
        this.$toast('刷新成功');
      }))
      .catch(() => {
        this.pullDownState = false;
        this.$toast('刷新失败');
      })  
    },
    toDetail(item) {
      sessionStorage.setItem('goBack', this.$route.name);
      this.$store.commit('setGameInfo', item);
      this.$store.commit('setGameType', 2);
      this.$router.push({
        name: 'DetailIndex'
      });
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