<template>
  <li 
    class="comments-item"
    :style="styleObject(item)"
    @click="toCommentDetail(item)">
    <div class="comments-header" v-if="item.user">
      <div class="user-info">
        <div class="avatar">
          <div 
            v-if="item.user.avatar"
            :style="{backgroundImage: `url(${item.user.avatar})`}" 
            class="user-avatar"></div>
          <div 
            v-if="!item.user.avatar"
            class="user-avatar"></div>
          <i class="user-svip" v-if="item.user.is_svip"></i>
        </div>
        <div class="user-content">
          <div 
            class="user-name" 
            :class="{'svip-name': item.user.is_svip, 'gm-name': item.user.is_official}">
            {{item.user.nickname}}
            <div class="vip" v-if="!item.user.is_official">
              <div class="level exp-level-name">{{item.user.exp_level_name}}</div>
              <div 
                class="level vip-level-name" 
                :style="{backgroundColor: item.user.pay_level_color}">{{item.user.pay_level_name}}</div>
            </div>
          </div>
          <div class="time">{{handleTimestamp(item.create_time)}}</div>
        </div>
      </div>
      <div class="report">举报</div>
    </div>
    <div class="comments-detail">
      {{item.content}}
    </div>
    <div class="comments-footer" v-if="item.user">
      <div class="left-wrapper">
        <i class="icon" v-if="!item.user.is_official"></i>
        <div class="text">{{item.model}}</div>
      </div>
      <div class="right-wrapper">
        <i class="good"></i>
        <div class="text">{{item.support_count}}</div>
        <i class="reply"></i>
        <div class="text">{{item.reply_count}}</div>
      </div>
    </div>
    <ul class="reply-list" v-if="type === 1 && item.replies.length > 0">
      <li 
        class="reply-item"
        v-for="(reply, index2) in item.replies"
        :key="index2">
        <span class="user-name" :class="{'svip-name': reply.user.is_svip, 'gm-name': reply.user.is_official}">{{reply.user.nickname}}:</span>
        <span class="reply-content">{{reply.content}}</span>
      </li>
      <div class="more" v-if="item.reply_count >= 5">查看全部{{item.reply_count}}条评论</div>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1
    }
  },
  methods: {
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
      return 1
    },
    toCommentDetail(item) {
      if(this.type === 2) {
        this.$router.push({
          name: 'ReplyPage',
          query: {
            nickname: JSON.stringify(item.user.nickname)
          }
        })
      } else {
        this.$router.push({
          name: 'CommentDetail',
          query: {
            comment_id: JSON.stringify(item.comment_id),
            source_id: JSON.stringify(item.source_id),
          }
        })
      }
    },
    styleObject(item) {
      if(item.gold_url !== '') {
        return {backgroundImage: `url(${item.gold_url})`};
      } else {
        return {}
      }
    }
  },
}
</script>
<style lang="less" scoped>
  @import './comment-item.less';
</style>
