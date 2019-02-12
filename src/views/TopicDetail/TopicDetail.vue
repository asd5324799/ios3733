<template>
    <div class="topic-detail">
        <div class="top-transparent-bar">
                <span class="back-btn" @click="back"></span>
            </div>
        <scroller :on-refresh="refresh" ref="topic_detail_scroller" refreshText="刷新">
        <div class="topic-face-pic" :style="{backgroundImage: 'url('+this.topicPicSrc+')'}">
        </div>
        <div class="content-bg">
            <div class="topic-title">{{topicTitle}}</div>
            <ul class="topic-game-list">
                <li class="topic-game-item" v-for="(item,index) of topicDetailList" :key="index">
                    <!-- <div class="topic-game-video">
                        <video :src="item.video_url" ref="video_play" class="video-item" controls
                                 :poster="item.video_thumb" style="width: 100%; object-fit: cover;"></video>
                    </div> -->
                    <div class="topic-game-video">
                        <video :src="item.video_url" ref="video_play" class="video-item" controls width="355" height="200"
                                 poster="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" 
                                 :style="{backgroundImage: 'url('+item.video_thumb+')'}">
                                    <!-- <source :src="item.video_url" type="video/mp4"> -->
                                 </video>
                    </div>
                    <router-link to="/detail" tag="div">
                        <div class="container">
                        <img 
                            :src="item.titlepic"
                            class="game-img">
                        <div class="game-content">
                            <div class="game-name">
                            {{item.title}}
                            </div>
                            <div class="game-type">
                            <span 
                                v-for="(items, indexs) in item.app_tag"
                                :key="indexs"
                                :style="{backgroundColor: items.color}"
                                class="type" >{{items.name}}
                            </span>
                            <span class="size">{{item.size_ip}}</span>
                            </div>
                        </div>
                        </div>
                        <div class="game-boon">{{item.yxftitle}}</div>

                    </router-link>
                    <a :href="item.down_ip" class="game-download">下载</a>
                </li>
            </ul>
        </div>
        </scroller>
    </div>
</template>
<script>
    export default {
        name:"TopicDetail",
        data() {
            return {
                topicPicSrc:'',
                topicDetailList:[],
                topicTitle:''
            }
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
            init(){
                this.$axios({
                    method: "post",
                    url: "/api/subject/items"
                }).then(this.handleTopicData)
            },
            handleTopicData(res){
                this.topicDetailList = res.data.games;
                this.topicPicSrc = res.data.info.titlepic;
                this.topicTitle = res.data.info.title;
            },
            refresh() {
                setTimeout(() => {
                this.page = 1;
                this.init()
                this.$refs.topic_detail_scroller.finishPullToRefresh();
                }, 1000)
            },
        },
        created(){
            this.init();
        },
            
    }
</script>
<style lang="less" scoped>
    @import './topicdetail.less';
</style>
