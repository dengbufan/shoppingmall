<template>

   <!-- Object.keys(goodsDes).length !== 0 判断当前对象是否存在 有无数据-->
   <div class="out">
     <div v-if="Object.keys(goodsDes).length !== 0" class="goods-des">
     <div class="info-title">{{ goodsDes.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goodsDes.newPrice }}</span>
      <span class="o-price">{{ goodsDes.oldPrice }}</span>
      <span
        :style="{ backgroundColor: goodsDes.discountBgColor }"
        class="discount"
        v-if="goodsDes.discount"
      >
        {{ goodsDes.discount }}
      </span>
    </div>
    <div class="info-other">
      <span>{{ goodsDes.columns[0] }}</span>
      <span>{{ goodsDes.columns[1] }}</span>
      <span>{{ goodsDes.services[goodsDes.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        :key="index"
        class="info-service-item"
        v-for="index in goodsDes.services.length - 1"
        v-if="goodsDes.services[index - 1].icon"
      >
        <img :src="goodsDes.services[index - 1].icon" alt="" />
        <span>{{ goodsDes.services[index - 1].name }}</span>
      </span>
    </div>
   <!-- <h2>商品描述</h2> -->
  </div>
   </div>
</template>
<script>
export default {
  name: 'GoodsDes',
  props:{
    goodsDes:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
  },
};
</script>
<style scoped>
.out {
  width: 100%;
  margin-top: 15px;
  border-bottom: 5px solid #b1b6bb;
}
.goods-des {
  color: #999999;
  padding: 10px;
}

.info-title {
  font-size: 14px;
  text-align: justify;
  color: #222222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: #ff5777;
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  position: relative;
  top: -4px;
  margin-left: 5px;
  padding: 3px 6px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #ff5777;
}

.info-other {
  font-size: 13px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-service {
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}

.info-service-item span {
  font-size: 13px;
  margin-left: 5px;
  color: #333333;
}
  
</style>