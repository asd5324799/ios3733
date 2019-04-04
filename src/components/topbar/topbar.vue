<template>
  <div>
    <div class="top-bar">
      <div class="search-bar">
        <router-link class="search-button" to="/search" >搜索
            <!-- <object>
              <router-link class="qrcode" to="/qrcode">
                <i class="code-icon"></i>
              </router-link>
            </object> -->
        </router-link>
      </div>
      <div class="tab-list">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="tab-item"
          :class="{current: currentTab === index}"
          @click="change(index)">
        <span class="text">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      },
      currentTab: {
        type: Number,
        default: 0
      }
    },
    methods: {
      change(index) {
        this.$emit('changeSlide', index);
      }
    },
  }
</script>
<style lang="less">
  @import './topbar.less';
</style>
