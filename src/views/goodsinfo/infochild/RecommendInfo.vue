<template>
<div class="recommend-info">
  <div class="recommend">热款推荐</div>
  <div class="out">
     <div class="item" v-for="item in recommendInfo">  
            <div class="content">
                  <a href="item.item_h5_url">
                    <img :src="item.image" alt="" @load="recommendImgload">
                  </a>
                 <div><p>{{item.title}}</p></div>
            </div>   
           
     </div>
</div>
</div>
</template>

<script>
export default {
  name: 'RecommendInfo',
  props:{
    recommendInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    recommendImgload(){
      this.$emit('recommendImgload')
    }
  },

};
</script>
<style  scoped>
.out {
  /* background-color: rgb(165, 141, 141); */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.item {
  margin-top:2px ;
  padding: 2px;
  /* position: relative; */
  width: 48%;
  height: 48%;
}
 img {
   width: 100%;
   border-radius: 10px;
   height: 100%;
 }
 .item p {
   font-size: 14px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
 .recommend {
   text-align:center;
   font-size: 18px;
   color: rgb(78, 67, 67);
   margin: 4px;
 }
</style>