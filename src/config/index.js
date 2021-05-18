/**
 * @description 导出配置
 */
 const setting = {
    // 服务器URL
    baseURL: 'https://itunes.apple.com',
    //最长请求时间
   requestTimeout: 5000,
   //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
   contentType: 'application/json;charset=UTF-8',

   defaultAppCounts: 10,
   popularAppCounts: 100
 }  
 module.exports = setting