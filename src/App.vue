<template>
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>

    <button-counter></button-counter>

    <hr>

    <div style="background-color: orange; padding: 5px;">
        This is the root componet
        <ComponetA></ComponetA>
        <ComponetA></ComponetA>
    </div>
</template>

<script setup>
    import ButtonCounter from './ButtonCounter.vue';
    import ComponetA from '@/ComponetA.vue';
</script>

<style scoped></style>
