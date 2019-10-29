const express = require('express');

const Router = express.Router();

const {find} = require('../db/mongodb');

const {formatData} = require('../utils')

const colName = 'user'
// get '/user' 返回所有用户
Router.get('/',async (req,res)=>{
    // 查询数据库
    let result = await find(colName);//得到一个posmise
    res.send(formatData({data:result}))
})



module.exports = Router