// 给模块对象添加一个username属性
export var username = 'laoxie';
export const GENDER = '男';
export function show(){
    alert(`Hello my name is ${username}`);
}
// window.console.log('username:',username)


// 导出默认属性
// 给模块对象设置一个default属性，值为username
export default username;

export {
    username as myname
}