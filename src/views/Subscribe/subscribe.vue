<template>
  <div class="subscribe">
    <Navigation :title="'预约专区'"></Navigation>
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh 
        v-model="pullDownState" 
        @refresh="pullDown" 
        slot="loading-content"
      >
        <van-list
          v-model="pullUpState"
          :finished="noMore"
          finished-text="没有更多了"
          @load="pullUp"
        >
          <GameList :list="list" :type="4" class="content"></GameList>
        </van-list>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
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
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.page = 2;
      let data;
      if(sessionStorage.getItem('token') !== '') {
        data = {
          page: 1,
          listRows: 20,
          token: sessionStorage.getItem('token')
        }
      } else {
        data = {
          page: 1,
          listRows: 20,
        }
      }
      this.$axios({
        url: '/api/game/subscribeGames',
        data: data,
      }).then(res => {
        this.handleInitData(res);
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
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
      this.page = 2;
      let data;
      if(sessionStorage.getItem('token') !== '') {
        data = {
          page: 1,
          listRows: 20,
          token: sessionStorage.getItem('token')
        }
      } else {
        data = {
          page: 1,
          listRows: 20,
        }
      }
      this.$axios({
        url: '/api/game/subscribeGames',
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
    pullUp() {
     let data;
      if(sessionStorage.getItem('token') !== '') {
        data = {
          page: this.page,
          listRows: 20,
          token: sessionStorage.getItem('token')
        }
      } else {
        data = {
          page: this.page,
          listRows: 20,
        }
      }
      this.$axios({
        url: '/api/game/subscribeGames',
        data: data
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
  },
  components: {
    Navigation,
    GameList,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './subscribe.less';
</style>