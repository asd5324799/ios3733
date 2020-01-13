<template>
  <div class="category">
    <Loading :loading="loading" @refresh="createdMethod">
      <van-pull-refresh v-model="pullDownState" @refresh="pullDown" slot="loading-content">
        <div class="content">
          <div class="filter-list">
            <Swiper :options="swiperOption"
              class="list"
              v-for="(value, key, index) in lists"
              :key="index"
              >
              <SwiperSlide 
                class="item"
                v-for="(item, itemIndex) in value"
                :key="itemIndex"
                :class="{active: itemIndex === selectedList[index]}">
                <div 
                  class="text" 
                  @click="changeSelectList(index, itemIndex)">
                  {{item.title}}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="tab-content">
            <van-list
              v-model="pullUpState"
              :finished="noMore"
              finished-text="没有更多了"
              @load="pullUp"
            >
              <!-- <GameList :list="gameList" :type="5"></GameList> -->
              <GameList :list="gameList"></GameList>
            </van-list>
          </div>
        </div>
      </van-pull-refresh>
    </Loading>
    <div class="fixedTop" v-if="allListsShow">{{allLists}}</div>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import Loading from '@/components/loading/loading.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'Category',
  data() {
    return {
      selectedList: [0, 0, 0, 0],
      lists: {
        classList: [],
        typeList: [],
        sizeList: [],
        tabList: [{title: '推荐', id: 201}, {title: '最新', id: 3}, {title: '最热', id: 1}],
      },
      gameList: [],
      swiperOption: {
        slidesPerView : 'auto',
        freeMode: true,
        preventClicks : false,
      },
      page : 2,
      loading: 'ready',
      pullDownState: false,
      pullUpState: false,
      noMore: false,
      allListsShow: false
    }
  },
  computed: {
    allLists() {
      let str1 = this.selectedList[0] === 0 ? '' : `·${this.lists.classList[this.selectedList[0]].title}`;
      let str2 = this.selectedList[1] === 0 ? '' : `·${this.lists.typeList[this.selectedList[1]].title}`;
      let str3 = this.selectedList[2] === 0 ? '' : `·${this.lists.sizeList[this.selectedList[2]].title}`;
      let str4 = this.lists.tabList[this.selectedList[3]].title;
      let allLists = str4 + str1 + str2 + str3;
      return  allLists
    }
  },
  created() {
    this.createdMethod();
  },
  mounted() {
    let height = 130/375*document.body.clientWidth;
    document.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      if(top >= height) {
        this.allListsShow = true;
      } else {
        this.allListsShow = false;
      }
    })
  },
  methods: {
    createdMethod() {
      this.loading = 'ready';
      this.$axios.all([
        this.$axios({
          url: '/api/game/cate',
          data: {
            isNav: 1
          }
        }), 
        this.$axios({
          url: '/api/game/index',
          data: {
            order: 201
          }
        })
      ])
      .then(this.$axios.spread((res1, res2) => {
        this.handleInitData(res1);
        if(res2.data.list.length < 20) {
          this.noMore = true;
        }
        this.gameList = res2.data.list;
        this.$nextTick(() => {
          this.loading = 'success';
        })
      }))
      .catch(() => {
        this.loading = 'fail';
      });
    },
    handleInitData(res) {
      this.lists.classList = res.data.class_list;
      this.lists.sizeList = res.data.size_cate;
      this.lists.typeList = res.data.game_cate;
      sessionStorage.setItem('typeList', JSON.stringify(res.data.game_cate));
    },
    changeSelectList(number, index) {
      this.page = 1;
      this.selectedList.splice(number, 1, index);
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      });
      this.$axios({
        method: 'post',
        url: '/api/game/index',
        data: {
          page: this.page,
          order: this.lists.tabList[this.selectedList[3]].id,
          classId: this.lists.classList[this.selectedList[0]].id,
          type: this.lists.typeList[this.selectedList[1]].id,
          sizeId: this.lists.sizeList[this.selectedList[2]].id
        }
      }).then(res => {
        this.gameList = res.data.list;
        this.page++;
        if(res.data.list.length < 20) {
          this.noMore = true;
        } else {
          this.noMore = false;
        }
        this.$toast.clear();
      })
    },
    pullUp() {
      this.$axios({
        url: '/api/game/index',
        data: {
          page: this.page,
          order: this.lists.tabList[this.selectedList[3]].id,
          classId: this.lists.classList[this.selectedList[0]].id,
          type: this.lists.typeList[this.selectedList[1]].id,
          sizeId: this.lists.sizeList[this.selectedList[2]].id
        }
      }).then(res => {
        this.pullUpState = false;
        this.page++;
        this.gameList.push(...res.data.list);
        if(res.data.list.length < 20) {
          this.noMore = true;
        }
      }).catch(() => {
        this.pullUpState = false;
      })
    },
    pullDown() {
      // 获取各个列表的状态
      this.$axios({
        url: '/api/game/index',
        data: {
          order: this.lists.tabList[this.selectedList[3]].id,
          classId: this.lists.classList[this.selectedList[0]].id,
          type: this.lists.typeList[this.selectedList[1]].id,
          sizeId: this.lists.sizeList[this.selectedList[2]].id
        }
      })
      .then(res => {
        this.gameList = res.data.list
        this.page = 2;
        this.pullDownState = false;
        this.$toast('刷新成功');
      })
      .catch(() => {
      this.pullDownState = false;
      this.$toast('刷新失败');
      })
    },
  },
  components: {
    GameList,
    Swiper,
    SwiperSlide,
    Loading,
  }
}
</script>
<style lang="less" scoped>
  @import './category.less';
</style>
