<template>
  <div class="home">
    <TopBar />
    <NewsList :list="newsList"/>
    <NavCom :pageIndex="index" />
  </div>
</template>

<script>
import TopBar from '@/components/topbar/topbar.vue';
import NavCom from '@/components/navcom/navcom.vue';
import NewsList from '@/components/newslist/newslist.vue';
import NewGame from '@/views/Rank/NewGame/NewGame.vue';
import SellWell from '@/views/Rank/SellWell/SellWell.vue';


export default {
  data() {
    return {
      routeList:[
        {name: 'NewGame', component: NewGame}, {name: 'SellWell', component: SellWell}
      ],
      index:0,
      qualityRecommendList: [],
      qualityFirstList: [],
      newsList:[
            {
                "id": 85620,
                "classid": 23,
                "onclick": 4,
                "titleurl": "http://m.3733.com/appnews/85620.html",
                "title": "《全民萌将传》武将培养及提升战力攻略",
                "newstime": 1548207603,
                "titlepic": "http://pic5.3733.com/dynamic/201901/69a22d703ed946feb63686bb13dfacb9_n.jpeg",
                "titlegame": "",
                "smalltext": "《全民萌将传》​手游每种武将都有各自的特点，比如攻击、辅助、防御等必须针对各自的特色进行搭配，才能使得阵容的战斗力有保障。接下来小编就来为大家聊聊关于全民萌将传武将培养及提升战力攻略，感兴趣的小伙伴们快来看看吧!",
                "class_name": "攻略",
                "tag_color": "#56b8ff"
            },
            {
                "id": 85619,
                "classid": 23,
                "onclick": 4,
                "titleurl": "http://m.3733.com/appnews/85619.html",
                "title": "《全民萌将传》体力怎么获得",
                "newstime": 1548207157,
                "titlepic": "http://pic5.3733.com/dynamic/201901/11a2be0d29371cd02ef374ee82440883.jpeg",
                "titlegame": "",
                "smalltext": "《全民萌将传》手游是一款Q版卡牌游戏，以三国历史为背景，用Q版画面打造了一个全新的三国世界。接下来小编就来为大家聊聊关于全民萌将传体力具体的获得攻略，感兴趣的小伙伴们快来看看吧!",
                "class_name": "攻略",
                "tag_color": "#56b8ff"
            },
            {
                "id": 85618,
                "classid": 21,
                "onclick": 6,
                "titleurl": "http://m.3733.com/appnews/85618.html",
                "title": "上百只妖兽等您来战《盘鲲诀》今日9：30火爆来袭",
                "newstime": 1548206930,
                "titlepic": "http://pic5.3733.com/dynamic/201901/641da2e2ed986da703727d5206fe1f85_n.jpeg",
                "titlegame": "盘鲲诀",
                "smalltext": "《盘鲲诀》是一款实时战斗类HTML5手游，丰富的玄幻剧情，并融入时下最流行的风格!画风精美细腻，打斗激烈畅快，剧情跌宕起伏，必将带给玩家耳目一新的感觉，夺宝竞技，酷炫神器多!解放双手，挂机爆装爽不停!2大职业、各种法宝、上百只妖兽等您来战!",
                "class_name": "动态",
                "tag_color": "#56b8ff"
            },
            {
                "id": 85617,
                "classid": 22,
                "onclick": 345,
                "titleurl": "http://m.3733.com/appnews/85617.html",
                "title": "《梦回仙游星耀版》1.23-1.24活动",
                "newstime": 1548206902,
                "titlepic": "",
                "titlegame": "梦回仙游星耀版",
                "smalltext": "",
                "class_name": "活动",
                "tag_color": "#f5544c"
            },
            {
                "id": 85616,
                "classid": 21,
                "onclick": 6,
                "titleurl": "http://m.3733.com/appnews/85616.html",
                "title": "今日10:00上线《全民萌将传》神将赵云司马懿等你拿",
                "newstime": 1548206761,
                "titlepic": "http://pic5.3733.com/dynamic/201901/da6bcac3316e38ab86aa4348608fbb03.jpeg",
                "titlegame": "全民萌将传",
                "smalltext": "《全民萌将传》手游是一款Q版卡牌游戏，以三国历史为背景，用Q版画面打造了一个全新的三国世界。相比传统卡牌游戏，游戏加入了更多的游戏玩法和互动玩法，配合三国背景让玩家可以率领着自己熟悉的三国名将一起征战四方!",
                "class_name": "动态",
                "tag_color": "#56b8ff"
            },
            {
                "id": 85615,
                "classid": 21,
                "onclick": 8,
                "titleurl": "http://m.3733.com/appnews/85615.html",
                "title": "复古暗黑传奇手游《暗黑群侠》今日10:00上线了",
                "newstime": 1548206618,
                "titlepic": "http://pic5.3733.com/dynamic/201901/3bfd551645b013c9ff95e1351d1a74d5_n.jpeg",
                "titlegame": "暗黑群侠",
                "smalltext": "《暗黑群侠》是一款暗黑风格的mmorpg动作手游。游戏内含武神、剑侠和天师三大职业，颠覆传统游戏玩法;画面表现以暗黑风格为主，搭配华丽装备，给人极强的视觉体验;热血超福利版，全民满V，送首充，送RMB，万人战场，公平竞技PK，快来携兄弟一起争夺皇城!",
                "class_name": "动态",
                "tag_color": "#56b8ff"
            },
            {
                "id": 83779,
                "classid": 24,
                "onclick": 164,
                "titleurl": "http://m.3733.com/appnews/83779.html",
                "title": "3D国韵奇遇式手游《山海异闻录》手游评测介绍",
                "newstime": 1545651304,
                "titlepic": "http://pic5.3733.com/dynamic/201812/de64f3ae9552327f4c628cc17014eefc.jpeg",
                "titlegame": "山海异闻录",
                "smalltext": "《山海异闻录》作为一款非常优秀3D国韵奇遇式手游，玩家们在这款游戏中游玩可以感受到展现独特东方古韵美学，玩法突破了玩家们的想象力，独具匠心的玩法设计，下面小编给大家带来一篇《山海异闻录》的游戏评测，希望大家能喜欢。",
                "class_name": "评测",
                "tag_color": "#2ccb7b"
            },
            {
                "id": 82826,
                "classid": 24,
                "onclick": 326,
                "titleurl": "http://m.3733.com/appnews/82826.html",
                "title": "古龙原著改编经典手游《古龙群侠传星耀版》手游评测介绍",
                "newstime": 1544410599,
                "titlepic": "http://pic5.3733.com/dynamic/201812/4b2111f83651c09e6e5633a8d33d123f.png",
                "titlegame": "古龙群侠传星耀版",
                "smalltext": "古龙原著的基础上进行改编的2D角色扮演手游《古龙群侠传星耀版》是一款不可多得的回合制卡牌手游，小编为此也是试玩了一段时间，发现了一些很有趣的游戏内容，足以具备吸引玩家，下面随小编一起来看看吧。",
                "class_name": "评测",
                "tag_color": "#2ccb7b"
            },
            {
                "id": 82822,
                "classid": 24,
                "onclick": 294,
                "titleurl": "http://m.3733.com/appnews/82822.html",
                "title": "《奇迹重制版》​手游评测：一款爆裂高清画质的西方魔幻手游巨作",
                "newstime": 1544409089,
                "titlepic": "http://pic5.3733.com/dynamic/201812/483cdb93653964f30f75a55f6a83eaa3.png",
                "titlegame": "奇迹重制版",
                "smalltext": "《奇迹重制版》​作为一款打破传统玩法，具有爆裂高清画质的西方魔幻手游巨作，其精细的画面和实时PK就能吸引一大波玩家的兴趣，更不用说还有非常丰富的特色玩法，小编试玩了这款游戏后，这是一个不用于其它魔幻手游的游戏，具体分为以下几点，希望大家能对这款游戏有更多的了解。",
                "class_name": "评测",
                "tag_color": "#2ccb7b"
            },
      ]
    }
  },
  methods: {
  },
  mounted() {
    // this.$axios.post('/api/index/index')
    // .then(this.handleGameList)
  },
  components: {
    TopBar,
    NavCom,
    NewsList
  }
}
</script>
