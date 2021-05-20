<!--
 * @FileDescription: 垂直列表公共组件
 * @Author: 李永光
 -->
<template>
  <div class="listcotainer">
    <ul class="listbox">
      <li class="listbox_li border1-1" v-for="(item,listseq) in datalist" :key="listseq">
          <div class="listbox_li_div1">{{listseq+1}}</div>
          <div class="listbox_li_div2"><img class="listbox_li_img" :src="item.artworkUrl100"/></div>
          <div class="listbox_li_div3">
            <div>{{item.trackCensoredName}}</div>
            <div>{{item.genres[0]}}</div>
            <div v-if="showRating">
              <template v-for="index of starcount(listseq)" :key="index">
                <i class="fa fa-star star-oval" aria-hidden="true" ></i>
              </template>
              <i v-if="halfstarcount(listseq)" class="fa fa-star-half-o star-oval" aria-hidden="true" ></i> 
              <template v-for="index of ovalstarstarcount(listseq)" :key="index">
                <i class="fa fa-star-o star-oval" aria-hidden="true"></i> 
              </template>
              <span>({{item.userRatingCount}})</span>
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
      
    }
  },
  props: {
    datalist: Array,
    showRating: Boolean,
  },
  computed: {
      starcount() {
          return function(index){
              return Math.trunc(this.datalist[index].averageUserRating)     
          }           
      },
      halfstarcount() {
          return function(index){
              return this.datalist[index].averageUserRating>this.starcount(index)?true:false     
          }           
      },
      ovalstarstarcount() {
          return function(index){
              return 5-this.starcount(index)-this.halfstarcount(index)   
          }           
      } 
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../style/common";
  $slideimgwidth:pxToRem(120);
  .listbox_li{
    //border-bottom:1px solid $linecolor2;
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
