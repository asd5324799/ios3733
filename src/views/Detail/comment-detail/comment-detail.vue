<template>
  <div class="comment-detail">
    <Navigation :title="'评论详情'"></Navigation>
    <Loading :loading="loading">
      <Scroll slot="loading-content">
        <div class="content" slot="content">
          <CommentItem :item="commentDetail" :type="2"/>
          <div class="tab-wrapper">
            <div class="left-wrapper">全部回复({{replyCount}})</div>
            <div class="right-wrapper" @click="listReverse">{{replySort}}</div>
          </div>
          <ul>
            <CommentItem 
              v-for="(item, index) in replyList"
              :key="index"
              :item="item"
              :type="2" />
          </ul>
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import CommentItem from '@/components/comment-item/comment-item.vue';
import Navigation from '@/components/navigation/navigation.vue';
import Scroll from '@/components/scroll/scroll.vue';
import Loading from '@/components/loading/loading.vue';
export default {
  data() {
    return {
      loading: 'ready',
      commentId: '',
      page: 1,
      commentDetail: {
      },
      sourceId: '',
      replyCount: 0,
      replySort: '顺序',
      replyList: []
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.commentId !== JSON.parse(this.$route.query.comment_id)) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
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
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail';
      })
    },
    handleInitData(res) {
      this.commentDetail = res.data;
      this.replyList = res.data.replies;
      this.replyCount = res.data.reply_count;
    },
    handleTimestamp(time) {
      let now = new Date();
      let temp = new Date(time*1000);
      let diff = now.getTime() - time*1000;
      if(diff < 60000) {
        // 小于1分钟
        return '刚刚';
      } else if(diff >= 60000 && diff < 3600000) {
        // 小于1小时
        let min = parseInt(diff/1000/60);
        return `${min}分钟前`
      } else if (diff >= 3600000 && diff < 86400000) {
        // 小于1天
        let h  = parseInt(diff/1000/60/60);
        return `${h}小时前`
      } else if(diff >= 86400000) {
        // 大于等于一天
        let y = temp.getFullYear();
        let m = temp.getMonth() + 1;
        let d = temp.getDate();
        m = m < 10 ? '0'+m : m;
        d = d < 10 ? '0'+d : d;
        if(now.getFullYear() === y) {
          // 是否是今年
          return `${m}-${d}`; 
        } else {
          return `${y}-${m}-${d}`;
        }
      }   
    },
    listReverse() {
      this.replySort = this.replySort === '顺序' ? '倒序' : '顺序';
    }
  },
  components: {
    Scroll,
    Loading,
    Navigation,
    CommentItem
  }
}
</script>
<style lang="less" scoped>
  @import './comment-detail.less';
</style>