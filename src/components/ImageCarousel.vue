<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  images: WorkImage[];
  work?: boolean;
}>();

const currentImageIndex = ref(0);
const currentImage = computed(() => {
  return props.images[currentImageIndex.value];
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
    <img :src="currentImage.image" :alt="currentImage.description" @click="toggleExpand">
    <div class="left-side" :class="{'expandable': work}" @click="previousImage" />
    <div class="right-side" :class="{'expandable': work}" @click="nextImage" />
    <div class="counter" v-if="work">{{ currentImageIndex + 1 }}/{{ images.length }}</div>
  </div>

  <Transition>
    <div class="full-screen-image" v-if="expanded">
      <div class="full-screen-image-container">
        <img :src="currentImage.image" :alt="currentImage.description" @click="toggleExpand">
        <div class="left-side" :class="{'expandable': work}" @click="previousImage" />
        <div class="right-side" :class="{'expandable': work}" @click="nextImage" />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="postcss">
.image-container {
  position: relative;
  display: inline-block;

  & img {
    width: 100%;
    max-height: 75vh;
    object-fit: cover;
    cursor: var(--cursor-expand);
    margin: 0;
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
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: var(--spacing-md);

  & .full-screen-image-container {
    position: relative;
    display: inline-block;

    & img {
      width: 100%;
      max-height: 90vh;
      cursor: var(--cursor-expand);
    }
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
  font-size: var(--font-size-2);
  text-align: center;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
