<template>
  <div>
    <Suspense>
      <!-- 请求成功展示的内容 -->
      <template #default>
        <AsyncGirl />
      </template>
      <!-- 请求失败展示的内容 -->
      <template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
// onErrorCaptured 异常错误捕获的钩子函数
import { defineComponent, onErrorCaptured } from 'vue';
import AsyncGirl from './components/AsyncGirl.vue';

export default defineComponent({
  name: 'App',
  components: { AsyncGirl },
  setup() {
    // 如果接口异常，会执行钩子
    onErrorCaptured((error) => {
      console.log(`我是接口抛出来的错误信息--------${error}`);
      return true; // 如果向上传递，此钩子函数必须 return true
      
    })
    return {

    }
  }
  
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
