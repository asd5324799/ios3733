<template>
  <div class="qualityselect">
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
          <!-- gameList31 -->
          <section v-if="gameList31.game_list !== undefined">
            <div class="title">{{gameList31.header_title}}</div>
            <div class="game-list2">
              <div 
                class="game-item"
                v-for="(item, index) in gameList31.game_list"
                :key="index"
                @click="toDetail(item)"
              >
                <img class="game-img" :src="item.titlepic" alt="">
                <div class="name">{{item.title}}</div>
                <div class="type">
                  <span
                    v-for="(item2,index2) in item.type"
                    :key="index2"
                  >{{item2}}</span>
                </div>
              </div>
            </div>
          </section>
          <!-- gameList32 -->
          <section v-if="gameList32.game_list !== undefined">
            <div class="title">{{gameList32.header_title}}</div>
            <div class="swiper-list">
              <Swiper :options="swiperOption2">
                <SwiperSlide
                  v-for="(item, index) in Math.ceil((gameList32.game_list.length)/3)"
                  :key="index" 
                  class="game-slide"
                >
                  <div 
                    class="game-info"
                    v-for="(item2, index2) in handleGameList4(gameList32.game_list, index)"
                    :key="index2"
                    @click="toDetail(item2)"
                  >
                    <img :src="item2.titlepic" alt="">
                    <div class="game-content">
                      <div class="name">{{item2.title}}</div>
                      <div class="info">
                        <span>
                          <em
                            v-for="(item3,index3) in item2.type"
                            :key="index3"
                          >{{item3}}</em>
                        </span>
                        <span>{{item2.size_i}}</span>
                      </div>
                      <div class="tag">
                        <span
                         v-for="(item3, index3) in item2.app_tag"
                         :key="index3"
                         :style="{color: item3.color}"
                        >
                          <i
                            :style="{backgroundImage: `url(${item3.icon})`}"></i>
                          <em>{{item3.name}}</em>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-pagination2 swiper2"  slot="pagination"></div>
            </div>
            <div 
              class="big-topic"
              @click="toTopicList(gameList32.collect.id, gameList32.collect.list_banner)"
            >
              <img :src="gameList32.collect.banner" alt="">
            </div>
          </section>
          <!-- gameList33 -->
          <section v-if="gameList33.game_list !== undefined">
            <div class="title">{{gameList33.header_title}}</div>
            <div class="swiper-list2">
              <Swiper :options="swiperOption3">
                <SwiperSlide
                  v-for="(item, index) in gameList33.game_list"
                  :key="index" 
                  class="swiper-item"
                >
                  <img class="background-img" :src="item.morepic.big[0]" alt="">
                  <div class="content" @click="toDetail(item)">
                    <div class="top">{{handleTimestamp(item.start_time)}}首发</div>
                    <div class="bottom">
                      <img class="game-img" :src="item.titlepic" alt="">
                      <div class="game-info">
                        <div class="name">{{item.title}}</div>
                        <div class="info">
                          <span>
                            <em
                              v-for="(item2,index2) in item.type"
                              :key="index2"
                            >{{item2}}</em>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <!-- gameList41 -->
          <section v-if="gameList41.game_list !== undefined">
            <div class="title">{{gameList41.header_title}}</div>
            <div class="swiper-list">
              <Swiper :options="swiperOption4">
                <SwiperSlide
                  v-for="(item, index) in Math.ceil((gameList41.game_list.length)/3)"
                  :key="index" 
                  class="game-slide"
                >
                  <div 
                    class="game-info"
                    v-for="(item2, index2) in handleGameList4(gameList41.game_list, index)"
                    :key="index2"
                    @click="toDetail(item2)"
                  >
                    <img :src="item2.titlepic" alt="">
                    <div class="game-content">
                      <div class="name">{{item2.title}}</div>
                      <div class="info">
                        <span>
                          <em
                            v-for="(item3,index3) in item2.type"
                            :key="index3"
                          >{{item3}}</em>
                        </span>
                        <span>{{item2.size_i}}</span>
                      </div>
                      <div class="tag">
                        <span
                         v-for="(item3, index3) in item2.app_tag"
                         :key="index3"
                         :style="{color: item3.color}"
                        >
                          <i
                            :style="{backgroundImage: `url(${item3.icon})`}"></i>
                          <em>{{item3.name}}</em>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-pagination2 swiper4"  slot="pagination"></div>
            </div>
            <div 
              class="big-topic"
              @click="toTopicList(gameList41.collect.id, gameList41.collect.list_banner)"
            >
              <img :src="gameList41.collect.banner" alt="">
            </div>
          </section>
          <!-- gameList42 -->
          <section v-if="gameList42.game_list !== undefined">
            <div class="title">{{gameList42.header_title}}</div>
            <div class="swiper-list">
              <Swiper :options="swiperOption5">
                <SwiperSlide
                  v-for="(item, index) in Math.ceil((gameList42.game_list.length)/3)"
                  :key="index" 
                  class="game-slide"
                >
                  <div 
                    class="game-info"
                    v-for="(item2, index2) in handleGameList4(gameList42.game_list, index)"
                    :key="index2"
                    @click="toDetail(item2)"
                  >
                    <img :src="item2.titlepic" alt="">
                    <div class="game-content">
                      <div class="name">{{item2.title}}</div>
                      <div class="info">
                        <span>
                          <em
                            v-for="(item3,index3) in item2.type"
                            :key="index3"
                          >{{item3}}</em>
                        </span>
                        <span>{{item2.size_i}}</span>
                      </div>
                      <div class="tag">
                        <span
                         v-for="(item3, index3) in item2.app_tag"
                         :key="index3"
                         :style="{color: item3.color}"
                        >
                          <i
                            :style="{backgroundImage: `url(${item3.icon})`}"></i>
                          <em>{{item3.name}}</em>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="swiper-pagination2 swiper5"  slot="pagination"></div>
            </div>
            <div 
              class="big-topic"
              @click="toTopicList(gameList42.collect.id, gameList42.collect.list_banner)"
            >
              <img :src="gameList42.collect.banner" alt="">
            </div>
          </section>
          <!-- footList1 -->
          <section>
            <div class="title">{{footList1.title}}</div>
            <div class="tab-list1">
              <div 
                class="tab-item"
                v-for="(item, index) in footList1.games"
                :key="index"
                @click="toDetail(item)"
              >
                <img :src="item.titlepic" alt="" class="game-img">
                <div class="game-name">{{item.title}}</div>
              </div>
            </div>
          </section>
          <!-- footList2 -->
          <section>
            <div class="title">{{footList2.title}}</div>
            <div class="tab-list1">
              <div 
                class="tab-item"
                v-for="(item, index) in footList2.games"
                :key="index"
                @click="toDetail(item)"
              >
                <img :src="item.titlepic" alt="" class="game-img">
                <div class="game-name">{{item.title}}</div>
              </div>
            </div>
          </section>
          <!-- tagList -->
          <section>
            <div class="title">热门分类</div>
            <div class="tag-list">
              <router-link 
                tag="div"
                class="tab-item"
                v-for="(item, index) in tagList"
                :key="index"
                :style="{background: item.bg_color}"
                :to="{name: 'GameClass', query: {tag: item.title}}"
              >{{item.title}}</router-link>
            </div>
          </section>
          <!-- footer -->
          <div class="footer">我也是有底线的</div>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
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
        slidesPerView : 1.1, 
        pagination: {
          el: '.swiper2',
        },
      },
      swiperOption3: {
        slidesPerView : 'auto', 
        spaceBetween : 15,
      },
      swiperOption4: {
        slidesPerView : 1.1, 
        pagination: {
          el: '.swiper4',
        },
      },
      swiperOption5: {
        slidesPerView : 1.1, 
        pagination: {
          el: '.swiper5',
        },
      },
      navList: [],
      bannerList: [],
      gameList31: {},
      gameList32: {},
      gameList33: {},
      gameList41: {},
      gameList42: {},
      footList1: {},
      footList2: {},
      tagList: [],
      pullDownState: false,
      loading: 'ready',
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
        this.$axios({
          url: '/api/index/indexNew',
          data: {

          }
        }),
        this.$axios({
          url: '/api/index/indexNew',
          data: {
            page: 2
          }
        })
      ]).then(this.$axios.spread((res, res2, res3, res4) => {
        this.handleInitData(res, res2, res3, res4);
        this.$nextTick(() => {
          // loading消失
          this.loading = 'success';
        })
      }))
      .catch(() => {
        this.loading = 'fail';
      })
    },
    handleInitData(res, res2, res3, res4) {

      this.latelyList = res2.data.list;
      this.navList = res.data.tab_action;
      // let temp = 0;
      // 过滤列表以外的节点
      // res.data.game_list.forEach((item, index) => {
      //   // 判断是否包含view_type字段
      //   if(item.hasOwnProperty('view_type')) {
      //     if(temp === 0) {
      //       this.qualityRecommend = res.data.game_list.slice(0, 1)[0];
      //       temp++;
      //     } else {
      //       this.qualityFirstList = res.data.game_list.slice(1, index);
      //       this.newGameAppointment = res.data.game_list.splice(index, 1)[0];
      //       this.newGameFirstList = res.data.game_list.splice(index);
      //     }
      //   }
      // });
      this.bannerList = res3.data.banner;
      this.gameList31 = res3.data.game_list[0];
      this.gameList32 = res3.data.game_list[1];
      this.gameList33 = res3.data.game_list[2];
      this.gameList41 = res4.data.game_list[0];
      this.gameList42 = res4.data.game_list[1];
      this.footList1 = res4.data.foot_list[0];
      this.footList2 = res4.data.foot_list[1];
      this.tagList = res4.data.game_cate.list;
    },
    handleGameList4(arr, item) {
      return arr.slice(item, item+3);
    },
    handleTimestamp(time) {
      let temp = new Date(time*1000);
      let month = temp.getMonth() + 1;
      month = month <= 10 ? `0${month}` : month;
      let day = temp.getDate();
      day = day <= 10 ? `0${day}` : day;
      return `${month}-${day}`;
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
    toTopicList(id, pic) {
      this.$router.push({
        name: 'TopicList',
        query: {
          topicId: JSON.stringify(id),
          titlepic: JSON.stringify(pic)
        }
      })
    },
  },
  components: {    
    Swiper,
    SwiperSlide,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './qualityselect.less';
</style>
<style lang="less">
  section {
    .swiper-list {
      .swiper-pagination2{
        margin-top: 5px;
        .swiper-pagination-bullet {
          margin: 4px;
          &.swiper-pagination-bullet-active {
            background: rgba(83, 174, 71, 1);
          }
        }
      }
    }
  }
</style>