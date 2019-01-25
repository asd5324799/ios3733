<template>
    <div class="rank">
        <TopBar />
        <div class="top-nav">
            <router-link :to="{name:'NewGame'}">新游榜<span></span></router-link>
            <router-link :to="{name:'SellWell'}">畅销榜<span></span></router-link>
            <router-link :to="{name:'Download'}">下载榜<span></span></router-link>
        </div>
        <div class="main">
        <transition :name="transitionName" >
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="appView" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="appView" />
        </transition>
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
                index:1,
                transitionName: 'slide-left'
            }
        },
        watch: {
            $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之
                if (to.meta.index > from.meta.index) {
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        },
        components: {
            NavCom,
            TopBar
        }
    }
</script>
<style lang="less">
    @import './rank.less';
    .main{
        position: relative;
        height: 100%;
        overflow: hidden;
        background: #fff;
    }
    .appView{
        background: #fff;
    }
    /*路由切换动画*/
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
    will-change: transform;
    transition: all 300ms ease-out;
    position: absolute;
    }
    .slide-right-enter {
    //   opacity: 0;
    transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
    //   opacity: 0.5;
    transform: translate3d(60%, 0, 0);
    }
    .slide-left-enter {
    //   opacity: 0;
    transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
    //   opacity: 0.5;
    transform: translate3d(-60%, 0, 0);
    }
</style>
