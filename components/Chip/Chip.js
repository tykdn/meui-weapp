// components/Chip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type: String,
      value: ''
    },
    selected: {
      type: Boolean,
      value: false
    },
    index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // selected: false
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function(e){
      let data = {
        index: this.properties.index,
        text: this.properties.text
      };
      this.triggerEvent('click', data)
    }
  }
});
