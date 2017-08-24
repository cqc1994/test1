/**
 * Created by zed on 2017/4/27.
 */
// 配置API接口地址
var root = 'http://188.188.3.201/api/app/v4/index.php?c=home&a=index&key=47bce5c74f589f4867dbd57e9c8745e'
// 引用superagent
var request = require('superagent')
// 自定义判断元素类型js
function toType (obj) {
  return
}
function filterNull (o) {
  return
}
/*
 接口处理函

 */
function apiBase (method, url, params, success, failure) {
  var r = request(method, url).type('text/plain')
  if (params) {
    params = filterNull(params)
    if (method === 'POST' || method === 'PUT') {
      if (toType(params) === 'object') {
        params = JSON.stringify(params)
      }
      r = r.send(params)
    } else if (method === 'GET' || method === 'DELETE') {
      r = r.query(params)
    }
  }
  r.end(function (err, res) {
    if (err) {
      alert('api error, HTTP CODE: ' + res.status)
      return
    };
    if (res.body) {
      if (success) {
        success(res.body)
      }
    } else {
      if (failure) {
        failure(res.body)
      } else {
        alert('error: ' + JSON.stringify(res.body))
      }
    }
  })
};
// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiBase('GET', root + '/' + url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiBase('POST', root + '/' + url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiBase('PUT', root + '/' + url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiBase('DELETE', root + '/' + url, params, success, failure)
  }
}
