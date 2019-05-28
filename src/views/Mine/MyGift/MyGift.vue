<template>
  <div class="my-gift">
      <Navigation title="我的礼包"/>
    <!-- header -->
    <main>
      <div class="my-gift-list">
          <Loading :loading="loading" @refresh="createdMethod">
            <div slot="loading-content">
              <van-list
                v-model="pullUpState"
                :finished="noMore"
                :finished-text="text"
                @load="pullUp"
              >
                <GiftList :giftList="giftList" class="content"/>
              </van-list>
            </div>
          </Loading>
      </div>
    </main>
  </div>
  
</template>

<script>
import Loading from '@/components/loading/loading.vue';
import Navigation from '@/components/navigation/navigation.vue';
import GiftList from '@/components/giftlist/giftlist.vue';

export default {
  name: 'Home',
  data(){
    return{
        giftList:[],
        noneText:'您还没有领取过礼包',
        pullUpState: false,
        loading: 'ready',
        ajaxSwitch: true,
        token:'',
        page:2,
        text: '没有更多了',
        noMore: false,
    }
  },
  activated() {
    this.token = sessionStorage.token;
    this.createdMethod();   
  },
  methods: {
      createdMethod() {
        this.loading = 'ready';
        this.$axios({
          url: '/api/card/mine',
          data: {
              token:this.token,
              page:1
          }
        }).then(res => {
          this.handleInitData(res);
          if(res.data.list.length < 20) {
            this.noMore = true;
            if(res.data.list.length === 0) {
              this.text = '您还没有领取过礼包';
            }
          }
          this.$nextTick(() => {
            this.loading = 'success';
          })
        }).catch(() => {
          this.loading = 'fail';
        })
    },
    handleInitData(res) {
      this.giftList = this.giftList.concat(res.data.list);
    },
    pullUp(){
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url:'/api/card/mine',
          data:{
            token:this.token,
            page: this.page,
          }
        })
        .then(res=>{
          this.page++;
          this.handleInitData(res);
          if(res.data.list.length < 20) {
            this.noMore = true;
          }
          this.pullUpState = false;
        })
        .catch(() => {
            this.pullUpState = false;
        })
      }
    }
  },
  components: {
    Navigation,
    GiftList,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './mygift.less';
</style>

