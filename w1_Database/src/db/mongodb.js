const {MongoClient} = require('mongodb');

// 连接MongoDB数据库
const {dbUrl,dbName} = require('../config.json');

async function connect(){
    // return new Promise((resolve,reject)=>{
    //     MongoClient.connect(mongodbUrl, function(err, client) {
    //         // err: 连接数据失败时的错误信息，默认null
    //         // client: 连接成功后mongodb客户端
        
    //         console.log("Connected successfully to server");
           
    //         // 通过client.db()获取某个数据库，无则自动创建
    //         const db = client.db(dbName);
        
    //         resolve({client,db})
    //     });
    // })

    const client = await MongoClient.connect(dbUrl)
    const db = client.db(dbName);

    return {client,db}
}

// 增
async function create(colName,data){
    const {db,client} = await connect();

    let collection = db.collection(colName);

    let result = await collection.insertOne(data);

    client.close();

    return result;
}

function remove(){

}

function update(){

}

async function find(colName){
    let {db,client} = await connect();

    // 集合或文档操作
    // 获取集合
    let collection = db.collection(colName);

    // 文档操作（增删改查）
    // collection.find().toArray((err,result)=>{
    //     console.log('reslut:',result)
    // });

    let result = await collection.find().toArray()
    
    // 在操作完成后，需要关闭数据库连接，释放资源占用
    client.close();

    return result;
}

module.exports = {
    create,
    remove,
    update,
    find
}