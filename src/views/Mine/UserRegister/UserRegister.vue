<template>
    <div class="mine">
    <Navigation title="用户注册"/>
    <main>
        <div class="regis-title">用户名注册（不推荐）</div>
        <form action="">
            <div class="username" :class="nameIsFocus?'linegreen':'linegrey'"><input type="text" autofocus="autofocus" v-model.trim="userAccount.userName" @focus="nameInFocus" @blur="nameOutFocus"><span :class="nameIsFocus?'cur':'nocur'">用户名</span></div>
            <!-- 密码 -->
            <div class="password" :class="passIsFocus?'linegreen':'linegrey'"><input :type="pwdType" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus"><span :class="passIsFocus?'cur':'nocur'">密码</span><i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i></div>
            <!-- 确认密码 -->
            <div class="password" :class="confirmIsFocus?'linegreen':'linegrey'"><input :type="confirmPwdType" v-model.trim="userAccount.confirmPwd" @focus="confirmInFocus" @blur="confirmOutFocus"><span :class="confirmIsFocus?'cur':'nocur'">确认密码</span><i class="show-pwd" :class="{'hide-pwd':showconfirmpwd}" @click="showConfirmPwd"></i></div>
            <div class="regis-btn" @click="register">注册</div>
        </form>
        <div class="register-bottom">
            <router-link to="/phoneregister" replace>手机快速注册</router-link>
            <router-link to="/xieyi">注册即同意《用户协议》</router-link>
        </div>
    </main>
        <Prompt :message="message" />
    </div>
</template>
<script>
    import Navigation from '@/components/navigation/navigation.vue';
    export default {
        data() {
            return {
                userAccount:{
                    userName:'',
                    password:'',
                    confirmPwd:''
                },
                count:'',
                codeTimer:null,
                codeBtnShow:true,
                userPic:'',
                userGrade:'',
                nameIsFocus:false,
                confirmIsFocus:false,
                passIsFocus:false,
                checked: true,
                pwdType: 'password',
                confirmPwdType:'password',
                showpwd:true,
                showconfirmpwd:true,
                message:''
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
            showConfirmPwd() {
                this.showconfirmpwd = ! this.showconfirmpwd;
                if (this.confirmPwdType === 'password') {
                this.confirmPwdType = 'text'
                } else {
                this.confirmPwdType = 'password'
                }
            },
            register(){
                if(this.userAccount.userName == ''){
                    this.message = '请输入用户名'
                    return false;
                }else if(this.userAccount.userName.length <6){
                    this.message = '用户名不能小于6位';
                    return false;
                }else if(this.userAccount.password == ''){
                    this.message = '请输入密码'
                    return false;
                }else if(this.userAccount.password.length <6){
                    this.message = '密码不能小于6位';
                    return false;
                }else if(this.userAccount.confirmPwd == ''){
                    this.message = '请输入重复密码'
                    return false;
                }else if(this.userAccount.confirmPwd != this.userAccount.password){
                    this.message = '两次输入密码不一致';
                    return false;
                }
                this.$axios({
                    url: '/api/user/register',
                    data: {
                    username:'dadiao062',
                    password:'123456'
                    }
                }).then(() =>{
                })
            },
            nameInFocus(){
                this.nameIsFocus = true;
            },
            nameOutFocus(){
                if(this.userAccount.userName == ''){
                    this.nameIsFocus = false;
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
        }
    }
</script>
<style lang="less" scoped>
    @import './user-register.less';
</style>

