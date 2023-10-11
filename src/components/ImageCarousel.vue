<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  images: WorkImage[];
  work?: boolean;
}>();

const currentImageIndex = ref(0);
const previousAndNextIndex = computed(() => {
  return {
    previous:  (currentImageIndex.value === 0)
      ? props.images.length - 1
      : currentImageIndex.value - 1,
    next: (currentImageIndex.value === props.images.length - 1)
      ? 0
      : currentImageIndex.value + 1,
  };
});

function getSmallImage (image: string) {
  const urlParts = image.split('.');
  return urlParts[0] + '-sm.' + urlParts[1];
}


function previousImage () {
  resetInterval();
  currentImageIndex.value = previousAndNextIndex.value.previous;
}

function nextImage () {
  resetInterval();
  currentImageIndex.value = previousAndNextIndex.value.next;
}

const expanded = ref(false);
function toggleExpand () {
  expanded.value = !expanded.value;
}

function keydownHandler (event: KeyboardEvent) {
  if (event.code === 'ArrowLeft') previousImage();
  if (event.code === 'ArrowRight') nextImage();
  if (event.code === 'Escape') expanded.value = false;
}

let intervalId: number;
function resetInterval () {
  if (!props.work) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      nextImage();
    }, 3000);
  }
}

onMounted(() => {
  resetInterval();
  window.addEventListener('keydown', keydownHandler);
});

onUnmounted(() => {
  window.removeEventListener('keydown', keydownHandler);
});
</script>

<template>
  <div class="image-carousel">
    <div class="counter" v-if="work">{{ currentImageIndex + 1 }}/{{ images.length }}</div>
    <div class="image-container">
      <template v-for="(image, index) in images" :key="image.image">
        <img style="visibility: hidden;" v-if="previousAndNextIndex.previous === index" :src="getSmallImage(image.image)" :alt="image.description" @click="toggleExpand">
        <Transition>
          <img v-if="currentImageIndex === index" :src="getSmallImage(image.image)" :alt="image.description" @click="toggleExpand">
        </Transition>
        <img style="visibility: hidden;" v-if="previousAndNextIndex.next === index" :src="getSmallImage(image.image)" :alt="image.description" @click="toggleExpand">
      </template>
      <div class="left-side" :class="{'expandable': work}" @click="previousImage" />
      <div class="right-side" :class="{'expandable': work}" @click="nextImage" />
    </div>
  </div>

  <Transition>
    <div class="full-screen-image" v-if="expanded">
      <div class="background-screen" @click="toggleExpand"></div>
      <div class="image-container">
        <template v-for="(image, index) in images" :key="image.image">
        <img style="visibility: hidden;" v-if="previousAndNextIndex.previous === index" :src="image.image" :alt="image.description" @click="toggleExpand">
        <Transition>
          <img v-if="currentImageIndex === index" :src="image.image" :alt="image.description" @click="toggleExpand">
        </Transition>
        <img style="visibility: hidden;" v-if="previousAndNextIndex.next === index" :src="image.image" :alt="image.description" @click="toggleExpand">
      </template>

        <div class="left-side" :class="{'expandable': work}" @click="previousImage" />
        <div class="right-side" :class="{'expandable': work}" @click="nextImage" />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="postcss">

.image-carousel {
  width: 100%;
  user-select: none;
}
.image-container {
  position: relative;
  width: 100%;
  height: 70vh;
  user-select: none;

  & img {
    user-select: none;
    position: absolute;
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    left: 50%;
    transform: translateX(-50%);
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
  right: 0;
  padding: var(--spacing-md);

  & .background-screen {
    background-color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: var(--cursor-contract);
  }

  & .image-container {
    position: relative;
    display: inline-block;
    height: 90vh;

    & img {
      width: 100%;
      max-height: 90vh;
      cursor: var(--cursor-contract);
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

.counter {
  margin-bottom: var(--spacing-sm);
  text-align: center;
}

@media (min-width: 1000px) {
  .expandable {
    width: 33%;
  }
}


.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
