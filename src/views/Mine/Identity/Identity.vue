<template>
    <div class="mine">
    <Navigation title="身份认证"/>
    <main>
        <div class="paragraph">尊敬的用户：</div>
        <p class="paragraph p1">根据国家规定，游戏用户需登记个人实名信息。信息仅用于国家规定的实名验证，不会用于其它用途且绝对保密！</p>
        <form>
            <div class="id-name" :class="nameIsFocus?'linegreen':'linegrey'">
              <input 
                type="text" 
                autofocus="autofocus" 
                v-model.trim="userAccount.idName" 
                @focus="nameInFocus" 
                @blur="nameOutFocus" 
                :disabled="inputIsabled">
              <span :class="nameIsFocus?'cur':'nocur'">真实姓名</span>
            </div>
            <div class="id-number" :class="numIsFocus?'linegreen':'linegrey'">
              <input 
                type="text" 
                v-model.trim="userAccount.idNumber" 
                @focus="numInFocus" 
                @blur="numOutFocus" 
                :disabled="inputIsabled">
              <span :class="numIsFocus?'cur':'nocur'">身份证号码</span>
            </div>
            <div class="paragraph">身份信息仅对自己可见，身份信息一旦保存，无法修改。</div>
            <div class="submit-btn" :class="{'bgGrey':inputIsabled}" @click="submit">{{submitText}}</div>
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
                    idName:'',
                    idNumber:''
                },
                nameIsFocus:false,
                numIsFocus:false,
                inputIsabled:false,
                message:''
            }
        },
        computed:{
            submitText(){
                if(this.inputIsabled){
                    return '已认证'
                }else{
                    return '提交认证'
                }
            }
        },
        filters: {
            
        },
        methods: {
            submit(){
                if(this.inputIsabled){
                    return false;
                }
                if(!(/^[\u4e00-\u9fa5]{2,4}$/i.test(this.userAccount.idName))){
                    this.message = '请输入真实姓名'
                    return false;
                }else if(!(/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.userAccount.idNumber))){
                    this.message = '请输入正确的身份证号'
                    return false;
                }
                this.$axios({
                    url: '/api/user/certification',
                    data: {
                        token:this.token,
                        realName:this.userAccount.idName,
                        idCard:this.userAccount.idNumber
                    }
                }).then(res =>{
                    this.message = res.msg;
                    if(res.code == 0){
                        this.submitText = '审核中...';
                    }
                })
            },
            nameInFocus(){
                this.nameIsFocus = true;
            },
            nameOutFocus(){
                if(this.userAccount.idName == ''){
                    this.nameIsFocus = false;
                }
            },
            numInFocus(){
                this.numIsFocus = true;
            },
            numOutFocus(){
                if(this.userAccount.idNumber == ''){
                    this.numIsFocus = false;
                }
            },
            inputTitleChange(){
                if(this.userAccount.idNumber == ''){
                    this.numIsFocus = false;
                }else{
                    this.numIsFocus = true;
                }
                if(this.userAccount.idName == ''){
                    this.nameIsFocus = false;
                }else{
                    this.nameIsFocus = true;
                }
            },
            getUserAccount(){
                if(this.$route.query.name){
                    this.inputIsabled = true;
                    this.userAccount.idName = this.$route.query.name;
                    this.userAccount.idNumber = this.$route.query.num;
                }
                console.log(this.token)
            }
        },
        mounted () {
            this.getUserAccount();
            this.inputTitleChange();
        },
        beforeRouteEnter(to,from,next){
            next(vm=>{
                vm.token = localStorage.token;
            })
        },
        components: {
            Navigation,
        }
    }
</script>
<style lang="less" scoped>
    @import './identity.less';
</style>

