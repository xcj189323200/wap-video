/**
 * Created by Cray on 2017/1/5.
 */
const _ENV = process.env.VUE_APP_ENV
let API_HOST
let ADMIN_HOST

console.log(process.env.VUE_APP_ENV, ' process.env.VUE_APP_ENV')
switch (_ENV) {
  case 'production':
    API_HOST = '//api.crofys.cn/api/'
    ADMIN_HOST = 'http://auth.dianjia001.com'
    break
  case 'testing':
    API_HOST = '//api.crofys.cn/api/'
    ADMIN_HOST = 'http://auth.17dianjia.net'
    break
  default :
    API_HOST = '//api.crofys.cn/api/'
    // API_HOST = '//192.168.1.6:7001/api/'
    ADMIN_HOST = 'http://auth.17dianjia.net'
}
export default {
  API_HOST,
  ADMIN_HOST
}
