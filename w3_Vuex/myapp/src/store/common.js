// Vuex的数据，刷新后会消息
// 所以刷新后先获取本地存储的数据
let user = localStorage.getItem('user');// {Authorization,username...},'xxxx'
try{
    user = JSON.parse(user) || {};
}catch(err){
    user = {}
}

export default {
    state:{
        // 用户信息
        user

    },
    mutations:{
        login(state,user){
            state.user = user;

            // 设置本地存储
            localStorage.setItem('user',JSON.stringify(user))
        },
        logout(state){
            state.user = {};
            state.Authorization = '';

            // 清除本地存储信息
            localStorage.removeItem('user');
        }
    }
}