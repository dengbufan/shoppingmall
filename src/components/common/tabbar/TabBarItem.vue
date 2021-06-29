<template>
   <div id="tab-bar-item" @click="itemClick">
     <div v-if="!isActive">
       <!-- 如果直接在slot上面添加属性，则会在调用的时候会被替换掉，所以通常在外面再包一个div -->
     <slot name="item-icon"></slot>  
     </div>
     <div v-else>
       <slot name=item-icon-active></slot>
     </div>
     <div :style="activeStyle">
       <slot name="item-text"></slot>
     </div>
   </div>
</template>
<script>
export default {
  name: 'TabBarItem',

  //父子组件通信--父传子
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      //如果当前活跃的路由和需要点击的item的路由是同一个，那么久返回turn 则这个item置为活跃状态
      //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置,如果要检索的字符串值没有出现，则该方法返回 -1。
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      //判断当前item是否处于活跃，如果处于活跃就设置为传入的值，否则为默认值
      let conback= this.isActive?{color:this.activeColor}:{}; //返回值是一个对象 比如{color:red}
      // console.log(conback);
      return conback;
    }
  },
  methods: {
    itemClick(){
      // console.log(this.path);
      this.$router.replace(this.path);
    }
  },
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  text-align: center;
}
#tab-bar-item img{
  width: 26px;
  height: 26px;
  vertical-align: middle;
  margin-top: 4px;
}

</style>