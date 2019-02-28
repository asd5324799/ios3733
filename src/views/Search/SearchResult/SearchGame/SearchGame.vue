<template>
  <div class="search-game">
    <Scroll
      :pullUp="pullUpState"
      @pullingUp="pullUp">
      <GameList class="content" :list="gameList" :type="1" slot="content"/> 
    </Scroll>
  </div>
</template>
<script>
  import Scroll from '@/components/scroll/scroll.vue';
  import GameList from '@/components/gamelist/gamelist.vue';
  export default {
    name: 'SearchGame',
    props: {
      list: {
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
        ajaxSwitch: true,
        gameList: [],
        pullUpState: 'ready'
      }
    },
    watch: {
      list() {
        this.handleInitData();
      }
    },
    mounted() {
      this.handleInitData();
    },
    methods: {
      pullUp() {
        if(this.ajaxSwitch) {
          this.ajaxSwitch = false;
          this.$axios({
            url: '/api/search/index',
            data: {
              page: this.page,
              keyword: this.searchKey,
              fromAction: 1,
              type: 1
            }
          }).then(res => {
            this.gameList.push(...res.data.game_list);
            if(res.data.game_list.length < 20) {
              this.pullUpState = 'nomore';
            } else {
              this.pullUpState = 'success';
              this.page++;
              setTimeout(() => {
                this.pullUpState = 'ready';
                this.ajaxSwitch = true;
              }, 1000)
            }
          }).catch(() => {
            this.pullUpState = 'fail';
            setTimeout(() => {
              this.pullUpState = 'ready';
              this.ajaxSwitch = true;
            }, 1000)          
          })
        }
      },
      handleInitData() {
        this.page = 2;
        this.ajaxSwitch = true;
        this.gameList = JSON.parse(JSON.stringify(this.list)); 
        if(this.gameList.length < 20) {
          this.pullUpState = 'nomore';
        } else {
          this.pullUpState = 'ready';
        }
      }
    },
    components: {
      GameList,
      Scroll,
    }
  }
</script>
<style lang="less" scoped>
  @import './searchgame.less';
</style>

