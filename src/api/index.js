/* 
包含所有接口请求函数的模块
*/

import ajax from './ajax'
import mockAjax from './mockAjax'

//获取商品的三级分类列表
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',

    })
}

//获取主页广告轮播
export const reqBannerList=()=>ajax('/cms/banner')


// mock接口函数
export const reqRecommends=()=>mockAjax('/recommends')
export const reqFloors=()=>mockAjax('/floors')

reqFloors().then(result=>{
    // console.log('response',result);
})
// 搜索分页
export const reqSearch=(searchParams)=>ajax.post('/list',searchParams)