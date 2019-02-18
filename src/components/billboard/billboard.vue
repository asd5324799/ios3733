<template>
  <div class="billboard" :class="bg">
      <div class="title"><h3><i class="left-ico"></i>{{title}}<i class="right-ico"></i></h3></div>
      <div class="game-box">
          <ul class="game-list">
              <li class="game-item" v-for="(item,index) of gameTop" :key="index">
                  <div class="game-pic">
                      <router-link to="/detail"><img :src="item.titlepic" alt=""></router-link>
                      <i class="cap-ico"></i>
                      <span class="no-ico"></span>
                  </div>
                  <p class="game-title">{{item.title}}</p>
                  <a :href="item.down_ip" class="down">下载</a>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Billboard',
  props: {
    gameTop: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: '新游榜'
    },
    bg: {
      type: String,
      default: 'newgame-billboard'
    }
  }
}
</script>
<style lang="less" scoped>
  @import './billboard.less';
</style>
