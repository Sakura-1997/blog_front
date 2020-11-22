import axios from './axiosConfig'
import host from './hostConfig'

//注册
export const register = (params) => {
  return axios.post(`${host}/admin/register`, params)
}

//登录
export const login = (params) => {
  return axios.post(`${host}/admin/login`, params)
}