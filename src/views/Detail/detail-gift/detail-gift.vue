<template>
  <div class="detail-gift">
    <Loading :loading="loading" @refresh="createdMethod">
      <div slot="loading-content">
        <div class="content">
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            :finished-text="text"
            @load="pullUp"
          >
            <GiftList :giftList="list" @updateCardpass="updateCardpass"></GiftList>
          </van-list>
        </div>
      </div>
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
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.id = this.$store.getters.gameInfo.id;
      this.page = 2;
      this.loading = 'ready';
      this.noMore = false;
      this.text = '没有更多了';

      this.$axios({
        url: '/api/card/index',
        data: {
          gameId: this.id,
          page: 1,
          token: sessionStorage.getItem('token')
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
      let list = []
      res.data.list.forEach(ele => {
        if(ele.classid !== '22') {
          list.push(ele);
        }
      });
      this.list = list;
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
        res.data.list.forEach(ele => {
          if(ele.classid !== '22') {
            this.list.push(ele);
          }
        });
        // this.list.push(...res.data.list);
        this.pullUpState = false;
      })
      .catch(() => {
        this.pullUpState = false;
      })
    },
    updateRemain(index) {
      this.$set(this.list[index], 'remain', 0);
    },
    updateCardpass(index, cardpass) {
      this.$set(this.list[index], 'cardpass', cardpass);
    }
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
