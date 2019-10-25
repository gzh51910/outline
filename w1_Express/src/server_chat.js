const ws = require('ws');
const express = require('express');
const http = require('http');

const {PORT} = require('./config.json');

// 创建express服务器
let app = express();
app.use(express.static('./'))


// 通过http模块连接express服务器和socket服务器,让其共用一个端口
let server = http.Server(app);

// webSocket服务器
const wsServer = new ws.Server({
    server
    // port:1001
});

// 必须用server来监听端口而不是express的app
server.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
});

wsServer.on('connection',client=>{console.log(1234)
    // 监听客户端发送消息
    client.on('message',msg=>{

        // @消息广播
        // 接收到消息后，发送给所有已连接的客户端
        // wsServer.clients是一个数组，保存着所有客户端的信息
        wsServer.clients.forEach(client=>{
            client.send(msg);
        })
    })
})

