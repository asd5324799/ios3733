<template>
  <div class="my-gift">
      <Navigation title="我的礼包"/>
    <!-- header -->
    <main>
      <div class="my-gift-list">
          <Loading :loading="loading" @refresh="createdMethod">
            <van-pull-refresh 
              v-model="pullDownState" 
              @refresh="pullDown" 
              slot="loading-content"
            >
              <van-list
                v-model="pullUpState"
                :finished="noMore"
                :finished-text="text"
                @load="pullUp"
              >
                <div 
                  v-for="(item, index) of list"
                  :key="index"
                  class="my-gift-list"
                >
                  <div class="gift-info">
                    <router-link 
                    tag="div"
                    :to="{name:'GiftDetail',params:{id:item.id}}" 
                    class="gift-content">
                      <div class="title">                    
                        <i class="gift-icon"></i>
                        <div class="gift-name">{{item.title}}</div>
                      </div>
                      <div class="code">礼包码:<span class="orange">{{item.cardpass}}</span></div>
                      <div 
                        class="boon"
                      >{{item.cardbody}}</div>
                    </router-link>
                    <div 
                      v-clipboard:copy="item.cardpass"
                      v-clipboard:success="copySuccess"
                      v-clipboard:error="copyError"
                      class="get-gift"
                      >复制</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </Loading>
      </div>
    </main>
  </div>
</template>

<script>
import Loading from '@/components/loading/loading.vue';
import Navigation from '@/components/navigation/navigation.vue';

export default {
  name: 'MyGift',
  data(){
    return{
      list: [],
      page: 2,
      text: '没有更多了',
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
    }
  },
  created() {
    this.createdMethod();
  },
  activated() {
    this.createdMethod(); 
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios({
        url: '/api/card/mine',
        data: {
          token: sessionStorage.getItem('token'),
          page:1
        }
      }).then(res => {
        this.handleInitData(res);
        if(res.data.list.length < 20) {
          this.noMore = true;
          if(res.data.list.length === 0) {
            this.text = '您还没有领取过礼包';
          }
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
      let data;
      data = {
        page: 1,
        token: sessionStorage.getItem('token')
      }
      this.$axios({
        url: '/api/card/mine',
        data: data
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
     let data;
      data = {
        page: this.page,
        token: sessionStorage.getItem('token')
      }
      this.$axios({
        url: '/api/card/mine',
        data: data
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
    copySuccess() {
      this.$Dialog.alert({
        title: '礼包码已复制',
        message: '使用说明：游戏内复制-兑换'
      })
    },
    copyError() {
      this.$Dialog.alert({
        message: '复制失败，请手动复制'
      })
    },
  },
  components: {
    Navigation,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './mygift.less';
</style>

