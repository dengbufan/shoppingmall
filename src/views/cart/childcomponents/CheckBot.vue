<template>
<div class="check-bot">
  <img src="@/assets/img/cart/tick.svg" alt="" :class="{check: isCheck}">
</div>
</template>

<script>
export default {
  name: 'CheckBot',
  components: {
  },
   props:{
      isCheck:{
        type:Boolean,
        default:false
      }
    }
}

</script>
<style scoped>
  .check-bot img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border:2px solid #c0c0c0;
    vertical-align: middle;
    margin-bottom: 6px;
    /* background-color: #fff; */
  }
  .check {
    border:2px solid red !important;
    background-color: red;

  }
</style>