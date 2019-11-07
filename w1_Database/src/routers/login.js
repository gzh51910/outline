const express = require('express');

const Router = express.Router();

const {find} = require('../db/mongodb');
const {formatData} = require('../utils')

const colName = 'user'
Router.get('/',async (req,res)=>{
    let {username,password} = req.query;
    let data = await find(colName,{username,password});
    if(data.length>0){
        res.send(formatData())
    }else{

        res.send(formatData({status:0}))
    }
})

module.exports = Router;