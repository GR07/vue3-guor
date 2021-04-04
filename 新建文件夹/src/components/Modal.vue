<template>
  <teleport to="#guor">
    <div id="center">
      我是弹窗组件
    </div>
  </teleport>
</template>
<script lang="ts">
export default {
    
}
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>