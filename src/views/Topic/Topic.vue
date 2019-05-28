<template>
  <div class="topic">
    <Navigation :title="'游戏专题'" />
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="topic-box content">
          <ul class="topic-list">
            <van-list
            v-model="pullUpState"
            :finished="noMore"
            finished-text="没有更多了"
            @load="pullUp"
            >
              <li class="topic-item" v-for="(item,index) of topicList" :key="index">
                <img :src="item.info.titlepic" @click="toTopicList(item.info.id)">
              </li>
            </van-list>
          </ul>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Navigation from  '@/components/navigation/navigation.vue';
import Loading from '@/components/loading/loading.vue';
export default {
  name:"Topic",
  data() {
    return {
      topicList:[],
      page:2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
    }
  },
  created(){
    this.createdMethod();
  },
  methods: {
    createdMethod(){
      this.$axios({
        url: "/api/subject/index",
        data: {
            page: 1,
            listRows: "20"
        }
      })
      .then(res => {
        this.hadnleInitData(res);
        this.loading = 'success';
      })
      .catch(() => {
        this.loading = 'fail';
      })
    },
    hadnleInitData(res) {
      this.topicList = res.data;
      if(this.topicList.length < 20) {
        this.pullUpState = 'nomore';
      }
    },
    pullDown() {
      this.$axios({
        url: "/api/subject/index",
        data: {
          page: 1,
          listRows: "20"
        }
      })
      .then(res => {
        this.page = 2;
        this.hadnleInitData(res);
        this.pullDownState = false;
        this.$toast('刷新成功');
      })
      .catch(() => {
        this.pullDownState = false;  
        this.$toast('刷新失败');
      })
    },
    pullUp() {
      this.$axios({
        url: "/api/subject/index",
        data: {
          page: this.page,  
          listRows: "20"
        }
      })
      .then(res => {
        this.topicList.push(...res.data);
        this.page++;
        this.pullUpState = false;
        if(res.data.length < 20) {
          this.noMore = true;
        }
      })
      .catch(() => {
        this.pullUpState = false; 
      })
    },
    toTopicList(id) {
      this.$router.push({
        name: 'TopicList',
        query: {
          topicId: JSON.stringify(id),
        }
      })
    }
  },
  components: {
    Navigation,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './topic.less';
</style>
