import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  res = res.data;
  if(res.code === 1) {
    return res;
  } else {
    return null;
  }
}, err => {
  return Promise.reject(err);
})

Vue.prototype.$axios = axios;