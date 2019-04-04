<template>
  <div class="category">
    <Loading :loading="loading" @refresh="createdMethod">
      <Scroll
        :pullDown="pullDownState"
        :pullUp="pullUpState"
        @pullingDown="pullDown"
        @pullingUp="pullUp" 
        @pullDownY="pullDownY"
        :scrollRefresh="scrollRefresh"
        slot="loading-content">
        <div class="content" slot="content">
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
            <GameList :list="gameList"></GameList>
          </div>
        </div>
      </Scroll>
    </Loading>
    <div class="fixedTop" v-if="allLists !== 'false'">{{allLists}}</div>
  </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue';
import Loading from '@/components/loading/loading.vue';
import Scroll from '@/components/scroll/scroll.vue';
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'Category',
  props: {
    selectedList: Array
  },
  data() {
    return {
      lists: {
        classList: [],
        typeList: [],
        sizeList: [],
        tabList: [{title: '推荐', id: 201}, {title: '最新', id: 3}, {title: '最热', id: 1}],
      },
      gameList: [],
      ajaxSwitch: true,
      page: 2,
      loading: 'ready',
      swiperOption: {
        slidesPerView : 'auto',
        freeMode: true,
        preventClicks : false,
      },
      pullDownState: 'ready',
      pullUpState: 'ready',
      scrollRefresh: false,
      allLists: 'false',
    }
  },
  watch: {
    selectedList() {
      this.scrollRefresh = true; 
      setTimeout(() => {
        this.scrollRefresh = false;
      }, 1000);
    }
  },
  created() {
    this.createdMethod();
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
          this.pullUpState = 'nomore';
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
      this.$emit('changeSelectedList', number, index)
    },
    pullUp() {
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
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
          if(res.data.list.length < 20) {
            this.pullUpState = 'nomore';
            this.ajaxSwitch = true;
            this.gameList.push(...res.data.list);
          } else {
            this.pullUpState = 'success';
            this.page++;
            this.gameList.push(...res.data.list);
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
    pullDown() {
      // 获取各个列表的状态
      if(this.ajaxSwitch) {
        this.ajaxSwitch = false;
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
          this.pullDownState = 'success';
          this.page = 2;
          this.gameList = res.data.list
          setTimeout(() => {
            this.pullDownState = 'ready';
            this.ajaxSwitch = true;
          }, 1000);
        })
        .catch(() => {
          this.pullDownState = 'fail';
          setTimeout(() => {
              this.pullDownState = 'ready';
              this.ajaxSwitch = true;
          }, 1000);
        })
      }
    },
    pullDownY(data) {
      if(data === true) {
        let str1 = this.selectedList[0] === 0 ? '' : `·${this.lists.classList[this.selectedList[0]].title}`;
        let str2 = this.selectedList[1] === 0 ? '' : `·${this.lists.typeList[this.selectedList[1]].title}`;
        let str3 = this.selectedList[2] === 0 ? '' : `·${this.lists.sizeList[this.selectedList[2]].title}`;
        let str4 = this.lists.tabList[this.selectedList[3]].title;
        this.allLists = str4 + str1 + str2 + str3;
      } else {
        this.allLists = 'false';
      }
    }
  },
  components: {
    GameList,
    Swiper,
    SwiperSlide,
    Loading,
    Scroll
  }
}
</script>
<style lang="less" scoped>
  @import './category.less';
</style>
