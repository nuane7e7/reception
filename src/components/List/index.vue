<template>
  <van-list v-model="loading" :error="error" :finished="finished"   @load="onLoad">
        <slot name="content" :list="messageList"></slot>
  </van-list>
</template>

<script>
import { reactive, toRefs,onMounted,computed } from "vue";
import { List } from "vant";
export default {
  name: "List",
  components: { [List.name]: List },
  props:{
    List:{
      type: Array,
      default:() =>[]
    },
    requestMethod:{
      type:Function,
      required: true,
      default: ()=> {
        return ()=>{}
      }
    }
  },

  setup(props,{emit}) {
      const messageList = computed(()=>props.List || data.list)
      const listLength = computed(()=>messageList.value.length)
    const data = reactive({
      loading: false,
      error: false,
      finished: false,
      list:[],
      onLoad :async () => {
        data.loading = true 
        let  startind = listLength.value
      let  {loading = false, error = false, finished = false, list = []} = await props.requestMethod({startind})
       
        console.log(loading,error,finished,list);
        if(error &&  startind === 0){
            data.list =[]
        }else{
          emit('update:List',[...(props.List || []),...list])
        }
      data.error = error
			data.loading = loading
			data.finished = finished
      }
    });
       
      onMounted(()=>{
          // data.onLoad()
      })
    return {
      ...toRefs(data),
      messageList,
    };
  }
};
</script>

<style>
</style>