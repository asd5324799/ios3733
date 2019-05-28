<template>
  <div>
    <div class="top-bar">
      <div class="search-bar">
        <router-link class="search-button" to="/search" >搜索</router-link>
      </div>
      <div class="tab-list">
        <router-link
          tag="div"
          v-for="(item, index) in list"
          :key="index"
          class="tab-item"
          :to="{name: item.name}"
        >
          <span class="text">{{item.title}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
      }
    },
  }
</script>
<style lang="less">
  @import './topbar.less';
</style>
