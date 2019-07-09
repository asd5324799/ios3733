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
                  <div 
                    :class="{h5: type === 5}"
                    @click="clickEvent(index, item.down_ip, item.h5_url)"
                    class="down"
                    ref="down"
                  >
                    {{text}}
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
/**
 * @param gameTop 游戏列表
 * @param title 标题
 * @param bg 背景图片
 * @param type 列表类型 1为正常列表 5为H5列表
 *  */ 
import Box from '@/common/box.js';

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
    },
    type: {
      type: Number,
      default: 1,
    }
  },
  computed: {
    text() {
      if(this.type === 5) {
        return '打开'
      } else {
        return '下载'
      }
    }
  },
  methods: {
    toDetail(item) {
      sessionStorage.setItem('goBack', this.$route.name);
      this.$store.commit('setGameInfo', item);
      let type;
      if(this.type === 2) {
        type = 0;
      } else if(this.type === 5) {
        type = 2;
      } else {
        type = 1;
      }
      this.$store.commit('setGameType', type);
      this.$router.push({
          name: 'DetailIndex',
      });
    },
    clickEvent(index, url = '', gameUrl = '') {
      if(this.type === 2) {
        // 如果是预约列表
        if(!this.alreadyAppointment) {
          this.$axios({
            url: '/api/game/subscribe',
            data: {
              token: sessionStorage.getItem('token'),
              gameId: this.item.id
            }
          })
          .then(res => {
            this.alreadyAppointment = true;
            this.$toast(res.msg); 
          })
        }
      } else if(this.type === 5) {
        // 如果是H5列表
        let box = new Box();
        box.openH5Game(gameUrl);
      } else {
        // 如果是正常列表
        this.$refs.down[index].classList.add('loading');
        let box = new Box();
        box.openInBrowser(url);
        setTimeout(() => {
          this.$refs.down[index].classList.remove('loading');
        }, 2000)
      }
    }
  },
}
</script>
<style lang="less" scoped>
  @import './billboard.less';
</style>
