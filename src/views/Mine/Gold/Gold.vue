<template>
  <div class="gold">
    <Navigation :title="'金币兑换'" :type="2" :assTitle="'金币明细'" />
    <div class="main">
      <div class="explain">
        <span class="text">金币可通过签到，评论，下载游戏等途径获取；获得的金币可 用于兑换平台币。</span>
        <span class="text orange">去赚金币</span>
        <i class="icon"></i>
      </div>
      <div class="wrapper">
        <div class="my-gold">
          <span class="number">{{gold}}</span>
          <span class="unit">个</span>
        </div>
        <div class="exchange">
          <div class="text">兑换平台币</div>
          <div class="text-small">（兑换比例：<span class="red">10金币=1平台币</span>）</div>
        </div>
        <div class="input-container">
          <span class="text">平台币：</span>
          <input type="number" class="text text-input" v-model.number="inputGold" placeholder="请输入所兑换平台币数额">
          <span class="text text-right">个</span>
        </div>
        <div class="expend">消耗金币：<span class="red">{{costGold}}个</span></div>
        <div class="button">立即兑换</div>
        <div class="exegesis">注：最低10平台币起兑换</div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
export default {
  name: 'Gold',
  data() {
    return {
      gold: 0,
      inputGold: '',
    }
  },
  computed: {
    costGold() {
      return this.inputGold * 10;
    }
  },
  methods: {
    createdMethod() {
      let token = localStorage.getItem('token');
      this.$axios({
        url: '/api/user/balance',
        data: {
          token: token,
        }
      })
      .then(res => {
        this.gold = res.data.gold
      })
    },
  },
  components: {
    Navigation,
  }
}
</script>
<style lang="less" scoped>
  @import './Gold.less';
</style>