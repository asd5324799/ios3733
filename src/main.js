import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/flexible.min.js'
import '@/common/common.less'
import '@/axios/axios.js'
import vuescroller from 'vue-scroller'

Vue.config.productionTip = false

Vue.use(vuescroller)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
