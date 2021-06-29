import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';



import toast from './components/common/toast/index' //引入弹窗插件

import FastClick from 'fastclick'   //引入fastclick 解决移动端300ms延迟

Vue.use(toast) //安装弹窗插件

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$bus= new Vue()  //添加事件总线

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
