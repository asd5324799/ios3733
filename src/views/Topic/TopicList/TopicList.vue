<template>
  <div class="topiclist">
    <Navigation :title="'游戏专题'" />
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="topic-box">
          <div class="top-pic">
            <img :src="titlePic" alt="">
          </div>
          <p class="topic-desc">{{topicDesc}}</p>
          <van-list
          v-model="pullUpState"
          :finished="noMore"
          finished-text="没有更多了"
          @load="pullUp"
          >
            <GameList :list="topicList" />
          </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Navigation from  '@/components/navigation/navigation.vue';
import Loading from '@/components/loading/loading.vue';
import GameList from '@/components/gamelist/gamelist.vue';
export default {
  name:"TopicList",
  data() {
    return {
      topicList:[],
      titlePic:'',
      topicDesc:'',
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
      page: 2,
      id: ''
    }
  },
  created(){
    this.createdMethod();
  },
  activated() {
    if(this.id !== JSON.parse(this.$route.query.topicId)) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.titlePic = JSON.parse(this.$route.query.titlepic),
      this.$axios({
        url: "/api/collect/gameCollect",
        data:{
          id: JSON.parse(this.$route.query.topicId),
          page: 1,
          listRow: 20
        }
      }).then(res => {
        this.id = JSON.parse(this.$route.query.topicId);
        this.handleInitData(res);
        this.loading = 'success';
      }).catch(() => {
        this.loading = 'fail';
      })
    },
    handleInitData(res){
      this.topicList = res.data.games;
      // this.topicDesc = res.data.info.subject_desc;
      if(this.topicList.length < 20) {
        this.noMore = true;
      }
    },
    pullDown() {
      this.$axios({
        url: "/api/collect/gameCollect",
        data:{
          id: JSON.parse(this.$route.query.topicId),
          page: 1,
          listRow: 20
        }
      })
      .then(res => {
        this.handleInitData(res);
        this.pullDownState = false;
        this.page = 2;
        this.$toast('刷新成功');
      })
      .catch(() => {
        this.pullDownState = false;
        this.$toast('刷新失败');
      })
    },
    pullUp() {
      this.$axios({
        url: "/api/collect/gameCollect",
        data:{
          id: JSON.parse(this.$route.query.topicId),
          page: this.page,
          listRow: 200
        }
      })
      .then(res => {
        this.topicList.push(...res.data);
        this.page++;
        this.pullUpState = false;
        if(res.data.length < 20) {
          this.noMore = 'nomore';
        }
      })
      .catch(() => {
        this.pullUpState = false;
      })
    },
  },
  components: {
    Loading,
    Navigation,
    GameList
  }
}
</script>
<style lang="less" scoped>
  @import './topiclist.less';
</style>
