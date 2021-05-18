<!--
 * @FileDescription: 横向滚动列表公共组件
 * @Author: 李永光
 -->
<template>
  <div class="slidetittle">Recommend</div>
  <div class="slideboxcotainer">
    <ul class="slidebox">
      <li class="slidebox_li" v-for="(item,i) in slidelist" :key="i">
          <img class="slidebox_li_img" :src="item['im:image'][2].label"/>
          <div class="slidebox_li_div1">{{item['im:name'].label}}</div>
          <div class="slidebox_li_div2">{{item.category.attributes.label}}</div> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slidelist: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../style/common";
  $slideliwidth:pxToRem(220);
  $slideimgwidth:pxToRem(160);
  $slideliheight:pxToRem(210);
  .slideboxcotainer{
     white-space: nowrap;
     overflow: scroll;
    .slidebox{
      width: calc(10 * #{$slideliwidth});
      height: $slideliheight;
      &_li{
        display: inline-block;
        width: $slideliwidth;
        height: $slideliheight;     
        &_img{
          border-radius: pxToRem(42);
          width: $slideimgwidth;
          height: $slideimgwidth;
        }
        &_div1{
          font-size: $fontsize22;
          width: $slideimgwidth;
          overflow: hidden;
          text-overflow: clip ;
          margin: 0 auto;
        }
        &_div2{
          font-size: $fontsize22;
          color: $gray3;
          margin: 0 auto;
        }
      }
      margin: pxToRem(20) auto;
    }
  }

  .slidetittle{
    text-align: left;
    font-size: $fontsize30;
    margin: pxToRem(10) 0 pxToRem(0) pxToRem(30);
  }
</style>
