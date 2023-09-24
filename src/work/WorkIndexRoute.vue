<script setup lang="ts">
import { ref } from 'vue';
import { WorkImage, WorkImageWithSrc, formatImageWithSrc } from '../helpers/image-helper';
import workItems from './work.yml';

function formatIndex (index: number) {
  const nonZeroINdex = index + 1;
  return (nonZeroINdex > 9) ? `${nonZeroINdex}` : `0${nonZeroINdex}`;
}

const background = ref<WorkImageWithSrc>();
function changeBg(image: WorkImage) {
  background.value = formatImageWithSrc(image);
}
</script>

<template>
  <div class="work-items">
    <h2 v-for="(workItem, index) in workItems" :key="workItem.slug">
      <span class="number">{{ formatIndex(index) }}</span>
      <RouterLink
        :to="{name: 'work-item', params: { workSlug: workItem.slug }}"
        @mouseenter="changeBg(workItem.images[0])"
        @mouseleave="background = undefined"
      >
        {{ workItem.name }}
      </RouterLink>
    </h2>
  </div>
  <div v-if="background" class="background-image">
    <img :src="background.src" :alt="background.description">
  </div>
</template>

<style scoped lang="postcss">
.work-items {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--spacing-xs);

  & .number {
    margin-right: var(--spacing-md);
  }
}

.background-image {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  padding: var(--spacing-md);

  & img {
    width: 100%;
    max-height: 80vh;
  }
}
</style>
