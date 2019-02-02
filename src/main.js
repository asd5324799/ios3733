import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import '@/common/flexible.min.js'
import '@/common/common.less'
import '@/axios/axios.js'
import vuescroller from 'vue-scroller'
// import 'tab-slider/dist/index.css'

Vue.config.productionTip = false

Vue.use(vuescroller)
 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
