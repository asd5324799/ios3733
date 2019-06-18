import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Router from '../router/router';

// 拦截请求
axios.interceptors.request.use(res => {
  res.method = 'post';
  res.data.uuid = 'ffffffff-1234-1234-1234-123456789012';
  res.data.from = '212';
  res.data.build = '30';
  return res;
})

// 拦截响应
axios.interceptors.response.use(res => {
  res = res.data;
  if(res.code === 1) {
    return res
  } else if(res.code === -2) {
    Router.push({
      name: 'Login'
    })
  }
  return res;
}, err => {
  return Promise.reject(err);
})

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;