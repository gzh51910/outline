// 引入第三方模块
const express = require('express');

// 引入文件模块
const {PORT}  = require('./config.json');

// 利用express创建一个服务器
let app = express();

// 静态资源服务器
app.use(express.static('./',{maxAge:1000*10}));

// @测试中间件
// let myMiddleware = function(req,res){
//     res.send('hello')
// }
// app.use((req,res,next)=>{
//     console.log('tingting');
//     next()
// })
// app.use('/laoxie',(req,res,next)=>{
//     console.log('laoxie')
//     res.send({username:'laoxie',password:123456})
//     next();
// })

// app.use('/dingding',(req,res,next)=>{
//     console.log('dingding');
//     // next()
// })

// app.use('/laoluo',(req,res,next)=>{
//     console.log('laoluo')
// })

app.use(express.json(),express.urlencoded());

// @数据接口编写
let goodslist = [{
    id:1,
    name:'iphone11 pro',
    price: 8999,
    color:'green'
},{
    id:2,
    name:'huawei mate30 pro',
    price: 5999,
    color:'土豪金'
},{
    id:3,
    name:'xiaomi 9 pro',
    price: 2999,
    color:'粉红色'
}];

// 使用use不论什么请求都会进入
// 获取所有商品信息
app.get('/goods',(req,res)=>{
    res.send(goodslist)
});

// 获取单个商品信息
// 动态路由
app.get('/goods/:id',(req,res)=>{
    // 如何获取变量id: 
    // 动态路由获取：req.params
    let {id} = req.params;
    let current = goodslist.filter(item=>{
        return item.id==id
    })[0]
    res.send(current)
});
app.post('/goods',(req,res)=>{
    
    res.send(req.body)
});

// 注册
// app.post(path,...middlware)
app.post('/reg',(req,res)=>{
    console.log(req.body)
    res.send('注册成功')
})

// 登录
app.get('/login',(req,res)=>{
    // 接收前端发送的数据参数
    // get请求参数：req.query
    console.log(req.query)
    res.send(req.query)
})

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})