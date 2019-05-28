<template>
    <div class="search-list">
      <div class="tab-list">
        <router-link
          v-for="(item, index) in tabList"
          :key="index"
          class="tab-item"
          :to="{name: item.name}"
          replace>
          <span class="text">{{item.title}}</span>
        </router-link>
      </div>
      <main>
        <keep-alive>
          <router-view
            :searchKey="searchKey"
            :gameList="resultGameList"
            :giftList="resultGiftList"></router-view>
        </keep-alive>
      </main>
    </div>
</template>
<script>
import SearchGame from './SearchGame/SearchGame';
import SearchGift from './SearchGift/SearchGift';
export default {
  name:"SearchResult",
  props: {
    resultGameList: {
      type: Array,
      default() {
        return []
      }
    },
    resultGiftList: {
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
      tabList: [
        {
          title:'游戏',
          name: 'SearchGame'
        }, {
          title: '礼包',
          name: 'SearchGift'
        }],
    }
  }
}
</script>
<style lang="less" scoped>
  @import './searchresult.less';
</style>
