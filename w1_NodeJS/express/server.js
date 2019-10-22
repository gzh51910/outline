// 引入第三方模块
const express = require('express');

// 引入文件模块
const {PORT}  = require('./config.json');

// 利用express创建一个服务器
let app = express();

// 静态资源服务器
app.use(express.static('./',{maxAge:1000*10}));

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})