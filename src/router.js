import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rank from './views/Rank/Rank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
  ]
})
