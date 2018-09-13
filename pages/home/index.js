const app = getApp();
let page = Page({
    data: {
        items:[{name:'upload',key:'upload'},
            {name:'divider',key:'divider'},
            {name:'color',key:'color'},
            {name:'icon',key:'icon'},
            {name:'modal',key:'modal'}]
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {},
    onListHandle:function(component){
        console.log('component==>',component);
        wx.navigateTo({url:'../upload/index'})
    }
});
