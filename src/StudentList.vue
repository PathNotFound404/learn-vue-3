<template>
    <div>
        <uL>
            <li v-for="student in list" :key="student.id">
                <slot :stu="student">
                    {{ student.name }}
                </slot>
            </li>
        </uL>
    </div>
</template>

<script setup>
defineProps(['list'])
</script>

<style scoped>

</style>