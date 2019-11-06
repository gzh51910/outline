import Vue from 'vue'
import App from './App.vue'

// let username = 'laoxie'
// console.log('App',App)

// // 导入
// import mymodule from './js/esmodule'
// window.console.log('mymodule',mymodule)

// // 导出模块对象中的username属性
// import {username as lx} from './js/esmodule'
// window.console.log('lx',lx)

// // 查看模块对象
// import * as all from './js/esmodule';
// window.console.log('all:',all);

// // 导出模块对象的default属性，并赋值给myname变量
// import nickname from './js/esmodule';

// window.console.log('myname：',nickname)

// show();

Vue.config.productionTip = false

new Vue({
  render:function(createElement){
    return createElement(App)
  }
}).$mount('#app')
