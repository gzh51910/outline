import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,CHANGE_GOODS_QTY} from '../action/cart'

// State：初始化数据
let initialState = {
    goodslist:[{
        goods_id: "1",
        goods_name: "huawei mate30 pro",
        goods_image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
        goods_price: 5998,
        goods_qty: 8
    },
    {
        goods_id: "2",
        goods_name: "xiaomi9",
        goods_image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
        goods_price: 2999,
        goods_qty: 2
    },
    {
        goods_id: "3",
        goods_name: "onePlus9 pro",
        goods_image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
        goods_price: 3999,
        goods_qty: 1
    }]
}

// Reducer：修改state的方式（创建一份并覆盖）
// reducer会在执行store.dispatch()方法时被内部调用
const reducer = function(state=initialState,{type,payload}){
    // state为最新的数据

    // 根据action执行不同的操作
    switch(type){
        // 添加到购物车
        case ADD_TO_CART:
            state = {
                ...state,
                goodslist:[payload,...state.goodslist]
            }
            return state
        // 删除购物车商品
        // dispacth({type:'remove_from_cart',payload:{id}})
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.goods_id!=payload.goods_id)
            }

        // 修改商品数量
        // dispacth({type:'change_goods_qty',payload:{id,qty}})
        case CHANGE_GOODS_QTY:
        return {
            ...state,
            goodslist:state.goodslist.map(item=>{
                if(item.goods_id == payload.goods_id){
                    item.goods_qty = payload.goods_qty;
                }
                return item;
            })
        }

        // 清空购物车
        case CLEAR_CART:
            return {
                ...state,
                goodslist:[]
            }
        default:
            return state;
    }

}

export default reducer
