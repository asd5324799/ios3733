<template>
  <div class="detail-gift">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="content">
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            :finished-text="text"
            @load="pullUp"
          >
            <GiftList :giftList="list"></GiftList>
          </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import GiftList from '@/components/giftlist/giftlist.vue';
export default {
  name: 'DetailGift',
  data() {
    return {
      list: [],
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      page: 1,
      id: 0,
      noMore: false,
      text: '没有更多了',
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.id !== JSON.parse(sessionStorage.getItem('gameInfo')).id) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.id = JSON.parse(sessionStorage.getItem('gameInfo')).id;
      this.page = 1;
      this.loading = 'ready';
      this.noMore = false;
      this.text = '没有更多了';
      this.$axios({
        url: '/api/card/index',
        data: {
          gameId: this.id,
          page: 1
        }
      }).then(res => {
        this.handleInitData(res);
        this.page++;
        this.loading = 'success';
        if(this.list.length <= 20) {
          this.noMore = true;
          if(this.list.length === 0) {
            this.text = '该游戏暂无礼包';
          }
        }
      })
      .catch(() => {
        this.loading = 'fail';
      });
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      this.page = 1;
      this.$axios({
        url: '/api/card/index',
        data: {
          gameId: this.id,
          page: 1
        }
      })
      .then((res) => {
        this.handleInitData(res);
        this.pullDownState = false;
      })
      .catch(() => {
        this.pullDownState = false;
      })
    },
    pullUp() {
      this.$axios({
        url: '/api/card/index',
        data: {
          gameId: this.id,
          page: this.page
        }
      }).then(res => {
        if(res.data.list.length <= 20) {
          this.noMore = true;
        }
        this.page++;
        this.list.push(...res.data.list);
        this.pullUpState = false;
      })
      .catch(() => {
        this.pullUpState = false;
      })
    },
  },
  components: {
    Loading,
    GiftList
  }
}
</script>
<style lang="less" scoped>
  @import './detail-gift.less';
</style>
