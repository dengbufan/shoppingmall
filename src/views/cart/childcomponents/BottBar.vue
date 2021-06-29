<template>
<div class="bott-bar">
   <div class="total-check">
      <check-bot :isCheck="isAllCheck" @click.native="allChecked"></check-bot>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：{{totalPrice}}</span>
    </div>
    <div class="calc">
      去结算：{{checkLength}}
    </div>
  </div>
</div>
</template>

<script>
import CheckBot from './CheckBot'
export default {
  name: 'BottBar',
  components: {
    CheckBot
  },
  computed:{
    totalPrice(){
      //计算选中商品的总价
      // console.log(this.$store.state.cartList)
      return this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((prev,item) => {
          return prev + item.price * item.count
        },0).toFixed(2)
     },

     //选中的商品数量
     checkLength(){
       return this.$store.state.cartList.filter(item=> item.checked).length
     },
     
     //全选按钮是否选中取决于所有的商品是否都是选中状态，如果有一个商品未选中，则全选按钮不选中
     isAllCheck(){
         if(this.$store.state.cartList.length === 0) {
          return false;
        }
      // return !(this.$store.state.cartList.filter(item =>!item.checked).length) 方式一
      return !this.$store.state.cartList.find(item=>!item.checked)
     }
  },
  methods: {
    //全选实现
    allChecked(){
      if(this.isAllCheck){
         this.$store.state.cartList.forEach(item => {
            item.checked=false
         });
      }else{
        this.$store.state.cartList.forEach(item => {
            item.checked=true
         });
      }
    }
  },
}
</script>
<style  scoped>
 .bott-bar {
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 49px;
    background: #eeeeee;
    display: flex;
    line-height: 40px;
    text-align: center;
  }
  .total-check {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  .total-price {
    width: 50%;
  }
  .calc {
    width: 25%;
    background-color: #ff5028;
    color:#fff;
  }

</style>