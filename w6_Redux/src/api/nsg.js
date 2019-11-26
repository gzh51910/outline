import axios from 'axios';

// 创建axios实例
const nsg = axios.create({
    baseURL: 'https://www.nanshig.com/mobile/index.php'
});

// 二次封装(简化操作,维护方便)
async function get(params,config={}){
  let {data} = await nsg.get('',{
    ...config,
    params
  });

  return data;
}

function post(data,config={}){
  return nsg.post('',data,config);
}

export default {
  get,
  post
}