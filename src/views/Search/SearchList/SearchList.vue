<template>
    <div class="search-list">
        <div class="page-nav">
            <div class="nav-item" :class="isCurrent?'active':''" @click="toGame">游戏</div>
            <div class="nav-item" :class="!isCurrent?'active':''" @click="toGift">礼包</div>
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
                // isCurrent:true,
            }
        },
        computed:{
            searchKey:function(){
                return this.$route.params.keyword;
            },
            isCurrent:function(){
                if (/\/searchgame/.test(this.$route.path)) {
                    return true;
                }else if(/\/searchgift/.test(this.$route.path)){
                    return false;
                }
            }
        },
        methods: {
            back(){
                this.$router.push({name:"Search"});
            },
            toGame(){
                // this.isCurrent = !this.isCurrent;
                this.$router.replace(
                    {name:"SearchGame",params:{keyword:this.searchKey}}
                )
            },
            toGift(){
                // this.isCurrent = !this.isCurrent;
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
