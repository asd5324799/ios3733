<template>
  <div class="mine">
    <div class="mine-header">
      <router-link to="/qrcode" class="qrcode"><i class="code-icon"></i></router-link>
      <router-link to="/signin" class="signin">{{signin}}</router-link> 
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
          :class="userGrade.vip?'issvip':'nosvip'">SVIP</span>
        <span v-if="userGrade.rank" class="user-grade-item user-rank">{{userGrade.rank}}</span>
        <span 
          v-if="userGrade.fu"
          class="user-grade-item user-fu" 
          :style="{backgroundColor:(userGrade.fu_color||'#d3dfef')}">{{userGrade.fu}}</span>
      </div>
      <!-- 金币游戏币 -->
      <div class="user-gold-list">
        <router-link to="Gold" tag="div" class="user-gold-item gold-currency">
            <span><b>{{userGold}}</b>个</span>
            <p>金币</p>
        </router-link>
        <router-link to="PlatformGold" tag="div" class="user-gold-item platform-currency">
            <span><b>{{userPtb}}</b>个</span>
            <p>平台币</p>
        </router-link>
        <router-link to="Recharge" tag="div" class="user-gold-item recharge">充值</router-link>
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
              <router-link to="CustomCenter" tag="li" class="func-item kefu">
                  <div class="item-content">
                      <div class="func-left">
                          <i class="func-icon"></i>
                          <div class="func-name">客服中心</div>
                      </div>
                      <div class="func-right">
                          <span class="right-arrow"></span>
                      </div>
                  </div>
              </router-link>
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
              <router-link to="Complain" tag="li" class="func-item complaint">
                  <div class="item-content">
                      <div class="func-left">
                          <i class="func-icon"></i>
                          <div class="func-name">投诉反馈</div>
                      </div>
                      <div class="func-right">
                          <span class="right-arrow"></span>
                      </div>
                  </div>
              </router-link>
          </ul>
      </div>
    </div>
      <NavCom :pageIndex="3" />
  </div>
</template>
<script>
    import NavCom from '@/components/navcom/navcom.vue';
    export default {
      data() {
        return {
          userName:'',
          userPic:'',
          userGrade:{
            vip:'',
            rank:'',
            fu:'',
            fu_color:''
          },
          userGold:'0',
          userPtb:'0',
          clocked_in:false,
          token:''
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
            return str || 'data:image/png;base64,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' 
        }
      },
      created () {
        this.token = localStorage.token;
        this.getUserInfo();
      },
      methods: {
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
                      }else{
                          this.userName = '';
                          this.userPic = ''
                          this.userGrade.fu = ''
                          this.userGrade.fu_color = ''
                          this.userGrade.rank = ''
                          this.userGrade.vip = false
                          this.userGold = 0
                          this.userPtb = 0
                      }
                      
                  }
              })
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

