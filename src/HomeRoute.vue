<script setup lang="ts">
import ImageCarousel from './components/ImageCarousel.vue';
</script>

<template>
  <div class="home">
    <ImageCarousel :images="[
      {
        image: 'ATTABOTICS_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'BENNETT_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'CAPE_SPLASH.jpg',
        description: 'bulding'
      },
    ]" />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
