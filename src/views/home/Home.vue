<template>
<div id="home">
  <nav-bar class="nav-bar">
    <div slot="center">购物街</div>
  </nav-bar>
  <tab class="tab-cont" :title="['新款','精选','流行']"@itemaTab="itemaTab" ref="tab1" v-show="isTabFixed"></tab>
    <scroll class="content" ref="scroll" 
            :probeType="3" 
            @scroll="backTopShow"
            :pullUpLoad="true"
            @loadMore="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-popular></home-popular>
      <home-recommend :recommends="recommends"></home-recommend>
      <tab  :title="['新款','精选','流行']"
            @itemaTab="itemaTab" 
            ref="tab2"
            ></tab>
      <goos-list :goods="goods[tabType].list"></goos-list>
   </scroll>
    <back-top @click.native="backClick" v-show="isBackShow"></back-top>


</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childcompnent/HomeSwiper'
import HomeRecommend from './childcompnent/HomeRecommend'
import HomePopular from './childcompnent/HomePopular'
import Tab from '@/components/content/tab/Tab'
import GoosList from '@/components/content/goods/GoosList'
import Scroll from '@/components/common/scroll/Scroll'

//网络请求相关
import {getHomeMulData,getHomeGoods} from '@/network/home'
import BackTop from '@/components/content/backtop/BackTop'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    Tab,
    GoosList,
    Scroll,
    BackTop,
  },
  activated: function () {
    this.$refs.scroll.bscroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.bscroll.refresh()
  },
  deactivated: function () {
    this.saveY=this.$refs.scroll.bscroll.getScrollY()
  },
  data() {
    return {
      //存储请求过来的数据，因为getHomeMulData()方法执行完成以后，里面的数据因为没有被占用所以会被销毁
      banners: [],
      recommends: [],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      tabType:'pop',
      isBackShow:false,
      tabOffsetTop:0,
      isTabFixed:false,   //保存tab的状态，是否吸顶
      saveY:0
    }
  },

  //进入页面时 跳转到之前的滚动状态
  activated() {
    // console.log('进入');
    this.$refs.scroll.bscroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.bscroll.refresh() //进入之后最好刷新一次
  },

  //离开页面时保存当前的滚动状态
  deactivated() {
    // console.log('离开');
    //  this.saveY=this.$refs.scroll.bscroll.getScrollY
    this.saveY=this.$refs.scroll.bscroll.y
   },

  //Vue的生命周期 当组件创建成功后，执行这个里面的方法 最好只在里面发送请求，具体的逻辑放在methods里面
  created() {
    //1.请求首页多个数据 这是个异步操作
    this.homeMulData()

    //2.请求首页商品数据
    this.homeGoods('pop')
    this.homeGoods('new')
    this.homeGoods('sell')

  },
  mounted() {
    //3.监听图片加载完成
      this.$bus.$on('itemImgOnLoad', ()=>{
    //  console.log('%bus');
     this.$refs.scroll.bscroll&&this.$refs.scroll.bscroll.refresh()
    })


   //添加防抖效果
    // const refresh=this.debounce(this.$refs.scroll.bscroll,300)
    //  this.$bus.$on('itemImgOnLoad', ()=>{
    //   refresh()
    //   console.log('%bus');
    // })

    
    // console.log(this.$refs.tab.$el.offsetTop)
  },
  methods: {

    //防抖函数
    // debounce(func,delay){
    //   let timer=null
    //   return function(...args){
    //     if(timer) clearTimeout(timer)
    //     timer=setTimeout(() => {
    //       func.apply(this,args)
    //     }, delay);
    //   }
    // },

    //网络请求相关方法
    homeMulData(){
       getHomeMulData().then(res=>{
      // console.log(res);
      //箭头函数里面的this是上下文里面的this，这里的this代表的是这个组件对象，所以这里的this可以直接访问data
      this.banners=res.data.banner.list;
      // console.log(this.banners);
      this.recommends=res.data.recommend.list;
    })
    },
    
    homeGoods(type){
      const page=this.goods[type].page+1 //上拉加载的时候页面要加一
       getHomeGoods(type,page).then(res=>{
        // console.log(res);
      //将请求到的数据保存到组件里面
       this.goods[type].list.push(...res.data.list)//剩余运算符

      //请求后，将页码+1
       this.goods[type].page+=1

       //添加下拉加载后需要设置 finishPullUp  才能加载下一页
       this.$refs.scroll.bscroll&&this.$refs.scroll.bscroll.finishPullUp()
    })
    },

    //事件监听相关方法
    itemaTab(index){
      switch(index){
        case 0:
          this.tabType='pop'
          break
        case 1:
          this.tabType='new'
          break
        case 2:
          this.tabType='sell'
          break    
      }
      this.$refs.tab1.currIndex=index
      this.$refs.tab2.currIndex=index
    },

    backClick(){
      this.$refs.scroll.bscroll&&this.$refs.scroll.bscroll.scrollTo(0,0,400)
    },
    backTopShow(position){
      // console.log(position);
      //1.设置back按钮是否显示
      this.isBackShow=-position.y>1000

      //设置tab 是否吸顶
      this.isTabFixed=-position.y>this.tabOffsetTop
    },
    loadMore(){
      // console.log('ok');
      this.homeGoods(this.tabType)
      // this.$refs.scroll.bscroll.refresh()
    },

    //实现吸顶效果
    swiperImgLoad(){

      // console.log(this.$refs.tab.$el.offsetTop); //$el获取组件里面的元素
      this.tabOffsetTop=this.$refs.tab2.$el.offsetTop
    },

  },
    
}
</script>
<style scoped>
#home {
  /* 100vh=100% viewport height视口高度*/
  /* margin-top: 44px; */
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: rgb(214, 179, 179,.8);
}
.tab-cont { 
  position: relative;
  top: 44px;
  background-color: #fff;
  z-index: 999;
}
.content {
  overflow: hidden;
  /* height: 400px; */
  position: absolute;
  top:44px;
  bottom: 49px;
}
</style>