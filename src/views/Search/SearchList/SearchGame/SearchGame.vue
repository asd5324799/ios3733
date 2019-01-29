<template>
  <div class="search-game">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="search_game_scroller" refreshText="刷新">
      {{text}}<GameList :list="searchGameList" :type="listType" /> 
    </scroller>
  </div>
</template>
<script>
  import GameList from '@/components/gamelist/gamelist.vue';
  export default {
    name: 'SearchGame',
    data() {
      return {
        listType: 1,
        searchGameList: [],//搜索结果列表
        page: 1, //初始页码
        // text1:'',
      }
    },
    computed:{
      text:function(){
        return this.$route.params.keyword;
      }
    },
    watch: {
      $route(to,from){
        // this.text = this.$route.params.keyword;
        this.init(this.handleGameList)
        
      }
    },
    methods: {
      init(method){
        this.$axios({
            method: "post",
            url: "/api/game/index",
            data:this.$qs.stringify({
              from: 777,
              uuid: "ffffffff-1234-1234-1234-123456789012",
              page: this.page,
              keyword: this.$route.params.keyword,
              fromAction: 1,
              type: 1
            })
          }).then(method)
      },
      handleGameList(res) {
        this.searchGameList = res.data.list;
      },
      addGameList(res) {
        this.searchGameList = this.searchGameList.concat(res.data.list);//上拉加载数据数组拼接
      },
      refresh() {
        setTimeout(() => {
          this.page = 1;
          this.init(this.handleGameList);
          this.$refs.search_game_scroller.finishPullToRefresh();
        }, 1000)
      },
      infinite() {
        this.page++;
        this.init(this.addGameList)
        setTimeout(() => {
          this.$refs.search_game_scroller.finishInfinite(2);
        }, 1000);
      }
    },
    created() {
      this.init(this.handleGameList);
    },
    beforeRouteUpdate(to,from,next){
      if(!sessionStorage.searchGamePositon || from.params.keyword != to.params.keyword){//判断是否有缓存
        sessionStorage.searchGamePositon = 0;
        this.$refs.search_game_scroller.scrollTo(0, 0, false);
        next();
      }else{
        next(vm => {
            if(vm && vm.$refs.search_game_scroller){
              setTimeout(function () {
                vm.$refs.search_game_scroller.scrollTo(0, sessionStorage.searchGamePositon, false);
              },0)//同步转异步操作
            }
        })
      }
    },
    beforeRouteEnter(to,from,next){
      if(!sessionStorage.searchGamePositon || from.params.keyword != to.params.keyword && !(/^\/detail/.test(from.path))){//判断是否有缓存
        sessionStorage.searchGamePositon = '';
        // sessionStorage.setItem("TO_RESULT_KEY",to.params.keyword)
        next();
      }else{
        next(vm => {
            if(vm && vm.$refs.search_game_scroller){
              setTimeout(function () {
                vm.$refs.search_game_scroller.scrollTo(0, sessionStorage.searchGamePositon, false);
              },0)//同步转异步操作
            }
        })
      }
    },
    beforeRouteLeave(to,from,next){//记录离开时的位置
      sessionStorage.searchGamePositon = this.$refs.search_game_scroller && this.$refs.search_game_scroller.getPosition() && this.$refs.search_game_scroller.getPosition().top;
      next()
    },
    components: {
      GameList,
    }
  }
</script>
<style lang="less">
  @import './searchgame.less';
</style>

