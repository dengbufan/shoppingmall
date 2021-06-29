<template>
<div class="wrapper" ref="wrapper">
  <div class="content"> 
     <slot></slot>
  </div>
</div>
</template>

<script>
// import {BScroll,Pullup} from 'better-scroll'
import BScroll from 'better-scroll'
import Pullup  from 'better-scroll'
export default {
  name: 'Scroll',
  components: {
  },
  props:{
    probeType:{  //滚动事件的类别，是否要记录位置信息
      type:Number,
      default:0
    },

    pullUpLoad:{  //滚动事件的类别，是否要使用上拉加载
      type:Boolean,
      default:false
    }

  },
  data() {
    return {
      bscroll:null //在本地创建这个方法然后把BSscroll的方法挂载到上面
    }
  },
  //组件创建完成后调用
  mounted() {
    //document.querySelector('warpper') 如果有多个相同类名的元素通过这种方式获取的元素具有不确定性
    //1.可以给元素绑定一个ref="wrapper" 获取确定的元素
    this.bscroll=new BScroll(this.$refs.wrapper,{
      // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
         click: true,
         probeType:this.probeType,  //根据传入的值来决定是否要监听滚动的位置
         pullUpLoad:this.pullUpLoad
    })

    //2.监听滚动位置
    this.bscroll.on('scroll',position=>{
      this.$emit('scroll',position) //将滚动的位置传出去
    })

    //3.监听上拉事件
    this.bscroll.on('pullingUp',()=>{
      // console.log("上拉加载");
      this.$emit('loadMore')//把上拉事件传出去
    })

  },
};
</script>
<style  scoped>  
/* scoped 设置作用域 该样式只在当前组件有效 */
</style>