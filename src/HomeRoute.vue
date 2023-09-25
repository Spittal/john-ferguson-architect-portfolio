<script setup lang="ts">
import ImageCarousel from './components/ImageCarousel.vue';
</script>

<template>
  <div class="home">
    <ImageCarousel :images="[
      {
        image: 'images/ATTABOTICS_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/BENNETT_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/TOFINO_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/CAPE_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/CAPE_SPLASH 2.jpg',
        description: 'bulding'
      },
      {
        image: 'images/LIVERY_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/CJCA_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/SHOVEL_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/FOREST HOUSE_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/FOOD HUB_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/COLLECTIVE LIVING_SPLASH.jpg',
        description: 'bulding'
      },
      {
        image: 'images/COLLECTIVE LIVING_SPLASH_02.jpg',
        description: 'bulding'
      },
      {
        image: 'images/CAVITY_SPLASH.jpg',
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
