<template>
  <div class="search-gift">
    <Scroll
      :pullUp="pullUpState"
      @pullingUp="pullUp">
      <GiftList class="content" :giftList="list" slot="content"/>
    </Scroll>
  </div>
</template>
<script>
import Scroll from '@/components/scroll/scroll.vue';
import GiftList from '@/components/giftlist/giftlist.vue';
export default {
  name: 'SearchGift',
  props: {
    list: {
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
      giftList: [],
      ajaxSwitch: true,
      pullUpState: 'ready'
    }
  },
  watch: {
    list() {
      this.handleInitData();
    }
  },
  mounted() {
    this.handleInitData();
  },
  methods: {
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          url: '/api/search/index',
          data: {
            page: this.page,
            keyword: this.searchKey,
            fromAction: 1,
            type: 101
          }
        }).then(res => {
          this.giftList.push(...res.data.card_list);
          if(res.data.card_list.length < 20) {
            this.pullUpState = 'nomore';
          } else {
            this.pullUpState = 'success';
            setTimeout(() => {
              this.pullUpState = 'ready';
              this.ajaxSwitch = true;
            }, 1000)
          }
        }).catch((e) => {
          this.pullUpState = 'fail';
          setTimeout(() => {
            this.pullUpState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)          
        })
      }
    },
    handleInitData() {
      this.page = 2;
      this.ajaxSwitch = true;
      this.giftList = this.list;
      if(this.giftList.length < 20) {
        this.pullUpState = 'nomore';
      } else {

      }
    }
  },
  components: {
    GiftList,
    Scroll,
  }
}
</script>
<style lang="less" scoped>
  @import './searchgift.less';
</style>