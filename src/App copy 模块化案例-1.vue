<template>
  <div>
    <p>{{ nowTime }}</p>
    <button @click="getNowTime">当前时间</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { nowTime, getNowTime } from './hooks/useNowTime'
export default defineComponent({
  name: 'App',
  setup() {
    return {
      nowTime,
      getNowTime
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
