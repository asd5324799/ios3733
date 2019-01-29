<template>
    <div class="already">
        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="already_scroller" refreshText="^@^">
            <GameList :list="alreadyList" :type="listType" />
        </scroller>
    </div>
</template>
<script>
    import GameList from '@/components/gamelist/gamelist.vue';
    export default {
        name:'Already',
        data() {
            return {
                listType:3,
                alreadyList: [],
                page:1
            }
        },
        
        methods: {
            init(theMethod){
                this.$axios({
                    method: "post",
                    url: "/api/newgame/index",
                    data:{
                        page:this.page,
                        keyword:this.$route.params.keyword,
                        order:101
                    }
                }).then(theMethod)
            },
            handleGameList(res) {
                this.alreadyList = res.data.list;
            },
            addGameList(res) {
                this.alreadyList = this.alreadyList.concat(res.data.list);
            },
            refresh() {
        setTimeout(() => {
          this.page = 1;
          this.init(this.handleGameList)
          this.$refs.already_scroller.finishPullToRefresh();
        }, 1000)
      },
      infinite() {
        this.page++;
        this.init(this.addGameList)
        setTimeout(() =>{
          this.$refs.already_scroller.finishInfinite(2);
        },1000);
      }
        },
        mounted() {
            this.init(this.handleGameList)
        },
        beforeRouteEnter(to, from, next) {
      if (!sessionStorage.alreadyPositon) { //当前页面刷新不需要切换位置
        sessionStorage.alreadyPositon = '';
        next();
      } else {
        next(vm => {
          if (vm && vm.$refs.already_scroller) {
            setTimeout(function() {
              vm.$refs.already_scroller.scrollTo(0, sessionStorage.alreadyPositon, false);
            }, 0) //同步转异步操作
          }
        })
      }
    },
    beforeRouteLeave(to, from, next) { //记录离开时的位置
      sessionStorage.alreadyPositon = this.$refs.already_scroller && this.$refs.already_scroller.getPosition() && this.$refs.already_scroller.getPosition().top;
      next()
    },
        components: {
            GameList,
        }
    }
</script>
<style lang="less">
    @import './already.less';
</style>
