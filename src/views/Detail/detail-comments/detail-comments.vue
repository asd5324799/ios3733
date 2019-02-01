<template>
  <div class="detail-comments" v-if="comments.cmt_sum">
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
            <li 
              class="tab-item" 
              :class="{on: tabNow === 2}"
              @click="tabChange(2)">最热</li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <CommentsList v-show="tabNow === 0" :list="defaultCommentsList"></CommentsList>
        <CommentsList v-show="tabNow === 1" :list="newCommentsList"></CommentsList>
        <CommentsList v-show="tabNow === 2" :list="hotCommentsList"></CommentsList>
      </div>
    </main>
  </div>
</template>
<script>
import CommentsList from '@/components/commentsList/commentsList.vue'

export default {
  name: 'detailComment',
  props: {
    comments: Object
  },
  data() {
    return {
      tabNow: 0,
    }
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
    handleInitData() {
      let list = [];
      for(let i of this.comments.tops) {
        list.push(i);
      }
      for(let i of this.comments.hots) {
        list.push(i);
      }
      for(let i of this.comments.comments) {
        list.push(i);
      }
      return list
    }
  },
  computed: {
    defaultCommentsList() {
      let defaultList = this.handleInitData();
      return defaultList
    },
    newCommentsList() {
      let newList = this.handleInitData();
      for(let i = newList.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
          if(newList[j].create_time > newList[j+1].create_time) {
            [newList[j], newList[j+1]] = [newList[j+1], newList[j]];
          }
        }
      }
      return newList
    },
    hotCommentsList() {
      let hotList = [];
      for(let i of this.comments.hots) {
        hotList.push(i);
      }
      for(let i of this.comments.tops) {
        hotList.push(i);
      }
      for(let i of this.comments.comments) {
        hotList.push(i);
      }
      hotList.reverse();
      return hotList
    }
  },
  components: {
    CommentsList,
  }
}

</script>
<style lang="less" scoped>
  @import './detail-comments.less';
</style>