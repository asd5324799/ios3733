<template>
  <div class="detail-comments">
    <Loading :loading="loading" @refresh="createdMethod">
      <Scroll slot="loading-content">
        <div class="content" slot="content">
          <div class="comment-scores">
            <div class="left-wrapper">
              <div class="scores">{{comments.rating.rating}}</div>
              <div class="star-list">
                <i 
                  class="star"
                  v-for="(item, index) in handleStar()"
                  :key="index"
                  :class="item"></i>
              </div>
            </div>
            <div class="right-wrapper">
              <ul class="scores-list">
                <li class="scores-item"
                  v-for="(item, index) in Object.values(comments.rating).slice(1, 6)"
                  :key="index">
                  <span class="text">{{5 - index}}星</span>
                  <span class="bar">
                    <span 
                      class="star-bar"
                      :style="{width: `${item}%`}"
                      :class="`bar${5-index}`"
                    ></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="ready-comments">
            <i class="icon"></i>
            <span class="text">我要评论</span>
          </div>
          <main>
            <div class="list-header">
              <div class="left-wrapper">玩家评论
                <span class="gray">(共{{comments.cmt_sum}}条)</span>
              </div>
              <div class="right-wrapper">
                <ul class="tab-list">
                  <li 
                    class="tab-item" 
                    :class="{on: tabNow === 0}"
                    @click="tabChange(0)">默认</li>
                  <li 
                    class="tab-item" 
                    :class="{on: tabNow === 1}"
                    @click="tabChange(1)">最新</li>
                </ul>
              </div>
            </div>
            <div class="tab-content">
              <CommentsList v-show="tabNow === 0" :list="handleList()"></CommentsList>
              <CommentsList v-show="tabNow === 1" :list="newCommentsList"></CommentsList>
            </div>
          </main>
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import CommentsList from '@/components/commentsList/commentsList.vue';
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';

export default {
  name: 'detailComment',
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      tabNow: 0,
      comments: {
        rating: {},
        tops: [],
        comments: [],
        hots: []
      },
      loading: 'ready',
      pullDownState: 'ready',
      ajaxSwitch: true,
    }
  },
  computed: {
    newCommentsList() {
      let newList = this.handleList();
      for(let i = newList.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
          if(newList[j].create_time > newList[j+1].create_time) {
            [newList[j], newList[j+1]] = [newList[j+1], newList[j]];
          }
        }
      }
      return newList
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    handleStar() {
      let star = Number(this.comments.rating.rating) + 1;
      let starList = []
      for(let i = 0; i < 5; i++) {
        star = star - 1;
        if(star >= 1) {
          starList.push('star10');
        } else if (star >= 0.1 && star <= 0.2) {
          starList.push('star2');
        } else if (star > 0.2 && star <= 0.4) {
          starList.push('star4');
        } else if (star > 0.4 && star <= 0.5) {
          starList.push('star5');
        } else if (star > 0.5 && star <= 0.7) {
          starList.push('star6');
        } else if (star > 0.7 && star < 1) {
          starList.push('star8');
        } else if(star >= 0 && star < 0.1) {
          starList.push('star0');
        }
      }
      return starList;
    },
    tabChange(index) {
      this.tabNow = index;
    },
    handleInitData(res) {
      this.comments = res.data;
    },
    handleList() {
      let temp = [];
      for(let i of this.comments.tops) {
        temp.push(i);
      }
      for(let i of this.comments.hots) {
        temp.push(i);
      }
      for(let i of this.comments.comments) {
        temp.push(i);
      }
      return temp
    },
    createdMethod() {
      this.$axios({
        url: '/api/comment/comments',
        data: {
          page: this.page,
          listRows: 20,
          classId: 103,
          sourceId: this.id,
          order: 0
        }
      }).then(res => {
        this.handleInitData(res);
        this.$nextTick(() => {
          this.loading = 'success';
        }, 20)
      }).catch(() => {
        this.loading = 'fail';
      })
    }
  },
  components: {
    CommentsList,
    Loading,
    Scroll,
  }
}

</script>
<style lang="less" scoped>
  @import './detail-comments.less';
</style>