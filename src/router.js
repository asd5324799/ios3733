import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rank from './views/Rank/Rank.vue'
import Kaifu from './views/Kaifu/Kaifu.vue'
import Search from './views/Search/Search.vue'
import SearchList from './views/SearchList/SearchList.vue'
import SearchGame from './views/SearchGame/SearchGame.vue'
import SearchGift from './views/SearchGift/SearchGift.vue'
import NewGame from './views/NewGame/NewGame.vue'
import SellWell from './views/SellWell/SellWell.vue'
import Download from './views/Download/Download.vue'
import Today from './views/Today/Today.vue'
import Will from './views/Will/Will.vue'
import Already from './views/Already/Already.vue'
import Topic from './views/Topic/Topic.vue'
import TopicDetail from './views/TopicDetail/TopicDetail.vue'
import GiftDetail from './views/GiftDetail/GiftDetail.vue'
import TopicList from './views/TopicList/TopicList.vue'
// import Detail from './views/Detai.vue'
// import DetailIndex from './views/detail-index/detail-index.vue'

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
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        index:0,
        keepAlive:true,
      },
      component: Home,
      children:[
        // {
        //   path: 'quality',
        //   name: 'Quality',
        //   component:Quality
        // },
        // {
        //   path: 'newgame',
        //   name: 'NewGame',
        //   component:NewGame
        // },
        // {
        //   path: 'category',
        //   name: 'Category',
        //   component:Category
        // }
      ]
    },
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
            index:0,
            keepAlive:true,
          },
        },
        {
          path: 'already',
          name: 'Already',
          component: Already,
          meta:{
            index:0,
            keepAlive:true,
          },
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        index:0,
        keepAlive:true,
      },
    },
    {
      path:'/searchlist',
      name: 'SearchList',
      component: SearchList,
      meta:{
        index:0,
        keepAlive:true,
      },
      children:[
        {
          path: 'searchgame/:keyword',
          name: 'SearchGame',
          component: SearchGame,
          meta:{
            index:0,
            keepAlive:true,
          },
        },
        {
          path: 'searchgift/:keyword',
          name: 'SearchGift',
          component: SearchGift,
          meta:{
            index:0,
            keepAlive:true,
          },
        }
      ]
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
  if(!(/\/search/.test(from.path)) && !(/\/giftdetail/.test(from.path)) && !(/^\/detail/.test(from.path))){
    sessionStorage.setItem("NO_SEARCH_PATH",from.path)
  }
  if(/\/rank/.test(from.path)){
    sessionStorage.setItem("RANK_PATH",from.path)
  }
  if(/\/kaifu/.test(from.path)){
    sessionStorage.setItem("KAIFU_PATH",from.path)
  }
  if(/\/search/.test(from.path)){
    sessionStorage.setItem("SEARCH_PATH",from.path)
  }
  from.meta.keepAlive = true;
  to.meta.keepAlive = true;
  next()
  
})
export default router
