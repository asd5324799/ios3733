<template>
    <div class="mine">
    <Navigation title="用户注册"/>
    <main>
        <div class="regis-title">手机快速注册（推荐）</div>
        <form action="">
            <div class="phone-num" :class="nameIsFocus?'linegreen':'linegrey'"><input type="text" autofocus="autofocus" v-model.trim="userAccount.userName" @focus="nameInFocus" @blur="nameOutFocus"><span :class="nameIsFocus?'cur':'nocur'">手机号</span></div>
            <!-- 验证码 -->
            <div class="code-container">
                <div class="identify-code" :class="codeIsFocus?'linegreen':'linegrey'">
                <input type="text" v-model.trim="userAccount.codeNum" @focus="codeInFocus" @blur="codeOutFocus">
                <span :class="codeIsFocus?'cur':'nocur'">验证码</span>
            </div>
            <div class="get-code" :class="codeBtnShow?'bgGreen':'bgGrey'" @click="getCode">{{codeBtnShow?'获取验证码':'重新发送('+count+'秒)'}}</div>
            </div>
            <div class="password" :class="passIsFocus?'linegreen':'linegrey'"><input :type="pwdType" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus"><span :class="passIsFocus?'cur':'nocur'">密码</span><i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i></div>
            
            <div class="regis-btn" @click="register">注册</div>
        </form>
        <div class="register-bottom">
            <router-link to="/userregister" replace>用户名注册</router-link>
            <router-link to="/xieyi">注册即同意《用户协议》</router-link>
        </div>
    </main>
        
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
                showpwd:true
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
            getCode(){
                if(this.codeBtnShow){
                    this.$axios({
                        url: 'https://api2.3733.com/api/sms/send',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "cache-control": "no-cache",
                            "Postman-Token": "97b10384-a1dc-484d-b7f8-fb0184269177"
                        },
                        data: {
                            phone:17864216827,
                            type:1
                        }
                    }).then(() =>{
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
                    }).catch(() =>{
                    })
                     
                }
               
            },
            register(){
                this.$axios({
                    url: '/api/user/register',
                    data: {
                    phone:'18559678857',
                    code:'715789',
                    password:'123456789'
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
        mounted () {
            this.inputTitleChange();
        },
        components: {
            Navigation,
        }
    }
</script>
<style lang="less" scoped>
    @import './phone-register.less';
</style>

