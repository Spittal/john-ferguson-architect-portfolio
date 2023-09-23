<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  images: {
    image: string;
    description: string;
  }[];
  work?: boolean;
}>();

const imagesWithSrc = props.images.map(image => {
  return {
    src: new URL('../assets/images/' + image.image, import.meta.url).href,
    ...image,
  }
});

const currentImageIndex = ref(0);
const currentImage = computed(() => {
  return imagesWithSrc[currentImageIndex.value];
});

function nextImage () {
  if (currentImageIndex.value === props.images.length - 1) {
    currentImageIndex.value = 0;
  } else {
    currentImageIndex.value++;
  }
}

function previousImage () {
  if (currentImageIndex.value === 0) {
    currentImageIndex.value = props.images.length - 1;
  } else {
    currentImageIndex.value--;
  }
}

const expanded = ref(false);
function toggleExpand () {
  expanded.value = !expanded.value;
}
</script>

<template>
  <div class="image-container">
    <img :src="currentImage.src" :alt="currentImage.description" @click="toggleExpand">
    <div class="left-side" :class="{'expandable': work}" @click="previousImage" />
    <div class="right-side" :class="{'expandable': work}" @click="nextImage" />
    <div class="counter" v-if="work">{{ currentImageIndex + 1 }}/{{ images.length }}</div>
  </div>

  <Transition>
    <div class="full-screen-image" v-if="expanded">
      <img :src="currentImage.src" :alt="currentImage.description" @click="toggleExpand">
      <div class="left-side" :class="{'expandable': work}" @click="previousImage" />
      <div class="right-side" :class="{'expandable': work}" @click="nextImage" />
    </div>
  </Transition>
</template>

<style scoped lang="postcss">
.image-container {
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
    cursor: var(--cursor-expand);
  }
}

.full-screen-image {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: var(--spacing-md);

  & img {
    width: 100%;
    cursor: var(--cursor-expand);
  }
}

.left-side {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  cursor: var(--cursor-left);
}

.right-side {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  cursor: var(--cursor-right);
}

@media (min-width: 1000px) {
  .expandable {
    width: 33%;
  }
}

.counter {
  font-size: 2rem;
  text-align: center;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
