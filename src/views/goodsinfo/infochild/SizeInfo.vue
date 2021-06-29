<template>
  <div class="size-info" v-if="Object.keys(sizeinfo).length !== 0">
    <p>参数信息</p>
    <table :key="index" class="info-size" v-for="(table, index) in sizeinfo.sizes">
      <tr :key="indey" v-for="(tr, indey) in table">
        <td :key="indez" v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr :key="index" v-for="(info, index) in sizeinfo.infos">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="sizeinfo.image.length !== 0">
      <img :src="sizeinfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeInfo',
  props:{
    sizeinfo:{
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
<style  scoped>
.size-info {
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.size-info p {
  font-size: 15px;
  margin-bottom: 10px;
}

.size-info table {
  width: 100%;
  border-collapse: collapse;
}

.size-info table tr {
  height: 42px;
}

.size-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>