<template>
    <div>{{ res }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ res: 'guor' })
            }, 2000)
        })
    }
})
</script>