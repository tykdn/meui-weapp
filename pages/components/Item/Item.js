// Item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: null,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapAdd(e){
      console.log('add', e)
    },
    goToDetail(){
      let url = `/pages/${this.data.item.key}/index`;
      wx.navigateTo({
        url: url
      })
    }
  }
});
