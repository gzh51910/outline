import {LOGIN,LOGOUT} from '../action/common'

// State：初始化数据
let initialState = {
    user:{}
}

// Reducer：修改state的方式（创建一份并覆盖）
// reducer会在执行store.dispatch()方法时被内部调用
const reducer = function(state=initialState,{type,payload}){
    // state为最新的数据

    // 根据action执行不同的操作
    switch(type){

        // 登录
        case LOGIN:
            return {
                ...state,
                user:payload
            }

        // 退出
        case LOGOUT:
            return {
                ...state,
                user:{}
            }
        default:
            return state;
    }

}

export default reducer
