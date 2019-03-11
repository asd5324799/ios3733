<template>
  <div class="my-game-list">
    <Loading :loading="loading" @refresh="createdMethod">
      <Scroll 
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp"
        slot="loading-content">
        <div class="nomore" slot="content" v-if="list.length === 0">{{noneText}}</div>
        <div class="content" slot="content" v-else>
          <GameList :list="list"></GameList>
        </div>
      </Scroll>
    </Loading>
  </div>
</template>
<script>
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import GameList from '@/components/gamelist/gamelist.vue';
export default {
  name: 'MyGameList',
  props: {
    requestInfo:{
        type:Object,
        default() {
          return {}
        }
    }
  },
  data() {
    return {
      list: [],
      pullDownState: 'ready',
      pullUpState: 'ready',
      ajaxSwitch: true,
      page:2,
      loading: 'ready',
      token:'',
      noneText:''
    }
  },
  created() {
      this.token = localStorage.token;
    this.createdMethod();
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        url: this.requestInfo.requestUrl,
        data: {
            token:this.token,
            page:1,
            listRows:this.requestInfo.listRows,
        }
      }).then(res => {
        this.handleInitData(res);
        if(res.data.list.length < 20) {
          this.pullUpState = 'nomore';
        }
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }).catch(() => {
        this.loading = 'fail';
      })
      this.noneText = this.requestInfo.noneText;
    },
    handleInitData(res) {
      for(let i of res.data.list) {
        this.list.push(i);
      }
    },
    pullDown() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
        this.requestInfo.page = 2;
        this.$axios({
          url:this.requestInfo.requestUrl,
          data:{
            token:this.token,
            page:1,
            listRows:this.requestInfo.listRows
          }
        }).then(res => {
          this.list = [];
          this.handleInitData(res);
          this.pullDownState = 'success';
          this.pullUpState = 'ready';
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
        this.$axios({
          url:this.requestInfo.requestUrl,
          data:{
            token:this.token,
            page:this.requestInfo.page,
            listRows:this.requestInfo.listRows
          }
        }).then(res => {
          this.handleInitData(res);
          this.pullUpState = 'success';
          setTimeout(() => {
            this.pullUpState = 'ready';
            this.ajaxSwitch = true;
            this.requestInfo.page++;
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
    Loading,
    Scroll,
    GameList,
  }
}
</script>
<style lang="less" scoped>
  @import './mygamelist.less';
</style>