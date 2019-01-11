<template>
    <div class="rank">
        <div class="swiper-pagination" id="rank-pag"></div>
        <div class="swiper-container" id="rank-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide new-game">
                    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller">
                        <Billboard :top3="newgameTop3"></Billboard>
                        <GameInfo v-for="(list, index) of qualityFirstList" :key="index" :list="list">
                        </GameInfo>
                    </scroller>
                </div>
                <div class="swiper-slide">
                    <Billboard></Billboard>
                    <GameInfo v-for="(list, index) of qualityFirstList" :key="index" :list="list">
                    </GameInfo>
                </div>
                <div class="swiper-slide">
                    <Billboard></Billboard>
                    <GameInfo v-for="(list, index) of qualityFirstList" :key="index" :list="list">
                    </GameInfo>
                </div>
            </div>
        </div>
        <NavCom />
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import NavCom from '@/components/navcom/navcom.vue';
    import GameInfo from '@/components/gameinfo/gameinfo.vue';
    import Billboard from '@/components/billboard/billboard.vue';
    export default {
        data() {
            return {
                qualityRecommendList: [],
                qualityFirstList: [],
                newgameTop3:[]
            }
        },
        methods: {
            handleGameList(res) {
                // console.log(res);
                this.qualityRecommendList = res.data.game_list;
                this.qualityFirstList = res.data.list;
                this.newGameTop3 = res.data.list
            },
            infinite(done) { //上拉加载
                if (this.nodata) {
                    setTimeout(() => {
                        this.$refs.my_scroller.finishinfinite(2);
                    })
                    return;
                }
                let self = this;
                let i = 1;
                let start = this.list.length;
                setTimeout(() => {
                    for (var k = 0; k < 9; k++) {
                        self.list.push(k)
                    }
                    i++;
                    if (start / i < 9) {
                        self.nodata = "没有更多数据"
                    }
                    self.$refs.my_scroller.resize();
                    done()
                }, 1500)
            },
            refresh: function() { //下拉刷新
                // console.log('refresh')
                this.timeout = setTimeout(() => {
                    this.$refs.my_scroller.finishpulltorefresh()
                }, 1500)
            }
        },
        mounted() {
            new Swiper('#rank-swiper', {
                speed: 300,
                loop: false,
                resistanceRatio : 0,
                pagination: {
                    el: '#rank-pag',
                    // bulletClass : 'rank-bullet',
                    // bulletActiveClass: 'rank-bullet-active',
                    clickable: true,
                    renderBullet: function(index, className) {
                        var text = '';
                        switch (index) {
                            case 0:
                                text = '新游榜<span></span>';
                                break;
                            case 1:
                                text = '畅销榜<span></span>';
                                break;
                            case 2:
                                text = '下载榜<span></span>';
                                break;
                        }
                        return '<p class="' + className + '">' + text + '</p>';
                    },
                },
                observer: true,
                observeParents: true,
            });
            this.$axios({
                method:"post",
                url:"/api/game/index",
                data:{
                    order:101
                }
            }).then(this.handleGameList)
            // this.$axios.post('/api/game/index',{
            //     order
            // })
                // .then()
        },
        components: {
            GameInfo,
            Billboard,
            NavCom
        }
    }
</script>
<style lang="less">
    @import '../../../node_modules/swiper/dist/css/swiper.min.css';
    @import './rank.less';
</style>
