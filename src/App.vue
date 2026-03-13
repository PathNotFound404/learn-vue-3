<template>
    <BaseLayout>
        <template v-slot:header>
            <h1>Here might be a page title</h1>
        </template>
        <template #main>
            <p>
                A paragraph of the main
            </p>
            <p> And another</p>
        </template>
        <template #footer>
            <p> Here is some contact info</p>
        </template>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>
<style scoped></style>
