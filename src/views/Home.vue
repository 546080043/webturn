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
    <!--应用列表-->
    <applist :datalist="datalist" :showRating="showRating" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import searchbar from "@/components/searchbar.vue";
  import appslide from "@/components/appslide.vue";
  import applist from "@/components/applist.vue";
  import {
    getRecommends,
    getPopulars,
    lookup,
    lookupById
  } from "@/http/ituns.js";

  export default {
    data() {
      return {
        datalist: [],
        slidelist: [],
        showRating: true
      };
    },
    components: {
      searchbar,
      applist,
      appslide,
    },
    created() {
      let gthis = this;
      //获取推荐列表
      getRecommends()
        .then((res1) => {
          gthis.slidelist = res1.feed.entry
          //获取免费应用列表
          return getPopulars()
        })
        .then((res3) => {
           let ids = res3.feed.entry.map((item)=>item.id.attributes["im:id"])
           return lookupById(ids.join())
        }).then((res4) => {
          gthis.datalist = res4.results  
        })
    },
    methods: {
      /**
        * @description: 搜索功能
        */
      searchdata(searchkey) {
        let gthis = this
        if (!searchkey) return
        gthis.datalist = []
        gthis.showRating = false
    
        lookup(searchkey)
          .then((res5) => {
            let procData = res5.results.map((item)=>{
              item.trackCensoredName=item.trackName
              item.genres=[item.primaryGenreName]
              return item
            })
            gthis.datalist = procData  
            // return lookupById(ids.join())
          })
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