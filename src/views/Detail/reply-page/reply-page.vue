<template>
  <div class="reply-page">
    <div>回复{{nickname}},具体业务逻辑还没写</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickname: ''
    }
  },
  activated() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.nickname = JSON.parse(this.$route.query.nickname);
    }
  },
}
</script>
<style lang="less" scoped>
  @import './reply-page.less';
</style>