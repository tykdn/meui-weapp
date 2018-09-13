// Modal.js
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      visible: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    textareaFocus: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindInputBlur(){
    },

    cancel:function(){
      this.triggerEvent('cancel', {}, {})
    },
    getUserInfo(e){
      console.log('info ', e)
      var info = e.detail.userInfo || {}
      app.globalData.userInfo = info
      this.triggerEvent('ok', {}, {})
    }
  }
})
