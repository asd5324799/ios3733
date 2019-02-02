<template>
  <transition name="move">
    <div class="newgame">
      <!-- today-newgame -->
      <div class="today-newgame">
        <div class="title">今日新游</div>
        <GameList
          :list="todayNewGameList"
          :type="1"
        ></GameList>
      </div>
      <!-- appointment -->
      <GameTitle
        :headerTitle="'预约专区'"
        :router="'Appointment'"
      >
      </GameTitle>
      <GameList2
        :list="appointmentList"
        :type="'2'">
      </GameList2>
      <!-- time sort -->
      <div class="time-sort"
        v-for="(item, key, index) in sortGameObject"
        :key="index">
        <div class="title">{{key}}</div>
        <GameList
          :list="item"
        ></GameList>
      </div>
    </div>
  </transition>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';

export default {
  name: 'NewGame',
  data() {
    return {
      todayNewGameList: [],
      appointmentList: [],
      originalGameList: [],
      sortGameObject: {}
    }
  },
  methods: {
    handleInitData(res) {
      this.todayNewGameList = res.data.today_list;
      this.appointmentList = res.data.subscribe_list.slice(0, 4);
      this.originalGameList = res.data.list;
    this.handleListSort(this.originalGameList);
    },
    handleListSort(list) {
      for(let ele of list) {
        ele.newstime = this.handleTimestamp(ele.newstime);
        if(this.sortGameObject.hasOwnProperty(ele.newstime)) {
          this.sortGameObject[ele.newstime].push(ele);
        } else {
          this.sortGameObject[ele.newstime] = [];
          this.sortGameObject[ele.newstime].push(ele);
        }    
      }
    },
    handleTimestamp(ts) {
      let temp = new Date(ts*1000),
          y = temp.getFullYear(),
          m = temp.getMonth() + 1,
          d = temp.getDate();
      return `${y}-${m}-${d}`;
    }
  },
  created() {
    this.$axios.post('/api/game/newList')
    .then(this.handleInitData);
  },
  components: {
    GameList,
    GameTitle,
    GameList2,
  },
}
</script>
<style lang="less" scoped>
  @import './newgame.less';
</style>