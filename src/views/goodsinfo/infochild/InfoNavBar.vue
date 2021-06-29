<template>
<div class="info-nav-bar">
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
        <div class="titile-item"
         v-for="(item,index) in title" 
         :class="{active: curIndex===index}"
         @click="titleClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'InfoNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      title:['商品','参数','评论','推荐'],
      curIndex:0,
    }
  },
  methods: {
    titleClick(index){
      this.curIndex=index
      this.$emit('titleClick',index)
    },

    backClick(){
      this.$router.go(-1);//返回首页
    }
  },
};
</script>
<style scoped>
.info-nav-bar {
  height: 44px;
}
.title {
  display: flex;
  text-align: center;
}
.titile-item {
  flex: 1;
  font-size: 12px;
}
.active {
  color:red;
  font-size: 14px;
}

.back img {
  margin: 10px;
  
}
</style>