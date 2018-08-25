import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './config/router';
import VueRouter from 'vue-router';
import VueLocalStorage from 'vue-localstorage'
import http from './utils/HttpUtils';
import configs from './config/config';
import '~/assets/less/index.less';
// 解决IE 浏览器不识别(IE9+)axios的问题
require("es6-promise").polyfill();


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueLocalStorage);


new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    mounted() {
        http.api.get(configs.API_PATH.SYS_CONFIG,null,function(res){
            if(res.data.install){
               //跳转到安装页面
                router.push({path:'/install'});
            }
        });
    }
});
