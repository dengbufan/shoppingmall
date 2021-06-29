<template>
<div class="back-top">
  <img src="@/assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
  name: 'BackTop',
  components: {
  },
};
</script>
<style  scoped>
.back-top {
  position: fixed;
  right: -30px;
  bottom: 60px;
}
.back-top img {
  width: 50%;
  height: 50%;
}
</style>