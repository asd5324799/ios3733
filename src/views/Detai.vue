<template>
  <div class="game-detail">
    <!-- background-image -->
    <div class="background-image"
      :style="{backgroundImage: `url(${detail.titlepic})`}">
    </div>
    <!-- header -->
    <div class="detail-header">
      <i class="back-icon" @click="goback"></i>
      <div class="title">{{detail.title}}</div>
    </div>
    <!-- content -->
    <div class="container">
      <!-- game-info -->
      <div class="game-info">
        <img 
        :src="detail.titlepic"
        class="game-img">
        <div class="game-container">
          <div class="game-name">{{detail.title}}</div>
          <div class="game-number">{{detail.totaldown}}人在玩&nbsp;&nbsp;&nbsp;&nbsp;{{detail.size_ip}}</div>
          <div class="game-type">
            <div class="type-item"
              v-for="(item, index) in detail.app_tag"
              :key="index">
              <img 
                :src="item.icon"
                class="icon">
              <span class="text">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- tab-list -->
      <ul class="detail-tab">
        <router-link
          tag="li"
          to="/detail"
          class="tab-item">详情</router-link>
        <router-link
          tag="li"
          to="/detail/comment"
          class="tab-item">评论</router-link>
        <router-link
          tag="li"
          to="/detail/gift"
          class="tab-item">礼包</router-link>
        <li class="tab-item">资讯</li>
      </ul>
      <!-- main -->
      <keep-alive>
        <router-view 
          class="content"
          :detail="detail"
          :liked="liked"></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data() {
    return {
      detail: {},
      liked: [],
    }
  },
  methods: {
    handleInitData(res) {
      this.detail = res.data.detail;
      this.liked = res.data.liked;
    },
    goback() {
      this.$router.back();
    }
  },
  created() {
    this.$axios.post('/api/game/read')
    .then(this.handleInitData);
  }
}
</script>
<style lang="less" scoped>
  @import './detai.less';
</style>