<template>
  <swiper class="info-swiper">
    <swiper-item v-for="item in topBanner" >
        <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
  name: 'InfoSwiper',
  props:{
    topBanner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
};
</script>
<style scoped>
.info-swiper {
  height: 350px;
  overflow: hidden;
}
</style>