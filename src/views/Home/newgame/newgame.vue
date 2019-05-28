<template>
  <div class="newgame">
    <Loading 
      :loading="loading" 
      @refresh="createdMethod"
    >
      <van-pull-refresh 
        v-model="pullDownState" 
        @refresh="pullDown" 
        slot="loading-content"
      >
        <div class="content">
          <!-- today-newgame -->
          <div class="today-newgame" v-if="todayNewGameList.length !== 0">
            <div class="title">今日新游</div>
            <GameList
              :list="todayNewGameList"
              :type="1"
            ></GameList>
          </div>
          <!-- appointment -->
          <GameTitle
            :headerTitle="'预约专区'"
            :name="'Subscribe'"
          ></GameTitle>
          <GameList2
            :list="appointmentList"
            :type="2">
          </GameList2>
          <!-- time sort -->
          <van-list
            v-model="pullUpState"
            :finished="noMore"
            finished-text="没有更多了"
            @load="pullUp"
          >
            <div class="time-sort"
              v-for="(item, key, index) in sortGameObject"
              :key="index">
              <div class="title">{{key}}</div>
              <GameList
                :list="item"
              ></GameList>
            </div>
          </van-list>
        </div>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import Loading from '@/components/loading/loading.vue';

export default {
  name: 'NewGame',
  data() {
    return {
      todayNewGameList: [],
      appointmentList: [],
      originalGameList: [],
      sortGameObject: {},
      newGamePage: 2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        method: 'post',
        url: '/api/game/newList',
        data: {}
      })
      .then(res => {
        this.handleInitData(res);
        this.$nextTick(() => {
          this.loading = 'success';
        })
      })
      .catch(() => {
        this.loading = 'fail';
      })
    },
    // 数据初始化
    handleInitData(res) {
      this.sortGameObject = {};
      this.todayNewGameList = res.data.today_list;
      this.appointmentList = res.data.subscribe_list.slice(0, 4);
      this.originalGameList = res.data.list;
      this.handleListSort(this.originalGameList);
    },
    // 处理游戏排序
    handleListSort(list) {
      for(let ele of list) {
        ele.newstime = this.handleTimestamp(ele.newstime);
        if(this.sortGameObject.hasOwnProperty(ele.newstime)) {
          this.sortGameObject[ele.newstime].push(ele);
        } else {
          this.$set(this.sortGameObject, ele.newstime, []);
          this.sortGameObject[ele.newstime].push(ele);
        }    
      }
    },
    // 处理时间戳
    handleTimestamp(ts) {
      let temp = new Date(ts*1000),
          y = temp.getFullYear(),
          m = temp.getMonth() + 1,
          d = temp.getDate();
      return `${y}-${m}-${d}`;
    },
    pullDown() {
      this.$axios({
        method: 'post',
        url: '/api/game/newList',
        data: {}
      }).then(res => {
        this.handleInitData(res);
        this.newGamePage = 2;
        this.pullDownState = false;
        this.$toast('刷新成功');
      })
      .catch(() => {
        this.pullDownState = false;
      })
    },
    pullUp() {
      this.$axios({
        method: 'post',
        url: '/api/game/newList',
        data: {
          page: this.newGamePage
        }
      })
      .then(res => {
        this.pullUpState = false;
        this.newGamePage++;
        this.handleListSort(res.data.list); 
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
      }).catch(() => {
        this.pullUpState = false;
      })
    },
  },
  components: {
    GameList,
    GameList2,
    GameTitle,
    Loading,
  },
}
</script>
<style lang="less" scoped>
  @import './newgame.less';
</style>