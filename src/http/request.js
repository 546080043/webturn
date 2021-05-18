import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'
import {
  baseURL,
  contentType,
  requestTimeout,
} from '@/config'


/**
 * @author 李永光
 * @description 封裝http请求
 */
const httpInstance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
})

httpInstance.interceptors.request.use(
  (config) => {
    //do something
    console.log(config);
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

httpInstance.interceptors.response.use(res => {
  console.log(res.status);
  if (typeof res.data !== 'object') {
    console.log(res.url);
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.status != 200) {
    Toast.fail('服务端返回异常状态！')
    console.log(res);
    return Promise.reject(res.data)
  }
  return res.data
}, error => {
  Toast.fail('网络超时！')
  return Promise.reject(error)
})

export default httpInstance
