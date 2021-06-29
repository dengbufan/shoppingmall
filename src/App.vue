<template>
  <div>
    <!-- 将GoodsInfo排除在外-->
    <keep-alive exclude="GoodsInfo">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>
<script>
import MainTabbar from './components/content/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
