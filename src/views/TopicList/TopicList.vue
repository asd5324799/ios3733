<template>
    <div class="topiclist">
        <div class="top-green-bar">
            <span class="back-btn" @click="back"></span>
            抢先推荐
        </div>
        <div class="topic-box">
        <scroller :on-refresh="refresh" ref="topic_list_scroller" refreshText="刷新">
            <div class="top-pic">
                <img :src="titlePic" alt="">
            </div>
            <p class="topic-desc">{{topicDesc}}</p>
            <GameList :list="topicList" :type="listType" />
        </scroller>
        </div>
    </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
    export default {
        name:"Search",
        data() {
            return {
                topicList:[],
                listType:1,
                titlePic:'',
                topicDesc:''
            }
        },
        watch:{
            $route(to,from){
                if(to.params.topicId){
                    this.init(this.handleTopicList)
                }
            }
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
            init(theMethod){
                this.$axios({
                    method: "post",
                    url: "/api/subject/items",
                    data:{
                        uuid: "ffffffff-1234-1234-1234-123456789012",
                        from: "212",
                        id: this.$route.params.topicId,
                        page: this.page,
                        listRow: 200
                    }
                }).then(theMethod)
            },
            handleTopicList(res){
                this.topicList = res.data.games;
                this.titlePic = res.data.info.titlepic;
                this.topicDesc = res.data.info.subject_desc;
            },
            refresh() {
                setTimeout(() => {
                this.page = 1;
                this.init()
                this.$refs.topic_list_scroller.finishPullToRefresh();
                }, 1000)
            },
        },
        components: {
            GameList
        },
        created(){
            this.init(this.handleTopicList);
        }
    }
</script>
<style lang="less">
    @import './topiclist.less';
</style>
