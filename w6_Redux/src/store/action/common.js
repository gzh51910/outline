/**
 * 定义用于创建action的方法
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

 function login(user){
     return {
         type:LOGIN,
         payload:user
     }
 }

 function logout(){
    return {
        type:LOGOUT
    }
 }


//  default导出，方便使用bindActionCreators
 export default {
    login,
    logout
 }