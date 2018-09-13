const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join('-')
};

const dateText = date => {
  let text = '';
  let now = new Date();
  let d = (now - date) / 1000;
  let dm = parseInt(d / 60);
  let dh = parseInt(dm / 60);
  let dd = parseInt(dh / 24);
  let dw = parseInt(dd / 3);

  if(dw >= 1){
    text = formatTime(date)
  }else if (dd >= 1) {
    text = dd + '天前'
  }else if (dh >= 1) {
    text = dh + ' 小时前'
  }else if (dm >= 1) {
    text = dm + '分钟前'
  }else {
    text = ' 刚刚'
  }
  return text
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n
};

const toQueryString = function(obj){
  let query = '';
  let list = [];
  for(let key in obj){
    let item = [key, obj[key]].join('=');
    list.push(item)
  }
  query = list.join('&');
  return query
};
const titleLimit=function(word){
  if(word && word.length > 15) {
    word = word.slice(0, 15);
    word=word.trim();
    word += '...'
  }
  return word
};
const wordLimit = function(word){
  if(word && word.length > 35) {
    word = word.slice(0, 35);
    word=word.trim();
    word += '...'
  }
  return word
};

const throttle = function (fn, delay) {
  var timer = null;
  let func = function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn()
    }, delay)
  };
  return func
};

const toJsMap = {
  'created_at': 'createTime',
  'updated_at': 'updateTime',
  'take_over': 'takeOver',
  'wechat_nickname': 'nickName',
};

const toPyMap = {
  'createTime': 'created_at',
  'updateTime': 'updated_at',
  'takeOver': 'take_over',
  'nickName': 'wechat_nickname'
};
// style   0:py -> js; 1: js -> py
const dataFormat = function(data, code=0){
  let result = {};
  let keys = Object.keys(data);
  keys.map((key)=>{
    let value = data[key];
    if(code == 0){
      key = toJsMap[key] ? toJsMap[key] : key;
      result[key] = value
    }else{
      key = toPyMap[key] ? toJsMap[key] : key;
      result[key] = value
    }
  });
  return result
};
const redirectTo = (path, data)=> {
  let qs = toQueryString(data);
  wx.redirectTo({
    url: path + '?' + qs,
  })
};
const openAlert = function (msg) {
  wx.showModal({
    // confirmColor: 'red',
    content: msg || '请求失败',
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      }
    },
    fail: function (err) {

    }
  });
};
export default  {
  dateText,
  formatTime,
  titleLimit,
  wordLimit,
  toQueryString,
  throttle,
  dataFormat,
  redirectTo,
  openAlert,
}
