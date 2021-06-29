<template>
<div class="bottom-bar">
    <div class="left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
</div>
</template>


<script>
export default {
  name: 'BottomBar',
  
  methods: {
    addToCart(){
      this.$emit('addToCart')
    }
  },
}
</script>
<style  scoped>
 .bottom-bar {
  position: fixed;
  display: flex;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  line-height: 49px;
  background-color: #fff;
  }
  .left {
    width: 50%;
  }
  .left,.right {
    display: flex;
  }
  span {
    display: block;
    line-height: 20px;
    text-align: center;
  }
  .left .icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 2px 16px 3px;
    background:url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
    text-align: center;
  }
  .left .shop {
    background-position: 0 55px;
  }
  .left .service {
    background-position: 0 107px;
  }
  .text {
    font-size: 14px;
  }
  .cart {
    height: 49px;
    width: 94px;
    background-color: #b9b53f;
    text-align: center;
    color:#666;
    font-size: 16px;
    line-height: 49px;
  }
  .buy {
    height: 49px;
    width: 94px;
    background-color: red;
    text-align: center;
    color:#fff;
    font-size:16px;
    line-height: 49px;
  }
</style>