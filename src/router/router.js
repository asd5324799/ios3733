import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue';
import Detail from '../views/Detail/Detail.vue';
import Rank from '../views/Rank/Rank.vue'
import Kaifu from '../views/Kaifu/Kaifu.vue'
import Mine from '../views/Mine/Mine.vue'
import Search from '../views/Search/Search.vue'
import SearchIndex from '../views/Search/SearchIndex/SearchIndex.vue';
import SearchResult from '../views/Search/SearchResult/SearchResult.vue';
import Topic from '../views/Topic/Topic.vue'
import TopicList from '../views/Topic/TopicList/TopicList.vue'
import GiftDetail from '../views/GiftDetail/GiftDetail.vue'
import CommentDetail from '../views/Detail/comment-detail/comment-detail.vue';
import ReplyPage from '../views/Detail/reply-page/reply-page.vue';
import Subscribe from '../views/Subscribe/subscribe.vue';

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
      component: ReplyPage
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
  next()
  
})
export default router
