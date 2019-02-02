<template>
    <div class="kaifu">
        <TopBar />
        <div class="top-nav">
            <router-link :to="{name:'Today'}">今日开服<span></span></router-link>
            <router-link :to="{name:'Will'}">即将开服<span></span></router-link>
            <router-link :to="{name:'Already'}">已开新服<span></span></router-link>
        </div>
        <div class="main">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="appView" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="appView" />
        </div>
        <NavCom :pageIndex="index" />
    </div>
</template>
<script>
    import TopBar from '@/components/topbar/topbar.vue';
    import NavCom from '@/components/navcom/navcom.vue';
    export default {
        data() {
            return {
                index:2,
            }
        },
        components: {
            NavCom,
            TopBar
        }
    }
</script>
<style lang="less">
    @import './kaifu.less';
    .main{
        position: relative;
        height: 100%;
        overflow: hidden;
        background: #fff;
    }
</style>
