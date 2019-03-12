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
                <input :type="pwdType" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus">
                <span :class="passIsFocus?'cur':'nocur'">密码</span>
                <i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i>
            </div>
            <div class="remember">
                <div class="isRemember"><input type="checkbox" checked="checked" v-model="checked">保存密码</div>
                <router-link to="/reset" class="forget">忘记密码？</router-link>
            </div>
            <div class="login-btn" @click="login">登录</div>
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
                showpwd:true,
                message:''
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
            login(){
                if(this.userAccount.userName == ''){
                    this.message = '请输入用户名!'
                    return false;
                }else if(this.userAccount.userName.length <6){
                    this.message = '用户名不能小于6位'
                    return false;
                }else if(this.userAccount.password == ''){
                    this.message = '请输入密码!'
                    return false;
                }else if(this.userAccount.password.length <6){
                    this.message = '密码不能小于6位'
                    return false;
                }
                var _this = this;
                this.$axios({
                    url: '/api/user/login',
                    data: {
                    username:this.userAccount.userName,
                    password:this.userAccount.password,
                    }
                }).then(() =>{
                    // this.message = res.msg;
                    // console.log()
                    localStorage.token = 'a9f0b013d6b60fac58bc6745b05bf3c2'
                    setTimeout(function(){
                        _this.$router.go(-1)
                    },1000)
                    
                }).catch(()=>{
                })
            },
            // e5be85336ce9aa0e2c3742dc8ffead1d
            // 5141094e9aa96ea6d6cf44a4db5e8f49
            // 5109e4781ba171b9dcaa4964db3c490a
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

