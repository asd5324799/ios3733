<template>
  <div class="gift-detail">
    <!-- 顶部标题栏 -->
    <Navigation :title="'礼包详情'"/>
    <!-- game -->
    <Loading :loading="loading" @refresh="init">
      <div class="content" slot="loading-content">
        <div>
          <GameInfo :item="giftGame" />
          <!-- gift -->
          <div class="gift-info gift-section">
            <h4>{{giftData.title}}</h4>
            <div class="gift-remain"><b><i :style="{width:giftData.remain+'%'}"></i></b><span>(剩余{{giftData.remain}}%)</span></div>
            <span class="get-number">已有{{giftData.yi_ling_qu}}人领取</span>
            <span @click="getGift" :class="{already: already}" class="get-gift">{{text}}</span>
            <!-- <a href="javascript:void(0);" class="get-account">淘号</a> -->
          </div>
          <!-- gift-detail -->
          <div class="gift-con gift-section">
              <div class="section-title">礼包内容</div>
              <P>{{giftData.cardbody}}</P>
          </div>
          <div class="gift-range gift-section">
              <div class="section-title">使用范围</div>
              <p>全场通用</p>
          </div>
          <div class="gift-method gift-section">
              <div class="section-title">兑换方式</div>
              <p>{{giftData.cardtext}}</p>
          </div>
          <div class="gift-notice gift-section">
              <div class="section-title">注意事项</div>
              <p v-html="giftData.notes"></p>
          </div>
          <div class="gift-date gift-section">
              <div class="section-title">礼包时间</div>
              <p>开始时间:{{giftData.starttime | formatDate}}</p>
              <p>结束时间:{{giftData.endtime | formatDate}}</p>
          </div>
        </div>
      </div>
    </Loading>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
import Loading from '@/components/loading/loading.vue';
import GameInfo from '@/components/gamelist/gameinfo/gameinfo.vue';
    export default {
        name:"GiftDetail",
        data() {
          return {
            giftData:{},
            giftGame:{},
            loading: 'ready',
            ajaxSwitch: true,
            text: '领取',
            already: false,
          }
        },
        filters: {
          formatDate: function (value) {
            let date = new Date(Number(value)*1000);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            return y + '年' + MM + '月' + d + '日 ' + h + '时' + m + '分';
          },
        },
        activated() {
          this.init();
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          gameRelated(gameTitle){
            this.$axios({
              url:"/api/game/read",
              data:{
                title: gameTitle
              }
            }).then(res => {
              this.giftGame = res.data.detail;
            })
          },
          init(){
            this.loading = 'ready';
            this.$axios({
              url:"/api/card/read",
              data:{
                cardId: this.$route.params.id
              }
            }).then(res => {
              this.handleGameGift(res);
              this.loading = 'success';
            })
          },
          handleGameGift(res){
            this.giftData = res.data;
            this.giftData.notes = this.giftData.notes.replace(/\r\n/g,"<br/>");
            this.gameRelated(this.giftData.titlegame);
          },
          getGift() {
            if(this.ajaxSwitch && !this.already) {
              this.ajaxSwitch = false;
              this.$axios({
                url: '/api/card/get',
                data: {
                  token: sessionStorage.getItem('token'),
                  cardId: this.$route.params.id
                }
              })
              .then(res => {
                if(!res.msg) {
                  this.text = '已领取';
                  this.already = true;
                  this.$toast('领取成功')
                }
                this.ajaxSwitch = false;
              })
              .catch(() => {
                this.ajaxSwitch = false;
              })
            }
          }
        },
        components:{
            GameInfo,
            Navigation,
            Loading
        }
    }
</script>
<style lang="less" scoped>
    @import './giftdetail.less';
</style>
