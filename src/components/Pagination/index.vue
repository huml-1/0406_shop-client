<template>
    <div class="pagination">
      <button :disabled="myCurrentPage===1" :class="{disable:myCurrentPage===1}" @click="setCurrentPage(myCurrentPage-1)">上一页</button>
      <button v-show="startEnd.start!=1"  @click="setCurrentPage(1)">1</button>
      <button  class="disable" v-if="startEnd.start>2">...</button>

      <!-- <button 
        v-for="item in startEnd.end "
        v-if="item>=startEnd.start"
        :class="{active:item===myCurrentPage}"
        @click="setCurrentPage(item)"
        >{{item}}</button> -->

         <button 
          v-for="item in startEndArr"
          :class="{active:item===myCurrentPage}"
          @click="setCurrentPage(item)"
        >{{item}}</button>
      <!-- <button>3</button>
      <button>4</button>
      <button class="active">5</button>
      <button>6</button>
      <button>7</button> -->

       <button  class="disable" v-if="startEnd.end<totalPages-1">...</button>
        <button v-show="startEnd.end<totalPages"
       >{{totalPages}}</button>
      <button :disabled="myCurrentPage===totalPages" :class="{disable:myCurrentPage===totalPages}" @click="setCurrentPage(myCurrentPage+1)">下一页</button>
      <button class="disable">共 {{total}}条</button>
    </div>
</template>

<script>
export default {
  name:'Pagination',
  props:{
    currentPage:{
      type:Number,
      default:1
    },
    total:{
      type:Number,
      default:34
    },
    pageSize:{
      type:Number,
      default:10
    },
    showPageNo:{//连续页码数
      type:Number,
      default:5,
      // 要求传入的值是奇数
      validator:function(value){
        return value%2===1
      }
    }
  },
  data() {
    return {
      myCurrentPage:this.currentPage //初始值由父组件来指定
    }
  },
  computed:{
   
    // 总页数
    totalPages(){
      const {total,pageSize}=this
      return Math.ceil(total/pageSize)
    },

    // 包含从start到end的数组
     startEndArr(){
      const arr=[]
      const {start,end} =this.startEnd
      for (let page = start; page < end; page++) {
          arr.push(page); 
      }
      return arr
    },

    // start 和 end 连续页码数开始的页码数和结束的页码数 {start:3,end:7}
    startEnd(){
      let start,end
      const {myCurrentPage,showPageNo,totalPages}=this

      // 计算start
      start=myCurrentPage-Math.floor(showPageNo/2)
      // 如果currentPage比较小，计算的结果有可能小于1 start 应该要大于等于1
      if(start<1){
        start=1
      }
      // 计算end
      end=start+showPageNo-1
      // end的最大值为totalPages
      if(end>totalPages){
        // 修正end
        end=totalPages
        // 修正start
        start=end-showPageNo+1
        // 一一旦总页数小于量最大连续页码数，就会导致start<1
        if(start<1){
          start=1
        }
      }
      return {start,end}
    }
  },
  watch:{
    currentPage(value){
      this.myCurrentPage=value
    }
  },
  methods:{
    // 设置新的当前页吗
    setCurrentPage(page){
      // 如果页码没有变化
      if(page===this.myCurrentPage) return
      // 更新当前页码
      this.myCurrentPage=page
      // 分发自定义事件
      this.$emit('currentChange',page)
    },
  },
}
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
  
</style>