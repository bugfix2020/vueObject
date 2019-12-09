//引入vue
import Vue from 'vue'
//引入App.vue 入口
import App from './App.vue'
//引入路由文件
import router from './router/index';

Vue.config.productionTip = false
Vue.prototype.test = function () {
    console.log(2222)
}
/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    //在实例中使用路由
    router,
}).$mount('#app');