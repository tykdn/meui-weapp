// SearchBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputShowed: false
      });

    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      })
      let data = {
        search: ''
      }
      this.triggerEvent('onChange', data)
    },
    inputTyping: function (e) {
      let data = {
        search: e.detail.value
      }
      this.setData({
        inputVal: e.detail.value
      })
      this.triggerEvent('onChange', data)
    },
    inputBlur: function(e){
      if(e.detail.value === ''){
        this.hideInput()
      }
    },
  }
})
