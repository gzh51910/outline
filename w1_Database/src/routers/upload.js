const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Router = express.Router();

const {find,remove,update} = require('../db/mongodb');

const {formatData} = require('../utils')

// dest:设置图片上传目录，目录不存在会自动创建（上传的文件为临时文件，文件名随机，没有扩展名）
// var upload = multer({ dest: 'uploads/' })

// 自定义文件存储方式（存储路径，修改文件名）
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath;
        if(req.path === '/goods'){
            uploadPath = 'uploads/goods';
        }else if(req.path === '/avatar'){
            uploadPath = 'uploads/avatar';
        }else{
            uploadPath = 'upload/'
        }
        try{
            // 设置图片保存地址，如地址不存在，则报错
            fs.accessSync(uploadPath)
        }catch(err){
            // 如果目录不存在，则创建目录
            // recursive: 如果父级目录不存，则创建相应父级目录
            fs.mkdirSync(uploadPath,{recursive:true});
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        // 自定义文件名
        // 获取文件扩展名
        let ext = path.extname(file.originalname)
      cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});
var upload = multer({ storage })

// /upload/avatar
Router.post('/avatar',upload.single('avatar'),async (req,res)=>{
    // 数据被格式化到：req.body
    // 文件信息被格式化到：req.file
    let {userid} = req.body;
    
    // 存入数据库
    let result;
    try{
        await update('user',{_id:userid},{avatar:req.file.path})
        result = formatData({data:req.file});
    }catch(err){
        result = formatData({status:0})
    }
    res.send(result);
})

// 商品
Router.post('/goods',upload.array('goods',5),(req,res)=>{
    // console.log(req.path)
    // 数据被格式化到：req.body
    // 文件信息被格式化到：req.files
    res.send(req.files);
    
})

module.exports = Router