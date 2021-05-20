<!--
 * @FileDescription: 搜索框公共组件
 * @Author: 李永光
 -->
<template>
  <div class="searchbox">
    <i class="fa fa-search searchicon" id="i-advanced-search-i"></i>
    <input class="searchbox_text" type="text" name="" id="" v-model="searchtext" placeholder="Search..." @input="triggerinput()">
  </div>
</template>

<script>
export default {
  name: "searchbar",
  data() {
    return {
      searchtext: "",
      timeoutid: null
    }
  },
  props: {
    
  },
  methods: {
    /**
      * @description: 节流处理，避免频繁触发http请求
      */
    triggerinput() {
      clearTimeout(this.timeoutid)
      this.timeoutid = setTimeout(this.triggersearch,500)
    },
    /**
      * @description: 搜索功能
      */
    triggersearch() {
      this.$emit('searchdata',this.searchtext);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../style/common";
  .searchbox{
    margin: pxToRem(20) pxToRem(35);
    width:pxToRem(680);
    height: pxToRem(70);
    border-radius: pxToRem(20);
    background-color: $gray2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 pxToRem(10);
    box-sizing: border-box;

    &_text{
      box-sizing: border-box;
      width:pxToRem(630);
      height: pxToRem(60);
      border:none;
      background-color: transparent;
      font-size: $fontsize24;
    }

    .searchicon{
      width:pxToRem(50);
      height: pxToRem(50);
      line-height: pxToRem(50);
      text-align: center;
      font-size: $fontsize24;
      color: $gray1;
    }
  }
</style>
