<template>
<div class="goods-info"> 
  <!-- 导航栏 -->
 <info-nav-bar class="info-nave" @titleClick="titleClick" ref="navTitle"></info-nav-bar>

       <scroll class="content" :pullUpLoad="true" 
                               :probeType="3" 
                                ref="scroll"
                                @scroll="scrollToTitle"
                                >
        <info-swiper :topBanner="topImg"></info-swiper>
        <!-- 商品描述 -->
        <goods-des :goodsDes="goodsInfo" ></goods-des>
        <!-- 店铺描述 -->
        <shop-info :shoppInfo="shopInfo"></shop-info> 
        <!-- 图片信息 -->
        <img-info :imgInfo="imgInfo" @imgInfoLoad="imgInfoLoad" ></img-info>
         <!-- 尺寸信息 -->
         <size-info :sizeinfo="sizeInfo" ref="sizeInfo"></size-info>
         <!-- 评论信息 -->
         <comment-info :commentInfo="commentInfo" ref="commentInfo"></comment-info>
         <!-- 推荐信息 -->
         <recommend-info :recommendInfo="recommendInfo" @recommendImgload="recommendImgload" ref="recommendInfo"></recommend-info >
       </scroll>
   <bottom-bar @addToCart="addToCart"></bottom-bar>  
   <back-top @click.native="backClick" v-show="isBackShow"></back-top>
</div>
   
</template>

<script>
import InfoNavBar from './infochild/InfoNavBar'
import InfoSwiper from './infochild/InfoSwiper'
import GoodsDes   from './infochild/GoodsDes'
import ShopInfo   from './infochild/ShopInfo'
import ImgInfo    from './infochild/ImgInfo'
import SizeInfo  from  './infochild/SizeInfo'
import CommentInfo from './infochild/CommentInfo'
import RecommendInfo from './infochild/RecommendInfo';
import BottomBar from './infochild/BottomBar'
import BackTop from '@/components/content/backtop/BackTop';

import {getGoodsInfo,getRecommend,setGoodsInfo,setShopInfo,setSizeInfo} from '@/network/info'
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'GoodsInfo',
  data() {
    return {
      goodsId:null,   //保存商品的id
      goodsInfo:{},   //定义存储商品描述、价格、优惠的对象
      topImg:[],
      shopInfo:{},    //定义存储店铺描述、销量的对象
      imgInfo:{},      //定义图片展示信息对象
      sizeInfo:{},     //保存商品尺寸信息
      commentInfo:{},  //保存评论数据
      recommendInfo:[],  //保存推荐信息
      titleTopY:[],      //保存title里面的标题对应的内容距离顶部的位置
      titleCurIndex:0 ,    // title item index
      isBackShow:false      //backtop 的状态
    } 
  },
  components: {
    InfoNavBar,
    InfoSwiper,
    GoodsDes,
    ShopInfo,
    Scroll,
    ImgInfo,
    SizeInfo,
    CommentInfo,
    RecommendInfo,
    BottomBar,
    BackTop
  },
  created() {
    //1.保存路由传递过来的商品的Id
    this.goodsId=this.$route.params.iid

    //2.根据商品的ID 发送网络请求，获取需要的数据  请求商品详情数据
    getGoodsInfo(this.goodsId).then(res=>{
      // console.log(res);
      const data=res.result
              //2.1保存轮播图数据
      this.topImg=data.itemInfo.topImages
              //2.2保存商品的描述信息 价格 详情 
      this.goodsInfo=new setGoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
              //2.3保存店铺的描述信息
      this.shopInfo=new setShopInfo(data.shopInfo)

              //2.4保存图片的展示
      this.imgInfo= data.detailInfo;
              
              //2.5保存商品尺寸信息
      this.sizeInfo= new setSizeInfo(data.itemParams.info, data.itemParams.rule || {})

        // 获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
      

      //此处的方法会等到，组件的数据获取到 DOM渲染完成后执行回调函数 但是这种方式拿到的值是不对的，
      //此时仅仅是DOM被渲染出来了里面的图片，还没有被加载出来
      // this.$nextTick(()=>{
      //   this.titleTopY=[]
      //   this.titleTopY.push(0)
      //    this.titleTopY.push(this.$refs.sizeInfo.$el.offsetTop)
      //    this.titleTopY.push(this.$refs.commentInfo.$el.offsetTop)
      //    this.titleTopY.push(this.$refs.recommendInfo.$el.offsetTop)
      //   //  console.log(this.titleTopY);
      // })

    })
    //请求推荐信息
    getRecommend().then(res=>{
      // console.log(res);
      this.recommendInfo=res.data.list
    })

  },
  methods: {
    imgInfoLoad(){
      this.$refs.scroll.bscroll.refresh()
    },
    recommendImgload(){
      this.$refs.scroll.bscroll.refresh()
       this.titleTopY=[]
        this.titleTopY.push(0)
         this.titleTopY.push(this.$refs.sizeInfo.$el.offsetTop)
         this.titleTopY.push(this.$refs.commentInfo.$el.offsetTop)
         this.titleTopY.push(this.$refs.recommendInfo.$el.offsetTop)

    },
    titleClick(index){
      // console.log(index);
      // console.log(titleTopY);
      this.$refs.scroll.bscroll.scrollTo(0,-this.titleTopY[index],200)
    },

    //backtop
    backClick(){
       this.$refs.scroll.bscroll.scrollTo(0,0,200)
    },

    //滚动内容显示对应标题
    scrollToTitle(position){
      //  console.log(position.y)
      const positionY=(-position.y)


        //1.设置back按钮是否显示
      this.isBackShow=-position.y>1000

      //获取Y值 然后与titleTopY里面记录的值进行对比
      // if  titleTopY[0]<= position < titleTopY[1]  index=0
      // if  titleTopY[1]<= position < titleTopY[2]  index=1
      // if  titleTopY[2]<= position < titleTopY[3]  index=2
      // if  titleTopY[3]<= position  index=3   i===length-1&&posotionY>=this.titleTopY[i]
     const length=this.titleTopY.length
     for (let i = 0; i <length; i++) {
       //this.titleCurIndex!==i  防止频繁赋值
       if(this.titleCurIndex!==i&&((i<length-1&&positionY>=this.titleTopY[i]&&positionY<this.titleTopY[i+1])
       ||(i===length-1&&positionY>=this.titleTopY[i]))){
          this.titleCurIndex=i
          this.$refs.navTitle.curIndex=i
       }
     }
    },
      //添加到购物车
    addToCart(){
      //1.获取购物车里面需要展示的信息
      const cartObj={}
      cartObj.iid=this.goodsId
      cartObj.img=this.topImg[0]
      cartObj.title=this.goodsInfo.title
      cartObj.desc=this.goodsInfo.desc
      cartObj.price=this.goodsInfo.realPrice
      // console.log(cartObj);

      //2.将商品添加到购物车 保存商品的状态 需要使用vuex
      this.$store.dispatch('addCart',cartObj).then(res=>{
        // console.log(res)
        // console.log(this.$toast)
        this.$toast.show(res,3000)

      })


      //
    },

  }

};
</script>
<style  scoped>
.goods-info {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
  width: 100%;
 
}

.content { 
  overflow: hidden;
  background-color: #fff;
  height: calc(100% - 44px);
  width: 100%;
}

.info-nave {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>
