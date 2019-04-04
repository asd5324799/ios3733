<template>
  <div class="scroll">
    <div class="wrapper" ref="wrapper">
      <slot class="content" name="content"></slot>
      <div v-if="pullDown !== 'false'" class="pull-down" :style="{'top': top}">
        <Bubble v-if="isPullingDown === 1" :y="pullDownY"></Bubble>
        <Loading v-if="isPullingDown === 2"></Loading>
        <div v-if="isPullingDown === 3" class="text">{{pullDownText}}</div>
      </div>
    </div>
    <div v-if="pullUp !== 'false'" class="pull-up">
      <div v-if="isPullingUp === 1" class="text">{{pullUpText}}</div>
      <Loading v-if="isPullingDown === 2"></Loading>
    </div>
  </div>
</template>
<script>
/**
 * @param pullDown 下拉刷新的状态，false,ready,success,fail
 * @param pullUp 上拉刷新的状态，false,ready,success,nomore,fail
 * @param pullDownY 实时记录下拉的距离px
 */
import BScroll from 'better-scroll';
import Bubble from './bubble/bubble';
import Loading from './loading/loading';

export default {
  props: {
    pullDown: {
      type: String,
      default: 'false'
    },
    pullUp: {
      type: String,
      default: 'false'
    },
    scrollRefresh: {
      type: Boolean,
      default: false
    } 
  },
  data() {
    return {
      pullDownY: 0,   
      top: '0px', 
      isPullingDown: 1,
      isPullingUp: 1,
      pullDownHeight: 50,
    }
  },
  computed: {
    pullDownText() {
      if (this.pullDown === 'fail') {
        return '刷新失败,请重试';
      } else {
        return '刷新成功';
      } 
    },
    pullUpText() {
      if (this.pullUp === 'success') {
        return '加载成功';
      } else if (this.pullUp === 'nomore') {
        return '已完成全部召唤';
      } else {
        return '上拉加载更多';
      }
    }
  },
  mounted() {
    setTimeout(() => {
        this.initScroll();
    }, 20)
  },
  watch: {
    pullDown() {
      this.isPullingDown = 3;
      setTimeout(() => {
        this.scroll.finishPullDown();
        this.scroll.refresh();
        setTimeout(() => {
          this.isPullingDown = 1;
        }, 1000)
      }, 20);
    },
    pullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp();
        this.scroll.refresh();
      }, 20);
    },
    scrollRefresh() {
      if(this.scrollRefresh === true) {
        this.isPullingDown = 2;
        this.scroll.scrollTo(0, 50, 1000);
        setTimeout(() => {
        this.scroll.autoPullDownRefresh();
        },1000)
      }
    },
  },
  methods: {
    initScroll() {
      let pullDownRefresh,pullUpLoad;
      if(this.pullDown !== 'false') {
        pullDownRefresh = {threshold: this.pullDownHeight,stop: this.pullDownHeight};
      } else {
        pullDownRefresh = false;
      }
      if(this.pullUp !== 'false') {
        pullUpLoad = {threshold: this.pullDownHeight};
      } else {
        pullUpLoad = false;
      }
      let option = {
        click: true,
        pullDownRefresh,
        pullUpLoad,
        swipeTime: 1000
      }
      this.scroll = new BScroll(this.$refs.wrapper, option);
      if(this.pullDown !== 'false') {
        this.scroll.on('pullingDown', this.pullDownMethod);
      }
      if(this.pullUp !== 'false') {
        this.scroll.on('pullingUp', this.pullUpMethod);
      }
      if(this.pullDown !== 'false' || this.pullUp !== 'false') { 
        this.scroll.on('scroll', this.scrollMethod);
        this.scroll.on('touchEnd', this.touchEndMethod);
      }
    },
    pullDownMethod() {
      this.$emit('pullingDown');
    },
    pullUpMethod() {
      if(this.pullUp === 'ready') {
        this.$emit('pullingUp');
      }
    },
    scrollMethod(pos) {
      this.pullDownY = pos.y - this.pullDownHeight;
      if(pos.y < -134) {
        this.$emit('pullDownY', true);
      } else {
        this.$emit('pullDownY', false);
      }
    },
    touchEndMethod(pos) {
      if(pos.y >= this.pullDownHeight) {
        this.isPullingDown = 2;
      }
    }
  },
  components: {
    Bubble,
    Loading
  }
}
</script>
<style lang="less">
  @import './scroll.less';
</style>
