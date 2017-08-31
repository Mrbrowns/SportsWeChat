import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import list from '@/page/list'
import login from '@/main/webapp/html/account/login'
import HtmlHeader from '@/components/header'//引入组件文件
import HtmlFooter from '@/components/footer'//引入组件文件
import VeeValidate from 'vee-validate';


Vue.use([
  Router,
  VeeValidate
])
Vue.component[//组件注册
  {
    'HtmlHeader':HtmlHeader
   },
  {
    'HtmlFooter':HtmlFooter
   }
]
export default[//路由
  {
    path: '/',
    component: index
  },
  {
    path: '/list',
    component: list
  },{
    path:'/login',
    component:login
  },{
    path:'/index',
    component:index
}
]

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
  }
  return routes
}

