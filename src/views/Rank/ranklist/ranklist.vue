<template>
  <div class="rank-list">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="content">
          <Billboard :gameTop="gameTop" :title="rank.title" :bg="rank.bg" :type="5"></Billboard>
            <van-list
            v-model="pullUpState"
            :finished="noMore"
            finished-text="没有更多了"
            @load="pullUp"
            >
              <GameList :list="gameList" :type="5" :isNum="true" />
            </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import GameList from '@/components/gamelist/gamelist.vue';
import Billboard from '@/components/billboard/billboard.vue';
export default {
  name:'RankList',
  props: {
    rank: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      gameList: [],
      gameTop:[],
      page:2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
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
        url:"/api/game/index",
        data:{
          order: this.rank.order,
          classId: 10001,
          page: 1,
        }
      }).then(res => {
        this.handleInitData(res);
        this.$nextTick(() => {
        this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail'
      })
    },
    handleInitData(res){
      this.gameList = res.data.list.slice(3);
      this.gameTop = res.data.list.slice(0,3);
    },
    addGameList(res) {
      this.gameList = this.gameList.concat(res.data.list);
    },
    pullDown() {
      this.$axios({
        url:"/api/game/index",
        data:{
          page: 1,
          order: this.rank.order,
          classId: 10001,
        }
      }).then(res => {
        this.handleInitData(res);
        this.pullDownState = false;
        this.$toast('刷新成功');
        this.page = 2;
      }).catch(() => {
        this.pullDownState = false;
        this.$toast('刷新失败');
      })
    },
    pullUp() {
      this.$axios({
        url:"/api/game/index",
        data:{
          page:this.page,
          order: this.rank.order,
          classId: 10001,
        }
      }).then(res => {
        this.page++;
        this.gameList.push(...res.data.list);
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
    GameList,
    Billboard,
    Loading
  }
}
</script>
<style lang="less" scoped>
  @import './ranklist.less';
</style>