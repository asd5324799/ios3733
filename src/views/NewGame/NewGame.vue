<template>
    <div class="new-game">
        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="new_game_scroller" refreshText="">
            <Billboard :top3="newGameTop3" :billboardTitle="newGameTitle" :bgClass="newGameBg"></Billboard>
            <GameList :list="newGameList" :type="listType" />
        </scroller>
    </div>
</template>
<script>
    import GameList from '@/components/gamelist/gamelist.vue';
    import Billboard from '@/components/billboard/billboard.vue';
    export default {
        name:'NewGame',
        data() {
            return {
                newGameTitle:'新游榜',
                newGameBg:'newgame-billboard',
                listType:2,
                newGameList: [],
                newGameTop3:[],
            }
        },
        methods: {
            init(theMethod){
                this.$axios({
                    method:"post",
                    url:"/api/newgame/index",
                    data:this.$qs.stringify({
                        page:this.page,
                        keyword:this.$route.params.keyword,
                        order:101
                    })
                }).then(theMethod)
            },
            handleGameList(res) {
                this.newGameList = res.data.list.slice(3);
                this.newGameTop3 = res.data.list.slice(0,3);
            },
            addGameList(res) {
                this.newGameList = this.newGameList.concat(res.data.list);
            },
            refresh() {
                
        setTimeout(() => {
          this.page = 1;
          this.init(this.handleGameList);
          this.$refs.new_game_scroller.finishPullToRefresh();
        }, 1000)
      },
      infinite() {
        this.page++;
        this.init(this.addGameList);
        setTimeout(() =>{
          this.$refs.new_game_scroller.finishInfinite(2);
        },1000);
      }
        },
        created() {
            this.init(this.handleGameList)
        },
        beforeRouteEnter(to, from, next) {
            if (!sessionStorage.newGamePositon) { //当前页面刷新不需要切换位置
                sessionStorage.newGamePositon = '';
                next();
            } else {
                next(vm => {
                if (vm && vm.$refs.new_game_scroller) {
                    setTimeout(function() {
                    vm.$refs.new_game_scroller.scrollTo(0, sessionStorage.newGamePositon, false);
                    }, 0) //同步转异步操作
                }
                })
            }
            },
            beforeRouteLeave(to, from, next) { //记录离开时的位置
            sessionStorage.newGamePositon = this.$refs.new_game_scroller && this.$refs.new_game_scroller.getPosition() && this.$refs.new_game_scroller.getPosition().top;
            next()
        },
        components: {
            GameList,
            Billboard,
        }
    }
</script>
<style lang="less">
    @import './newgame.less';
</style>
