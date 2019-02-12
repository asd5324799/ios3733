<template>
    <div class="mine">
        <TopBar />
        <div class="mine-content">敬请期待</div>
        <NavCom :pageIndex="index" />
    </div>
</template>
<script>
    import TopBar from '@/components/topbar/topbar.vue';
    import NavCom from '@/components/navcom/navcom.vue';
    // import TabSlider from 'tab-slider'
    export default {
        data() {
            return {
                index:3,
            }
        },
        components: {
            NavCom,
            TopBar,
            // TabSlider
        }
    }
</script>
<style lang="less" scoped>
    @import './Mine.less';
</style>

