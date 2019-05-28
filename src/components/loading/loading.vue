<template>
  <div>
    <div class="loading" v-if="loading !== 'success'">
      <div class="loading-loading" v-if="loading === 'ready'">
        <div class="loadingImg"></div>
        <div class="text">loading...</div>
      </div>
      <div class="loading-fail" v-if="loading === 'fail'">
        加载失败，请重试
        <div class="button" @click="refresh">重新加载</div>
      </div>
    </div>
    <slot class="loading-content" name="loading-content" v-else></slot>
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: String,
      default: 'String'
    }
  },
  methods: {
    refresh() {
      this.$emit('refresh');
    }
  },
}
</script>
<style lang="less" scoped>
  @import './loading.less';
</style>
