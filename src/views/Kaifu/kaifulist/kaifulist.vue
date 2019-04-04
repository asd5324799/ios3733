<template>
  <div class="kaifu-list">
    <Loading :loading="loading" @refresh="createdMethod">
      <Scroll 
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp"
        slot="loading-content">
        <GameList :list="list" :type="3" slot="content" class="content"></GameList>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import GameList from '@/components/gamelist/gamelist.vue';
export default {
  name: 'KaiFuList',
  props: {
    kaiFuType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      list: [],
      pullDownState: 'ready',
      pullUpState: 'ready',
      ajaxSwitch: true,
      page:2,
      loading: 'ready',
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        url: '/api/server/index',
        data: {
          page:1,
          type:this.kaiFuType,
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
      for(let i of res.data) {
        i.game.kaifuState = i.state;
        i.game.kaifuNewstime = i.newstime;
        this.list.push(i.game);
      }
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url:"/api/server/index",
          data:{
            page: 1,
            type: this.kaiFuType
          }
        }).then(res => {
          this.list = [];
          this.handleInitData(res);
          this.pullDownState = 'success';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        }).catch(() => {
          this.pullDownState = 'fail';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url:"/api/server/index",
          data:{
            page:this.page,
            type: this.kaiFuType
          }
        }).then(res => {
          this.page++;
          this.handleInitData(res);
          this.pullUpState = 'success';
          setTimeout(() => {
            this.pullUpState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        }).catch(() => {
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
    Loading,
    Scroll,
    GameList,
  }
}
</script>
<style lang="less" scoped>
  @import './kaifulist.less';
</style>