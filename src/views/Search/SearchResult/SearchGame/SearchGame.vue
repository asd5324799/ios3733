<template>
  <div class="search-game">
    <Scroll
      :pullUp="pullUpState"
      @pullingUp="pullUp">
      <GameList :list="list" :type="1" slot="content"/> 
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
      keyword: {
        type: String,
        default() {
          return ''
        }
      }
    },
    data() {
      return {
        page: 2, //初始页码
        gameList: [],
        ajaxSwitch: true,
        pullUpState: 'ready'
      }
    },
    watch: {
      keyword() {
        this.page = 2;
      }
    },
    methods: {
      pullUp() {
        if(this.ajaxSwitch) {
          this.ajaxSwitch = false;
          this.$axios({
            url: '/api/search/index',
            data: {
              page: this.page,
              keyword: this.keyword,
              fromAction: 1,
              type: 1
            }
          }).then((res) => {
            this.gameList.push(...res.data.game_list);
            if(res.data.game_list.length < 20) {
              this.pullUpState = 'nomore';
            } else {
              this.pullUpState = 'success';
              setTimeout(() => {
                this.pullUpState = 'ready';
                this.ajaxSwitch = true;
              }, 1000)
            }
          }).catch((e) => {
            console.log(e);
            this.pullUpState = 'fail';
            setTimeout(() => {
              this.pullUpState = 'ready';
              this.ajaxSwitch = true;
            }, 1000)          
          })

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

