<template>
  <div class="ScContent">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"Content"
}
</script>

<style lang="scss" scoped>
.ScContent{
  position: absolute;
  top:44px;
  bottom: 50px;
  width: 100%;
  overflow: scroll;
}
</style>