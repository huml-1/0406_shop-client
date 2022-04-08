<template>
  <div >
    <!-- 三级联动全局组件已经全局引入了，不需要在引入了 -->
    <TypeNav/>
    <ListContainer />
    <Recommend />
    <Rank />
    <Like/>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
    <Brand/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'


export default {
    name:'Home',
    mounted(){
      this.$store.dispatch('getRecommends')
      this.$store.dispatch('getFloors')   
    },
    computed:{
      ...mapState({
        floors:state=>state.home.floors,
      })
    },

    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand,
      }
}
</script>

<style lang="less" scoped>
    
</style>>

