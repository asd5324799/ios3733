<template>
    <div class="download">
        <scroller 
          :on-infinite="infinite" 
          :on-refresh="refresh" 
          ref="download_scroller" 
          refreshText="3733盒子刷新">
            <Billboard :top3="downloadTop3" :billboardTitle="downloadTitle" :bgClass="downloadBg"></Billboard>
            <GameList :list="downloadList" :type="listType" />
        </scroller>
    </div>
</template>
<script>
    import GameList from '@/components/gamelist/gamelist.vue';
    import Billboard from '@/components/billboard/billboard.vue';
    export default {
        name:'Download',
        data() {
            return {
                downloadTitle:'下载榜',
                downloadBg:"download-billboard",
                listType:2,
                downloadList: [],
                downloadTop3:[],
                page:1

            }
        },
        methods: {
            init(theMethod){
                this.$axios({
                    method:"POST",
                    url:"/api/game/index",
                    data:{
                        page:this.page,
                        keyword:this.$route.params.keyword,
                        order:103
                    }
                }).then(theMethod)
            },
            handleGameList(res) {
                this.downloadList = res.data.list.slice(3);
                this.downloadTop3 = res.data.list.slice(0,3);
            },
            addGameList(res) {
                this.downloadList = this.downloadList.concat(res.data.list);
            },
            refresh() {
              setTimeout(() => {
              this.page = 1;
              this.init(this.handleGameList)
              this.$refs.download_scroller.finishPullToRefresh();
              }, 1000)
            },
            infinite() {
                this.page++;
                this.init(this.addGameList)
                setTimeout(() =>{
                this.$refs.download_scroller.finishInfinite(2);
                },500);
            }
        },
        created() {
            this.init(this.handleGameList);
        },
        beforeRouteEnter(to, from, next) {
          if (!sessionStorage.downloadPositon) { //当前页面刷新不需要切换位置
            sessionStorage.downloadPositon = '';
            next();
          } else {
            next(vm => {
              if (vm && vm.$refs.download_scroller) {
                setTimeout(function() {
                  vm.$refs.download_scroller.scrollTo(0, sessionStorage.downloadPositon, false);
                }, -1000) //同步转异步操作
              }
            })
          }
        },
        beforeRouteLeave(to, from, next) { //记录离开时的位置
          sessionStorage.downloadPositon = this.$refs.download_scroller && this.$refs.download_scroller.getPosition() && this.$refs.download_scroller.getPosition().top;
          next()
        },
        components: {
            GameList,
            Billboard,
        }
    }
</script>
<style lang="less" scoped>
    @import './download.less';
</style>
