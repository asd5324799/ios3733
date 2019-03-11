import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store'
import '@/common/flexible.min.js'
import '@/common/common.less'
import '@/axios/axios.js'
import Calendar from 'vue2-datepick'; 
Vue.use(Calendar);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import Prompt from './components/prompt'
Vue.use(Prompt)

import theConfirm from './components/confirm/confirm.js'
Vue.prototype.$confirm = theConfirm;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


