/**
 * Created by Cray on 2017/1/5.
 */
import Host from '../config/host'
// import Local from "@utils/local";
import axios from './axios'
import Utils from '@utils/utils'

import CommonApi from './modules/common' // 用户接口
import VideoApi from './modules/video' // video接口

export default Object.assign(
  {},
  Host,
  CommonApi,
  VideoApi,
  {
    // 菜单接口 /api/sys/menu/menuList
    menuList (params) {
      return this.get({
        url: this.API_HOST + `sys/menu/menuList`,
        params
      })
    }
  },
  {
    put ({ url, headers = this.getHeaders(), data = {} }) {
      return axios({ method: 'put', url, headers, data, timeout: 15000 })
    },
    putParam ({ url, headers = this.getHeaders(), params = {} }) {
      return axios({ method: 'put', url, headers, params, timeout: 15000 })
    },
    post ({ url, headers = this.getHeaders(), data = {} }) {
      return axios({ method: 'post', url, headers, data, timeout: 15000 })
    },
    get ({
      url,
      headers = this.getHeaders(),
      params = {},
      responseType = 'json'
    }) {
      return axios({
        method: 'get',
        url,
        headers,
        params,
        responseType,
        timeout: 15000
      })
    },
    delete ({ url, headers = this.getHeaders(), params = {} }) {
      return axios({ method: 'delete', url, headers, params, timeout: 15000 })
    },
    getHeaders () {
      const { _DJ_TOKEN } = Utils.getCookie()
      const headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
      if (_DJ_TOKEN) {
        headers.token = _DJ_TOKEN
      }
      return headers
    }
  }
  // {
  //     axios(url, data = {}, {
  //         method = 'get',
  //         headers = this.getHeader(),
  //         timeout = 15000
  //     } = {}) {
  //         data = this.paramFormat(data)
  //         let params = method == 'get' ? {params: data} : {data}
  //         return axios({
  //             method,
  //             url,
  //             headers,
  //             timeout,
  //             ...params,
  //         })
  //     },
  // },
)
