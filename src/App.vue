<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  padding: var(--spacing-md);
}
</style>
