<template>
    <div style="background-color: lightblue;">
        <h2> This  is Comp B</h2>
        {{ messageFromApp }}
        <button @click="updateMessage">Update Message</button>
    </div>
</template>

<script setup>
import { inject } from 'vue'

let { message: messageFromApp, updateMessage} = inject(
    'msg',
    'Default Message'
)
</script>

<style scoped>

</style>