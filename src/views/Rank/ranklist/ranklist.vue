<template>
  <div class="rank-list">
    <Loading :loading="loading" @refresh="createdMethod">
      <Scroll
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp"
        slot="loading-content">
        <div class="content" slot="content">
          <Billboard :gameTop="gameTop" :title="rank.title" :bg="rank.bg"></Billboard>
          <GameList :list="gameList" :type="2" />
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import GameList from '@/components/gamelist/gamelist.vue';
import Billboard from '@/components/billboard/billboard.vue';
export default {
  name:'RankList',
  props: {
    rank: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      gameList: [],
      gameTop:[],
      page:1,
      loading: 'ready',
      pullDownState: 'ready',
      pullUpState: 'ready',
      ajaxSwitch: true,
    }
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        url:"/api/game/index",
        data:{
          order: this.rank.order,
          classId: 10001,
          page: this.page,
        }
      }).then(res => {
        this.handleInitData(res);
        this.$nextTick(() => {
        this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail'
      })
    },
    handleInitData(res){
      this.gameList = res.data.list.slice(3);
      this.gameTop = res.data.list.slice(0,3);
    },
    addGameList(res) {
        this.gameList = this.gameList.concat(res.data.list);
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.page = 1;
        this.$axios({
          url:"/api/game/index",
          data:{
            page:this.page,
            order: this.rank.order,
            classId: 10001,
          }
        }).then(res => {
          this.handleInitData(res);
          this.pullDownState = 'success';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        }).catch(() => {
          this.pullDownState = 'fail';
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        })
      }
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.page++;
        this.$axios({
          url:"/api/game/index",
          data:{
            page:this.page,
            order: this.rank.order,
            classId: 10001,
          }
        }).then(res => {
          this.page++;
          this.gameList.push(...res.data.list);
          this.pullUpState = 'success';
          setTimeout(() => {
            this.pullUpState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        }).catch(() => {
          this.pullUpState = 'fail';
          setTimeout(() => {
            this.pullUpState = 'ready';
            this.ajaxSwitch = true;
          }, 1000)
        })
      }
    }
  },
  components: {
    Scroll,
    GameList,
    Billboard,
    Loading
  }
}
</script>
<style lang="less" scoped>
  @import './ranklist.less';
</style>