<template>  
  <div class="mine">
    <div class="mine-header">
      <!-- <router-link to="/qrcode" class="qrcode"><i class="code-icon"></i></router-link> -->
      <div @click="attendance" class="signin">{{signin}}</div> 
    </div>
    <!-- 用户 -->
    <div class="user">
      <router-link to="/userinfo" class="user-info">
        <img :src="userPic | hasPic" alt="">
        <div class="user-name">{{userName | hasName}}</div>
      </router-link>
      <div class="user-grade-list" v-if="token">
        <span  
          class="user-grade-item"
          :class="userGrade.vip?'issvip':'nosvip'" v-if="userGrade.vip">SVIP</span>
        <span v-if="userGrade.rank" class="user-grade-item user-rank">{{userGrade.rank}}</span>
        <span 
          v-if="userGrade.fu"
          class="user-grade-item user-fu" 
          :style="{backgroundColor:(userGrade.fu_color||'#d3dfef')}">{{userGrade.fu}}</span>
      </div>
      <!-- 金币游戏币 -->
      <div class="user-gold-list">
        <div @click="BOX_openInNewWindow('http://u.3733.com/float.php/float/box/goldcoin.html')" class="user-gold-item gold-currency">
            <span><b>{{userGold || 0}}</b>个</span>
            <p>金币</p>
        </div>
        <div @click="BOX_openInNewWindow('http://u.3733.com/float.php/float/box/platcoin.html')" class="user-gold-item platform-currency">
            <span><b>{{userPtb || 0}}</b>个</span>
            <p>平台币</p>
        </div>
        <div @click="BOX_openInNewWindow('http://u.3733.com/float.php/float/box/platcoin.html')" class="user-gold-item recharge">充值</div>
      </div>
      <!-- 功能列表 -->
      <div class="func">
          <ul class="func-list">
              <router-link :to="{name: 'ReplyMessage'}" tag="li" class="func-item message">
                  <div class="item-content">
                      <div class="func-left">
                          <i class="func-icon"></i>
                          <div class="func-name">我的消息</div>
                      </div>
                      <div class="func-right">
                          <span class="right-arrow"></span>
                      </div>
                  </div>
              </router-link>
              <!-- <router-link
                tag="li"
                 class="func-item kefu"
                 :to="{name: 'hehe'}"
              > -->
              <!-- <li @click="openH5Game('http://mitusir.top/public/test.html')" class="func-item kefu"> -->
              <li @click="BOX_openInNewWindow('http://u.3733.com/float.php/float/kefu/new_index')" class="func-item kefu">
                <div class="item-content">
                    <div class="func-left">
                        <i class="func-icon"></i>
                        <div class="func-name">客服中心</div>
                    </div>
                    <div class="func-right">
                        <span class="right-arrow"></span>
                    </div>
                </div>
              </li>
              <!-- </router-link> -->
              <router-link :to="{name: 'GameCollect'}" tag="li" class="func-item mygame">
                  <div class="item-content">
                      <div class="func-left">
                          <i class="func-icon"></i>
                          <div class="func-name">我的游戏</div>
                      </div>
                      <div class="func-right">
                          <span class="right-arrow"></span>
                      </div>  
                  </div>
              </router-link>
              <router-link to="MyGift" tag="li" class="func-item mygift">
                  <div class="item-content">
                      <div class="func-left">
                          <i class="func-icon"></i>
                          <div class="func-name">我的礼包</div>
                      </div>
                      <div class="func-right">
                          <span class="right-arrow"></span>
                      </div>
                  </div>
              </router-link>
              <!-- <li @click="BOX_openH5Game('http://api2.3733.com/h5/game/index?app_id=62453')" class="func-item complaint"> -->
              <li @click="BOX_openInNewWindow('http://api2.c3733.com/h5/html/feedback')" class="func-item complaint">
                  <div class="item-content">
                        <div class="func-left">
                          <i class="func-icon"></i>
                          <div class="func-name">投诉反馈</div>
                      </div>
                      <div class="func-right">
                          <span class="right-arrow"></span>
                      </div>
                  </div>
              </li> 
          </ul>
      </div>
    </div>
    <NavCom :pageIndex="3" />
  </div>
</template>
<script>
    import NavCom from '@/components/navcom/navcom.vue';
    import Box from '@/common/box.js';
    
    export default {
      data() {
        return {
          userName:'', 
          userPic:'',
          userGrade:{
            vip:false,
            rank:'',
            fu:'',
            fu_color:''
          },
          userGold:0,
          userPtb:0,
          clocked_in:false,
          token:'',
        }
      },
      computed: {
        signin(){
          if(this.clocked_in === true){
            return '已签到'
          }else{
            return '签到'
          }
        }
      },
      filters: {
        hasName (str) {
          return str || '注册／登录' 
        },
        hasPic (str) { 
          return str || 'http://pic5.3733.com/avatar/img_user_default.png'
        }
      },
      activated() {
        this.token = sessionStorage.getItem('token');
        if(this.token === '') {
          this.userPic = '';
          this.userName = '';
          this.userGold = 0;
          this.userPtb = 0;
        } else {
          this.getUserInfo(); 
        }
      },
      created () {
        this.createdMethod();
      },
      methods: {
        createdMethod() {
          this.getUserInfo();
        },
        getUserInfo(){
          this.$axios({
              url: '/api/user/info',
              data: {
                token:this.token
              }
          })
          .then(res =>{
            let data = res.data;
            if(res.data) {
              this.userName = data.nickname;
              this.userPic = data.avatar;
              this.userGrade.fu = data.pay_level_name;
              this.userGrade.fu_color = data.pay_level_color;
              this.userGrade.rank = data.exp_level_name;
              this.userGrade.vip = data.is_svip;
              this.userGold = data.gold;
              this.userPtb = data.ptb;
              this.clocked_in = data.clocked_in;
            }
          })
        },
        attendance() {
          let token = sessionStorage.getItem('token');
          this.$axios({
            url: '/api/user/clockIn',
            header: {
              "User-Agent": 'xmyy',
            },
            data: {
              token: token,
              returnErr: 0
            }
          })
          .then((res) => {
            if(res.code) {
              this.$toast(res.msg);
            } else {
              this.clocked_in = true;
              this.$toast('签到成功');
            }
          })
          .catch((res) => {
            this.$toast('签到失败,请稍后重试');
          })
        },
        BOX_openInNewWindow(url) {
          if(!this.token) {
            this.$router.push({
              name: 'Login'
            })
          } else {
            let box = new Box();
            box.openInNewWindow(url); 
          }
        },
        BOX_openH5Game(url) {
          let box = new Box();
          box.openH5Game(url); 
        }
      },
      components: {
        NavCom,
      }
    }
</script>
<style lang="less" scoped>
    @import './Mine.less';
</style>

