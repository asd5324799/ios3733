<template>
  <div class="search-gift">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="search_gift_scroller" refreshText="刷新">
      <GiftList :giftList="searchGiftList"/>
    </scroller>
  </div>
</template>
<script>
import GiftList from '@/components/giftlist/giftlist.vue';
export default {
  name: 'SearchGift',
  data(){
    return{
      searchGiftList:[],
      page:1,
    }
  },
  methods:{
    init(method){
        this.$axios({
            method: "post",
            url: "http://api2.c3733.com/api/search/index",
            data:this.$qs.stringify({
              from: 777,
              uuid: "ffffffff-1234-1234-1234-123456789012",
              page: 1,
              keyword: this.$route.params.keyword,
              fromAction: 1,
              type: 101
            })
          }).then(method)
      },
    handleGiftList(res){
      this.searchGiftList = res.data.card_list;
    },
    addGiftList(res){
      this.searchGiftList = this.searchGiftList.concat(res.data.card_list);
    },
    refresh() {
        setTimeout(() => {
          this.page = 1;
          this.init(this.handleGiftList)
          this.$refs.search_gift_scroller.finishPullToRefresh();
        }, 1000)
      },
      infinite() {
        this.page++;
        this.init(this.addGiftList);
        setTimeout(() =>{
          this.$refs.search_gift_scroller.finishInfinite(2);
        },500);
        
        
      }
  },
  created() {
    this.init(this.handleGiftList)
  },
  beforeRouteEnter(to,from,next){
      if(!sessionStorage.searchGiftPositon || from.params.keyword != to.params.keyword && !(/\/giftdetail/.test(from.path)) ){//判断是否有缓存
        sessionStorage.searchGiftPositon = '';
        next(vm =>{
          vm.init(vm.handleGiftList);
          setTimeout(function () {
                vm.$refs.search_gift_scroller.scrollTo(0, sessionStorage.searchGiftPositon, false);
              },0)//同步转异步操作
        });
      }else{
        next(vm => {
          vm.init(vm.handleGiftList);
            if(vm && vm.$refs.search_gift_scroller){
              setTimeout(function () {
                vm.$refs.search_gift_scroller.scrollTo(0, sessionStorage.searchGiftPositon, false);
              },0)//同步转异步操作
            }
        })
      }
    },
    beforeRouteLeave(to,from,next){//记录离开时的位置
    if(to.params.keyword != from.params.keyword && /\/searchgame/.test(to.path)){//不记录位置
      next();
    }else{
      sessionStorage.searchGiftPositon = this.$refs.search_gift_scroller && this.$refs.search_gift_scroller.getPosition() && this.$refs.search_gift_scroller.getPosition().top;
      next()
    }
    },
  components: {
    GiftList
  }
}
</script>
<style lang="less">
  @import './searchgift.less';
</style>
