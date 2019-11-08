import Vue from 'vue'

// 1. 引入Vuex
import Vuex from 'vuex';

// 2. 使用(安装)Vuex
Vue.use(Vuex);

// 3. 实例化一个Store（一个应用只运行有一个Store）
let store = new Vuex.Store({
  state:{
    goodslist:[
        {
          id: "1",
          name: "huawei mate30 pro",
          imgurl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
          price: 5998,
          qty: 10
        },
        {
          id: "2",
          name: "xiaomi9",
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
          price: 2999,
          qty: 2
        },
        {
          id: "3",
          name: "onePlus9 pro",
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
          price: 3999,
          qty: 1
        }
      ]
  },

//   mutation的调用方式：store.commit(mutation)
  mutations:{
    // 删除单个商品
    // state:上面的state
    // payload:触发mutation时传入的参数
    removeFromCart(state,id){
        // state.goodslist.forEach((item,idx)=>{
        //     if(item.id === id){
        //         state.goodslist.splice(idx,1)
        //     }
        // })
        state.goodslist = state.goodslist.filter(item=>item.id!=id)
    },

    // 清空购物车
    clearCart(state){
        state.goodslist = []
    },

    // 添加到购物车
    addToCart(state,goods){
        state.goodslist.unshift(goods)
    },

    // 修改数量
    changeQty(state,payload){
        state.goodslist.forEach(item=>{
            if(item.id === payload.id){
                item.qty = payload.qty;
            }
        })
    }
  }
})
// 5.在组件中使用vuex
// this.$store.state.goodslist

// 4. 把store导出并注入Vue实例
export default store;