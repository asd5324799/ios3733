<template>
  <div class="gift-list">
    <ul class="gift-container">
      <li class="gift-item" v-for="(item,index) of giftList" :key="index">
        <div v-if="!item.cardpass || item.cardpass === null" class="gift-type1">        
          <i class="gift-icon"></i>
          <router-link :to="{name:'GiftDetail',params:{id:item.id}}" class="gift-info">
            <h4>{{item.title}}</h4>
            <p>{{item.cardbody}}</p>
            <div class="gift-remain"><b><i :style="{width:item.remain+'%'}"></i></b><span>剩余{{item.remain}}%</span></div>
            <span class="get-number">已有{{item.yi_ling_qu}}人领取</span>
          </router-link>
          <span @click="getGift(item, index)" class="get-gift" :class="{already: item.remain === 0}">{{item.remain !== 0 ? '领取' : '已空'}}</span></div>
        <div v-else class="gift-type2">
          <div class="gift-info">
            <router-link 
            tag="div"
            :to="{name:'GiftDetail',params:{id:item.id}}" 
            class="gift-content">
              <div class="title">                    
                <i class="gift-icon"></i>
                <div class="gift-name">{{item.title}}</div>
              </div>
              <div class="code">礼包码:<span class="orange">{{item.cardpass}}</span></div>
              <div 
                class="boon"
              >{{item.cardbody}}</div>
            </router-link>
            <div 
              v-clipboard:copy="item.cardpass"
              v-clipboard:success="copySuccess"
              v-clipboard:error="copyError"
              class="get-gift"
              >复制</div>
          </div>
        </div>
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
  data() {
    return {
      ajaxSwitch: true,
    }
  },
  methods: {
    getGift(item, index) {
      if(!sessionStorage.getItem('token') || sessionStorage.getItem('token') === '') {
        this.$router.push({
          name: 'Login'
        })
      } else {
        this.$axios({
          url: '/api/card/get',
          data: {
            token: sessionStorage.getItem('token'),
            cardId: item.id
          }
        })
        .then(res => {
          if(res.msg) {
            this.$toast(res.msg);
          } else {
            if(res.data.remain === 0) {
              this.$toast('手慢啦~礼包已经被抢光~');
              this.$emit('updataRemain', index)
            } else {
              this.$toast('领取成功');
              if(item.cardpass === null) {
                this.$emit('updateCardpass', index, res.data.cardpass);
              }
            }
          }
        })
        .catch(() => {
          this.$toast('网络不好，请稍后重试');
        })
      }
    },
    copySuccess() {
      this.$Dialog.alert({
        title: '礼包码已复制',
        message: '使用说明：游戏内复制-兑换'
      })
    },
    copyError() {
      this.$Dialog.alert({
        message: '复制失败，请手动复制'
      })
    },
  },
}
</script>
<style lang="less" scoped>
  @import './giftlist.less';
</style>
