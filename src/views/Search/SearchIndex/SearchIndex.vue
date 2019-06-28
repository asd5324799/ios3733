<template>
  <div class="search-index">
      <div class="loading-content">
        <div class="hot-search" v-if="hotSearchGame.length !== 0">
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
        <div class="hot-tag" v-if="hotTag.length !== 0">
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
  </div>
</template>
<script>
  export default {
    name:"SearchIndex",
    props: {
      searchKey: {
        type: String,
        default() {
          return ''
        }
      }
    },
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
        this.$axios({
          url: '/api/index/extra',
          data: {
            startup: 1
          }
        }).then(res => {
          this.handleInitData(res);
        })
      },
      handleInitData(res) {
        if(res.data.configs) {
          this.hotTag = res.data.configs.hot_search;
          this.hotSearchGame = res.data.configs.hot_search_game;
        }
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
        if(this.searchKey === keyword) {
          this.$router.push({
            name: 'SearchGame'
          })
        } else {
          this.$emit('toSearchResult', keyword);
        }
      },
    },
  }
</script>
<style lang="less" scoped>
    @import './searchindex.less';
</style>
