<template>
  <div class="search-index">
    <!-- <Loading :loading="loading" @refresh="createdMethod"> -->
      <div class="loading-content" slot="loading-content">
        <div class="hot-search">
          <div class="section-title">
            <span class="hot-title">热门搜索</span>
          </div>
          <ul class="hot-game-list">
            <li 
              v-for="(item, index) in hotSearchGame"
              :key="index"
              class="hot-game-item" 
              @click="toDetail(item)">
              <p class="hot-game-title"><span class="green">{{index + 1}}.</span>{{item.title}}</p>
            </li>
          </ul>
        </div>
        <div class="hot-tag">
          <div class="section-title">
            <span class="hot-title">热门标签</span>
          </div>
          <ul class="tag-list">
            <li 
              class="tag-item" 
              v-for="(item,index) of hotTag" 
              :key="index"
              @click="toSearchResult(item.keyword)">
              <span>{{item.keyword}}</span>
            </li>
          </ul>
        </div>
      </div>
    <!-- </Loading> -->
  </div>
</template>
<script>
  import Loading from '@/components/loading/loading.vue';
  export default {
    name:"SearchIndex",
    data() {
      return {
        hotSearchGame: [],
        hotTag: [],
      }
    },
    created() {
      this.createdMethod();
    },
    methods: {
      createdMethod() {
        this.loading = 'ready';
        this.$axios({
          url: '/api/index/extra',
          data: {}
        }).then(res => {
          this.handleInitData(res);
          this.$nextTick(() => {
            this.loading = 'success';
          })
        }).catch(() => {
          this.$nextTick(() => {
            this.loading = 'fail';
          })
        })
      },
      handleInitData(res) {
        this.hotTag = res.data.configs.hot_search;
        this.hotSearchGame = res.data.configs.hot_search_game;
      },
      toDetail(item) {
        this.$router.push({
          name: 'Detail',
          query: {
            id: JSON.stringify(item.id), 
            title: JSON.stringify(item.title), 
            down_ip: JSON.stringify(item.down_ip),
          }
        })
      },
      toSearchResult(keyword) {
        this.$emit('toSearchResult', keyword)
      },
    },
    components: {
      Loading,
    }
  }
</script>
<style lang="less" scoped>
    @import './searchindex.less';
</style>
