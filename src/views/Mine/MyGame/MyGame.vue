<template>
  <div class="my-game">
    <Navigation title="我的游戏"/>
    <!-- header -->
    <div class="tab-list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="tab-item"
      >
      <router-link 
        tag="span"
        class="text"
        :to="{name: item.name}"
        replace
      >
        {{item.title}}
      </router-link>
      </div>
    </div>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/navigation.vue';

export default {
  name: 'MyGame',
  data(){
    return{
      list: [
        {
          title: '收藏',
          name: 'GameCollect',
        },
        {
          title: '已预约',
          name: 'AlreadyAppointment',
        }
      ]
    }
  },
  methods: {
  },
  components: {
    Navigation
  }
}
</script>
<style lang="less" scoped>
  @import './mygame.less';
</style>

