<template>
  <div class="detail-comments" v-if="comments.rating">
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
        <ul class="comments-list" v-show="tabNow === 0">
          <li 
            class="comments-item"
            v-for="(item, index) in comments.comments">
            <div class="comments-header">
              <div class="user-info">
                <img :src="item.user.avatar" class="user-avatar">
                <div class="user-content">
                  <div class="user-name">
                    {{item.user.nickname}}
                    <div class="vip">
                      
                    </div>
                  </div>
                  <div class="time">刚刚</div>
                </div>
              </div>
              <div class="report">举报</div>
            </div>
            <div class="comments-detail">
              {{item.content}}
            </div>
            <div class="comments-footer">
              <div class="left-wrapper">
                <i class="icon"></i>
                <div class="text">{{item.model}}</div>
              </div>
              <div class="right-wrapper">
                <i class="good"></i>
                <div class="text">{{item.support_count}}</div>
                <i class="reply"></i>
                <div class="text">{{item.reply_count}}</div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="content-list" v-show="tabNow === 1">2</ul>
        <ul class="content-list" v-show="tabNow === 2">3</ul>
      </div>
    </main>
  </div>
</template>
<script>
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
    }
  },
}
</script>
<style lang="less" scoped>
  @import './detail-comments.less';
</style>