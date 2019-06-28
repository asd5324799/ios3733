<template>
  <div class="kaifu-list">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <van-list
          v-model="pullUpState"
          :finished="noMore"
          finished-text="没有更多了"
          @load="pullUp"
        >
          <GameList :list="list" :type="5"></GameList>
        </van-list>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
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
      pullDownState: false,
      pullUpState: false,
      page:2,
      loading: 'ready',
      noMore: false,
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
      this.$axios({
        url:"/api/server/index",
        data:{
          page: 1,
          type: this.kaiFuType
        }
      }).then(res => {
        this.list = [];
        this.handleInitData(res);
        this.pullDownState = false;
        this.page = 2;
        this.$toast('刷新成功');
      }).catch(() => {
        this.pullDownState = false;
        this.$toast('刷新失败');
      })
    },
    pullUp() {
        this.$axios({
          url:"/api/server/index",
          data:{
            page:this.page,
            type: this.kaiFuType
          }
        }).then(res => {
          this.page++;
          this.handleInitData(res);
          this.pullUpState = false;
          if(res.data.list.length < 20) {
            this.noMore = true;
          }
        }).catch(() => {
          this.pullUpState = false;
        })
    }
  },
  components: {
    Loading,
    GameList,
  }
}
</script>
<style lang="less" scoped>
  @import './kaifulist.less';
</style>