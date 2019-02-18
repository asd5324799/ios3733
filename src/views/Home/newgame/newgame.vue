<template>
  <div class="newgame">
    <Loading 
      :loading="loading" 
      @refresh="createdMethod">
      <Scroll 
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp"
        slot="loading-content">
        <div class="content" slot="content">
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
            @clickDo="toSubscribePage"
          ></GameTitle>
          <GameList2
            :list="appointmentList"
            :type="2">
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
      </Scroll>
    </Loading> 
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import GameList2 from '@/components/gamelist2/gamelist2.vue';
import GameTitle from '@/components/gametitle/gametitle.vue';
import Scroll from '@/components/scroll/scroll.vue';
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
      ajaxSwitch: true,
      loading: 'ready',
      pullDownState: 'ready',
      pullUpState: 'ready',
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
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          method: 'post',
          url: '/api/game/newList',
          data: {}
        }).then(res => {
          this.handleInitData(res);
          this.newGamePage = 2;
          this.pullDownState = 'success';
          this.$nextTick(() => {
            this.ajaxSwitch = true;
            setTimeout(() => {
              this.pullDownState = 'ready';
            }, 50);
          })
        }).catch(() => {
          this.pullDownState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(() => {
              this.pullDownState = 'ready';
          }, 1000);
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.$axios({
          method: 'post',
          url: '/api/game/newList',
          data: {
            page: this.newGamePage
          }
        })
        .then(res => {
          if(res.data.list.length < 20) {
            this.pullUpState = 'nomore';
            this.ajaxSwitch = true;
            this.handleListSort(res.data.list); 
          } else {
            this.pullUpState = 'success';
            this.newGamePage++;
            this.handleListSort(res.data.list); 
            this.$nextTick(() => {
              this.ajaxSwitch = true;
              setTimeout(() => {
              this.pullUpState = 'ready';
            }, 50);
            })
          }
        }).catch(() => {
          this.pullUpState = 'fail';
          this.ajaxSwitch = true;
          setTimeout(() => {
            this.pullUpState = 'ready';
          }, 50);    
        })
      }
    },
    toSubscribePage() {
      this.$router.push({name: 'Subscribe'});
    }
  },
  components: {
    GameList,
    GameList2,
    GameTitle,
    Loading,
    Scroll
  },
}
</script>
<style lang="less" scoped>
  @import './newgame.less';
</style>