const express = require('express');

let Router = express.Router();

let loginRouter = require('./login');
let goodsRouter = require('./goods');
let userRouter = require('./user');
let regRouter = require('./reg');

// 跨域解决方案CORS
Router.use((req,res,next)=>{
    // 支持CORS跨域，只需要设置响应头
    // res.header('Access-Control-Allow-Origin','*');
    let currentOrigin = req.get('Origin');
    let allowOrigin = ['http://localhost:8080','http://localhost:8081']
    if(allowOrigin.includes(currentOrigin)){
        res.set({
            'Access-Control-Allow-Origin':currentOrigin,
            'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-HEADERS':"Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        })
        
    }
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})

// 格式化请求体中的参数
Router.use(express.json(),express.urlencoded());

Router.use('/login',loginRouter)
Router.use('/goods',goodsRouter)
Router.use('/user',userRouter)
Router.use('/reg',regRouter)


// 必须导出（暴露）一个中间件
module.exports = Router;