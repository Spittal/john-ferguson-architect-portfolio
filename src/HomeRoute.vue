<script setup lang="ts">
import ImageCarousel from './components/ImageCarousel.vue';
</script>

<template>
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
</template>

<style scoped></style>
