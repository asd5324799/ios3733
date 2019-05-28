<template>
  <div class="my-message">
    <Navigation :title="'我的信息'"/>
    <div class="tab-list">
      <router-link
        tag="div"
        v-for="(item, index) in list"
        :key="index"
        class="tab-item"
        :to="{name: item.name}"
        replace
      >
        <span class="text">{{item.title}}</span>
      </router-link>
    </div>
    <div class="main">
      <keep-alive>
        <router-view></router-view> 
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
export default {
  data() {
    return {
      list: [{
        title: '回复我的',
        name: 'ReplyMessage'
      }, {
        title: '我评论的',
        name: 'CommentMessage'
      }, {
        title: '消息',
        name: 'Notice'
      }]
    }
  },
  components: {
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './MyMessage.less';
</style>