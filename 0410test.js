 reqProductList=(searchParams)=>ajax.post('/list',searchParams)
import { keys } from 'core-js/core/array'
import Vue from 'vue'
import reqProductList from './api'
const state={
    productList={}
},
const mutations={
    RECEIVE_PRODUCT_LIST(state,productList){
        state.productList=productList
    }
},
const actions={
    async getProductList({commit},searchParams){
        searchParams={...searchParams}
        Object.keys(searchParams).forEach(key=>{
            if(searchParams===''){
                delete searchParams[key]
            }
        })
        const result=await reqProductList(searchParams)
        if(result===200){
            const productList=result.data
            commit('RECEIVE_PRODUCT_LIST',productList)
        }
    }
},
export default new Vuex.Store({
    state,
    mutations,
    actions,
})