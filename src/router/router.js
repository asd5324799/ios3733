import Vue from 'vue'
import Router from 'vue-router'
import Home from './home';
import Detail from './detail';
import Rank from '../views/Rank/Rank.vue'
import Kaifu from '../views/Kaifu/Kaifu.vue'
import Mine from '../views/Mine/Mine.vue'
import Search from '../views/Search/Search.vue'
import SearchIndex from '../views/Search/SearchIndex/SearchIndex.vue'
import SearchList from '../views/Search/SearchList/SearchList.vue'
import SearchGame from '../views/Search/SearchList/SearchGame/SearchGame.vue'
import SearchGift from '../views/Search/SearchList/SearchGift/SearchGift.vue'
import NewGame from '../views/Rank/NewGame/NewGame.vue'
import SellWell from '../views/Rank/SellWell/SellWell.vue'
import Download from '../views/Rank/Download/Download.vue'
import Today from '../views/Kaifu/Today/Today.vue'
import Will from '../views/Kaifu/Will/Will.vue'
import Already from '../views/Kaifu/Already/Already.vue'
import Topic from '../views/Topic/Topic.vue'
import TopicDetail from '../views/TopicDetail/TopicDetail.vue'
import GiftDetail from '../views/GiftDetail/GiftDetail.vue'
import TopicList from '../views/TopicList/TopicList.vue'

Vue.use(Router)

var router = new Router({
  mode:'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  // linkActiveClass:'active',
  routes: [
    {
      path:'/',
      redirect:{name:'Home'}
    },
    Home, 
    Detail,
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      redirect:'/rank/newgame',
      meta:{
        index:0,
        keepAlive:true,
      },
      children:[
        {
          path: 'newgame',
          name: 'NewGame',
          component: NewGame,
          meta:{
            index:0,
            keepAlive:true,
          },
        },
        {
          path: 'sellwell',
          name: 'SellWell',
          component: SellWell,
          meta:{
            index:1,
            keepAlive:true,
          },
        },
        {
          path: 'download',
          name: 'Download',
          component: Download,
          meta:{
            index:2,
            keepAlive:true,
          },
        }
      ]
    },
    {
      path: '/kaifu',
      name: 'Kaifu',
      component: Kaifu,
      redirect:'/kaifu/today',
      meta:{
        index:0,
        keepAlive:true,
      },
      children:[
        {
          path: 'today',
          name: 'Today',
          component: Today,
          meta:{
            index:0,
            keepAlive:true,
          },
        },
        {
          path: 'will',
          name: 'Will',
          component: Will,
          meta:{
            index:1,
            keepAlive:true,
          },
        },
        {
          path: 'already',
          name: 'Already',
          component: Already,
          meta:{
            index:2,
            keepAlive:true,
          },
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        index:0,
        keepAlive:true,
        backGrade:0
      },
      redirect:'/search/searchindex',
      children:[
        {
          path: 'searchindex',
          name: 'SearchIndex',
          component: SearchIndex,
          meta:{
            index:0,
            keepAlive:true,
            backGrade:0
          },
        },
        {
          path:'searchlist',
          name: 'SearchList',
          component: SearchList,
          redirect:'searchlist/searchgame',
          
          meta:{
            index:0,
            keepAlive:true,
            backGrade:1
          },
          
          children:[
            {
              path: 'searchgame/:keyword',
              name: 'SearchGame',
              component: SearchGame,
              meta:{
                index:0,
                backGrade:2
              },
            },
            {
              path: 'searchgift/:keyword',
              name: 'SearchGift',
              component: SearchGift,
              meta:{
                index:0,
                backGrade:2
              },
            }
          ]
        },
      ],
    },
    
    {
      path: '/topic',
      name: 'Topic',
      meta:{
        index:0,
        keepAlive:true,
      },
      component: Topic,
    },
    {
      path: '/topicdetail',
      name: 'TopicDetail',
      meta:{
        index:0,
        keepAlive:true,
      },
      component: TopicDetail,
    },
    {
      path: '/topiclist',
      name: 'TopicList',
      meta:{
        index:0,
        keepAlive:false,
      },
      component: TopicList,
    },
    {
      path: '/giftdetail/:id',
      name: 'GiftDetail',
      meta:{
        index:0,
        keepAlive:false,
      },
      component: GiftDetail,
    }

  ]
})
router.beforeEach((to, from, next) => {
  //记录非搜索页path
  if(!(/\/search/.test(from.path)) && !(/\/giftdetail/.test(from.path)) && !(/^\/detail/.test(from.path))){
    sessionStorage.setItem("NO_SEARCH_PATH",from.path)
  }
  //记录排行榜页path
  if(/\/rank/.test(from.path)){
    sessionStorage.setItem("RANK_PATH",from.path)
  }
  //记录开服表页path
  if(/\/kaifu/.test(from.path)){
    sessionStorage.setItem("KAIFU_PATH",from.path)
  }
  // 记录搜索页path
  if(/\/search/.test(from.path)){
    sessionStorage.setItem("SEARCH_PATH",from.path)
  }
  // from.meta.keepAlive = true;
  // to.meta.keepAlive = true;
  next()
  
})
export default router
