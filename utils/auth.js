import http from './http'
class Auth{
  constructor(){
    this.code = '';
    this.token = '';
    this.status = ''
  }

  setStatus(status){
    this.status = status
  }
  setCode(code){
    this.code = code
  }

  login(){
    let _this = this;
    let p = new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          this.code = res.code;
          resolve(res.code)
        },
        fail: function (res) {
          reject(res)
        },
        complete: function (res) { },
      })
    });
    return p
  }

  getAuth(){
    const params = {
      code: this.code || '',
      token: this.token ||''
    };
    return http.post('/wechatbotplus/auth', params).then((data)=>{
      this.token = data.token;
      http.token = data.token;//给http统一加token
      this.status = data.status;
      console.log('auth data', data);
      return data
    })
  }
}



const auth = new Auth();
export default auth
