import axios from 'axios';
import { getToken } from './auth';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // timeout: 9500000 // 请求超时时间
  widthCredentials: true
});
axios.defaults.widthCredentials = true;
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
    config.headers['Authorization'] = getToken(); // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data;
    if (response.status === 401 || res.status === 40101) {
      
      return Promise.reject('error');
    }
    if (res.status === 40301) {
      
      return Promise.reject('error');
    }
    if (res.status === 40302) {
    
    }
    if (res.status === 40001) {
     
      return Promise.reject('error');
    }
    if (response.status !== 200 && res.status !== 200) {
      console.log(response)
    } else {
      return response.data;
    }
  },
  error => {
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

export default service;
