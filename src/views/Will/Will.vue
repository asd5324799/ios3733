<template>
    <div class="will">
        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="will_scroller" refreshText="3733盒子刷新">
            <GameList :list="willList" :type="listType" />
        </scroller>
    </div>
</template>
<script>
    import GameList from '@/components/gamelist/gamelist.vue';
    export default {
        name:'Will',
        data() {
            return {
                listType:3,
                willList: []
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
                this.willList = res.data.list;
            },
            addGameList(res) {
                this.willList = this.willList.concat(res.data.list);
            },
            refresh() {
                setTimeout(() => {
                this.page = 1;
                this.init(this.handleGameList)
                this.$refs.will_scroller.finishPullToRefresh();
                }, 1000)
            },
            infinite() {
                this.page++;
                this.init(this.addGameList)
                setTimeout(() =>{
                this.$refs.will_scroller.finishInfinite(2);
                },1000);
            }
        },
        created() {
            this.init(this.handleGameList)
        },
        beforeRouteEnter(to, from, next) {
            if (!sessionStorage.willPositon) { //当前页面刷新不需要切换位置
                sessionStorage.willPositon = '';
                next();
            } else {
                next(vm => {
                if (vm && vm.$refs.will_scroller) {
                    setTimeout(function() {
                    vm.$refs.will_scroller.scrollTo(0, sessionStorage.willPositon, false);
                    }, 0) //同步转异步操作
                }
                })
            }
        },
        beforeRouteLeave(to, from, next) { //记录离开时的位置
            sessionStorage.willPositon = this.$refs.will_scroller && this.$refs.will_scroller.getPosition() && this.$refs.will_scroller.getPosition().top;
            next()
        },
        components: {
            GameList,
        }
    }
</script>
<style lang="less">
    @import './will.less';
</style>
