<template>
    <div class="kaifu">
        <TopBar />
        <div class="top-nav">
            <router-link :to="{name:'Today'}">今日开服<span></span></router-link>
            <router-link :to="{name:'Will'}">即将开服<span></span></router-link>
            <router-link :to="{name:'Already'}">已开新服<span></span></router-link>
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
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
</style>
