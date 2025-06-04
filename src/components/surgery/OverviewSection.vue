<!-- src/components/surgery/OverviewSection.vue -->
<template>
  <div class="prose max-w-none">
    <!-- Image float right if provided -->
    <div v-if="image" class="float-right ml-8 mb-6 w-full md:w-96 lg:w-[450px]">
      <div class="rounded-lg overflow-hidden shadow-lg bg-white">
        <img :src="image.src" :alt="image.alt" class="w-full h-auto object-contain" />
      </div>
    </div>

    <!-- Overview paragraphs -->
    <p
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      class="text-gray-600 leading-relaxed mb-4 text-base text-justify"
    >
      {{ paragraph }}
    </p>

    <!-- Clear float after text content -->
    <div class="clear-both"></div>
  </div>
</template>

<script>
// Export component metadata for CollapsibleSection
export const overviewMetadata = {
  title: 'Clinical Overview',
  iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  colorTheme: 'sky',
  defaultExpanded: true,
  maxHeight: '3000px',
}
</script>

<script setup>
defineProps({
  image: {
    type: Object,
    default: null,
    // Expected format: { src: 'path/to/image', alt: 'Alt text' }
  },
  paragraphs: {
    type: Array,
    required: true,
    // Array of paragraph strings
  },
})
</script>
