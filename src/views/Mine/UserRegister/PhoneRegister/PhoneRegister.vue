<template>
    <div class="mine">
    <Navigation title="用户注册"/>
    <main>
        <div class="regis-title">手机快速注册（推荐）</div>
        <form action="">
            <div class="phone-num" :class="nameIsFocus?'linegreen':'linegrey'"><input type="number" autofocus="autofocus" v-model.trim="userAccount.userName" @focus="nameInFocus" @blur="nameOutFocus"><span :class="nameIsFocus?'cur':'nocur'">手机号</span></div>
            <!-- 验证码 -->
            <div class="code-container">
                <div class="identify-code" :class="codeIsFocus?'linegreen':'linegrey'">
                <input type="text" v-model.trim="userAccount.codeNum" @focus="codeInFocus" @blur="codeOutFocus">
                <span :class="codeIsFocus?'cur':'nocur'">验证码</span>
            </div>
            <div class="get-code" :class="codeBtnShow?'bgGreen':'bgGrey'" @click="getCode">{{codeBtnShow?'获取验证码':'重新发送('+count+'秒)'}}</div>
            </div>
            <div class="password" :class="passIsFocus?'linegreen':'linegrey'"><input :type="pwdType" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus" autocomplete="off"><span :class="passIsFocus?'cur':'nocur'">密码</span><i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i></div>
            
            <div class="regis-btn" v-if="ajaxSwitch" @click="register">注册</div>
            <div class="regis-btn gray" v-else>注册</div>
        </form>
        <div class="register-bottom">
            <router-link to="/userregister" replace>用户名注册</router-link>
            <div>注册即同意《用户协议》</div>
        </div>
    </main>
        <Prompt :message="message" />
    </div>
</template>
<script>
    import Navigation from '@/components/navigation/navigation.vue';
    import { JSEncrypt } from 'jsencrypt';
    import Box from '@/common/box.js';
    import Prompt from '@/components/prompt/prompt.vue';
    export default {
        data() {
          return {
            userAccount:{
                userName:'',
                password:'',
                codeNum:''
            },
            count:'',
            codeTimer:null,
            codeBtnShow:true,
            userPic:'',
            userGrade:'',
            nameIsFocus:false,
            codeIsFocus:false,
            passIsFocus:false,
            checked: true,
            pwdType: 'password',
            showpwd:true,
            message:'',
            ajaxSwitch: true,
          }
        },
        created() {
          this.getPublicKey();
        },
        mounted () {
          this.inputTitleChange();
        },
        filters: {
            
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
            getCode(){
                if(!this.userAccount.userName){
                    this.message = '请输入手机号'
                    return false;
                }else if(!(/^1[34578]\d{9}$/.test(this.userAccount.userName))){
                    this.message = '请输入正确的中国大陆11位手机号';
                    return false;
                }
                if(this.codeBtnShow){
                    this.$axios({
                        url: '/api/sms/send',
                        headers: {
                          'User-Agent': 'xmyy',
                        },
                        data: {
                            phone:this.userAccount.userName,
                            type:2
                        }
                    }).then((res) =>{
                      this.$toast(res.msg);
                      if(res.code) {
                        this.codeBtnShow = false;
                        const TIME_COUNT = 60;   
                        if (!this.codeTimer) {    
                            this.count = TIME_COUNT;    
                            this.codeBtnShow = false;    
                            this.codeTimer = setInterval(() => {    
                                if (this.count > 0 && this.count <= TIME_COUNT) {     
                                    this.count--;     
                                } else {     
                                    this.codeBtnShow = true;     
                                    clearInterval(this.codeTimer);     
                                    this.codeTimer = null;     
                                }    
                            }, 1000)    
                        }  
                      }
                    }).catch(() =>{
                    })
                }
            },
            register(){
                if(this.userAccount.codeNum == ''){
                    this.message = '请输入验证码'
                    return false;
                }else if(this.userAccount.password == ''){
                    this.message = '请输入密码'
                    return false;
                }else if(this.userAccount.password.length <6){
                     this.message = '密码密码不能小于6位'
                    return false;
                }
                if(this.ajaxSwitch) {
                  this.ajaxSwitch = false;
                  let password = this.opensslEncrypt(this.userAccount.password);
                  this.$axios({
                    url: '/api/user/register',
                    data: {
                      phone:this.userAccount.userName,
                      code:this.userAccount.codeNum,
                      password:password
                    }
                  }).then((res) =>{
                    this.ajaxSwitch = true;
                    this.message = '登录成功';
                    localStorage.token = res.data.token;
                    let box = new Box();
                    box.loginSuccess(res.data);
                    this.$router.push({
                      name: 'Mine'
                    });
                  }).catch(() => {
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
            codeInFocus(){
                this.codeIsFocus = true;
            },
            codeOutFocus(){
                if(this.userAccount.codeNum == ''){
                    this.codeIsFocus = false;
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
                if(this.userAccount.codeNum == ''){
                    this.codeIsFocus = false;
                }else{
                    this.codeIsFocus = true;
                }
                if(this.userAccount.userName == ''){
                    this.nameIsFocus = false;
                }else{
                    this.nameIsFocus = true;
                }
            }
        },
        components: {
            Navigation,
            Prompt,
        }
    }
</script>
<style lang="less" scoped>
    @import './phone-register.less';
</style>

