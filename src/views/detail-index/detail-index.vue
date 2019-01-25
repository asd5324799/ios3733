<template>
  <div class="detail-index">
    <!-- qq-group -->
    <div class="qq-group">
      <div class="big-text">加入QQ群：{{detail.qq_qun}}领取礼包</div>
      <div class="small-text">{{detail.yxftitle}}</div>
      <div class="button">加群</div>
    </div>
    <!-- swiper -->
    <div class="swiper" v-if="detail.morepic.small">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div
              v-for="(item, index) in detail.morepic.small"
              :key="index" 
              class="swiper-slide">
                <img 
                  :src="item"
                  class="slide-img">
            </div>
        </div>
      </div>
    </div>
    <!-- game-introduce -->
    <!-- game-question -->
    <!-- game-feature -->
    <!-- game-recharge -->
    <!-- vip-price -->
    <!-- game-tag -->
    <!-- your-liked -->
    <!-- download -->
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'DetailIndex',
  props: {
    detail: Object,
    liked: Array
  },
  data() {
    return {
      game: {}
    }
  },
  watch: {
    detail() {
      this.game = this.detail;
      this.$nextTick(function() {
        new Swiper('.swiper-container', {
          slidesPerView : 2.8,
          spaceBetween : '1%',
          freeMode : true,
        });
      })
    }
  },
}
</script>
<style lang="less" scoped>
  @import './detail-index.less';
</style>