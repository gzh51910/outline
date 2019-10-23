const express = require('express');

const {PORT} = require('./config.json');

const allRouter = require('./routers')

// 创建一个服务器
const app = express();

// 添加静态资源服务器
app.use(express.static('./'));

// 路由
app.use(allRouter);


// 监听端口
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})