<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在这 -->
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import {reqBaseCategoryList} from '@/api'

export default {
  name: 'App',
  components:{Header,Footer},
  mounted(){
    //  分发请求获取分类列表的异步action
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
