<template>
  <div class="gift-list">
    <ul class="gift-container">
      <li class="gift-item" v-for="(item,index) of giftList" :key="index">
        <i class="gift-icon"></i>
        <router-link :to="{name:'GiftDetail',params:{id:item.id}}" class="gift-info">
          <h4>{{item.title}}</h4>
          <p>{{item.cardbody}}</p>
          <div class="gift-remain"><b><i :style="{width:item.remain+'%'}"></i></b><span>剩余{{item.remain}}%</span></div>
          <span class="get-number">已有{{item.yi_ling_qu}}人领取</span>
        </router-link>
        <a href="/" class="get-gift">领取</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GiftList',
  props: {
    giftList: Array
  },
}
</script>
<style lang="less" scoped>
  @import './giftlist.less';
</style>
