const express = require('express');

const Router = express.Router();

const proxy = require('http-proxy-middleware')

// 目标地址     ：http://www.egu365.com/head.action
// 前端访问地址 ：http://localhost:1910/proxy/egu/head.action
// 代理步骤：
// 1. http://localhost:1910/proxy/egu/head.action -> http://www.egu365.com/proxy/egu/head.action
// 2. http://www.egu365.com/proxy/egu/head.action -> http://www.egu365.com/head.action
let eguMiddleware = proxy({ 
    target: 'http://www.egu365.com', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy/egu/': '/', // rewrite path
    },
});

Router.get('/egu/*',eguMiddleware)


let bdMiddleware = proxy({ 
    target: 'http://www.baidu.com', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy/baidu/': '/', // rewrite path
    },
});

Router.get('/baidu/*',bdMiddleware)

module.exports = Router;