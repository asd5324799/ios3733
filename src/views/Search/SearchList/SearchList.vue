<template>
    <div class="search-list">
        <div class="page-nav">
            <div class="nav-item" @click="toGame" exact :to="{name:'SearchGame',params:{keyword:searchKey}}">游戏</div>
            <div class="nav-item" @click="toGift" exact :to="{name:'SearchGift',params:{keyword:searchKey}}">礼包</div>
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
                clearKeyShow:false,
            }
        },
        computed:{
            searchKey:function(){
                return this.$route.params.keyword;
            }
        },
        methods: {
            back(){
                this.$router.push({name:"Search"});
            },
            toGame(){
                this.$router.replace(
                    {name:"SearchGame",params:{keyword:this.searchKey}}
                )
            },
            toGift(){
                this.$router.replace(
                    {name:"SearchGift",params:{keyword:this.searchKey}}
                )
            }
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
