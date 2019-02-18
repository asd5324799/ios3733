<template>
  <div class="nav-com">
      <ul class="nav-list">
          <li class="nav-item" v-for="(item,index) in navList" :key="index">
                <router-link :to="item.src" :class="index==pageIndex?'active':''">
                    <i :class="item.desc"></i>
                    <p>{{item.title}}</p>
                </router-link>
            </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'NavCom',
  data(){
      return{
            navList:[
                {
                    title:"推荐",
                    desc:"recom-icon",
                    src:"/home",
                    icon:"../../assets/images/recom.png",
                    activeSrc:"../../assets/images/recom-active.png"
                },
                {
                    title:"排行榜",
                    desc:"rank-icon",
                    src:"/rank",
                    icon:"../../assets/images/rank.png",
                    activeSrc:"../../assets/images/rank-active.png"
                },
                {
                    title:"开服",
                    desc:"list-icon",
                    src:"/kaifu",
                    icon:"../../assets/images/list.png",
                    activeSrc:"../../assets/images/list-active.png"
                },
                {
                    title:"我的",
                    desc:"mine-icon",
                    src:"/mine",
                    icon:"../../assets/images/mine.png",
                    activeSrc:"../../assets/images/mine-active.png"
                }
            ]
        }
  },
  props:['pageIndex'],
  watch:{
    $route(){
        var homeUrl = sessionStorage.getItem("HOME_PATH");
        if(homeUrl){
            this.navList[1].src = homeUrl;
        }
        var rankUrl = sessionStorage.getItem("RANK_PATH");
        if(rankUrl){
            this.navList[1].src = rankUrl;
        }
        var kaifuUrl = sessionStorage.getItem("KAIFU_PATH");
        if(kaifuUrl){
            this.navList[2].src = kaifuUrl;
        }
    }
  },
  mounted() {
      
  },
}
</script>
<style lang="less" scoped>
  @import './navcom.less';
</style>
