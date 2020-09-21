import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import {PullRefresh, Toast, List, Popup, Dialog} from 'vant'
import Calendar from 'vue2-datepick'
import Prompt from './components/prompt'
import theConfirm from './components/confirm/confirm.js'
import store from './store'
import VueClipboard from 'vue-clipboard2'

import '@/common/flexible.min.js'
import '@/axios/axios.js'

import '@/common/common.less'
import 'vant/lib/index.css'
import '@/common/vant.less'


Vue.use(PullRefresh).use(List).use(Popup);
Vue.use(Calendar);
Vue.use(Prompt);
Vue.use(VueClipboard);

Vue.prototype.$confirm = theConfirm;
Vue.prototype.$toast = Toast;
Vue.prototype.$Dialog = Dialog
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


