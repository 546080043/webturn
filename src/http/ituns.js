/**
 * @author 李永光
 * @description ituns相关接口
 */
import httpInstance from "@/http/request.js"
import {defaultAppCounts,popularAppCounts} from '@/config'

/**
 * @description 获取推荐列表
 */
let getRecommends = ()=>{
    return httpInstance.get('/hk/rss/topgrossingapplications/limit='+defaultAppCounts+'/json')
}

/**
 * @description 获取最受欢迎的列表
 */
 let getPopulars = ()=>{
    return httpInstance.get('/hk/rss/topfreeapplications/limit='+popularAppCounts+'/json')
}

/**
 * @description 搜索app
 */
 let searchApps1 = ()=>{
    //const url1 = '/search?term=携程旅行&country=cn&entity=softwar'
    const url2 = '/search?term=travel&country=cn&entity=softwar'
    return httpInstance.get(url2)
}

let searchApps2 = ()=>{
    const url1 = '/search?term=jack+johnson&limit='+defaultAppCounts
    //const url2 = '/hk/search?term=jack+johnson&limit='+defaultAppCounts
    return httpInstance.get(url1)
}

let lookup = (searchkey)=>{
    const url1 = '/hk/search?term='+searchkey+'&limit='+popularAppCounts
    //const url2 = '/hk/lookup?term='+searchkey+'&limit='+popularAppCounts
    return httpInstance.get(url1)
}

let lookupById = (ids)=>{
    const url2 = '/hk/lookup?id='+ids
    return httpInstance.get(url2)
}
export {getRecommends,getPopulars,searchApps1,searchApps2,lookup,lookupById}