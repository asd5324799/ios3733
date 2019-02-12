<template>
    <div class="Search-index">
        <div class="hot-search">
            <div class="section-title">
                <span class="hot-title">热门搜索</span>
                <span class="hot-change" @click="changeQueue">换一批<i></i></span>
            </div>
            <ul class="hot-game-list" v-show="queue">
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">大圣归来星耀版</p>
                    </router-link>
                </li>
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">西游</p>
                    </router-link>
                </li>
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">三国</p>
                    </router-link>
                </li>
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">大圣归来</p>
                    </router-link>
                </li>
            </ul>
            <ul class="hot-game-list" v-show="!queue">
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">三国</p>
                    </router-link>
                </li>
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">大圣归来星耀版</p>
                    </router-link>
                </li>
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">大圣归来</p>
                    </router-link>
                </li>
                <li class="hot-game-item">
                    <router-link to="/detail">
                        <div class="hot-game-pic">
                            <img src="http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png" alt="">
                        </div>
                        <p class="hot-game-title">旅行青蛙</p>
                    </router-link>
                </li>
            </ul>
            <ul class="tag-list">
                <li class="tag-item" v-for="(item,index) of tagItemList" :key="index">
                    <span :class="{visited:index==isKeyActive}" @click="visitor(index,item.tagItemName)">{{item.tagItemName}}</span>
                </li>
            </ul>
            
        </div>
        <div class="search-history">
                <div class="section-title">
                    <span class="history-title">搜索历史</span>
                </div>
                <ul class="history-list">
                    <li class="history-item" v-for="(item,index) of historyList" :key="index">
                        <router-link :to="{name:'SearchGame',params:{keyword:item.title}}">
                            <i></i>{{item.title}}
                        </router-link>
                        <span class="clear-history" @click="clearHistory(index)"></span>
                    </li>
                </ul>
                <div v-show="clearHistoryAllShow" class="clear-history-all" @click="clearHistoryAll">清除搜索历史</div>
            </div>
    </div>
</template>
<script>
    export default {
        name:"Search",
        data() {
            return {
                clearHistoryAllShow:false,
                searchHistoryList:[],
                isKeyActive:0,
                queue:true,
                tagItemList:[
                    {
                        tagItemName:"忍者"
                    },
                    {
                        tagItemName:"梦幻"
                    },
                    {
                        tagItemName:"回合"
                    },
                    {
                        tagItemName:"爆衣"
                    },
                    {
                        tagItemName:"旅行青蛙"
                    },
                    {
                        tagItemName:"西游"
                    },
                    {
                        tagItemName:"挂机"
                    },
                    {
                        tagItemName:"三国"
                    }
                ]
            }
        },
        props:['historyList'],
        methods: {
            //切换热门游戏搜索
            changeQueue(){
                this.queue = !this.queue;
            },
            //删除一个历史记录
            clearHistory(index){
                this.historyList.splice(index,1); 
                localStorage.setItem('SEARCH_KEY',JSON.stringify(this.historyList));//更新搜索历史数组
            },
            // 删除所有历史记录
            clearHistoryAll(){
                this.historyList.splice(0,this.historyList.length);
                this.clearHistoryAllShow = false;
                localStorage.setItem('SEARCH_KEY',JSON.stringify(this.historyList));//更新搜索历史数组
            },
            //热门标签搜索点击函数(热门标签序号,关键字)
            visitor(key_index,keyword){
                this.isKeyActive = key_index;
                this.searchKey = keyword;
                sessionStorage.setItem("SEARCH_KEYWORD",keyword);
                this.$router.push({
                    name:"SearchGame",
                    params:{keyword:keyword}
                })
                localStorage.setItem('ACTIVE_INDEX',key_index);//存储热门标签的index
            }
        },
        watch:{
            
            historyList(){
                if(this.historyList == ""){
                    this.clearHistoryAllShow = false;
                }else{
                    this.clearHistoryAllShow = true;
                }
            },
        },
        mounted() {
            if(this.historyList.length != 0){
                this.clearHistoryAllShow = true;
            }
            var str = localStorage.getItem('ACTIVE_INDEX');
            if(str){
                this.isKeyActive = Number(str);
            }
        },
        beforeRouteEnter(to, from, next){
            next(vm => {
                if(/\/searchlist/.test(from.path)){
                    vm.searchKey = sessionStorage.getItem("TO_RESULT_KEY");
                }
            })
        },
        beforeRouteLeave(to, from, next){
            if(/\/searchlist/.test(to.path)){
                sessionStorage.setItem("TO_RESULT_KEY",to.params.keyword);
            }
            next();
            
        },
        components: {
        }
    }
</script>
<style lang="less" scoped>
    @import './searchindex.less';
</style>
