<template>
 <div id="mainTabbar">
   <TabBar>
     <TabBarItem path="/home" activeColor="red">
       <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/home-fill.svg" alt="">
       <div slot="item-text">首页</div>
     </TabBarItem>
      <TabBarItem path="/category" activeColor="red">
       <img slot="item-icon" src="@/assets/img/tabbar/more_1.svg" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/more.svg" alt="">
       <div slot="item-text">分类</div>
     </TabBarItem>
      <TabBarItem path="/cart" activeColor="red"> 
       <img slot="item-icon" src="@/assets/img/tabbar/add-cart.svg" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/add-cart-fill.svg" alt="">
       <div slot="item-text">购物车</div>
     </TabBarItem>
      <TabBarItem path="/profile" activeColor="red">
       <img slot="item-icon" src="@/assets/img/tabbar/me.svg" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/me_1.svg" alt="">
       <div slot="item-text">我的</div>
     </TabBarItem>
   </TabBar>   
 </div>
</template>
// <script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'mainTabbar',
  components: {
    TabBar,
    TabBarItem

  }
}
</script>

<style>
#mainTabbar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #fff; */
}
</style>