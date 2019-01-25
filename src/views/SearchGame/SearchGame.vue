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
        text: '',//测试
        searchGameList: [],//搜索结果列表
        page: 1 //初始页码
      }
    },
    watch: {
      $route(to,from){
        // var fromKey = sessionStorage.getItem("REMBENBER_KEYWORD");
        this.text = to.params.keyword;
        //如果离开的params不同,初始化axios
        if(to.params.keyword != from.params.keyword){
          this.init();
          sessionStorage.searchGamePositon=""
          sessionStorage.searchGiftPositon=""
        }
        
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
    mounted() {
    },
    beforeRouteUpdate(to,from,next){
      if(!localStorage.searchGamePositon || from.params.keyword != to.params.keyword){//判断是否有缓存
        localStorage.searchGamePositon = '';
        // localStorage.setItem("TO_RESULT_KEY",to.params.keyword)
        next();
      }else{
        next(vm => {
            if(vm && vm.$refs.search_game_scroller){
              setTimeout(function () {
                vm.$refs.search_game_scroller.scrollTo(0, localStorage.searchGamePositon, false);
              },0)//同步转异步操作
            }
        })
      }
    },
    beforeRouteEnter(to,from,next){
      if(!localStorage.searchGamePositon || from.params.keyword != to.params.keyword && !(/^\/detail/.test(from.path))){//判断是否有缓存
        localStorage.searchGamePositon = '';
        // localStorage.setItem("TO_RESULT_KEY",to.params.keyword)
        next();
      }else{
        next(vm => {
            if(vm && vm.$refs.search_game_scroller){
              setTimeout(function () {
                vm.$refs.search_game_scroller.scrollTo(0, localStorage.searchGamePositon, false);
              },0)//同步转异步操作
            }
        })
      }
    },
    beforeRouteLeave(to,from,next){//记录离开时的位置
      localStorage.searchGamePositon = this.$refs.search_game_scroller && this.$refs.search_game_scroller.getPosition() && this.$refs.search_game_scroller.getPosition().top;
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

