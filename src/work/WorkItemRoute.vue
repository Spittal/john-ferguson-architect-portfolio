<script setup lang="ts">
defineProps<{
  projectId: string;
}>();
</script>

<template>
  <h1>Work Item {{ projectId }}</h1>
</template>

<style scoped></style>
