import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    //存储添加的商品
    cartList:[]
  },
  mutations:{
    //这里面的操作可以被跟踪到
    
  },
  actions:{
    //不要直接修改state里面的数据，而要通过 mutations 对其进行修改
    addCart(context,payload){
      //返回一个promise 便于在添加商品的时候判断商品是否添加成功
      return new Promise((resolve,reject)=>{
        let oldGoods=null
     //添加商品之前应该判断一下该商品是否已经存在
      for (const item of context.state.cartList) {
         if(item.iid===payload.iid){
           oldGoods=item
         }
      } 
      if (oldGoods) {
       oldGoods.count+=1
       resolve('当前商品数量加一')
      } else {
        //记录商品数量
       payload.count = 1
       //记录商品是否选中
       payload.checked=true
       //新添加的商品
       context.state.cartList.push(payload)
       resolve('添加了新的商品')
      }
      // console.log(context.state.cartList)
      })
   }
  }
})

export default store