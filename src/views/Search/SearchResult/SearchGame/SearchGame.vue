<template>
  <div class="search-game">
    <van-list
    v-model="pullUpState"
    :finished="noMore"
    :finished-text="text"
    @load="pullUp"
    >
      <GameList class="content" :list="list" :type="1"/> 
    </van-list>
  </div>
</template>
<script>
  import GameList from '@/components/gamelist/gamelist.vue';
  export default {
    name: 'SearchGame',
    props: {
      gameList: {
        type: Array,
        default() {
          return []
        }
      },
      searchKey: {
        type: String,
        default() {
          return ''
        }
      }
    },
    data() {
      return {
        page: 2, //初始页码
        list: [],
        pullUpState: false,
        noMore: false,
        text: '没有更多了',
      }
    },
    watch: {
      gameList() {
        this.handleInitData();
      }
    },
    mounted() {
      this.handleInitData();
    },
    methods: {
      pullUp() {
          this.$axios({
            url: '/api/search/index',
            data: {
              page: this.page,
              keyword: this.searchKey,
              fromAction: 1,
              type: 1
            }
          }).then(res => {
            this.pullUpState = false;
            this.page++;
            this.list.push(...res.data.game_list);
            if(res.data.game_list.length < 20) {
              this.noMore = true;
            }
          }).catch(() => {
            this.pullUpState = false;       
          })
      },
      handleInitData() {
        this.page = 2;
        this.list = JSON.parse(JSON.stringify(this.gameList)); 
        this.noMore = false;
        this.text = '没有更多了';
        if(this.list.length < 20) {
          this.noMore = true;
          if(this.list.length === 0) {
            this.text = '暂无相关游戏';
          }
        }
      }
    },
    components: {
      GameList,
    }
  }
</script>
<style lang="less" scoped>
  @import './searchgame.less';
</style>

