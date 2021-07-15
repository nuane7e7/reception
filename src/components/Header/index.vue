<template>
  <van-nav-bar class="x-header" >
    <template #left>
      <slot name="left"></slot>
    </template>
    <template #title>
      <slot name="title">
        {{$route.meta.title}}
      </slot>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "Header",
  setup() {}
};
</script>

<style lang="scss" >
.x-header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  overflow: hidden;
  color: $colorHeader;
  background-color: $bgHeader;
  .van-nav-bar__content {
    height: 44px;
    width: 100%;
  }
  .van-nav-bar__title,
  .van-nav-bar__left,
  .van-nav-bar__right {
    color: $colorHeader;
  }
}
</style>