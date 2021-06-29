<template>
<div class="tab">
 <div class="tab-item" v-for="(item,index) in title"
  :class="{active:index===currIndex}"
  @click="itemaTab(index)">
   <span>{{item}}</span>
 </div>
</div>
</template>

<script>
export default {
  name: 'Tab',
  components: {
  },
  methods: {
    itemaTab(index){
        this.currIndex=index
        this.$emit('itemaTab',index)
    }
  },
  props:{
    title:{
      type:Array,
      defult(){
        return []
      }
    }
  },
  data() {
    return {
      currIndex:0 //设置默认选中的标签  当当前选中的标签的index=curindex设置的值时 active=true
    }
  },
  };
</script>
<style scoped>
.tab {
  /* padding-top: 4px; */
  display:flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
   z-index: 9;
}
.tab-item {
  flex: 1;
}
 span {
  padding:4px;
  font-size: 15px;
  color:rgb(44, 33, 33);
}
.active span {
  color: red;
  border-bottom: 2px solid red;
}
</style>