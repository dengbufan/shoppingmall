<template>
  <div class="img-info" v-if="Object.keys(imgInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ imgInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div :key="index" v-for="(item, index) in imgInfo.detailImage">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img :src="image" v-for="image in item.list" @load="imgInfoLoad"/>
      </div>
    </div>
    <!-- <h2>图片信息</h2> -->
  </div>
</template>

<script>
export default {
  name: 'ImgInfo',
  props:{
    imgInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgInfoLoad(){
      // console.log('图片详情');
      this.$emit('imgInfoLoad')
    }
  },
};
</script>
<style scoped>
.img-info {
  padding: 20px 5px;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #c48686;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  font-size: 14px;
  padding: 15px 0;
}

.info-key {
  font-size: 15px;
  margin: 10px 0 10px 15px;
  color: #333333;
}

.info-list img {
  width: 100%;
}
</style>