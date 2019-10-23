const express = require('express');

let Router = express.Router();

let loginRouter = require('./login');
let goodsRouter = require('./goods');
let userRouter = require('./user');
let regRouter = require('./reg');

// 格式化请求体中的参数
Router.use(express.json(),express.urlencoded());

Router.use('/login',loginRouter)
Router.use('/goods',goodsRouter)
Router.use('/user',userRouter)
Router.use('/reg',regRouter)


// 必须导出（暴露）一个中间件
module.exports = Router;