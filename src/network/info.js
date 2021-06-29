import {request} from './request'

//获取商品信息
export function getGoodsInfo(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//获取推荐信息
export function getRecommend(){
  return request({
    url:'/recommend',
  })
}

//在项目开发中从服务器请求的数据非常多结构复杂，我们需要的数据在不同的地方
//因此在保存数据前，我们可以先定义好本地存储数据的结构
//设置保存获取到的商品信息的数据结构
export class setGoodsInfo{
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
    this.realPrice=itemInfo.lowNowPrice
  }
}


//设置保存获取到的店铺信息的数据结构
export class setShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}


// 尺寸数据
export class setSizeInfo {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}