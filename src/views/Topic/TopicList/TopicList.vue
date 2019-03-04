<template>
  <div class="topiclist">
    <Navigation :title="'游戏专题'" />
    <Loading class="wrapper" :loading="loading">
      <Scroll 
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp"
        slot="loading-content">
        <div class="topic-box content" slot="content">
          <div class="top-pic">
            <img :src="titlePic" alt="">
          </div>
          <p class="topic-desc">{{topicDesc}}</p>
          <GameList :list="topicList" />
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Navigation from  '@/components/navigation/navigation.vue';
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import GameList from '@/components/gamelist/gamelist.vue';
export default {
  name:"TopicList",
  data() {
    return {
      topicList:[],
      titlePic:'',
      topicDesc:'',
      loading: 'ready',
      pullDownState: 'ready',
      pullUpState: 'ready',
      ajaxSwitch: true,
      page: 1,
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
      this.$axios({
        url: "/api/subject/items",
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
      this.titlePic = res.data.info.titlepic;
      this.topicDesc = res.data.info.subject_desc;
      if(this.topicList.length < 20) {
        this.pullUpState = 'nomore';
      }
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: "/api/subject/items",
          data:{
            id: JSON.parse(this.$route.query.topicId),
            page: 1,
            listRow: 20
          }
        })
        .then(res => {
          this.handleInitData(res);
          this.pullDownState = 'success';
          setTimeout(()=> {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        })
        .catch(() => {
          this.pullDownState = 'fail';
          setTimeout(()=> {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)   
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch && this.pullUpState !== 'nomore') {
        this.ajaxSwitch = false;
        this.$axios({
          url: "/api/subject/items",
          data:{
            id: JSON.parse(this.$route.query.topicId),
            page: this.page,
            listRow: 200
          }
        })
        .then(res => {
          this.topicList.push(...res.data);
          if(res.data.length < 20) {
            this.pullUpState = 'nomore';
          } else {
            this.page++;
            this.pullUpState = 'success';
            setTimeout(() => {
              this.pullUpState = 'ready';
            }, 1000);
          }
          this.ajaxSwitch = true;
        })
        .catch(() => {
          this.pullUpState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(() => {
            this.pullUpState = 'ready';
          }, 1000);      
        })
      }
    },
  },
  components: {
    Loading,
    Scroll,
    Navigation,
    GameList
  }
}
</script>
<style lang="less" scoped>
  @import './topiclist.less';
</style>
