import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 三级联动的组件全局组件
import TypeNav from '@/components/TypeNav';
import Pagination from '@/components/Pagination';
import store from '@/store'
// import 'swiper/css/swiper.css';
import './plugins/swiper'
import  './mock/mockServer'

Vue.config.productionTip = false

// 第一个参数是全局组件的名字
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

// 创建或指定事件总线对象，保存到Vue的原型上版本1
// Vue.prototype.$bus=new Vue()

new Vue({
  // 创建或指定事件总线对象，保存到Vue的原型上版本2
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
  // 注册路由器，在所有组件都可以直接访问两个对象，$router和$route
  router,
  store,
}).$mount('#app')
