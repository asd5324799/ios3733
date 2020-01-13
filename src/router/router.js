import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home/Home.vue';
import QualitySelect from '../views/Home/h5/qualityselect/qualityselect.vue';
import NewGame from '../views/Home/h5/newgame/newgame.vue';
import CateGory from '../views/Home/h5/category/category.vue';

import Detail from '../views/Detail/Detail.vue';
import DetailIndex from '../views/Detail/detail-index/detail-index.vue';
import DetailComments from '../views/Detail/detail-comments/detail-comments.vue';
import DetailGift from '../views/Detail/detail-gift/detail-gift.vue';
import DetailNews from '../views/Detail/detail-news/detail-news.vue';

import Rank from '../views/Rank/Rank.vue';
import NewGameRank from '../views/Rank/newGameRank/newGameRank.vue';
import SellWellRank from '../views/Rank/sellWellRank/sellWellRank.vue';
import DownloadRank from '../views/Rank/downloadRank/downloadRank.vue';

import Kaifu from '../views/Kaifu/Kaifu.vue';
import TodayKaifu from '../views/Kaifu/todayKaifu/todayKaifu.vue';
import WillKaifu from '../views/Kaifu/willKaifu/willKaifu.vue';
import AlreadyKaifu from '../views/Kaifu/alreadyKaifu/alreadyKaifu.vue';

import Mine from '../views/Mine/Mine.vue';

import MyGame from '../views/Mine/MyGame/MyGame.vue';
import GameCollect from '../views/Mine/MyGame/GameCollect/GameCollect.vue';
import AlreadyAppointment from '../views/Mine/MyGame/AlreadyAppointment/AlreadyAppointment.vue';

import MyGift from '../views/Mine/MyGift/MyGift.vue';
import Login from '../views/Mine/Login/Login.vue';
import PhoneRegister from '../views/Mine/UserRegister/PhoneRegister/PhoneRegister.vue';
import UserRegister from '../views/Mine/UserRegister/UserRegister.vue';
import UserInfo from '../views/Mine/UserInfo/UserInfo.vue';
import ChangePwd from '../views/Mine/ChangePwd/ChangePwd.vue';
import Identity from '../views/Mine/Identity/Identity.vue';
import ResetPwd from '../views/Mine/ResetPwd/ResetPwd.vue';
import Search from '../views/Search/Search.vue';
import SearchIndex from '../views/Search/SearchIndex/SearchIndex.vue';
import SearchResult from '../views/Search/SearchResult/SearchResult.vue';
import SearchGame from '../views/Search/SearchResult/SearchGame/SearchGame.vue';
import SearchGift from '../views/Search/SearchResult/SearchGift/SearchGift.vue';

import Topic from '../views/Topic/Topic.vue';
import TopicList from '../views/Topic/TopicList/TopicList.vue';

import GiftDetail from '../views/GiftDetail/GiftDetail.vue';
import CommentDetail from '../views/Detail/comment-detail/comment-detail.vue';
import ReplyPage from '../views/Detail/reply-page/reply-page.vue';
import Subscribe from '../views/Subscribe/subscribe.vue';
// import Gold from '../views/Mine/Gold/Gold.vue';
// import PlatformGold from '../views/Mine/PlatformGold/PlatformGold.vue';
import MyMessage from '../views/Mine/MyMessage/MyMessage.vue';
import CommentMessage from '../views/Mine/MyMessage/CommentMessage/CommentMessage.vue';
import ReplyMessage from '../views/Mine/MyMessage/ReplyMessage/ReplyMessage.vue';
import Notice from '../views/Mine/MyMessage/Notice/Notice.vue';
import GameClass from '../views/GameClass/GameClass.vue';
import DownloadManage from '../views/DownloadManage/DownloadManage.vue';

Vue.use(Router)

var router = new Router({
  // 记录各个滚动条位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path:'/',
      redirect:{name:'QualitySelect'}
    }, {
      path:'/home',
      component: Home,
      children: [{
        path: '/',
        name: 'QualitySelect',
        component: QualitySelect
      }, {
        path: 'newgame',
        name: 'NewGame',
        component: NewGame
      }, {
        path: 'category',
        name: 'CateGory',
        component: CateGory
      }]
    }, {
      path: '/rank',
      component: Rank,
      children: [{
        path: '/',
        name: 'NewGameRank',
        component: NewGameRank,
      }, {
        path: 'sellwell',
        name: 'SellWellRank',
        component: SellWellRank
      }, {
        path: 'download',
        name: 'DownloadRank',
        component: DownloadRank
      }
    ]},  {
      path: '/kaifu',
      component: Kaifu,
      children: [{
        path: '/',
        name: 'TodayKaifu',
        component: TodayKaifu
      }, {
        path: 'will',
        name: 'WillKaifu',
        component: WillKaifu
      }, {
        path: 'already',
        name: 'AlreadyKaifu', 
        component: AlreadyKaifu
      }]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    }, 
    {
      path: '/detail',
      component: Detail,
      children: [{
        path: '',
        name: 'DetailIndex',
        component: DetailIndex
      }, {
        path: 'comments',
        name: 'DetailComments',
        component: DetailComments
      }, {
        path: 'gift',
        name: 'DetailGift',
        component: DetailGift
      }, {
        path: 'news',
        name: 'DetailNews',
        component: DetailNews
      }]
    },
    {
      path: '/search',
      component: Search,
      children: [{
        path: '/',
        name: 'SearchIndex',
        component: SearchIndex,
      }, {
        path: 'searchresult',
        component: SearchResult,
        children: [{
          path: '/',
          name: 'SearchGame',
          component: SearchGame
        }, {
          path: 'searchGift',
          name: 'SearchGift',
          component: SearchGift
        }]
      }]
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    }, 
    {
      path: '/comment-detail',
      name: 'CommentDetail',
      component: CommentDetail
    }, {
      path: '/reply-page',
      name: 'ReplyPage',
      component: ReplyPage,
      meta: {  
        requiresAuth: true    
      }
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic,
    },{
      path: '/gameclass',
      name: 'GameClass',
      component: GameClass,
    }, {
      path: '/topiclist',
      name: 'TopicList',
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
    },
    {
      path:'/mygame',
      component: MyGame,
      meta: {  
        requiresAuth: true    
      },
      children: [{
        path: '',
        name: 'GameCollect',
        component: GameCollect,
        meta: {  
          requiresAuth: true    
        },
      }, {
        path: 'AlreadyAppointment',
        name: 'AlreadyAppointment',
        component: AlreadyAppointment,
        meta: {  
          requiresAuth: true    
        },
      }]
    },
    {
      path:'/mygift',
      name: 'MyGift',
      component: MyGift,
      meta: {  
        requiresAuth: true    
      }
    }, 
    {
      path:'/login',
      name: 'Login',
      component: Login,
      meta: {  
        requiresAuth: true    
      }
    }, {
      path:'/phoneregister',
      name: 'PhoneRegister',
      component: PhoneRegister
    }, {
      path:'/userregister',
      name: 'UserRegister',
      component: UserRegister
    }, 
    {
      path:'/userinfo',
      name: 'userinfo',
      component: UserInfo,
      meta: {  
        requiresAuth: true    
      }
    }, {
      path:'/changepwd',
      name: 'changePwd',
      component: ChangePwd,
      meta: {  
        requiresAuth: true    
      }     
    }, {
      path:'/identity',
      name: 'Identity',
      component: Identity,
      meta: {  
        requiresAuth: true    
      }     
    }, {
      path:'/resetpwd',
      name: 'ResetPwd',
      component: ResetPwd,
    }, {
      path: '/mymessage',
      component: MyMessage,
      meta: {  
        requiresAuth: true    
      },
      children: [{
        path: '',
        name: 'CommentMessage',
        component: CommentMessage,
        meta: {  
          requiresAuth: true    
        },
      }, {
        path: 'ReplyMessage',
        name: 'ReplyMessage',
        component: ReplyMessage,
        meta: {  
          requiresAuth: true    
        },
      }, {
        path: 'Notice',
        name: 'Notice',
        component: Notice,
        meta: {  
          requiresAuth: true    
        },
      }],
    }, {
      path: '/downloadManage',
      name: 'DownloadManage',
      component: DownloadManage,
      meta: {  
        requiresAuth: true    
      },
    }
   
    // {
    //   path: '/gold',
    //   name: 'Gold',
    //   component: Gold
    // }, {
    //   path: '/platformgold', 
    //   name: 'PlatformGold',
    //   component: PlatformGold,
    // }
  ]
})

router.beforeEach((to, from, next) => {
  //记录首页path
  if(/\/home/.test(from.path)){
    sessionStorage.setItem("HOME_PATH",from.path)
  }
  //记录排行榜页path
  if(/\/rank/.test(from.path)){
    sessionStorage.setItem("RANK_PATH",from.path)
  }
  //记录开服表页path
  if(/\/kaifu/.test(from.path)){
    sessionStorage.setItem("KAIFU_PATH",from.path)
  }
  let token = sessionStorage.getItem('token')
  if(to.path === '/login'){
    next();
  }else{
    if(to.meta.requiresAuth && !token) {
      next({ path: '/login' })
    }else{
      next();
    }
  }
})



export default router
