<template>
  <div class="game-class">
    <Navigation :title="`${title}游戏列表`"/>
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh 
        v-model="pullDownState" 
        @refresh="pullDown" 
        slot="loading-content"
      >
        <van-list
          v-model="pullUpState"
          :finished="noMore"
          finished-text="没有更多了"
          @load="pullUp"
        >
          <!-- <GameList :list="list" class="content" :type="5"></GameList> -->
          <GameList :list="list" class="content"></GameList>
        </van-list>
      </van-pull-refresh>
    </Loading>
  </div>
</template>
<script>
import Navigation from '@/components/navigation/navigation.vue';
import GameList from '@/components/gamelist/gamelist.vue';
import Loading from '@/components/loading/loading.vue';

export default {
  data() {
    return {
      list: [],
      title: '',
      classId: 10001,
      type: 0,
      page: 2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
      typeList: [{"id":0,"title":"类型"},{"id":"2","title":"角色"},{"id":"16","title":"回合"},{"id":"1","title":"卡牌"},{"id":"3","title":"策略"},{"id":"8","title":"动作"},{"id":"10","title":"休闲"},{"id":"5","title":"即时"},{"id":"6","title":"格斗"},{"id":"11","title":"模拟"}]
    }
  },
  activated() {
    let type = JSON.parse(this.$route.query.type);
    this.classId = 10001;
    this.type = 0;
    this.noMore = false;
    if(type === 0) {
      this.title = '变态版';
      this.classId = 1;
    } else if (type === 1) {
      this.title = '满V版';
      this.classId = 49;
    } else if(type === 2){
      this.title = 'GM版';
      this.classId = 43;
    } else {
      this.title = this.$route.query.tag;
      this.typeList.forEach(ele => {
        if(ele.title === this.$route.query.tag) {
          this.type = ele.id
        }
      });
    }
    this.createdMethod();
  },
  created() {
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.page = 2;
      this.$axios({
        url: '/api/game/index',
        data: {
          order: 0,
          type: this.type,
          sizeId: 0,
          classId: this.classId,
        }
      }).then(res => {
        this.handleInitData(res);
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail';
      })
    },
    handleInitData(res) {
      this.list = res.data.list;
    },
    pullDown() {
      this.page = 2;
      this.noMore = false;
      this.$axios({
        url: '/api/game/index',
        data: {
          order: 0,
          type: this.type,
          sizeId: 0,
          classId: this.classId,
        }
      }).then(res => {
        this.$toast('刷新成功');
        this.handleInitData(res);
        this.pullDownState = false;
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
      }).catch(() => {
        this.pullDownState = false;
      })
    },
    pullUp() {
      this.$axios({
        url: '/api/game/index',
        data: {
          order: 0,
          type: this.type,
          sizeId: 0,
          classId: this.classId,
          page: this.page
        }
      }).then(res => {
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
        this.pullUpState = false;
        this.page++;
        this.list.push(...res.data.list);
      }).catch(() => {
        this.pullUpState = false;
      })
    },
  },
  components: {
    Navigation,
    Loading,
    GameList
  }
}
</script>
<style lang="less" scoped>
  @import './GameClass.less';
</style>