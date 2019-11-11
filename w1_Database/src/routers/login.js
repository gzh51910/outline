const express = require('express');

const Router = express.Router();

const {find} = require('../db/mongodb');
const {formatData,token} = require('../utils');


const colName = 'user'
Router.get('/',async (req,res)=>{
    let {username,password} = req.query;
    let data = await find(colName,{username,password});
    if(data.length>0){
        // 登录成功创建一个token
        let Authorization = token.create({username});
        res.set({
            // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
            'Access-Control-Expose-Headers' : 'Authorization',
            'Authorization':Authorization
        });
        res.send(formatData({data}));
    }else{

        res.send(formatData({status:0}))
    }
})

module.exports = Router;