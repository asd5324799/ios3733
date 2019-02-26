<template>
    <div class="search-list">
      <div class="tab-list">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          class="tab-item"
          :class="{current: currentTab === index}"
          @click="changeSlide(index)">
        <span class="text">{{item}}</span>
        </div>
      </div>
      <Swiper :options="swiperOption" class="swiper" ref="Swiper">
        <SwiperSlide>
          <SearchGame v-if="resultGameList.length !== 0" :list="resultGameList" />
          <div v-else class="empty">没有找到相关游戏</div>
        </SwiperSlide>
        <SwiperSlide>
          <SearchGift v-if="resultGiftList.length !== 0" :list="resultGiftList"/>
          <div v-else class="empty">没有找到相关礼包</div>
        </SwiperSlide>
      </Swiper>
    </div>
</template>
<script>
import {swiper as Swiper, swiperSlide as SwiperSlide} from 'vue-awesome-swiper';
import SearchGame from './SearchGame/SearchGame';
import SearchGift from './SearchGift/SearchGift';
export default {
  name:"SearchResult",
  props: {
    resultGameList: {
      type: Array,
      default() {
        return []
      }
    },
    resultGiftList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      tabList: ['游戏', '礼包'],
      currentTab: 0,
      swiperOption: {
        on: {
          slideChange: () => {
            this.currentTab = this.swiper.activeIndex;
          }
        }
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.Swiper.swiper
    }
  },
  methods: {
    changeSlide(index) {
      this.swiper.slideTo(index);
      this.currentTab = index;
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    SearchGame,
    SearchGift
  }
}
</script>
<style lang="less" scoped>
  @import './searchresult.less';
</style>
