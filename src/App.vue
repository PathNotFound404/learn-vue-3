<template>
    <div class="app">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import router from './router';
</script>

<style lang="scss" scoped>
.app {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}
</style>