<template>
  <div class="category">
    <div class="filter-list">
      <ul 
        class="list"
        v-for="(list, index) in lists"
        :key="index">
        <li 
          class="item"
          v-for="(item, itemIndex) in lists[index]"
          :key="itemIndex"
          :class="{'active': selectedList[index]===itemIndex}"
          @click="changeSelectList(index, itemIndex)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div class="tab-list">
      <span 
        class="tab-item" 
        @click="changeSelectTab(0)"
        :class="{active: selectedTab === 0}">推荐</span>
      <span 
        class="tab-item"
        @click="changeSelectTab(1)"
        :class="{active: selectedTab === 1}">最新</span>
      <span 
        class="tab-item"
        @click="changeSelectTab(2)"
        :class="{active: selectedTab === 2}">最热</span>
    </div>
    <div class="tab-content">
    </div>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';

export default {
  name: 'Category',
  data() {
    return {
      lists: [],
      selectedList: [0, 0, 0],
      selectedTab: 0,
    }
  },
  created() {
    this.$axios.post('/api/game/cate')
    .then(this.handleInitData);
  },
  methods: {
    handleInitData(res) {
      this.lists.push(res.data.class_list);
      this.lists.push(res.data.size_cate);
      this.lists.push(res.data.game_cate);
    },
    changeSelectList(number, index) {
      this.selectedList.splice(number, 1, index);
    },
    changeSelectTab(index) {
      this.selectedTab = index;
    }
  },
  compoennts: {
    GameList,
  }
}
</script>
<style lang="less" scoped>
  @import './category.less';
</style>
