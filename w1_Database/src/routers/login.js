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
        res.send(formatData({data:Authorization}))
    }else{

        res.send(formatData({status:0}))
    }
})

module.exports = Router;