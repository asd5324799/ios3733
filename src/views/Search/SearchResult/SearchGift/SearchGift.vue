<template>
  <div class="search-gift">
    <van-list
    v-model="pullUpState"
    :finished="noMore"
    :finished-text="text"
    @load="pullUp"
    >
      <GiftList class="content" :giftList="list"/>
    </van-list>
  </div>
</template>
<script>
import GiftList from '@/components/giftlist/giftlist.vue';
export default {
  name: 'SearchGift',
  props: {
    giftList: {
      type: Array,
      default() {
        return []
      }
    },
    searchKey: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      page: 2, //初始页码
      list: [],
      pullUpState: false,
      noMore: false,
      text: '没有更多了',
    }
  },
  watch: {
    giftList() {
      this.handleInitData();
    }
  },
  mounted() {
    this.handleInitData();
  },
  methods: {
    pullUp() {
      this.$axios({
        url: '/api/search/index',
        data: {
          page: this.page,
          keyword: this.searchKey,
          fromAction: 1,
          type: 101
        }
      }).then(res => {
        this.page++;
        this.list.push(...res.data.card_list);
        if(res.data.card_list.length < 20) {
          this.noMore = true;
          if(this.list.length === 0) {
            this.text = '没有相关礼包';
          }
        }
        this.pullUpState = false;
      }).catch(() => {
        this.pullUpState = false;        
      })
    },
    handleInitData() {
      this.page = 2;
      this.list = JSON.parse(JSON.stringify(this.giftList));
      this.noMore = false;
      this.text = '没有更多了';
      if(this.list.length < 20) {
        this.noMore = false;
        if(this.list.length === 0) {
          this.text = '没有相关礼包';
        }
      }
    }
  },
  components: {
    GiftList,
  }
}
</script>
<style lang="less" scoped>
  @import './searchgift.less';
</style>