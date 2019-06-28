<template>
  <div class="detail-index">
    <Loading :loading="loading" @refresh="createdMethod">
      <div class="content" slot="loading-content">
        <div>
          <!-- qq-group -->
          <div class="qq-group">
            <div class="big-text">加入QQ群：{{detail.qq_qun}}领取礼包</div>
            <div class="small-text">{{detail.yxftitle}}</div>
            <div class="button" @click="openInBrowser(`mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${detail.notices[0].action_text}&key=959d333984b2deb937df28c4af43e3df678f8ec616a43e91c828e7ee563c4163&card_type=group&source=external`)">加群</div>
          </div>
          <!-- swiper -->
          <div class="swiper">
            <swiper :options="swiperOption" v-if="detail.morepic">
              <!-- slides -->
              <swiper-slide
                v-for="(item, index) in detail.morepic.small"
                :key="index" 
                class="swiper-slide">
                <img 
                  :src="item"
                  class="slide-img"
                  @click="showBigImage(detail.morepic.small, index)"
                >
              </swiper-slide>
            </swiper>
          </div>
          <!-- game-introduce -->
          <section class="game-section game-introduce">
            <div class="title"><i class="icon"></i><span class="text">游戏简介</span></div>
            <div class="section-content">
              {{detail.newstext}}
            </div>
          </section>
          <!-- game-feature -->
          <section class="game-section game-feature">
            <div class="title"><i class="icon"></i><span class="text">游戏特色</span></div>
            <div class="section-content">
              <div 
                class="text"
                v-for="(item, index) in detail.gameFeature"
                :key="index">
                {{item}}
              </div>
            </div>
          </section>
          <!-- game-recharge -->
          <section class="game-section game-recharge">
            <div class="title">
              <div class="left">
                <i class="icon"></i>
                <span class="text">充值返利</span>
              </div>
              <div class="right">
                <div class="button">充值返利点击申请</div>
                <i class="icon3733"></i>
              </div>
            </div>
            <div class="section-content">
              <div class="explain">*专属返利活动*请在充值后48小时内尽快提交返利申请哦！</div>
              <div 
                class="text"
                v-for="(item, index) in detail.activity"
                :key="index">
                {{item}}
              </div>
            </div>
          </section>
          <!-- game-open -->
          <section class="game-section game-open">
            <div class="title"><i class="icon"></i><span class="text">游戏开服</span></div>
            <div class="section-content">
              <ul class="open-list">
                <li 
                  class="open-item"
                  v-for="(item, index) in openList"
                  :key="index"
                  :class="today(item.newstime.date)">
                  <div class="left-wrapper">
                    <div class="outside-circle">
                      <div class="inside-circle"></div>
                    </div>
                    <div class="date">
                      <span class="text">{{item.newstime.date}}</span>
                      <span class="text">{{item.newstime.time}}</span>
                      <span class="text" v-if="today(item.newstime.date) === 'today'">今日</span>
                    </div>
                  </div>
                  <div class="game-name">{{item.state}}</div>
                </li>
              </ul>
            </div>
          </section>
          <!-- vip-price -->
          <section class="game-section game-vip" v-if="detail.vip_price.length !== 0">
            <div class="title"><i class="icon"></i><span class="text">VIP价格表</span></div>
            <div class="section-content">
              <div class="explain">部分游戏月卡、基金、理财、礼包不算VIP经验和充值、详细咨询客服！</div>
              <table class="vip-list">
                <tr>
                  <th>VIP等级</th>
                  <th>RMB</th>
                </tr>
                <tr
                  v-for="(item, index) in detail.vip_price"
                  :key="index">
                  <td>{{item.level_title}}</td>
                  <td>{{item.recharge}}</td>
                </tr>
              </table>
            </div>
          </section>
          <!-- game-tag -->
          <section class="game-section game-tag">
            <div class="title"><i class="icon"></i><span class="text">游戏标签</span></div>
            <div class="section-content">
              <ul class="type-list">
                <router-link
                  tag="li"
                  class="type-item"
                  v-for="(item, index) in detail.type"
                  :key="index"
                  :class="color(index)"
                  :to="{name: 'GameClass', query: {type: 4, tag: item}}"
                >
                  {{item}}
                </router-link>
              </ul>
            </div>
          </section>
          <!-- your-liked -->
          <section class="game-section game-liked">
            <div class="title"><i class="icon"></i><span class="text">猜你喜欢</span></div>
            <div class="section-content">
              <div class="game-list2">
                <ul class="list">
                  <li 
                  v-for="(item, index) in liked" 
                  :key="index"
                  class="game-item">
                    <div
                      class="container" 
                      @click="toDetail(item)">
                      <img :src="item.titlepic" class="game-img">
                      <div class="game-name">{{item.title}}</div>
                    </div>
                    <a :href="item.down_ip" class="button">{{'下载'}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import 'swiper/dist/css/swiper.css';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';
import Box from '@/common/box.js';
import { ImagePreview } from 'vant';

export default {
  name: 'DetailIndex',
  data() {
    return {
      id: '',
      openList: [],
      detail: {
        vip_price: []
      },
      liked: [],
      swiperOption: {
        slidesPerView : 2.8,
        spaceBetween : '1%',
        freeMode : true,
      },
      loading: 'ready',
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.id !== JSON.parse(sessionStorage.getItem('gameInfo')).id) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.id = JSON.parse(sessionStorage.getItem('gameInfo')).id;
      this.loading = 'ready';
      this.$axios.all([
        this.$axios({
          url: '/api/game/read',
          data: {
            id: this.id,
          }
        }),
        this.$axios({
          url: '/api/server/index', 
          data: {
            gameId: this.id
          }
        })
      ])
      .then(this.$axios.spread((res, res2) => {
        this.handleInitData(res, res2);
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }))
      .catch(() => {
        this.loading = 'fail';
      });
    },
    // 数据初始化
    handleInitData(res, res2) {
      this.liked = res.data.liked;
      this.detail = res.data.detail;
      this.detail.gameFeature = res.data.detail.smalltext.split('<br />');
      this.detail.activity = res.data.detail.activity.split('<br />');
      this.openList = res2.data;
      this.handleListSort(this.openList);
    },
    // 游戏标签的背景颜色的类名
    color(index) {
      let temp = index % 5;
      return ['color'+temp];
    },
    // 处理开服表的字符串
    handleTimestamp(ts) {
      let temp = new Date(ts*1000),
          m = temp.getMonth() + 1,
          d = temp.getDate(),
          h = temp.getHours(),
          min = temp.getMinutes();
          m = m < 10 ? '0'+m : m;
          d = d < 10 ? '0'+d : d;
          h = h < 10 ? '0'+h : h;
          min = min < 10 ? '0'+min : min;
      return {
        date: `${m}-${d}`,
        time: `${h}:${min}`
      };
    },
    // 按时间排序开服表
    handleListSort(list) {
      for(let ele of list) {
        ele.newstime = this.handleTimestamp(ele.newstime);
      }
      this.openList.reverse();
    },
    // 判断开服是未来今天还是过去
    today(date) {
      let today = new Date();
      let m = today.getMonth() + 1;
      let d = today.getDate();
      m = m < 10 ? '0'+m : m;
      d = d < 10 ? '0'+d : d;
      if(date < `${m}-${d}`) {
        return 'before'
      } else if(date == `${m}-${d}`) {
        return 'today'
      } else {
        return 'after'
      }
    },
    // 加群 
    openInBrowser(str) {
      let box = new Box();
      box.openInBrowser(str);
    },
    toDetail(item) {
      sessionStorage.setItem('gameInfo', JSON.stringify(item));
      this.createdMethod();
      this.$emit('changeDetail');
    },
    showBigImage(list, index) {
      ImagePreview({
        images: list,
        startPosition: index,
      }); 
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './detail-index.less';
</style>