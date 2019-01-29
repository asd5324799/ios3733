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
        <keep-alive>
            <router-view :historyList="searchHistoryList" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view :historyList="searchHistoryList" v-if="!$route.meta.keepAlive" />
    </div>
</template>
<script>
    export default {
        name:"Search",
        data() {
            return {
                isBack:true,
                searchKey:"",
                clearHistoryAllShow:false,
                searchHistoryList:[],
                clearKeyShow:false,
                isKeyActive:0,
                queue:true,
            }
        },
        methods: {
            back(){
                //判断当前路由的位置设置返回方式
                if(this.$route.meta.backGrade == 0){
                    var url = sessionStorage.getItem("NO_SEARCH_PATH");
                    this.$router.push(url);
                }else{
                    this.$router.go(-1);
                }
            },
            clearKey(){
                this.searchKey="";
            },
            keySearch(search_key){
                //搜索路由传关键字
                if(search_key != ""){
                    sessionStorage.searchGamePositon = 0;
                    sessionStorage.searchGiftPositon = 0;
                    sessionStorage.setItem("SEARCH_KEYWORD",this.searchKey);
                    //是否要记住路由
                    if(this.$route.meta.backGrade == 2){
                        this.$router.replace({
                            name:"SearchGame",
                            params:{keyword:search_key}
                        })
                    }else{
                        this.$router.push({
                            name:"SearchGame",
                            params:{keyword:search_key}
                        })
                    }
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
        },
        watch:{
            $route(){
                if(localStorage.getItem("SEARCH_KEY")){//搜索历史的数组
                    this.searchHistoryList = JSON.parse(localStorage.getItem("SEARCH_KEY"));
                }
                if(localStorage.getItem("TO_RESULT_KEY")){//搜索历史的数组
                    this.searchKey = localStorage.getItem("TO_RESULT_KEY");
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
        beforeRouteUpdate(to,from,next){
            if(/\/searchgame/.test(to.path) && from.params.keyword != to.params.keyword){
                this.searchKey = to.params.keyword;
            }
            next();
        },
        mounted() {
            var arr = localStorage.getItem('SEARCH_KEY');//获取搜索历史列表
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
    }
</script>
<style lang="less">
    @import './search.less';
</style>
