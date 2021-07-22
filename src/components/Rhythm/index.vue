<template>
  <div class="rhythm">
    <span class="r1"></span>
    <span class="r2"></span>
    <span class="r3"></span>
    <span class="r4"></span>
    <span class="r5"></span>
  </div>
</template>
<script>
export default {
  name: "Rhythm"
};
</script>
<style scoped lang='scss'>
.rhythm {
  width: 60px;
  height: 20px;
  display: flex;
  margin-top: 30px;
  align-items: flex-end;
  span {
    display: block;
    margin-left: 2px;
    background-color: #ff3d83;
    flex: 0 0 8px;
  }
  .r1 {
    @include rhythm(20px,zb_load_1);
  }
  .r2 {
    @include rhythm(16px,zb_load_2);
  }
  .r3 {
    @include rhythm(12px,zb_load_3);
  }
  .r4 {
    @include rhythm(8px,zb_load_4);
  }
  .r5 {
    @include rhythm(4px,zb_load_5);
  }
}
@keyframes zb_load_1 {
  0%,
  100% {
    height: 20px;
  }
  50% {
    height: 10px;
  }
}
@keyframes zb_load_2 {
  0%,
  100% {
    height: 16px;
  }
  50% {
    height: 8px;
  }
}
@keyframes zb_load_3 {
  0%,
  100% {
    height: 12px;
  }
  50% {
    height: 6px;
  }
}
@keyframes zb_load_4 {
  0%,
  100% {
    height: 8px;
  }
  50% {
    height: 4px;
  }
}
@keyframes zb_load_5 {
  0%,
  100% {
    height: 4px;
  }
  50% {
    height: 2px;
  }
}
</style>