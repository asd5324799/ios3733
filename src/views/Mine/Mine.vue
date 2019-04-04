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
              <router-link to="MyMessage" tag="li" class="func-item message">
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
              <router-link to="MyGame" tag="li" class="func-item mygame">
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
      <Prompt :message="message" />
  </div>
</template>
<script>
    import NavCom from '@/components/navcom/navcom.vue';
    import Prompt from "@/components/prompt/prompt.vue";
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
          message: '',
        }
      },
      computed: {
        signin(){
          if(this.clocked_in==true){
            return '已签到'
          }else{
            return '签到'
          }
        }
      },
      watch: {
        $route(){
          this.token = localStorage.token;
          this.getUserInfo();
        },
        token(){
          this.getUserInfo();
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
      created () {
        this.createdMethod();
      },
      methods: {
        createdMethod() {
          let box = new Box();
          let temp = box.getToken();
          if(temp) {
            this.token = temp;
            this.getUserInfo();
          }
        },
        getUserInfo(){
          this.$axios({
              url: '/api/user/info',
              data: {
                token:this.token
              }
          }).then(res =>{
            if(res.code == 1){
              if(res.data){
                var data = res.data;
                this.userName = data.nickname
                this.userPic = data.avatar
                this.userGrade.fu = data.pay_level_name
                this.userGrade.fu_color = data.pay_level_color
                this.userGrade.rank = data.exp_level_name
                this.userGrade.vip = data.is_svip
                this.userGold = data.gold
                this.userPtb = data.ptb
                this.clocked_in = data.clocked_in
              }
            }
          })
        },
        attendance() {
          let token = localStorage.token;
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
            if(res.code === 1) {
              this.message = '签到成功';
            }
          })
          .catch(() => {
            this.message = '签到失败,请稍后重试';
          })
        },
        BOX_openInNewWindow(url) {
          let box = new Box();
          box.openInNewWindow(url);
        }
      },
      components: {
        NavCom,
        Prompt,
      }
    }
</script>
<style lang="less" scoped>
    @import './Mine.less';
</style>

