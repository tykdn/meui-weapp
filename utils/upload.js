/**
 * @function
 * @public
 * @summary 根据版本id获取指定的版本
 * @description
 * <p>根据版本id获取指定的版本。</p>
 * <p><code> GET: api/v2/versions/{id}/ </code></p>
 *
 * @param {js.lang.Number} id - the specified version id
 *
 * @return {js.lang.Array} 版本对象
 */
const uploadfile=function(data,cb){
    let  i=data.i?data.i:0,
        success=data.success?data.success:0,
        fail=data.fail?data.fail:0;
    wx.uploadFile({
        url: data.url,
        filePath: data.path[i],
        name: 'file',//这里根据自己的实际情况改
        formData:data.data,
        header: {
            "content-type": "multipart/form-data",
        },
        success: (resp) => {
            success++;
            console.log(resp);
            console.log(i);
            //这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
        },
        fail: (res) => {
            fail++;
            console.log('fail:'+i+"fail:"+fail);
        },
        complete: () => {
            console.log(i);
            wx.showToast({
                title:`正在上传第${i+1}张图片`,
                icon: 'loading',
                duration: 1500
            });
            i++;//这个图片执行完上传后，开始上传下一张

            if(i===data.path.length){   //当图片传完时，停止调用
                console.log('执行完毕');
                console.log('成功：'+success+" 失败："+fail);
                if(fail>0){
                    cb&&typeof cb==='function'&&cb('fa');
                }else {
                    cb&&typeof cb==='function'&&cb('su');
                }
            }else{//若图片还没有传完，则继续调用函数
                console.log(i);
                data.i=i;
                data.success=success;
                data.fail=fail;
                uploadfile(data,cb);
            }
        }
    });
};
export default  uploadfile
