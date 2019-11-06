import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.config.productionTip = false

// 使用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  // 4.把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
