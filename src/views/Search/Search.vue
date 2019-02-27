<template>
  <div class="search">
    <div class="top-search">
      <div class="search-board">
        <input type="text" placeholder="换个搜索词试试" v-model.trim="searchKey"/>
        <i class="clear-key" @click="clearKey" v-show="searchKey !== ''"></i>
      </div>
      <div class="back" @click="back">取消</div>
    </div>
    <main>
      <router-view 
        :resultGameList="resultGameList"
        :resultGiftList="resultGiftList"
        :searchKey="searchKey"
        @toSearchResult="toSearchResult"></router-view>
    </main>
  </div>
</template>
<script>

export default {
  name: "Search",
  data() {
    return {
      searchKey: "",
      resultGameList: [],
      resultGiftList: [],
    }
  },
  watch: {
    searchKey() {
      if(this.searchKey === '') {
        this.$router.push({
          name: 'SearchIndex'
        })
      } else {
        this.$router.push({
          name: 'SearchResult'
        })
        this.$axios.all([
          this.$axios({
            url: '/api/search/index',
            data: {
              page: 1,
              keyword: this.searchKey,
              fromAction: 1,
              type: 1
            }
          }),
          this.$axios({
            url: '/api/search/index',
            data: {
              page: 1,
              keyword: this.searchKey,
              fromAction: 1,
              type: 101
            }
          })
        ]).then(this.$axios.spread((res, res2) => {
          this.resultGameList = res.data.game_list;
          this.resultGiftList = res2.data.card_list;
        })).catch((e) => {
          console.log(e);
        })
      }
    }
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    clearKey(){
        this.searchKey="";
    },
    toSearchResult(keyword) {
      this.searchKey = keyword
    },
  },
}
</script>
<style lang="less" scoped>
  @import './search.less';
</style>
