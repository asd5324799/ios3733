<template>
  <div class="detail-comments">
    <Loading :loading="loading" @refresh="createdMethod">
      <div slot="loading-content" class="content">
        <div>
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
          <div class="ready-comments" @click="toReplyPage()">
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
              <van-list
                v-model="pullUpState"
                :finished="noMore"
                finished-text="没有更多了"
                @load="pullUp"
              >
                <ul v-show="tabNow === 0">
                  <CommentItem
                    v-for="(item, index) in defaultList"
                    :key="index"
                    :item="item"/>
                </ul>
                <ul v-show="tabNow === 1">
                  <CommentItem
                    v-for="(item, index) in newList"
                    :key="index"
                    :item="item"/>       
                </ul>
              </van-list>
            </div>
          </main>
        </div>
      </div>
    </Loading>
  </div>
</template>
<script>
import CommentItem from '@/components/comment-item/comment-item.vue';
import Loading from '@/components/loading/loading.vue';

export default {
  name: 'detailComment',
  data() {
    return {
      id: '',
      tabNow: 0,
      loading: 'ready',
      comments: {
        rating: {},
        tops: [],
        comments: [],
        hots: []
      },
      pullUpState: false,
      noMore: false,
      page: 2,  
      defaultList: [],
      newList: [],
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.id !== this.$store.getters.gameInfo.id) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.id = this.$store.getters.gameInfo.id;
      this.loading = 'ready';
      this.$axios({
        url: '/api/comment/comments',
        data: {
          page: 1,
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
    },
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
    toReplyPage() {
      this.$router.push({
        name: 'ReplyPage',
        query: {
          source_id: JSON.stringify(this.id),
          type: JSON.stringify(1),
        }
      })      
    },
    tabChange(index) {
      this.tabNow = index;
    },
    handleInitData(res) {
      this.comments = res.data;
      console.log(res);
      if(res.data.comments.length < 20) {
        this.noMore = true;
      }
      this.defaultList = this.handleComments(res.data);
      this.newList = this.handleNewsList(this.handleComments(res.data));
    },
    handleComments(list) {
      let temp = [];
      for(let i of list.tops) {
        temp.push(i);
      }
      for(let i of list.hots) {
        temp.push(i);
      }
      for(let i of list.comments) {
        temp.push(i);
      }
      return temp
    },
    handleNewsList(newList) {
      for(let i = newList.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
          if(newList[j].create_time > newList[j+1].create_time) {
            [newList[j], newList[j+1]] = [newList[j+1], newList[j]];
          }
        }
      }
      newList.reverse();
      return newList
    },
    pullUp() {
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
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
        this.page++;
        this.pullUpState = false;
        this.defaultList = [...this.defaultList, ...res.data.comments];
        this.newList = this.handleNewsList([...this.newList, ...res.data.comments]);
      })
      .catch(() => {   
        this.pullUpState = false;
      })
    },  
  },
  components: {
    CommentItem,
    Loading,
  }
}

</script>
<style lang="less" scoped>
  @import './detail-comments.less';
</style>