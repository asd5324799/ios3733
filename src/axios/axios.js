import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import Router from '../router/router';

// 拦截请求
axios.interceptors.request.use(res => {
  res.method = 'post';
  res.data.uuid = localStorage.getItem('uuid');
  res.data.from = '212';
  res.data.build = '40';
  res.data.channel = 'cps1354';

  if(res.url.indexOf('manage') >= 0) {
    res.url = res.url.replace('/manage', 'https://grq.3733.com/index/api');
    res.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    if(res.method === 'post') {
      res.data = qs.stringify( {
          ...res.data
      })
    } 
  }

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