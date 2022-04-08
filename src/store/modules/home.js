/* 
vuex管理的home模块
*/
import {reqCategoryList} from '@/api'

const state = {
  baseCategoryList: [], // 所有分类的数组
}

const mutations = {
  /* 
  接收保存分类列表
  */
  RECEIVE_CATEGORY_LIST(state,categoryList){
      state.categoryList=categoryList.splice(0,15)
  }
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
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
