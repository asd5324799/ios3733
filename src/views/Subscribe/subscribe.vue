<template>
  <div class="subscribe">
    <Navigation :title="'预约专区'"></Navigation>
    <Loading :loading="loading" @refresh="createdMethod">
      <Scroll 
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp" 
        class="wrapper"
        slot="loading-content">
        <GameList :list="list" :type="4" slot="content" class="content"></GameList>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
import GameList from '@/components/gamelist/gamelist.vue';
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';

export default {
  data() {
    return {
      list: [],
      page: 2,
      loading: 'ready',
      pullDownState: 'ready',
      pullUpState: 'ready',
      ajaxSwitch: true,
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        url: '/api/game/subscribeGames',
        data: {
          page: 1,
          listRows: 20,
        }
      }).then(res => {
        this.handleInitData(res);
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail';
      })
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: '/api/game/subscribeGames',
          data: {
            page: 1,
            listRows: 20,
          }
        }).then(res => {
          this.handleInitData(res);
          this.pullDownState = 'success';
          setTimeout(() => {
            this.ajaxSwitch = true;
            this.pullDownState = 'ready';
          }, 1000)
        }).catch(() => {
          this.pullDownState = 'fail';
          setTimeout(() => {
              this.pullDownState = 'ready';
              this.ajaxSwitch = true;
          }, 1000);
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: '/api/game/subscribeGames',
          data: {
            page: this.page,
            listRows: 20,
          }
        }).then(res => {
          if(res.data.list.length < 20) {
            this.pullUpState = 'nomore';
            this.ajaxSwitch = true;
            this.list.push(...res.data.list);
          } else {
            this.pullUpState = 'success';
            this.page++;
            this.gameList.push(...res.data.list);
            setTimeout(() => {
              this.pullUpState = 'ready';
              this.ajaxSwitch = true;
            }, 50);
          }
        }).catch(() => {
          this.pullUpState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(() => {
            this.pullUpState = 'ready';
          }, 50);    
        })
      }
    },
  },
  components: {
    Navigation,
    GameList,
    Loading,
    Scroll
  }
}
</script>
<style lang="less" scoped>
  @import './subscribe.less';
</style>