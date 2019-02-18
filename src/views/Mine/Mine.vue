<template>
    <div class="mine">
        <TopBar />
        <div class="mine-content">敬请期待</div>
        <NavCom :pageIndex="3" />
    </div>
</template>
<script>
    import NavCom from '@/components/navcom/navcom.vue';
    export default {
        data() {
            return {
            }
        },
        components: {
            NavCom,
        }
    }
</script>
<style lang="less" scoped>
    @import './Mine.less';
</style>

