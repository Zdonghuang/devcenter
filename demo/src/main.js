// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index'

import axios from 'axios'
import qs from 'qs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

import ElementUI from 'element-ui';

import Vuex from 'vuex'

import store from '../src/store/store.js'

import 'element-ui/lib/theme-chalk/index.css';
import '../static/comCss/index.css'

import VModal from 'vue-js-modal'
import router from './router'
import utils   from '../utils.js'    //获取url参数
 
Vue.prototype.$utils=utils   //注册全局方法
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false

//可以通过这种方式给axios设置的默认请求头
axios.defaults.headers = {
  "Content-Type": "application/json"
}

// 发送请求前处理request的数据
// axios.defaults.transformRequest = [function (data) {
//   // Do whatever you want to transform the data
//   let newData = ''
//   for (let k in data) {
//   newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
//   }
//   return newData
// }]

axios.defaults.baseURL = BASE_URL //配置基础接口地址
// axios.defaults.headers.common['authorization']= store.state.token;
Vue.prototype.$ajax = axios;
Vue.prototype.$imageUrl = BASE_IMAGE_URL;
Vue.prototype.writeCookie = function(cookieName, cookieValue, expDays, domain) {
  var dt, expires;
  dt = new Date();
  dt.setTime(dt.getTime()+(expDays*24*60*60*1000));
  expires = "; expires="+dt.toGMTString();
  var s = cookieName + "=" + cookieValue + expires + '; domain=' + domain;
  document.cookie = s;
}

Vue.prototype.qs = qs;

Vue.use(Vuex);
Vue.use(ElementUI);


// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
  store.commit('setToken', sessionStorage.getItem('token'))
  store.commit('changeLoginState',false);
}
if(sessionStorage.getItem('appId')){
  store.commit('idSet', sessionStorage.getItem('appId'))
}
router.beforeEach((to, from, next)=> {
  sessionStorage.setItem('from',from.fullPath);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(store.state.usertoken){
      next();
    }
    else {
      //this.$alert('请登陆');
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})


axios.interceptors.request.use(
  config => {
      if (store.state.usertoken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.Authorization = `${store.state.usertoken}`;
      }
      return config;
  },
  err => {
      return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response.status === 401 || err.response.status === 403) {
      router.push('/login');
    }

    return Promise.reject(err);
  }
);

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App }
  // template: '<App/>'
}).$mount('#app')
