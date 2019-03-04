<template>
  <div class="detail-news">
    <Loading :loading="loading">
      <Scroll
        slot="loading-content"
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp">
        <div class="nomore" slot="content" v-if="list.length === 0">该游戏暂无资讯</div>
        <div class="content" slot="content" v-else>
          <NewsList :list="list"></NewsList>
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import NewsList from '@/components/news-list/news-list.vue';
export default {
  name: 'detail-news',
  data() {
    return {
      list: [],
      loading: 'ready',
      pullUpState: 'ready',
      pullDownState: 'ready',
      page: 1,
      ajaxSwitch: true,
      title: ''
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.title !== JSON.parse(this.$route.query.id)) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.page = 1;
      this.title = JSON.parse(this.$route.query.title);
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
        this.$nextTick(() => {
          this.loading = 'success';
          if(this.list.length <= 20) {
              this.pullUpState = 'nomore';
            } else {
              this.pullUpState = 'ready';
            }
        })
      })
      .catch(() => {
        this.loading = 'fail';
      });
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
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
          this.pullDownState = 'success';
          this.ajaxSwitch = true;
          setTimeout(()=> {
            this.pullDownState = 'ready';
          }, 20)
        })
        .catch(() => {
          this.pullDownState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(()=> {
            this.pullDownState = 'ready';
          }, 20)
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
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
            this.pullUpState = 'nomore';
            this.ajaxSwitch = true;
          } else {
            this.page++;
            this.list.push(...res.data.list);
            this.pullUpState = 'success';
            this.ajaxSwitch = true;
            setTimeout(() => {
              this.pullUpState = 'ready';
            }, 50);
          }
        })
        .catch(() => {
          this.pullUpState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(() => {
            this.pullUpState = 'ready';
          }, 50);      
        })
      }
    },
  },
  components: {
    Loading,
    Scroll,
    NewsList,
  }
}
</script>
<style lang="less" scoped>
  @import './detail-news.less';
</style>
