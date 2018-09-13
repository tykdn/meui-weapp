Page({
    data: {},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},
    onReady: function () {},
    uploadcomplete(a) {
        //上传成功
    },
    onConfirm: function (e) {
        let up = this.selectComponent("#uploadimage");
        up.uploadimage({
            data: {pic_chat:'id'}
        },this.uploadcomplete);
    }
});
