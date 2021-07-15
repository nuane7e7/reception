<template>
  <div ref="dragBox" @touchstart.prevent="touchstartHandle($event)" @touchmove.prevent="touchmoveHandle($event)" @touchend="touchend" :style="{'top':'80px',right:'0px'}"
   :class="['btn-wrap',classState===0 ? 'left':classState===1 ? 'conten' :'right' ]">
    <span>哈哈</span>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "bet",
  setup() {
    const data = reactive({
      location: { top: 0, left: 0 },
      original: { x: 0, y: 0 },
      classState: 3,
      /**移动的元素 */
      dragBox: null,
      /**点击不放时 */
      touchstartHandle: e => {
        /**获取鼠标位置(距离顶部，距离左边) */
        let { clientX, clientY } = e.targetTouches[0];
        data.original = { x: clientX, y: clientY };
        /**获取设置元素位置*/
        let { offsetLeft: left, offsetTop: top } = data.dragBox;
        data.location = { top, left };
      },
      /**拖拽时调用 */
      touchmoveHandle: e => {
        let { clientX, clientY } = e.targetTouches[0];
        let { x: oldx, y: oldy } = data.original;
        // 根据初始 client 位置计算移动距离(元素移动位置=元素初始位置+光标移动后的位置-光标点击时的初始位置)
        let x = data.location.left + (clientX - oldx);
        let y = data.location.top + (clientY - oldy);
        // 限制可移动距离，不超出可视区域
        x =x <= 0  ? 0 : x >= innerWidth - data.dragBox.offsetWidth? innerWidth - data.dragBox.offsetWidth : x;
        y = y <= 50 ? 50 : y >= innerHeight - data.dragBox.offsetHeight-50  ? innerHeight - data.dragBox.offsetHeight-50: y;
        // 移动当前元素
        data.dragBox.style.left = x + "px";
        data.dragBox.style.top = y + "px";
       data.classState=1
      },
      touchend: () => {
        let width = innerWidth / 2,
          offsetWidth = data.dragBox.offsetWidth,
          left = data.dragBox.offsetLeft,
          x = 0;
        if (left > width - offsetWidth / 2) {
          x = width * 2 - offsetWidth;
        }
       data.classState =  x === 0 ? 0 : 3;
        data.dragBox.style.left = x + "px";
      }
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>
<style lang="scss" scoped>
.btn-wrap {
  width: 60px;
  height: 60px;
  background-color: orange;
  color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 10;
  &.left {
    border-top-right-radius: 40%;
    border-bottom-right-radius: 40%;
  }
  &.conten {
    border-radius: 40%;
  }
  &.right {
    border-top-left-radius: 40%;
    border-bottom-left-radius: 40%;
  }
}
</style>