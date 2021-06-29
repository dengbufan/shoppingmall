<template>
<div id="tab-bar">
<slot></slot>
</div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
  }
}
</script>

<style scoped>
#tab-bar {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  background-color: rgba(134, 123, 123,.8);
  /* line-height: 49px; */
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(112, 108, 108, 0.4);
  z-index: 9;
}
</style>