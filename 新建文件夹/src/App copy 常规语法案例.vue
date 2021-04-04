<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <button v-for="(item, index) in girls" :key="index" @click="selectFun(index)">
    {{ item }}
  </button>
  <p>当前选中的是{{ selectGirl }}</p>
  <button @click="submit">确定</button>
  <p>{{ submitValue }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from 'vue';

// 定义接口
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectFun: (index: number) => void;
}

export default defineComponent({
  name: 'App',
  // 模板需要用到的数据放在 setrup 函数
  setup() {
    const data: DataProps = reactive({
      girls: ['高圆圆', '大幂幂', '贾玲'],
      selectGirl: '',
      selectFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })

    // toRefs 变为响应式数据
    const toData = toRefs(data);

    // ref 写法
    // const girls = ref(['高圆圆', '大幂幂', '贾玲']);
    // const selectGirl = ref('xxx');
    // const selectFun = (index: number) => {
    //   selectGirl.value = girls.value[index]
    // };

    const submitValue = ref('选择完成');
    const submit: () => void = () => {
      submitValue.value = `选择完成${data.selectGirl}`
    };
    watch([submitValue, () => data.selectGirl], (newValue, oldValue) => {
      // 监听的第一个值
      console.log(`newValue-------------${newValue[0]}`);
      console.log(`oldValue-------------${oldValue[0]}`);
      // 监听的第二个值
      console.log(`newValue-------------${newValue[1]}`);
      console.log(`oldValue-------------${oldValue[1]}`);

      document.title = `${newValue[0]}`;

    })
    return {
      // ref 写法
      // girls,
      // selectGirl,
      // selectFun

      ...toData,

      submitValue,
      submit
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
