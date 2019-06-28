<template>
  <div class="h5">
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
              <div class="nav-icon" :class="item.class"></div>
              <div class="nav-text">{{item.title}}</div>
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
            <GameTitle :name="''" />
            <GameList2 :type="4" :list="qualityList"/>
          </div>
          <!-- hotList -->
          <GameTitle :headerTitle="'热门推荐'" :type="false"/>
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            finished-text="没有更多了"
            @load="pullUp"
          >
            <GameList :list="hotList" :type="5"/>
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
      bannerList: [],
      latelyList: [],
      qualityList: [],
      hotList: [],
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
      console.log(res2)
      this.latelyList = res2.data.list;
      this.qualityList = res.data.game_list[0].game_list;
      if(res.data.game_list.length < 21) {
        this.noMore = true;
      }
      this.hotList = res.data.game_list.splice(1);
    },
    toTypePage(index) {

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
    pullUp() {
      
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