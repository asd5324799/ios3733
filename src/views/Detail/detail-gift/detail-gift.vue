<template>
  <div class="detail-gift">
    <Loading :loading="loading">
      <Scroll
        slot="loading-content"
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp">
        <div class="nomore" slot="content" v-if="list.length === 0">该游戏暂无礼包</div>
        <div class="content" slot="content" v-else>
          <GiftList :giftList="list"></GiftList>
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import GiftList from '@/components/giftlist/giftlist.vue';
export default {
  name: 'DetailGift',
  data() {
    return {
      list: [],
      loading: 'ready',
      pullUpState: 'ready',
      pullDownState: 'ready',
      page: 1,
      ajaxSwitch: true,
      id: 0
    }
  },
  watch: {
    '$route' (to, from) {
      if(from.name === 'Detail' && to.name === 'Detail') {
        this.createdMethod();
      }
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    if(this.id !== JSON.parse(this.$route.query.id)) {
      this.createdMethod();
    }
  },
  methods: {
    createdMethod() {
      this.id = JSON.parse(this.$route.query.id);
      this.page = 1;
      this.$axios({
        url: '/api/card/index',
        data: {
          gameId: this.id,
          page: this.page
        }
      }).then(res => {
        this.handleInitData(res);
        this.page++;
        this.$nextTick(() => {
          this.loading = 'success';
          if(this.list.length <= 20) {
              this.pullUpState = 'nomore';
            } else {
              this.pullUpState = 'ready';
            }
        })
      })
      .catch(() => {
        this.loading = 'fail';
      });
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.page = 1;
        this.$axios({
          url: '/api/card/index',
          data: {
            gameId: this.id,
            page: this.page
          }
        })
        .then((res) => {
          this.handleInitData(res);
          this.pullDownState = 'success';
          this.ajaxSwitch = true;
          setTimeout(()=> {
            this.pullDownState = 'ready';
          }, 20)
        })
        .catch(() => {
          this.pullDownState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(()=> {
            this.pullDownState = 'ready';
          }, 20)
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: '/api/card/index',
          data: {
            gameId: this.id,
            page: this.page
          }
        }).then(res => {
          if(res.data.list.length <= 20) {
            this.pullUpState = 'nomore';
            this.ajaxSwitch = true;
          } else {
            this.page++;
            this.list.push(...res.data.list);
            this.pullUpState = 'success';
            this.ajaxSwitch = true;
            setTimeout(() => {
              this.pullUpState = 'ready';
            }, 50);
          }
        })
        .catch(() => {
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
    Loading,
    Scroll,
    GiftList
  }
}
</script>
<style lang="less" scoped>
  @import './detail-gift.less';
</style>
