var configs = require('../config/config');
import axios from 'axios';

//axios 说明：https://www.kancloud.cn/yunye/axios/234845

const Method = {
    GET: 'get',
    POST: 'post'
};

/**
 *
 * @param method 请求时使用的方法，默认是 get
 * @param baseUrl 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
 * @param url 是用于请求的服务器 URL
 * @param params 是即将与请求一起发送的 URL 参数
 * @param data 主体被发送的数据
 * @param callback
 */
var connect = function (method, baseUrl, url, params,data, callback) {
    axios({
        method: method,
        baseURL: baseUrl,
        url: url,
        params:params,
        data: data
    }).then(callback);
};

var apiConnect = function(method,url,params,data,transformResponse,callback){
    axios({
        method: method,
        baseURL: configs.default.SERVER.BASE_SERVER,
        url: url,
        params:params,
        data: data,
        transformResponse:transformResponse
    }).then(callback);
};
/**
 * 对返回值解析
 * @param data
 * @returns {*}
 */
var transformData = function(dataJsonStr){
    var data = JSON.parse(dataJsonStr);
    if(data.code === 0){
        return data.data;
    }
    //TODO 对code不为0的作特殊化处理
    throw data.message;
};

var http = {
    get: function (url, params,callback) {
        connect(Method.GET,null,url,params,null,callback);
    },
    api:{
        get: function(url,params,callback){
            apiConnect(Method.GET,url,params,null,[transformData],callback);
        }
    }
};
export default http;