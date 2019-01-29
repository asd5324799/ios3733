<template>
    <div class="today">
        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="today_scroller" refreshText="3733盒子刷新">
            <GameList :list="todayList" :type="listType" />
        </scroller>
    </div>
</template>
<script>
    import GameList from '@/components/gamelist/gamelist.vue';
    export default {
        name:'Today',
        data() {
            return {
                listType:3,
                todayList: [],
                page:1
            }
        },
        methods: {
            init(theMethod){
                this.$axios({
                    method: "post",
                    url: "/api/newgame/index",
                    data:this.$qs.stringify({
                        page:this.page,
                        keyword:this.$route.params.keyword,
                        order:101
                    })
                }).then(theMethod)
            },
            handleGameList(res) {
                this.todayList = res.data.list;
            },
            addGameList(res) {
                this.todayList = this.todayList.concat(res.data.list);
            },
            refresh() {
        setTimeout(() => {
          this.page = 1;
          this.init(this.handleGameList)
          this.$refs.today_scroller.finishPullToRefresh();
        }, 1000)
      },
      infinite() {
        this.page++;
        this.init(this.addGameList)
        setTimeout(() =>{
          this.$refs.today_scroller.finishInfinite(2);
        },1000);
      }
        },
        created() {
            this.init(this.handleGameList)
        },
        beforeRouteEnter(to, from, next) {
            if (!sessionStorage.todayPositon) { //当前页面刷新不需要切换位置
                sessionStorage.todayPositon = '';
                next();
            } else {
                next(vm => {
                if (vm && vm.$refs.today_scroller) {
                    setTimeout(function() {
                    vm.$refs.today_scroller.scrollTo(0, sessionStorage.todayPositon, false);
                    }, 0) //同步转异步操作
                }
                })
            }
        },
        beforeRouteLeave(to, from, next) { //记录离开时的位置
            sessionStorage.todayPositon = this.$refs.today_scroller && this.$refs.today_scroller.getPosition() && this.$refs.today_scroller.getPosition().top;
            next()
        },
        components: {
            GameList,
        }
    }
</script>
<style lang="less">
    @import './today.less';
</style>
