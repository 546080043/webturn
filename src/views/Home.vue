<!--
 * @FileDescription: 主页面
 * @Author: 李永光
 -->
<template>
  <div class="topbar">
    <!--搜索框-->
    <searchbar @searchdata="searchdata" />
    <div class="line1 border2-1" />
    <!--推荐应用列表-->
    <appslide :slidelist="slidelist" />
    <div class="line1 border2-1" />
  </div>
  <div class="content">
    <!--免费应用列表-->
    <applist :datalist="datalist" />
    <!--搜索结果列表-->
    <searchlist :datalist="searchlist" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import searchbar from "@/components/searchbar.vue";
  import appslide from "@/components/appslide.vue";
  import applist from "@/components/applist.vue";
  import searchlist from "@/components/searchlist.vue";
  import {
    getRecommends,
    getPopulars,
    lookup,
  } from "@/http/ituns.js";

  export default {
    data() {
      return {
        datalist: [],
        searchlist: [],
        slidelist: [],
      };
    },
    components: {
      searchbar,
      applist,
      searchlist,
      appslide,
    },
    mounted() {
      let gthis = this;
      //获取推荐列表
      getRecommends()
        .then((res1) => {
          //console.log(res1)
          gthis.slidelist = res1.feed.entry;
          console.log(gthis.slidelist);
          //获取免费应用列表
          return getPopulars();
        })
        .then((res3) => {
          // console.log(res3)
          gthis.datalist = res3.feed.entry;
          console.log(gthis.datalist);
        });
    },
    methods: {
      /**
        * @description: 搜索功能
        */
      searchdata(searchkey) {
        let gthis = this;
        if (!searchkey) return;
        console.log("searchkey:" + searchkey);
        gthis.datalist = [];
        gthis.searchlist = [];
        //搜索数据
        lookup(searchkey).then((res5) => {
          console.log(res5);
          gthis.searchlist = res5.results;
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../style/common";
  .topbar {
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    height: pxToRem(448);
    z-index: 999;
    background-color: white;
  }
  .content {
    height: 100vh;
    padding-top: pxToRem(450);
    overflow-y: auto;
    z-index: 998;
  }
</style>