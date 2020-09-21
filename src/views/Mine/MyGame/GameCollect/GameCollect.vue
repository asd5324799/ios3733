<template>
  <div class="game-collect">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh 
        v-model="pullDownState" 
        @refresh="pullDown" 
        slot="loading-content"
      >
        <van-list
          v-model="pullUpState"
          :finished="noMore"
          :finished-text="'没有更多了'"
          @load="pullUp"
        >
          <GameList :list="list" class="content"></GameList>
        </van-list>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import Loading from '@/components/loading/loading.vue';

export default {
  data() {
    return {
      list: [],
      page: 2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
    }
  },
  activated() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.page = 2;
      this.noMore = false;
      let token = sessionStorage.getItem('token');
      this.$axios({
        url: '/api/resource/collection',
        data: {
          token: token,
          listRows: 20,
          classId: 3,
        }
      }).then(res => {
        this.handleInitData(res);
        if(res.data.list.length < 20) {
          this.noMore = true;
          if(res.data.list.length === 0) {
            this.text = '您还没有收藏游戏';
          }
        }
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }).catch((res) => {
        console.log(res);
        this.loading = 'fail';
      })
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullUp() {
      this.$axios({
        url: '/api/resource/collection',
        data: {
          token: sessionStorage.getItem('token'),
          listRows: 20,
          page: this.page,
        }
      }).then(res => {
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
        this.pullUpState = false;
        this.page++;
        this.list.push(...res.data.list);
      }).catch(() => {
        this.pullUpState = false;
      })
    },
    pullDown() {
      this.page = 2;
      this.noMore = false;
      let data;
      data = {
        classId: 3,
        page: 1,
        listRows: 20,
        token: sessionStorage.getItem('token')
      }
      this.$axios({
        url: '/api/resource/collection',
        data: data
      }).then(res => {
        this.$toast('刷新成功');
        this.handleInitData(res);
        this.pullDownState = false;
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
      }).catch(() => {
        this.pullDownState = false;
      })
    },
  },
  components: {
    Loading,
    GameList
  }
}
</script>
<style lang="less" scoped>
  @import './GameCollect.less';
</style>