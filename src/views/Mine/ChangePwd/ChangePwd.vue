<template>
    <div class="mine">
    <Navigation title="修改密码"/>
    <main>
        <form action="">
            <!-- 原密码 -->
            <div class="password" :class="oldIsFocus?'linegreen':'linegrey'"><input :type="oldPwdType" v-model.trim="userAccount.oldPwd" @focus="oldInFocus" @blur="oldOutFocus"><span :class="oldIsFocus?'cur':'nocur'">原密码</span><i class="show-pwd" :class="{'hide-pwd':showoldpwd}" @click="showOldPwd"></i></div>
            <!-- 新密码 -->
            <div class="password" :class="passIsFocus?'linegreen':'linegrey'"><input :type="pwdType" v-model.trim="userAccount.password" @focus="passInFocus" @blur="passOutFocus"><span :class="passIsFocus?'cur':'nocur'">新密码</span><i class="show-pwd" :class="{'hide-pwd':showpwd}" @click="showPwd"></i></div>
            <!-- 重复新密码 -->
            <div class="password" :class="confirmIsFocus?'linegreen':'linegrey'"><input :type="confirmPwdType" v-model.trim="userAccount.confirmPwd" @focus="confirmInFocus" @blur="confirmOutFocus"><span :class="confirmIsFocus?'cur':'nocur'">重复新密码</span><i class="show-pwd" :class="{'hide-pwd':showconfirmpwd}" @click="showConfirmPwd"></i></div>
            <div class="submit-btn" @click="submitChange">提交</div>
        </form>
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
                    oldPwd:'',
                    password:'',
                    confirmPwd:''
                },
                count:'',
                codeTimer:null,
                codeBtnShow:true,
                userPic:'',
                userGrade:'',
                oldIsFocus:false,
                confirmIsFocus:false,
                passIsFocus:false,
                checked: true,
                oldPwdType:'password',
                pwdType: 'password',
                confirmPwdType:'password',
                showoldpwd:true,
                showpwd:true,
                showconfirmpwd:true,
                message:'',
                token:''
            }
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
            showOldPwd() {
                this.showoldpwd = ! this.showoldpwd;
                if (this.oldPwdType === 'password') {
                this.oldPwdType = 'text'
                } else {
                this.oldPwdType = 'password'
                }
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
                }else if(this.userAccount.confirmPwd == ''){
                    this.message = '请输入重复密码'
                    return false;
                }else if(this.userAccount.confirmPwd != this.userAccount.password){
                    this.message = '两次输入密码不一致';
                    return false;
                }
                this.$axios({
                    url: '/api/user/changePassword',
                    data: {
                    password:this.userAccount.oldPwd,
                    newPassword:this.userAccount.password,
                    token:this.token
                    }
                }).then(res =>{
                    this.message = res.msg;
                })
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
        created () {
            this.inputTitleChange();
            this.token = localStorage.token;
        },
        components: {
            Navigation,
        }
    }
</script>
<style lang="less" scoped>
    @import './change-pwd.less';
</style>

