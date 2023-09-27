<script setup lang="ts">
import { ref } from 'vue';
import workItems from './work.yml';

function formatIndex (index: number) {
  const nonZeroINdex = index + 1;
  return (nonZeroINdex > 9) ? `${nonZeroINdex}` : `0${nonZeroINdex}`;
}

function getSmallImage (image: string) {
  const urlParts = image.split('.');
  return urlParts[0] + '-sm.' + urlParts[1];
}

const selectedWork = ref<WorkItem>();
function changeSelectedWork (work: WorkItem) {
  selectedWork.value = work;
}
</script>

<template>
  <div class="work-items">
    <h2 v-for="(workItem, index) in workItems" :key="workItem.slug">
      <span class="number">{{ formatIndex(index) }}</span>
      <RouterLink
        :class="{ '-hover': workItem.slug === selectedWork?.slug }"
        :to="{name: 'work-item', params: { workSlug: workItem.slug }}"
        @mouseenter="changeSelectedWork(workItem)"
      >
        {{ workItem.name }}
      </RouterLink>
    </h2>
  </div>
  <div v-if="selectedWork" class="background-image">
    <img :src="getSmallImage(selectedWork.cover_image.image)" :alt="selectedWork.cover_image.description">
  </div>
</template>

<style scoped lang="postcss">
.work-items {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--spacing-sm);

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
    max-height: 80vh;
  }
}
</style>
