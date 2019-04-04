import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/Home.vue';
import Detail from '../views/Detail/Detail.vue';
import Rank from '../views/Rank/Rank.vue';
import Kaifu from '../views/Kaifu/Kaifu.vue';
import Mine from '../views/Mine/Mine.vue';
import MyGame from '../views/Mine/MyGame/MyGame.vue';
import MyGift from '../views/Mine/MyGift/MyGift.vue';
import Login from '../views/Mine/Login/Login.vue';
import PhoneRegister from '../views/Mine/UserRegister/PhoneRegister/PhoneRegister.vue';
import UserInfo from '../views/Mine/UserInfo/UserInfo.vue';
import ChangePwd from '../views/Mine/ChangePwd/ChangePwd.vue';
import Identity from '../views/Mine/Identity/Identity.vue';
import ResetPwd from '../views/Mine/ResetPwd/ResetPwd.vue';
import Search from '../views/Search/Search.vue';
import SearchIndex from '../views/Search/SearchIndex/SearchIndex.vue';
import SearchResult from '../views/Search/SearchResult/SearchResult.vue';
import Topic from '../views/Topic/Topic.vue';
import TopicList from '../views/Topic/TopicList/TopicList.vue';
import GiftDetail from '../views/GiftDetail/GiftDetail.vue';
import CommentDetail from '../views/Detail/comment-detail/comment-detail.vue';
import ReplyPage from '../views/Detail/reply-page/reply-page.vue';
import Subscribe from '../views/Subscribe/subscribe.vue';
import Gold from '../views/Mine/Gold/Gold.vue';
import PlatformGold from '../views/Mine/PlatformGold/PlatformGold.vue';
import MyMessage from '../views/Mine/MyMessage/MyMessage.vue';

Vue.use(Router)

var router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path:'/',
      redirect:{name:'Home'}
    },
    {
      path:'/home',
      name: 'Home',
      component: Home
    }, {
      path: '/rank',
      name: 'Rank',
      component: Rank,
    }, {
      path: '/kaifu',
      name: 'Kaifu',
      component: Kaifu,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      redirect: {name: 'SearchIndex'},
      children: [{
        path: '/search/searchindex',
        name: 'SearchIndex',
        component: SearchIndex,
      }, {
        path: '/search/searchresult',
        name: 'SearchResult',
        component: SearchResult
      }]
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    }, {
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
    },
    {
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
      name: 'MyGame',
      component: MyGame,
      meta: {  
        requiresAuth: true    
      }
    },
    {
      path:'/mygift',
      name: 'MyGift',
      component: MyGift,
      meta: {  
        requiresAuth: true    
      }
    }, {
      path:'/login',
      name: 'Login',
      component: Login,
      meta: {  
        requiresAuth: true    
      }
    },
    {
      path:'/phoneregister',
      name: 'PhoneRegister',
      component: PhoneRegister
    }, {
      path:'/userinfo',
      name: 'userinfo',
      component: UserInfo,
      meta: {  
        requiresAuth: true    
      }
    },
    {
      path:'/changepwd',
      name: 'ChangePwd',
      component: ChangePwd,
      meta: {  
        requiresAuth: true    
      }
    },
    {
      path:'/identity',
      name: 'Identity',
      component: Identity,
      meta: {  
        requiresAuth: true    
      }
    },    
    {
      path:'/resetpwd',
      name: 'ResetPwd',
      component: ResetPwd
    }, {
      path: '/gold',
      name: 'Gold',
      component: Gold
    }, {
      path: '/platformgold', 
      name: 'PlatformGold',
      component: PlatformGold,
    }, {
      path: '/mymessage',
      name: 'MyMessage',
      component: MyMessage,
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
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
