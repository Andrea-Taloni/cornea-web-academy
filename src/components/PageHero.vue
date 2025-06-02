<!-- src/components/PageHero.vue -->
<template>
  <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-10 md:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{{ title }}</h1>
        <p v-if="subtitle" class="text-lg md:text-xl max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>
