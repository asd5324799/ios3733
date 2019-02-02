<template>
    <div class="topic">
        <div class="top-green-bar">
            <span class="back-btn" @click="back"></span>
            专题
        </div>
        <div class="topic-box">
        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="topic_scroller" refreshText="刷新">
            <ul class="topic-list">
                <li class="topic-item" v-for="(item,index) of topicList" :key="index">
                    <router-link :to="{name:'TopicList',params:{topicId:item.info.id}}">
                        <img :src="item.info.titlepic" alt="">
                    </router-link>
                </li>
            </ul>
        </scroller>
        </div>
    </div>
</template>
<script>
    export default {
        name:"Topic",
        data() {
            return {
                topicList:[],
                page:0
            }
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
            init(theMethod){
                this.$axios({
                    method: "post",
                    url: "/api/subject/index",
                    data: this.$qs.stringify({
                        uuid: "ffffffff-1234-1234-1234-123456789012",
                        from: "212",
                        page: this.page,
                        listRows: "20"
                    })
                }).then(theMethod)
            },
            handleTopicList(res){
                this.topicList = res.data;
            },
            addTopicList(res){
                this.topicList = this.topicList.concat(res.data);
            },
            refresh() {
                setTimeout(() => {
                this.page = 1;
                this.init(this.handleTopicList)
                this.$refs.topic_scroller.finishPullToRefresh();
                }, 1000)
            },
            infinite() {
                this.page++;
                this.init(this.addTopicList)
                setTimeout(() => {
                this.$refs.topic_scroller.finishInfinite(2);
                }, 1000);
            }
        },
        created(){
            this.init();
        },
        beforeRouteEnter(to, from, next) {
            if (!sessionStorage.topicPositon) { //当前页面刷新不需要切换位置
                sessionStorage.topicPositon = '';
                next();
            } else {
                next(vm => {
                if (vm && vm.$refs.topic_scroller) {
                    setTimeout(function() {
                    vm.$refs.topic_scroller.scrollTo(0, sessionStorage.topicPositon, false);
                    }, 0) //同步转异步操作
                }
                })
            }
        },
        beforeRouteLeave(to, from, next) { //记录离开时的位置
            sessionStorage.topicPositon = this.$refs.topic_scroller && this.$refs.topic_scroller.getPosition() && this.$refs.topic_scroller.getPosition().top;
            next()
        },
            
    }
</script>
<style lang="less">
    @import './topic.less';
</style>
