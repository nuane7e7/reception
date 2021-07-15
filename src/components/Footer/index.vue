<template>
 <div class="Tabbar"  @touchmove.prevent.stop>
   <div v-for="item in TabBar" :key="item.path" :class="[{'active':item.path===$route.path},'TabBar-item']" @click="$router.push(item.path)">
     <div>{{item.icon}}</div>
     <div>{{item.text}}</div>
   </div>
 </div>
</template>

<script>
import {  reactive,
  toRefs, } from 'vue'
export default {
  name:"Footer",
  setup() {
    const  data =reactive( {
          active:"",
          TabBar:[
            {text:"首页",icon:"1",path:"/"},
            {text:"文字",icon:"2",path:"/test"},
            {text:"图片",icon:"3",path:"/avatar"},
            {text:"我的",icon:"4",path:"/user"},
          ]
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss">
.Tabbar{
    font-size: 16px;
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 375px;
    display: flex;
    justify-content: space-around;
    .TabBar-item{
      height:50px;
      flex: 1;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.active{
        color:#f00;
      }
    }

}
</style>