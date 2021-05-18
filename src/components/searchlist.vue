<!--
 * @FileDescription: 搜索结果列表公共组件
 * @Author: 李永光
 -->
<template>
  <div class="listcotainer">
    <ul class="listbox">
      <li class="listbox_li" v-for="(item,listseq) in datalist" :key="listseq">
          <div class="listbox_li_div1">{{listseq+1}}</div>
          <div class="listbox_li_div2"><img class="listbox_li_img" :src="item.artworkUrl100"/></div>
          <div class="listbox_li_div3">
            <div>{{item.trackCensoredName}}</div>
            <div>{{item.primaryGenreName}}</div>
            <div>
              <template v-for="index of stararr[listseq%10]" :key="index">
                <i class="fa fa-star star-oval" aria-hidden="true" ></i>
              </template>
              <i class="fa fa-star-half-o star-oval" aria-hidden="true" v-if="starhalfarr[listseq%10]"></i> 
              <template v-for="index of (5-stararr[listseq%10]-starhalfarr[listseq%10])" :key="index">
                <i class="fa fa-star-o star-oval" aria-hidden="true"></i> 
              </template>
              <span>({{commentsarr[listseq%10]}})</span>
            </div>

          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stararr: [2,4,5,3,4,3,3,4,2,4],
      starhalfarr: [0,1,0,0,1,0,1,0,1,0],
      commentsarr:[1127,985,0,23,99,560,16,0,30,3]
    }
  },
  props: {
    datalist: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../style/common";
  $slideimgwidth:pxToRem(120);
  .listbox_li{
    border-bottom:1px solid $linecolor2;
    display: flex;
    align-items: center;
    margin:0 pxToRem(20);
    padding: pxToRem(20) 0;
    &>div>img{
      border-radius: pxToRem(30);
      width: $slideimgwidth;
      height: $slideimgwidth;
      margin: 0 pxToRem(15);
    }
    &_div1{
      text-align: left;
      width:pxToRem(25);
    }
    &_div3{
      position: relative;
      text-align: left;
      width: pxToRem(500);
      height: $slideimgwidth;
      &>div{
        margin-bottom: pxToRem(5);
      }
      &>div:nth-child(1){
        font-size: $fontsize20;
      }
      &>div:nth-child(2){
        font-size: $fontsize18;
        color:$gray3;
      }
      &>div:nth-child(3){
        font-size: $fontsize16;
        color:$gray3;
        position: absolute;
        left:0;
        bottom:0;
      }
    }
  }
  .listbox_li:nth-child(2n) img{
    border-radius: 50%;
  }
  .star-oval{
    color:$startcolor1;
  }
</style>
