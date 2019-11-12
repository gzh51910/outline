import axios from 'axios';

// 创建axios实例
const nsg = axios.create({
    baseURL: 'https://www.nanshig.com/mobile/index.php'
});

// 二次封装(简化操作,维护方便)
function get(params,config={}){
  return nsg.get('',{
    ...config,
    params
  })
}

export default {
  get
}