<template>
    <div class="alert">
        ERROR:
        <slot>Default Message</slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.alert {
  background-color: #f0c3c0;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #e7a9a7;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
</style>