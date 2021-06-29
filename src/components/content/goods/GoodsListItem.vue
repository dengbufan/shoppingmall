<template>
  <div class="goods-list-item" @click="goodsIemClick"> 
    <img :src="listItem.show.img" alt="" @load="itemImgOnLoad"> 
    <div class="goods-info">
      <p>{{listItem.title}}</p>
      <span class="price">{{"￥"+ listItem.price }}</span>
      <span class="collect">{{ listItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
    listItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
  },
  methods: {
    itemImgOnLoad(){  //监听图片是否加载完成
      this.$bus.$emit('itemImgOnLoad')
    },
    goodsIemClick(){ //监听goods里面的商品是否发生点击，点击的话跳转到详情页
      // console.log('跳转到详情页');
      this.$router.push('/goodsinfo/'+this.listItem.iid)//通过动态路由的方式将商品的ID拼接到URL中
    }

  },
};
</script>
<style scoped>

.goods-list-item {
  margin-top:2px ;
  padding-bottom: 40px;
  position: relative;
  width: 48%;

}

.goods-list-item img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: rgb(160, 101, 101);
  margin-right: 30px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>