/**
 * 多人聊天室服务器
    * 转发用户消息
 */

const ws = require('ws');

// 创建一个websocket服务器
let wss = new ws.Server({
    port: 1001
});

// 监听客户端连接
// 如果有用户连接wss服务器，则触发connection事件
wss.on('connection',(client)=>{
    // client: 连接服务器的客户端信息对象
    console.log('client连接成功')
    client.on('message',(msg)=>{
        // msg: 客户端出过来的消息
        console.log('客户端出过来的消息：',msg);
    });

    // 服务器给客户端推送消息
    client.send('欢迎来到xxx聊天室');
})