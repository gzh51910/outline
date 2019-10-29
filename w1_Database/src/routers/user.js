const express = require('express');

const Router = express.Router();

const {find,remove,update} = require('../db/mongodb');

const {formatData} = require('../utils')

const colName = 'user'
// get '/user' 返回所有用户
Router.get('/',async (req,res)=>{
    // 查询数据库
    let result = await find(colName);//得到一个posmise
    res.send(formatData({data:result}))
})

// 查询单个用户信息
Router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    // 查询数据库
    let result = await find(colName,{_id:id},{fields:{password:false}});//得到一个posmise
    res.send(formatData({data:result}))
})

// 删除用户
Router.delete('/:id',async (req,res)=>{
    let {id} = req.params;
    // 查询数据库
    let result = await remove(colName,{_id:id});

    if(result.deletedCount>0){
        res.send(formatData())
    }else{
        res.send(formatData({status:0}))
    }
})



// 修改用户信息
Router.patch('/:id',async (req,res)=>{
    let {id} = req.params;
    let {password,age,gender} = req.body;
    // 查询数据库
    let result = await update(colName,{_id:id},{password,age,gender});

    if(result.modifiedCount>0){
        res.send(formatData())
    }else{
        res.send(formatData({status:0}))
    }
})


module.exports = Router