<template>
  <div class="billboard" :class="bg">
      <div class="title"><h3><i class="left-ico"></i>{{title}}<i class="right-ico"></i></h3></div>
      <div class="game-box">
          <ul class="game-list">
              <li class="game-item" v-for="(item,index) of gameTop" :key="index">
                  <div class="game-pic">
                      <div @click="toDetail(item)"><img :src="item.titlepic" alt=""></div>
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
  },
  methods: {
    toDetail(item) {
      this.$router.push({ 
        name: 'Detail', 
        query: {
          id: JSON.stringify(item.id), 
          title: JSON.stringify(item.title), 
          down_ip: JSON.stringify(item.down_ip),
        }
      })
    }
  },
}
</script>
<style lang="less" scoped>
  @import './billboard.less';
</style>
