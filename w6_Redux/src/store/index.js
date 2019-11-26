import {createStore} from 'redux';

// State：初始化数据
let initialState = {
    totalPrice:123,
    goodslist:[]
}

// Reducer：修改state的方式（创建一份并覆盖）
// reducer会在执行store.dispatch()方法时被内部调用
const reducer = function(state=initialState,action){
    // state为最新的数据

    // 根据action执行不同的操作
    switch(action.type){
        // 添加到购物车
        case 'add_to_cart':
            state = {
                ...state,
                goodslist:[action.payload,...state.goodslist]
            }
            return state
        // 删除购物车商品

        // 修改商品数量

        // 清空购物车

        default:
            return state;
    }

}

const store = createStore(reducer);

export default store;