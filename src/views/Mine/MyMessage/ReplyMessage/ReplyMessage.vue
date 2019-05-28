<template>
  <div class="reply-message">
    <Loading :loading="loading" @refresh="createdMethod">
      <div slot="loading-content">
        <van-list
          v-model="pullUpState"
          :finished="noMore"
          :finished-text="text"
          @load="pullUp"
        >
        </van-list> 
      </div>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';

export default {
  name: 'ReplyMessage',
  data() {
    return {
      loading: 'ready',
      noMore: false,
      page: 1,
      pullUpState: false,
      text: '没有更多了',
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.page = 1;
      this.noMore = false;
      this.$axios({
        url: '/api/comment/replyMe',
        data: {
          token: sessionStorage.getItem('token'),
        }
      }).then(res => {
        if(res.data === null) {
          this.text = '暂时没有回复';
        }
        if (res.data === null || res.data.list.length < 20) {
          this.noMore = true;
        }
        this.loading = 'success';
        this.pullUpState = false;
        this.handleInitData(res);
      }).catch((res) => {
        this.loading = 'fail';
      })
    },
    handleInitData(res) {

    },
    pullUp() {

    }
  },
  components: {
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './ReplyMessage.less';
</style>