/**
 * Created by Cray on 2016/11/7.
 */

const localStorage = window.localStorage || {}

class Local {
  static setItem (key, data) {
    if (Object.prototype.toString.apply(data) == '[object Object]') {
      data = JSON.stringify(data)
    }
    localStorage[key] = data
  }

  static getItem (key) {
    let value = localStorage[key] || null
    if (value) {
      try {
        value = JSON.parse(value)
      } catch (e) {
        console.error(e)
      }
    }
    return value
  }
  static removeItem (key) {
    if (key) {
      try {
        localStorage.removeItem(key)
      } catch (e) {
        console.error(e)
      }
    }
  }
  static clear () {
    try {
      localStorage.clear()
    } catch (e) {
      console.error(e)
    }
  }
  /**
     *
     * @desc 根据name读取cookie
     * @param  {String} name
     * @return {String}
     */
  static getCookie (name) {
    var arr = document.cookie.replace(/\s/g, '').split(';')
    for (var i = 0; i < arr.length; i++) {
      var tempArr = arr[i].split('=')
      if (tempArr[0] == name) {
        return decodeURIComponent(tempArr[1])
      }
    }
    return ''
  }
  /**
     *
     * @desc 根据name删除cookie
     * @param  {String} name
     */
  static removeCookie (name) {
    // 设置已过期，系统会立刻删除cookie
    this.setCookie(name, '1', -1)
  }
  /**
     *
     * @desc  设置Cookie
     * @param {String} name
     * @param {String} value
     * @param {Number} days
     */
  static setCookie (name, value, days) {
    var date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = name + '=' + value + ';expires=' + date
  }
}

export default Local
