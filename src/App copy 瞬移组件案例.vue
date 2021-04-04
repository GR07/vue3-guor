<template>
  <div>
    <!-- 瞬移组件演示 -->
    <Modal />
    <div v-if="loading">loading...</div>
    <img v-if="loaded" :src="result.imgUrl" alt="图片">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useURLAxios from './hooks/useURLAxios';
import Modal from './components/Modal.vue';

export default defineComponent({
  name: 'App',
  components: { Modal },
  setup() {

    const { result, loading, loaded } = useURLAxios('https://apiblog.jspang.com/default/getGirl');
    return {
      result,
      loading,
      loaded
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
