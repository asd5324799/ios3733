import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store'
import '@/common/flexible.min.js'
import '@/common/common.less'
import '@/axios/axios.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
