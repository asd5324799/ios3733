<template>
    <div class="mine">
    <Navigation title="修改密码"/>
    <main>
        <form action="">
            <!-- 原密码 -->
            <div class="password" :class="oldIsFocus?'linegreen':'linegrey'"><input :type="pwdType[0]" autocomplete="off" v-model.trim="userAccount.oldPwd" @focus="oldInFocus" @blur="oldOutFocus"><span :class="oldIsFocus?'cur':'nocur'">原密码</span><i class="show-pwd" :class="{'hide-pwd':showoldpwd}" @click="showOldPwd"></i></div>
            <!-- 新密码 -->
            <div class="password" :class="passIsFocus?'linegreen':'linegrey'"><input :type="pwdType[1]" autocomplete="off" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus"><span :class="passIsFocus?'cur':'nocur'">新密码</span><i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i></div>
            <!-- 重复新密码 -->
            <div class="password" :class="confirmIsFocus?'linegreen':'linegrey'"><input :type="pwdType[2]" autocomplete="off" v-model.trim="userAccount.confirmPwd" @focus="confirmInFocus" @blur="confirmOutFocus"><span :class="confirmIsFocus?'cur':'nocur'">重复新密码</span><i class="show-pwd" :class="{'hide-pwd':showconfirmpwd}" @click="showConfirmPwd"></i></div>
            <div class="submit-btn" @click="submitChange">提交</div>
            <div class="submit-btn gray" @click="submitChange">提交中...</div>
        </form>
    </main>
        <Prompt :message="message" />
    </div>
</template>
<script>
    import Navigation from '@/components/navigation/navigation.vue';
    import { JSEncrypt } from 'jsencrypt';
    export default {
        data() {
            return {
                userAccount:{
                  oldPwd:'',
                  password:'',
                  confirmPwd:''
                },
                oldIsFocus:false,
                confirmIsFocus:false,
                passIsFocus:false,
                pwdType: ['password', 'password', 'password'],
                showoldpwd:true,
                showpwd:true,
                showconfirmpwd:true,
                message:'',
                token:'',
                publicKey: '',
                ajaxSwitch: true,
            }
        },
        created() {
          this.inputTitleChange();
          this.token = localStorage.token;
          this.getPublicKey();
        },
        methods: {
            back(){
                this.$router.go(-1);
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
            showOldPwd() {
                this.showoldpwd = ! this.showoldpwd;
                if (this.pwdType[0] === 'password') {
                this.pwdType[0] = 'text'
                } else {
                this.pwdType[0] = 'password'
                }
            },
            showPwd() {
                this.showpwd = ! this.showpwd;
                if (this.pwdType[1] === 'password') {
                this.pwdType[1] = 'text'
                } else {
                this.pwdType[1] = 'password'
                }
            },
            showConfirmPwd() {
                this.showconfirmpwd = ! this.showconfirmpwd;
                if (this.pwdType[2] === 'password') {
                this.pwdType[2] = 'text'
                } else {
                this.pwdType[2] = 'password'
                }
            },
            submitChange(){
                if(this.userAccount.odlPwd == ''){
                    this.message = '请输入原密码'
                    return false;
                }else if(this.userAccount.password == ''){
                    this.message = '请输入新密码'
                    return false;
                }else if(this.userAccount.password.length <6){
                    this.message = '新密码不能小于6位';
                    return false;
                } else if(this.userAccount.password.length > 18) {
                  this.message = '新密码不能大于18位';
                } else if(this.userAccount.confirmPwd == ''){
                    this.message = '请输入重复密码'
                    return false;
                }else if(this.userAccount.confirmPwd != this.userAccount.password){
                    this.message = '两次输入密码不一致';
                    return false;
                }
                let oldPassword = this.opensslEncrypt(this.userAccount.oldPwd);
                let newPassword = this.opensslEncrypt(this.userAccount.password);
                if(this.ajaxSwitch) {
                  this.ajaxSwitch = false;
                  this.$axios({
                    url: '/api/user/changePassword',
                    data: {
                    password: oldPassword,
                    newPassword: newPassword,
                    token:this.token
                    }
                  }).then(res =>{
                    if(res.code === 0) {
                      this.message = res.msg;
                    } else {
                      this.message = res.msg;
                      localStorage.setItem('token', '');
                      setTimeout(() => {
                        this.$router.push('Login');
                      }, 1000)
                    }
                    this.ajaxSwitch = true;
                  }).catch(() => {
                    this.message = '网络不好，请稍后重试';
                    this.ajaxSwitch = true;
                  })
                }
            },
            oldInFocus(){
                this.oldIsFocus = true;
            },
            oldOutFocus(){
                if(this.userAccount.oldPwd == ''){
                    this.oldIsFocus = false;
                }
            },
            confirmInFocus(){
                this.confirmIsFocus = true;
            },
            confirmOutFocus(){
                if(this.userAccount.confirmPwd == ''){
                    this.confirmIsFocus = false;
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
                if(this.userAccount.confirmPwd == ''){
                    this.confirmIsFocus = false;
                }else{
                    this.confirmIsFocus = true;
                }
                if(this.userAccount.oldPwd == ''){
                    this.oldIsFocus = false;
                }else{
                    this.oldIsFocus = true;
                }
            }
        },
        components: {
            Navigation,
        }
    }
</script>
<style lang="less" scoped>
    @import './change-pwd.less';
</style>

