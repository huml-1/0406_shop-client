/* 
vuex管理的home模块
*/
import {
  reqCategoryList,
  reqBannerList,
  reqRecommends,
  reqFloors} from '@/api'

const state = {
  CategoryList: [], // 所有分类的数组
  bannerList:[],
  recommends:[],
  floors:[],
}

const mutations = {
  /* 
  接收保存分类列表
  */
  RECEIVE_CATEGORY_LIST(state,categoryList){
      state.categoryList=categoryList.splice(0,15)
  },
  /* 
  接收保存guanggao列表
  */
  RECEIVE_BANNER_LIST(state,bannerList){
      state.bannerList=bannerList.splice(0,15)
  },
  /* 
  接收保存推荐列表列表
  */
  RECEIVE_RECOMMENDS(state,recommends){
    state.recommends=recommends.splice(0,15)
},
/* 
  接收保存楼层列表
  */
  RECEIVE_FLOORS(state,floors){
    state.floors=floors.splice(0,15)
},
}

const actions = {
  /* 
  异步获取商品三级分类列表
  */
  async getCategoryList({commit}){
    // 调用接口请求函数
    const result= await reqCategoryList()
    // 如果请求成功取出数据去提交给mutation保存
    if(result.code===200){
        const categoryList=result.data
        commit('RECEIVE_CATEGORY_LIST',categoryList)
    }
  },
    /* 
    异步获取广告轮播分类列表
    */
    async getBannerList({commit}){
      // 调用接口请求函数
      const result= await reqBannerList()
      // 如果请求成功取出数据去提交给mutation保存
      if(result.code===200){
          const bannerList=result.data
          commit('RECEIVE_BANNER_LIST',bannerList)
      }
    },
     /* 
    异步获取推荐轮播分类列表
    */
    async getRecommends({commit}){
      // 调用接口请求函数
      const result= await reqRecommends()
      // 如果请求成功取出数据去提交给mutation保存
      if(result.code===200){
          const recommends=result.data
          commit('RECEIVE_RECOMMENDS',recommends)
      }
    },
     /* 
    异步获取楼层分类列表
    */
    async getFloors({commit}){
      // 调用接口请求函数
      const result= await reqFloors()
      // 如果请求成功取出数据去提交给mutation保存
      if(result.code===200){
          const floors=result.data
          commit('RECEIVE_FLOORS',floors)
      }
    },
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
