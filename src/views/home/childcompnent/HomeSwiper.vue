<template>
    <swiper >
    <swiper-item v-for="item in banners" >
      <a :href="item.link">
        <img :src="item.image" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
  name: "HomeSwiper",
  props: {
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  data() {
    return {
      isload:false
    }
  },
  methods: {
    //监听swiper里面的图片加载完成，然后将对应的事件传递出去
    swiperImgLoad(){
      if(!this.islode){
      this.$emit('swiperImgLoad') //只需要发送一次事件，设置isload避免多次发送
      this.isload=true
      }
    }
  },

}
</script>

<style scoped>
</style>
