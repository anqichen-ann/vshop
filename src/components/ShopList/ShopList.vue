<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li border-1px" v-for="item in shopList" :key="item.id" >
        <a>
          <div class="shop_left">
            <img class="shop_img" :src="item.imgSrc">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{item.shopname}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  {{item.star}}
                </div>
                <div class="order_section">
                  月售{{item.counts}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">武理专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{item.qisong}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{item.peisong}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopList',
  data: function () {
    return {
      shopList: [
        {
          id: 1,
          imgSrc: '/static/images/shop/1.jpg',
          shopname: '锄禾日当午，汗滴禾下土',
          star: 3.6,
          counts: 106,
          qisong: 20,
          peisong: 5
        },
        {
          id: 2,
          imgSrc: '/static/images/shop/2.jpg',
          shopname: '锄禾日当午，汗滴禾下土',
          star: 4.1,
          counts: 136,
          qisong: 25,
          peisong: 6
        },
        {
          id: 3,
          imgSrc: '/static/images/shop/3.jpg',
          shopname: '锄禾日当午，汗滴禾下土',
          star: 3.2,
          counts: 86,
          qisong: 15,
          peisong: 4
        },
        {
          id: 4,
          imgSrc: '/static/images/shop/4.jpg',
          shopname: '锄禾日当午，汗滴禾下土',
          star: 3.8,
          counts: 214,
          qisong: 15,
          peisong: 1.1
        }
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet.stylus">
  @import "../../common/stylus/mixins.styl"
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #0088ff
</style>
