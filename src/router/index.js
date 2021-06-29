import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home=()=> import('@/views/home/Home')
const Category=()=> import('@/views/category/Category')
const Cart=()=> import('@/views/cart/Cart')
const Profile=()=> import('@/views/profile/Profile')
const GoodsInfo=()=>import('@/views/goodsinfo/GoodsInfo')
//1.安装插件
Vue.use(VueRouter)
//3.建立映射关系 此处有坑，一定要在创建路由对象之前定义routes，否者不会跳转到对应的路径
const routes=[
  {
    path:'',
    redirect:'/Home'  //默认展示首页
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/goodsinfo/:iid',
    component:GoodsInfo
  }
]

 const router = new VueRouter({
  routes,
  mode:'history'
})

export default router