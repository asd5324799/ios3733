<template>
  <div class="detail-news">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="content" >
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            :finished-text="text"
            @load="pullUp"
          >
            <NewsList :list="list"></NewsList>
          </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import NewsList from '@/components/news-list/news-list.vue';
export default {
  name: 'detail-news',
  data() {
    return {
      list: [],
      loading: 'ready',
      pullUpState: false,
      pullDownState: false,
      page: 1,
      title: '',
      noMore: false,
      text: '没有更多了'
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.title !== JSON.parse(sessionStorage.getItem('gameInfo')).title) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.page = 1;
      this.title = JSON.parse(sessionStorage.getItem('gameInfo')).title;
      this.text = '没有更多了';
      this.loading = 'ready';
      this.noMore = false;
      this.$axios({
        url: '/api/news/hotList',
        data: {
          classId: 23,
          title: this.title,
          page: 1,
          listRows: 20
        }
      }).then(res => {
        this.handleInitData(res);
        this.page++;
        this.loading = 'success';
        if(this.list.length <= 20) {
            this.noMore = true;
            if(this.list.length === 0) {
              this.text = '该游戏暂无资讯';
            }
        }
      })
      .catch(() => {
        this.loading = 'fail';
      });
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      this.page = 1;
      this.$axios({
        url: '/api/news/hotList',
        data: {
          classId: 23,
          title: this.title,
          page: 1,
          listRows: 20
        }
      })
      .then((res) => {
        this.handleInitData(res);
        if(res.data.list.length <= 20) {
          this.noMore = true;
        }       
        this.pullDownState = false;
      })
      .catch(() => {
        this.pullDownState = false
      })
    },
    pullUp() {
      this.$axios({
        url: '/api/news/hotList',
        data: {
          classId: 23,
          title: this.title,
          page: this.page,
          listRows: 20
        }
      }).then(res => {
        if(res.data.list.length <= 20) {
          this.noMore = true;
        }
        this.page++;
        this.list.push(...res.data.list);
        this.pullUpState = false;
      })
      .catch(() => {
        this.pullUpState = false;  
      })
    },
  },
  components: {
    Loading,
    NewsList,
  }
}
</script>
<style lang="less" scoped>
  @import './detail-news.less';
</style>
