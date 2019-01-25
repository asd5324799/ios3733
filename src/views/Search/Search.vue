<template>
    <div class="search">
        <div class="top-search">
            <span class="back-btn" @click="back"></span>
            <div class="search-board">
                <i class="search-icon"></i>
                <input type="text" placeholder="热搜" v-model.trim="searchKey"/>
                <i class="clear-key" @click="clearKey" v-show="clearKeyShow"></i>
            </div>
            <div class="search-btn" @click="keySearch(searchKey)">搜索</div>
        </div>
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
                    <li class="history-item" v-for="(item,index) of searchHistoryList" :key="index">
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
                searchKey:"",
                clearHistoryAllShow:false,
                searchHistoryList:[],
                clearKeyShow:false,
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
        methods: {
            back(){
                var url = sessionStorage.getItem("NO_SEARCH_PATH");
                this.$router.push(url);
            },
            changeQueue(){
                this.queue = !this.queue;
            },
            clearKey(){
                this.searchKey="";
            },
            clearHistory(index){
                //删除一个历史记录
                this.searchHistoryList.splice(index,1); 
                localStorage.setItem('SEARCH_KEY',JSON.stringify(this.searchHistoryList));//更新搜索历史数组
            },
            clearHistoryAll(){
                // 删除所有历史记录
                this.searchHistoryList.splice(0,this.searchHistoryList.length);
                this.clearHistoryAllShow = false;
                localStorage.setItem('SEARCH_KEY',JSON.stringify(this.searchHistoryList));//更新搜索历史数组
            },
            keySearch(search_key){
                //搜索路由传关键字
                if(search_key != ""){
                    sessionStorage.setItem("SEARCH_KEYWORD",this.searchKey);
                this.$router.push({
                    name:"SearchGame",
                    params:{keyword:search_key}
                })
                
                //创建一个存放关键字的对象
                var obj = {
                    title:search_key
                }
                this.searchHistoryList = this.uniq(this.searchHistoryList);
                this.searchHistoryList.push(obj);
                //调用去重加倒序方法
                var newArr = this.uniq(this.searchHistoryList);
                this.searchHistoryList = newArr;
                
                localStorage.setItem('SEARCH_KEY',JSON.stringify(this.searchHistoryList));//更新搜索历史数组
                }
                
            },
            uniq(arr){
                //去重加倒序
                var hash=[];
                for (var i = 0; i < arr.length; i++) {
                    for (var j = i+1; j < arr.length; j++) {
                    if(arr[i].title===arr[j].title){
                        ++i;
                    }
                    }
                    hash.push(arr[i]);
                }
                return hash.reverse();
            },
            visitor(key_index,keyword){//热门搜索点击函数(热门标签序号,关键字)
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
            $route(to,from){
                if(localStorage.getItem("SEARCH_KEY")){//搜索历史的数组
                    this.searchHistoryList = JSON.parse(localStorage.getItem("SEARCH_KEY"));
                    
                }
                if(localStorage.getItem("TO_RESULT_KEY")){//搜索历史的数组
                    this.searchKey = localStorage.getItem("TO_RESULT_KEY");
                    
                }

            },
            searchHistoryList(){
                if(this.searchHistoryList == ""){
                    this.clearHistoryAllShow = false;
                }else{
                    this.clearHistoryAllShow = true;
                }
            },
            searchKey(){
                if(this.searchKey == ""){
                    this.clearKeyShow = false;
                }else{
                    this.clearKeyShow = true;
                }
            }
        },
        mounted() {
            var arr = localStorage.getItem('SEARCH_KEY');
            if(arr){
                this.searchHistoryList = JSON.parse(arr);
            }
            if(this.searchHistoryList.length != 0){
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
<style lang="less">
    @import './search.less';
</style>
