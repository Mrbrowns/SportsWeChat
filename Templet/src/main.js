// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用路由插件
import VueRouter from 'vue-router'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use([
  VueRouter//// 引入路由配置文件
]);

// 使用配置文件规则
const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: router })
Vue.config.productionTip = false

/* eslint-disable no-new */
// 试用路由插件
const app = new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')

