/* 
包含所有接口请求函数的模块
*/
import ajax from './ajax'

//获取商品的三级分类列表
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',

    })
}

//获取主页广告轮播
export const reqBannerList=()=>ajax('/cms/banner')

