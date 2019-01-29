<template>
    <div class="sell-well">
        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="sell_well_scroller" refreshText="刷新">
            <Billboard :top3="sellWellTop3" :billboardTitle="sellWellTitle" :bgClass="sellWellBg"></Billboard>
            <GameList :list="sellWellList" :type="listType" />
        </scroller>
    </div>
</template>
<script>
    import GameList from '@/components/gamelist/gamelist.vue';
    import Billboard from '@/components/billboard/billboard.vue';
    export default {
        name:'SellWell',
        data() {
            return {
                sellWellTitle:'畅销榜',
                sellWellBg:'sellwell-billboard',
                listType:2,
                sellWellList: [],
                sellWellTop3:[],
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
                        order:102
                    })
                }).then(theMethod)
            },
            handleGameList(res) {
                this.sellWellList = res.data.list.slice(3);
                this.sellWellTop3 = res.data.list.slice(0,3);
            },
            addGameList(res) {
                this.sellWellList = this.sellWellList.concat(res.data.list);
            },
            refresh() {
                setTimeout(() => {
                this.page = 1;
                this.init(this.handleGameList)
                this.$refs.sell_well_scroller.finishPullToRefresh();
                }, 1000)
            },
            infinite() {
                this.page++;
                this.init(this.addGameList)
                setTimeout(() =>{
                this.$refs.sell_well_scroller.finishInfinite(2);
                },1000);
            }
        },
        created() {
            this.init(this.handleGameList)
        },
        beforeRouteEnter(to, from, next) {
            if (!sessionStorage.sellWellPositon) { //当前页面刷新不需要切换位置
                sessionStorage.sellWellPositon = '';
                next();
            } else {
                next(vm => {
                if (vm && vm.$refs.sell_well_scroller) {
                    setTimeout(function() {
                    vm.$refs.sell_well_scroller.scrollTo(0, sessionStorage.sellWellPositon, false);
                    }, 0) //同步转异步操作
                }
                })
            }
        },
        beforeRouteLeave(to, from, next) { //记录离开时的位置
            sessionStorage.sellWellPositon = this.$refs.sell_well_scroller && this.$refs.sell_well_scroller.getPosition() && this.$refs.sell_well_scroller.getPosition().top;
            next()
        },
        components: {
            GameList,
            Billboard,
        }
    }
</script>
<style lang="less">
    @import './sellwell.less';
</style>
