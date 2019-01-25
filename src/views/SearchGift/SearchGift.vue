<template>
  <div class="search-gift">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="search_gift_scroller" refreshText="刷新">
      {{text}}<GiftList :giftList="searchGiftList"/>
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
      text:''
    }
  },
  watch: {
      $route(to,from){
        // var fromKey = sessionStorage.getItem("REMBENBER_KEYWORD");
        this.text = to.params.keyword;
        if(to.params.keyword != from.params.keyword){
          this.init(this.handleGiftList);
        }
        
      }
    },
  methods:{
    init(method){
        this.$axios({
            method: "post",
            url: "/api/search/index",
            data:this.$qs.stringify({
              page:this.page,
              keyword:this.$route.params.keyword
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
        },1000);
        
        
      }
  },
  created() {
    this.init(this.handleGiftList)
  },
  mounted() {
  },
  beforeRouteEnter(to,from,next){
    // console.log(sessionStorage.getItem("TO_RESULT_KEY"))
      if(!sessionStorage.searchGiftPositon || from.params.keyword != to.params.keyword && /\/giftdetail/.test(from.path) ){//判断是否有缓存
        sessionStorage.searchGiftPositon = '';
        next();
      }else{
        next(vm => {
            if(vm && vm.$refs.search_gift_scroller){
              setTimeout(function () {
                vm.$refs.search_gift_scroller.scrollTo(0, sessionStorage.searchGiftPositon, false);
              },0)//同步转异步操作
            }
        })
      }
    },
    beforeRouteLeave(to,from,next){//记录离开时的位置
      sessionStorage.searchGiftPositon = this.$refs.search_gift_scroller && this.$refs.search_gift_scroller.getPosition() && this.$refs.search_gift_scroller.getPosition().top;
      if(to.name=='GiftDetail' || to.name=='SearchGame'){
                from.meta.keepAlive=true;//当我们进入到C时开启B的缓存
        }else{
            from.meta.keepAlive=true;
            // this.$destroy();//销毁B的实例
        }
      next()
    },
  components: {
    GiftList
  }
}
</script>
<style lang="less">
  @import './searchgift.less';
</style>
