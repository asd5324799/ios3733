<template>
    <div class="mine">
        <!-- <div class="header">
        <div class="history"><div class="back" @click="back"><img src="../../assets/images/ic_toolbar_back_white.png" alt=""></div></div>
        <div class="title">用户登录</div>
    </div> -->
    <Navigation title="用户登录"/>
    <main>
        <form action="">
            <div class="user-name" :class="nameIsFocus?'linegreen':'linegrey'">
                <input type="text" name="username" autofocus="autofocus" v-model.trim="userAccount.userName" @focus="nameInFocus" @blur="nameOutFocus">
                <span :class="nameIsFocus?'cur':'nocur'">用户名/手机号</span>
                <i class="clear" @click="clearBox" v-show="!isNone"></i>
            </div>
            <div class="password" :class="passIsFocus?'linegreen':'linegrey'">
                <input :type="pwdType" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus" autocomplete="off">
                <span :class="passIsFocus?'cur':'nocur'">密码</span>
                <i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i>
            </div>
            <div class="remember">
                <div class="isRemember"><input type="checkbox" checked="checked" v-model="checked">保存密码</div>
                <router-link to="/resetpwd" class="forget">忘记密码？</router-link>
            </div>
            <div class="login-btn" v-if="ajaxSwitch" @click="login">登录</div>
            <div class="login-btn gray" v-else>登录中...</div>
        </form>
        <div class="toRegister">还没有账号？
            <router-link to="/phoneregister">立即注册平台账号</router-link>
        </div>
    </main>
        <Prompt :message="message" />
    </div>
</template>
<script>
    import Prompt from '@/components/prompt/prompt.vue';
    import Navigation from '@/components/navigation/navigation.vue';
    import { JSEncrypt } from 'jsencrypt';
    import Box from '@/common/box.js';
    export default {
        data() {
            return {
                userAccount:{
                    userName:'',
                    password:''
                },
                userPic:'',
                userGrade:'',
                nameIsFocus:false,
                passIsFocus:false,
                checked: true,
                pwdType: 'password',
                publicKey: '',
                showpwd:true,
                message:'',
                ajaxSwitch: true,
            }
        },
        computed: {
            isNone(){
                if(this.userAccount.userName||this.userAccount.password){
                    return false;
                }else{
                    return true;
                }
            }
        },
        filters: {
            
        },
        created() {
          this.getPublicKey();
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
            showPwd() {
                this.showpwd = ! this.showpwd;
                if (this.pwdType === 'password') {
                this.pwdType = 'text'
                } else {
                this.pwdType = 'password'
                }
            },
            clearBox(){
                this.userAccount.userName = '';
                this.userAccount.password = '';
                this.inputTitleChange();
            },
            getPublicKey() {
              this.$axios({
                url: '/api/index/rsaKey',
                data: {}
              })
              .then(res => {
                this.publicKey = res.data.rsa_public_key;
              })
            },
            opensslEncrypt(str) {
              let encryptor = new JSEncrypt()  // 新建JSEncrypt对象
              if(this.publicKey === '') {
                this.getPublicKey();
              }
              encryptor.setPublicKey(this.publicKey)  // 设置公钥
              let temp = encryptor.encrypt(str)  // 对密码进行加密
              return temp;
            },
            login(){
                if(this.userAccount.userName == ''){
                    this.message = '请输入用户名!'
                    return false;
                }else if(this.userAccount.userName.length < 6){
                    this.message = '用户名不能小于6位'
                    return false;
                }else if(this.userAccount.password == ''){
                    this.message = '请输入密码!'
                    return false;
                }else if(this.userAccount.password.length < 6){
                    this.message = '密码不能小于6位'
                    return false;
                } else if(this.userAccount.password.length > 18) {
                  this.message = '密码不能大于18位'
                  return false;
                }
                if(this.ajaxSwitch) {
                  this.ajaxSwitch = false;
                  let password = this.opensslEncrypt(this.userAccount.password);
                  this.$axios({
                      url: '/api/user/login',
                      data: {
                      username: this.userAccount.userName,
                      password: password,
                      }
                  }).then((res) =>{
                    if(res.data) {
                      this.message = '登录成功';
                      localStorage.token = res.data.token;
                      let box = new Box();
                      box.loginSuccess(res.data);
                      this.$router.push({
                        name: 'Mine'
                      })
                    } else {
                      this.message = res.msg;
                    }
                    this.ajaxSwitch = true;
                  }).catch(()=>{
                    this.message = '网络不好，请稍后重试';
                    this.ajaxSwitch = true;
                  })
                }
            },
            nameInFocus(){
                this.nameIsFocus = true;
            },
            nameOutFocus(){
                if(this.userAccount.userName == ''){
                    this.nameIsFocus = false;
                }
            },
            passInFocus(){
                this.passIsFocus = true;
            },
            passOutFocus(){
                if(this.userAccount.password == ''){
                    this.passIsFocus = false;
                }
            },
            inputTitleChange(){
                if(this.userAccount.password == ''){
                    this.passIsFocus = false;
                }else{
                    this.passIsFocus = true;
                }
                if(this.userAccount.userName == ''){
                    this.nameIsFocus = false;
                }else{
                    this.nameIsFocus = true;
                }
            }
        },
        mounted () {
            this.inputTitleChange();
        },
        components: {
            Navigation,
            Prompt,
        }
    }
</script>
<style lang="less" scoped>
    @import './login.less';
</style>

