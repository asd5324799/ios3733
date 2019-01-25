<template>
    <div class="search-list">
        <div class="top-search">
            <span class="back-btn" @click="back"></span>
            <div class="search-board">
                <i class="search-icon"></i>
                <input type="text" placeholder="热搜" v-model.trim="searchKey"/>
                <i class="clear-key" @click="clearKey" v-show="clearKeyShow"></i>
            </div>
            <div class="search-btn" @click="keySearch(searchKey)">搜索</div>
        </div>
        <div class="page-nav">
            <router-link :to="{name:'SearchGame',params:{keyword:searchKey}}">游戏</router-link>
            <router-link :to="{name:'SearchGift',params:{keyword:searchKey}}">礼包</router-link>
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>
<script>
    export default {
        name:"SearchList",
        data() {
            return {
                searchKey:this.$route.params.keyword,
                searchHistoryList:[],
                clearKeyShow:false,
            }
        },
        watch: {
            $route(to,from){
                // this.searchKey = sessionStorage.getItem("SEARCH_KEYWORD");
                if(to.params.keyword){
                    this.searchKey = to.params.keyword;
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
        methods: {
            back(){
                this.$router.push({name:"Search"});
            },
            clearKey(){
                this.searchKey="";
            },
            keySearch(search_key){
                this.searchKey = search_key;
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
                var arr = JSON.parse(localStorage.getItem('SEARCH_KEY'));
                arr = this.uniq(arr);
                arr.push(obj);
                //调用去重加倒序方法
                var newArr = this.uniq(arr);
                
                localStorage.setItem('SEARCH_KEY',JSON.stringify(newArr));
                sessionStorage.searchGamePositon = '';
                    sessionStorage.searchGIftPositon = '';
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
        mounted() {
        },
        components: {
        }
    }
</script>
<style lang="less">
    @import './searchlist.less';
</style>
