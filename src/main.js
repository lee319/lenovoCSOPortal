import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import './permission'


Vue.config.productionTip = false
Vue.use(iView)

// 设置基础URL
console.log(process.env.BASE_API);
Vue.prototype.baseURL = process.env.BASE_API;

// 设置请求超时时间
axios.defaults.timeout = 2000;
Vue.prototype.$http = axios;


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})