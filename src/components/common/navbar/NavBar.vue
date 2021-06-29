<template>
<div class="nav-bar">
  <!-- 为了保留slot的样式 需要在外面包裹一层div -->
  <div class="nav-left">
    <slot name="left"></slot>
  </div>
   <div class="nav-center">
    <slot name="center"></slot>
  </div>
   <div class="nav-right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  }
}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  text-align: center;
  /* z-index: 999; */
  box-shadow: 0 1px 1px  rgba(177, 169, 169,.5);
}
.nav-left,.nav-right {
  width: 60px;
  /* background-color: rgb(190, 51, 51); */
}

.nav-center {
  flex:1;
  /* background-color: rgb(141, 119, 194); */
}
</style>