<template>
<div class="Cart">
   <nav-bar class="cart-nav"> 
      <div slot="center">购物车({{cartLength}})</div>
   </nav-bar>
  
   <scroll class="content" ref="scroll" 
            :probeType="3" 
            :pullUpLoad="true"
           >
      <cart-list class="cartlist"> </cart-list>
   </scroll>


   <bott-bar></bott-bar>

</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childcomponents/CartList'
import Scroll from '@/components/common/scroll/Scroll'
import BottBar from './childcomponents/BottBar'

export default {
name: 'Cart',
   components: {
      NavBar,
      CartList,
      Scroll,
      BottBar
      
   },
   computed:{
     cartLength(){
      return this.$store.state.cartList.length
     }
   },
   activated() {
      this.$refs.scroll.bscroll.refresh()
   },
};
</script>

<style scoped>
.Cart {
   height: 100vh;
}
.cart-nav{
   position: relative;
   height: 49px;
   background-color: rgb(216, 148, 148);
   color: #fff;
}
.cartlist{
   background-color: rgb(255, 251, 251);
}

.content { 
   overflow: hidden;
   height: calc(100vh  - 49px  - 49px - 40px);
}
</style>