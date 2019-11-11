import Vue from 'vue'

// 1. 引入Vuex
import Vuex from 'vuex';

import cart from './cart';
import common from './common';

// 2. 使用(安装)Vuex
Vue.use(Vuex);

// 3. 实例化一个Store（一个应用只运行有一个Store）
let store = new Vuex.Store({
  modules:{
    cart,
    common
  }
})
// 5.在组件中使用vuex
// this.$store.state.goodslist

console.log('store:',store)

// 4. 把store导出并注入Vue实例
export default store;