<template>
<div class="cart-list">
    <div v-for="(item,index) in cartList" :key="index">
       <list-item :cartListItem="item"></list-item>
    </div>
</div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'CartList',
  components: {
    ListItem
  },
  computed:{
     cartList(){
      return this.$store.state.cartList
     }
   }
  
};
</script>
<style scoped>
</style>