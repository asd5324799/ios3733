<template>
  <div class="search-gift">
    <GiftList :giftList="list"/>
  </div>
</template>
<script>
import GiftList from '@/components/giftlist/giftlist.vue';
export default {
  name: 'SearchGift',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      page:1,
    }
  },
  methods:{
  },
  components: {
    GiftList
  }
}
</script>
<style lang="less" scoped>
  @import './searchgift.less';
</style>
