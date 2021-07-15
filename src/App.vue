<template>
  <router-view/>
  <TabBar  v-if="$route.meta.tabbar" />
      <Bet/>
</template>
<script>
import TabBar from './components/Footer'
import Bet from './components/Bet'
export default {
  components:{TabBar,Bet},
  setup() {
    
  },
}
</script>

<style lang="scss">
</style>
