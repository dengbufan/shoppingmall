<template>
<div class="home-recommend">
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a href="" :link="item.link">
        <img :src="item.image" alt="">
      </a>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  components: {

  },
  props:{
    recommends:{
      type:Array,
      defult(){
        return []
      }
    }
  },
  methods: {
    
  },
};
</script>
<style scoped>
.home-recommend {
  padding:1px;
  border-bottom: 8px solid rgb(221, 214, 214);
  background-color: rgb(221, 175, 175);
}
.recommend {
  display: flex;
  height: 80px;
  margin:4px;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;

}
.recommend-item {
  margin-top: 2px;
  flex: 1;
}
.recommend-item img{
  width: 55px;
  height: 55px;
}

.recommend-item .title {
  font-size: 12px;
  font-weight: 200;
}
</style>