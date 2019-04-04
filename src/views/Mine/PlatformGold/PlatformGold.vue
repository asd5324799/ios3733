<template>
  <div class="platform-gold">
    <Navigation :title="'平台币兑换'" :type="2" :assTitle="'平台币明细'" />
    <div class="main">
      <div class="my-gold">
        <span class="number">{{NowPTB}}</span>
        <span class="unit">个</span>
      </div>
      <div class="title">充值平台币</div>
      <ul class="select-list">
        <li class="select-item"
          v-for="(item, index) in list"
          :key="index"
          :class="{current: current === index, recommend: item.recommend}"
          @click="changeCurrent(index)">
          <div class="date">{{item.date}}</div>
          <div class="money">{{item.money}}</div>
        </li>
      </ul>
      <div class="input-container">
        <span class="text">充值：</span>
        <input type="number" class="text text-input" placeholder="请输入充值金额10-99999" v-model.number="charge">
        <span class="text text-right">元</span>
      </div>
      <div class="title title2">支付方式</div>
      <ul class="pay-list">
        <li 
          class="pay-item"
          v-for="(item, index) in payList"
          :key="index"
          :class="{current: payWay === index, wechat: item.way==='wechat', alipay: item.way==='alipay'}"
          @click="changePayWay(index)"
          >
          <i class="icon"></i>
          <span class="text">{{item.text}}</span>
        </li>
      </ul>
      <div class="explain">充值3733游戏选择“平台币支付”即可使用平台币充值</div>
      <div class="button">立即充值</div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
export default {
  name: 'PlatformGold',
  data() {
    return {
      list: [
        {
          date: '100平台币',
          money: '10元',
          recommend: false,
        }, {
          date: '500平台币',
          money: '50元',
          recommend: true,
        }, {
          date: '1000平台币',
          money: '100元',
          recommend: false,
        }, {
          date: '5000平台币',
          money: '500元',
          recommend: false,
        }, {
          date: '10000平台币',
          money: '1000元',
          recommend: false,
        }, {
          date: '50000平台币',
          money: '5000元',
          recommend: false,
        }
      ],
      payList: [
        {
          way: 'wechat',
          text: '微信支付'
        }, {
          way: 'alipay',
          text: '支付宝支付'
        }
      ],
      current: 1,
      NowPTB: 0,
      charge: '',
      payWay: 0,
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.$axios({
        url: ''
      })
    },
    changeCurrent(index) {
      this.current = index;
    },
    changePayWay(index) {
      this.payWay = index;
    }
  },
  components: {
    Navigation,
  }
}
</script>
<style lang="less" scoped>
  @import './PlatformGold.less';
</style>
