/**
 * @function
 * @public
 * @summary 根据版本id获取指定的版本
 * @description
 * <p>根据版本id获取指定的版本。</p>
 * <p><code> GET: api/v2/versions/{id}/ </code></p>
 *
 * @param  {function} onUpload - finish select images,return images urls array
 * @param {js.lang.Number} id - the specified version id
 *
 * @return {js.lang.Array} 版本对象
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        url: {
            type: String,
            value: '',
            observer: function(newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
            }
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        textareaFocus: false,
        formdata: '',
        deleteindex: -1,
        image_url: [],
    },
    /**
     * 组件的方法列表
     */
    methods: {
        uploadPhoto(e) {
            if (this.data.image_url.length < 9) {
                wx.chooseImage({
                    count: 9,
                    sizeType: ['compressed'],
                    sourceType: ['album', 'camera'],
                    success: (res) => {
                        this.setData({
                            image_url: this.data.image_url.concat(res.tempFilePaths)
                        });
                    },
                    fail: function (message) {
                        console.log('fail', message)
                    },
                    complete: function (message) {
                        console.log('complete', message)
                    }
                })
            } else {
                wx.showToast({
                    title: '最多上传九张图片',
                    icon: 'loading',
                    duration: 1000
                });
            }
        },
        previewImage(e) {
            const index = e.currentTarget.dataset.index;
            this.setData({deleteindex: -1});
            wx.previewImage(
                {
                    current: this.data.image_url[index],
                    urls: this.data.image_url,
                    success(res) {
                        console.log('success', res)
                    },
                    fail(message) {
                        console.log('fail', message)
                    },
                    complete(message) {
                        console.log('complete', message)
                    }
                }
            )
        },
        longpress(e) {
            let index = e.currentTarget.dataset.index;
            this.setData({
                deleteindex: index
            });
        },
        deleteImage(e) {
            let image_url = this.data.image_url;
            let index = e.currentTarget.dataset.index;
            console.log('删除的是', index);
            wx.showModal({
                title: '提示',
                content: '确定要删除此图片吗？',
                success: (res) => {
                    if (res.confirm) {
                        image_url.splice(index, 1);
                    } else if (res.cancel) {
                        return false;
                    }
                    this.setData({
                        image_url,
                        isCanAddFile: true
                    });
                }
            })
        },
        uploadimage(data,cb) {
            let i = data.i ? data.i : 0,
                success = data.success ? data.success : 0,
                fail = data.fail ? data.fail : 0,filePath=this.data.image_url[i],count=this.data.image_url.length;
            wx.uploadFile({
                url: this.data.url,
                filePath: filePath,
                name: 'file',//这里根据自己的实际情况改
                formData: data.data,
                header: {
                    "content-type": "multipart/form-data",
                },
                success: (resp) => {
                    success++;
                },
                fail: (res) => {
                    fail++;
                    console.log('fail:' + i + "fail:" + fail);
                },
                complete: () => {
                    wx.showToast({
                        title: `正在上传第${i + 1}张图片`,
                        icon: 'loading',
                        duration: 1500
                    });
                    i++;
                    if (i === count) {
                        console.log('执行完毕');
                        console.log('成功：' + success + " 失败：" + fail);
                        if (fail > 0) {
                            cb && typeof cb === 'function' && cb('fa');
                        } else {
                            cb && typeof cb === 'function' && cb('su');
                        }
                    } else {
                        data.i = i;
                        data.success = success;
                        data.fail = fail;
                        this.uploadimage(data, cb);
                    }
                }
            });
        }
    },
});
