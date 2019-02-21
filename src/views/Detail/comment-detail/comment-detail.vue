<template>
  <div class="comment-detail">
    <Navigation :title="'评论详情'"></Navigation>
    <div class="wrapper">
      <Loading :loading="loading">
        <Scroll slot="loading-content">
          <div class="content" slot="content">
            
          </div>
        </Scroll>
      </Loading>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
import Scroll from '@/components/scroll/scroll.vue';
import Loading from '@/components/loading/loading.vue';
export default {
  data() {
    return {
      loading: 'ready',
      commentId: '',
      page: 1,
      commentDetail: '',
      sourceId: '',
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.commentId = JSON.parse(this.$route.query.comment_id);
      this.sourceId = JSON.parse(this.$route.query.source_id);
      this.page = 1;
      this.$axios({
        url: '/api/comment/replies',
        data: {
          page: this.page,
          commentId: this.commentId,
          sourceId: this.sourceId,
          listRows: 20,
          classId: 103,
        }
      }).then(res => {
        this.handleInitData(res);
        this.loading = 'success';
      }).catch((e) => {
        console.log(e);
        this.loading = 'fail';
      })
    },
    handleInitData(res) {
      this.commentDetail = res.data;
    }
  },
  components: {
    Scroll,
    Loading,
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './comment-detail.less';
</style>