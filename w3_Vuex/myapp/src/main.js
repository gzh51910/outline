import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';


import store from './store'
import router from './router'
Vue.config.productionTip = false

// 使用ElementUI
Vue.use(ElementUI);

// 全局设置axios基础路径(所有的Axios请求都基于这个路径访问)
// axios.defaults.baseURL = 'https://www.nanshig.com/mobile/index.php'
Vue.prototype.$axios = axios;

new Vue({
  // 4.把router实例注入到vue实例中
  router,

  // 4. 把store注入Vue实例
  store,
  render: h => h(App),
}).$mount('#app')
