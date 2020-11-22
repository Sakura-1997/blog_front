import axios from 'axios'
import { Message } from "element-ui"
import { getToken } from '@/utils/storage'

//请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers['X-Access-Token'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code = 200) {
      Message.success(response.data.msg)
    } else {
      Message.error(response.data.msg)
    }
    return response.data
  },
  error => {
    return Promise.resolve(error.response)
  }
)

export default axios