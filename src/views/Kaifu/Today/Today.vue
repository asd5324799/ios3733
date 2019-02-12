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
                    method: "POST",
                    url: "http://api2.c3733.com/api/server/index",
                    data:this.$qs.stringify({
                        uuid: "ffffffff-1234-1234-1234-123456789012",
                        from: "212",
                        page:this.page,
                        type:1
                    })
                }).then(theMethod)
            },
            handleGameList(res) {
                var arr = [];
                for(let item of res.data){
                    arr.push(item.game);
                }
                this.todayList = arr;
            },
            addGameList(res) {
                var arr = [];
                for(let item of res.data){
                    arr.push(item.game);
                }
                this.todayList = this.todayList.concat(arr);
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
        },500);
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
<style lang="less" scoped>
    @import './today.less';
</style>
