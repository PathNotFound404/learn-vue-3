<template>
    <h1>Message: {{ message }}</h1>
    <div style="background-color: orange; padding-left: 10px;">
        <ComponentA></ComponentA>
    </div>
</template>

<script setup>
import ComponentA from './ComponentA.vue';
import { ref, provide, readonly } from 'vue'

let message = ref('Hello Provide/Inject')

function updateMessage() {
    message.value = 'Updated!!'
}


provide('msg', { message, updateMessage })

let count = ref(0)
provide('read-only-count', readonly(count))

</script>

<style scoped>

</style>