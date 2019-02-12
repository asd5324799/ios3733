<template>
    <div class="gift-detail">
        <!-- 顶部标题栏 -->
        <div class="top-green-bar">
            <span class="back-btn" @click="back"></span>
            礼包详情
        </div>
        <!-- game -->
        <GameList :list="giftGame" :type="listType" />
        <!-- gift -->
        <div class="gift-info gift-section">
                <h4>{{giftData.title}}</h4>
                <div class="gift-remain"><b><i :style="{width:giftData.remain+'%'}"></i></b><span>(剩余{{giftData.remain}}%)</span></div>
                <span class="get-number">已有{{giftData.yi_ling_qu}}人领取</span>
                <a href="/" class="get-gift">领取</a>
                <router-link to="/getaccount" class="get-account">淘号</router-link>
        </div>
        <!-- gift-detail -->
        <div class="gift-con gift-section">
            <div class="section-title">礼包内容</div>
            <P>{{giftData.cardbody}}</P>
        </div>
        <div class="gift-range gift-section">
            <div class="section-title">使用范围</div>
            <p>全场通用</p>
        </div>
        <div class="gift-method gift-section">
            <div class="section-title">兑换方式</div>
            <p>{{giftData.cardtext}}</p>
        </div>
        <div class="gift-notice gift-section">
            <div class="section-title">注意事项</div>
            <p v-html="giftData.notes"></p>
        </div>
        <div class="gift-date gift-section">
            <div class="section-title">礼包时间</div>
            <p>开始时间:{{giftData.starttime | formatDate}}</p>
            <p>结束时间:{{giftData.endtime | formatDate}}</p>
        </div>
    </div>
</template>
<script>
import GameList from '@/components/gamelist/gamelist.vue'
    export default {
        name:"Search",
        data() {
            return {
                giftData:{},
                listType:1,
                giftGame:[],
            }
        },
        filters: {
            formatDate: function (value) {
                let date = new Date(Number(value)*1000);
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                return y + '年' + MM + '月' + d + '日 ' + h + '时' + m + '分';
            },
        },
        methods: {
            back(){
                this.$router.go(-1);
            },
            gameRelated(gameTitle){
                this.$axios({
                    method:"post",
                    url:"http://api2.c3733.com/api/game/read",
                    data:{
                        uuid: "ffffffff-1234-1234-1234-123456789012",
                        from: "212",
                        title: gameTitle
                    }
                }).then(this.handleGiftGame)
            },
            init(){
                this.$axios({
                    method: "post",
                    url:"http://api2.c3733.com/api/card/read",
                    data:{
                        uuid: "ffffffff-1234-1234-1234-123456789012",
                        from: "212",
                        cardId: this.$route.params.id
                    }
                }).then(this.handleGameGift)
            },
            handleGameGift(res){
                this.giftData = res.data;
                this.giftData.notes = this.giftData.notes.replace(/\r\n/g,"<br/>");
                this.gameRelated(this.giftData.titlegame);
            },
            handleGiftGame(res){
                this.giftGame = [];
                this.giftGame.push(res.data.detail);
            }
        },
        created(){
            this.init();
        },
        beforeRouteEnter(to, from, next){
            next(vm =>{
                vm.init();
            })
        },
        components:{
            GameList,
        }
    }
</script>
<style lang="less" scoped>
    @import './giftdetail.less';
</style>
