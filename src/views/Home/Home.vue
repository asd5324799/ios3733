<template>
  <div class="home">
    <!-- header -->
    <!-- swiper -->

    <!-- nav -->
    <ul class="nav-list">
      <li 
      v-for="(item, index) in navList"
      :key="index"
      class="nav-item">
        <div 
        :style="{backgroundColor: item.bg_color,backgroundImage: 'url(' + item.icon_url + ')'}"
        class="nav-icon">
        </div>
        <div class="nav-text">{{item.text1}}</div>
      </li>
    </ul>
    <!-- qualityRecommend -->
    <GameTitle 
      :headerTitle="qualityRecommend.header_title">
    </GameTitle>
    <GameList2
      :list="qualityRecommend.game_list"
    ></GameList2>
    <!-- qualityFirstList -->
    <GameTitle
    :headerTitle="'精品首发'"></GameTitle>
    <GameList 
      :list="qualityFirstList"
      :type="1">
    </GameList>
    <!-- newGameAppointment -->
    <GameTitle
      :headerTitle="newGameAppointment.header_title"
    ></GameTitle>
    <GameList2
      :list="newGameAppointment.game_list"
    ></GameList2>
    <!-- newGameFirstList -->
    <GameList
      :list="newGameFirstList"
      :type="1"
    >
    </GameList>
    <!-- footer -->
  </div>
</template>

<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';

export default {
  data() {
    return {
      navList: [],
      qualityRecommend: {},
      qualityFirstList: [],
      newGameAppointment: {},
      newGameFirstList: [],
    }
  },
  methods: {
    handleInitData(res) {   
      this.navList = res.data.tab_action;
      let temp = 0;
      // 过滤列表以外的节点
      res.data.game_list.forEach((item, index) => {
        // 判断是否包含view_type字段
        if(item.hasOwnProperty('view_type')) {
          if(temp === 0) {
            this.qualityRecommend = res.data.game_list.slice(0, 1)[0];
            temp++;
          } else {
            this.qualityFirstList = res.data.game_list.slice(1, index);
            this.newGameAppointment = res.data.game_list.splice(index, 1)[0];
            this.newGameFirstList = res.data.game_list.splice(index);
          }
        }
      });
    }
  },
  mounted() {
    this.$axios.post('/api/index/index')
    .then(this.handleInitData)
  },
  components: {
    GameList,
    GameList2,
    GameTitle,
  }
}
</script>
<style lang="less">
  @import './home.less';
</style>

