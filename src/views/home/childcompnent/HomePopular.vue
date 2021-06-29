<template>
<div class="home-popular">
    <div class="popular">
      <img src="@/assets/img/home/recommend_bg.jpg" alt="">
    </div>
</div>
</template>

<script>
export default {
  name: 'HomePopular',
  components: {
  },
  props:{

  }
};
</script>
<style scoped>
.home-popular {
  padding:5px;
  background-color:  rgba(172, 115, 115,.5);
  text-align: center;
  
}
.popular img {
  width: 100%;
  border-radius: 12px;
}
</style>