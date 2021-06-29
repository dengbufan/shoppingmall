<template>
<div class="toast" v-show="isShow">
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
  name: 'Toast',
  props:{
    // message:{
    //   type:String,
    //   default:''
    // },
    // isShow:{
    //    type:Boolean,
    //   default:false
    // }
   
  },
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  methods: {
    show(message,duration=2000){   //duration持续时间
        this.message=message
        this.isShow=true
        setTimeout(() => {
          this.isShow=false
          this.message=''
        }, duration);
    }
  },
};
</script>
<style  scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  background-color: rgba(10, 9, 9,.7);
  padding: 10px 10px;
  border-radius: 10px;
  z-index: 999999;
}
</style>