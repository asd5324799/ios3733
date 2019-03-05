<template>
  <div class="my-gift">
      <Navigation title="我的礼包"/>
    <!-- header -->
    <main>
        <div class="my-gift-list"  v-if="giftList.length">
            <Loading :loading="loading" @refresh="createdMethod">
                <Scroll 
                    :pullDown="pullDownState"
                    :pullUp="pullUpState"
                    @pullingDown="pullDown"
                    @pullingUp="pullUp"
                    slot="loading-content">
                    <!-- <GameList :list="list" :type="1" slot="content" class="content"></GameList> -->
                    <GiftList :copyCode="copyCode" :giftList="giftList" slot="content" class="content"/>
                </Scroll>
            </Loading>
            
        </div>
      <div class="my-gift-list" v-else>
          <div class="content-none">{{noneText}}</div>
      </div>
    </main>
  </div>
  
</template>

<script>
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import Navigation from '@/components/navigation/navigation.vue';
import GiftList from '@/components/giftlist/giftlist.vue';

export default {
  name: 'Home',
  data(){
    return{
        giftList:[],
        noneText:'您还没有领取过礼包',
        pullDownState: 'ready',
        pullUpState:'ready',
        loading: 'ready',
        token:'',
        page:1

    }
  },
  methods: {
      copyCode(){
      },
      createdMethod() {
      this.loading = 'ready';
      this.$axios({
        url: '/api/card/mine',
        data: {
            token:this.token,
            page:this.page
        }
      }).then(res => {
        this.handleInitData(res);
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
    pullDown() {
      this.page = 1;
        this.$axios({
          url:'/api/card/mine',
          data:{
            token:this.token,
            page:this.page
          }
        }).then(res => {
          this.giftList = [];
          this.handleInitData(res);
          this.pullDownState = 'success';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        }).catch(() => {
          this.pullDownState = 'fail';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        })
    },
    pullUp(){
      this.page++;
      this.$axios({
        url:'/api/card/mine',
        data:{
          token:this.token,
          page:this.page
        }
      }).then(res=>{
        this.handleInitData(res);
        this.pullDownState = 'success';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        }).catch(() => {
          this.pullDownState = 'fail';
          setTimeout(() => {
            this.pullDownState = 'ready';
          }, 1000)
      })
    }
  },
  created () {
      this.token = localStorage.token;
    this.createdMethod();
  },
  components: {
    Navigation,
    GiftList,
    Loading,
    Scroll
  }
}
</script>
<style lang="less" scoped>
  @import './mygift.less';
</style>

