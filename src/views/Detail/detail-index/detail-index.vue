<template>
  <div class="detail-index" v-if="detail.qq_qun">
    <!-- qq-group -->
    <div class="qq-group">
      <div class="big-text">加入QQ群：{{detail.qq_qun}}领取礼包</div>
      <div class="small-text">{{detail.yxftitle}}</div>
      <a :href="detail.kefu_qq_url" class="button">加群</a>
    </div>
    <!-- swiper -->
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          v-for="(item, index) in detail.morepic.small"
          :key="index" 
          class="swiper-slide">
          <img 
            :src="item"
            class="slide-img">
        </swiper-slide>
      </swiper>
    </div>
    <!-- game-introduce -->
    <section class="game-section game-introduce">
      <div class="title"><i class="icon"></i><span class="text">游戏简介</span></div>
      <div class="content">
        {{detail.newstext}}
      </div>
    </section>
    <!-- game-feature -->
    <section class="game-section game-feature">
      <div class="title"><i class="icon"></i><span class="text">游戏特色</span></div>
      <div class="content">
        <div 
          class="text"
          v-for="(item, index) in gameFeature"
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
      <div class="content">
        <div class="explain">*专属返利活动*请在充值后48小时内尽快提交返利申请哦！</div>
        <div class="text">{{detail.activity}}</div>
      </div>
    </section>
    <!-- game-open -->
    <section class="game-section game-open">
      <div class="title"><i class="icon"></i><span class="text">游戏开服</span></div>
      <div class="content">
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
    <section class="game-section game-vip">
      <div class="title"><i class="icon"></i><span class="text">VIP价格表</span></div>
      <div class="content">
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
      <div class="content">
        <ul class="type-list">
          <li 
            class="type-item"
            v-for="(item, index) in detail.type"
            :key="index"
            :class="color(index)"
          >
            {{item}}
          </li>
        </ul>
      </div>
    </section>
    <!-- your-liked -->
    <section class="game-section game-liked">
      <div class="title"><i class="icon"></i><span class="text">猜你喜欢</span></div>
      <div class="content">
        <GameList2
        :list="liked"
        type="3"></GameList2>
      </div>
    </section>
  </div>
</template>
<script>
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import 'swiper/dist/css/swiper.css';
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'DetailIndex',
  props: {
    detail: Object,
    liked: Array
  },
  data() {
    return {
      gameFeature: [],
      openList: [],
      swiperOption: {
        slidesPerView : 2.8,
        spaceBetween : '1%',
        freeMode : true,
      }
    }
  },
  methods: {
    // 数据初始化
    handleInitData() {
      this.gameFeature = this.detail.smalltext.split('<br />');
      this.$nextTick(function() {
        // axios
        this.$axios.post('/api/server/index', {
          gameId: this.detail.id.toString()
        })
        .then((res) => {
          this.openList = res.data;
          this.handleListSort(this.openList);
        })
      })
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
  },
  watch: {
    detail() {
      this.handleInitData();
    },
  },
  components: {
    GameList2,
    swiper,
    swiperSlide,
  }
}
</script>
<style lang="less" scoped>
  @import './detail-index.less';
</style>