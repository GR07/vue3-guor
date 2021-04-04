<template>
  <div>
    <Suspense>
      <!-- 请求成功展示的内容 -->
      <template #default>
        <AsyncShow />
      </template>
      <!-- 请求失败展示的内容 -->
      <template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AsyncShow from './components/AsyncShow.vue';

export default defineComponent({
  name: 'App',
  components: { AsyncShow },
  setup() {

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
