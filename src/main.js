import { checkNode } from './utils/check'
import { showWarn } from './utils/log'
import isPC from './utils/isPC'

var ISPC = isPC()

class TouchRipple {
  constructor (el, options) {
    this.initData(el, options) && this.init()
  }

  /**
   * 检查和初始化传入参数
   */
  initData (el, options) {
    this.el = checkNode(el)
    if (!this.el) return
    options = this.checkOptions(options)
    this.options = options
    return true
  }

  /**
   * 检查并且初始化options
   */
  checkOptions (options) {
    // if (typeof options === 'string') {
    //   options = {color: options}
    // }
    // options = options || {}
    // let baseOptions = {
    //   color: 'rgba(0,0,0,0.2)',
    //   time: 500,
    //   size: 0
    // }
    // for (let option in baseOptions) {
    //   !options[option] && (options[option] = baseOptions[option])
    // }
    return options
  }

  init () {
  }
}

module.exports = TouchRipple
