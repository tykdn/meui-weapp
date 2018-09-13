// 请求 promise 封装

const config = require('../config/config');
const app = getApp();
class Http {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.token = '';
        this.status = '';
        this.code= ''
    }

    request(url, params = {}, method = "GET"){

        url = this.baseUrl + url;
        console.log('http url', url);
        // 给所有请求加 token
        let baseParams = {
            token: this.token,
        };
        params = {...baseParams, ...params};
        let promise = new Promise(function (resolve, reject) {
            // wx.showLoading()
            wx.request({
                url: url,
                data: params,
                method: method,
                success: function (res) {
                  console.log(url + '请求成功:\n', res.data);
                    resolve(res.data);
                    // wx.hideLoading()
                },
                fail: function(err){
                    // console.log('请求失败: ', err)
                    reject(err)
                    // wx.hideLoading()
                }
            })
        });
        return promise
    }

    get(url, params){
        return this.request(url, params, "GET")
    }

    post(url, params){
        return this.request(url, params, "POST")
    }
    // checkSession
    // getToken     wxLongin
    // request      setToken
    //
    checkSession(){
        let p = new Promise(function(resolve, reject) {
            wx.checkSession({
                success: function(c) {
                    // resolve(c)
                    reject(c);
                    console.log('checkSession s', c)
                },
                fail: function (e) {
                    console.log('checkSession f', e);
                    reject(e)
                }
            })
        });
        return p
    }

    getToken(){
        // wx.getStorageSync('token')
        let _this = this
        let p = new Promise(function(resolve, reject) {
            if(_this.token){
                resolve(_this.token)
            }else {
                wx.getStorage({
                key: 'token',
                success: function(res) {
                        console.log(res.data);
                        _this.token = res.token;
                        resolve(res.data)
                        // return res.data
                    }
                })
            }

        })
        return p
    }

    bindUser(params){
      return this.post('/wechatbotplus/sign_up', params).then((data)=>{
        console.log('sign up', data);
        return data
      })
    }
}

const http = new Http(config.url);
export default http
