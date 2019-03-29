/*
 * @Author: 徐长剑
 * @Description: Utils 工具类
 * @Date: 2018-08-31 16:16:39
 * @Last Modified time: 2018-08-31 16:16:39
 */
/**
 * @method isEmail 是否为邮箱地址
 * @method isIdCard  是否为身份证号
 * @method isPhoneNum  是否为手机号
 * @method isUrl  是否为URL地址
 */

export default {
  /**
     * @description 判断是否为邮箱地址
     * @param {Object} str 【必须按】 需要判断的字符串
     * @returns {Boolean} 返回布尔值
     */
  isEmail (str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
  },
  /**
     * @description  判断是否为身份证号
     * @param  {String|Number} str  【必须按】 需要判断的字符串
     * @returns {Boolean} 返回布尔值
     */
  isIdCard (str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  },
  /**
     * @description  判断是否为手机号
     * @param  {String|Number} str  【必须按】 需要判断的字符串
     * @returns {Boolean} 返回布尔值
     */
  isPhoneNum (str) {
    return /^[0]?\d{2,3}[- ]?\d{7,8}$|(?:^1[3456789]|^9[28])\d{9}$/.test(str)
  }
}
