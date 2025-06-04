<!-- src/components/surgery/AlternativeTechniques.vue -->
<template>
  <div>
    <h3 class="text-xl font-bold mb-4 text-gray-800">{{ title }}</h3>
    <div class="grid md:grid-cols-3 gap-3">
      <div v-for="(technique, index) in techniques" :key="index" class="bg-gray-100 p-3 rounded-lg">
        <h4 class="font-semibold text-sm mb-1 text-gray-800">{{ technique.title }}</h4>
        <p class="text-gray-600 text-xs">{{ technique.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Alternative Dissection Strategies',
  },
  techniques: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (technique) =>
          typeof technique === 'object' && 'title' in technique && 'description' in technique,
      )
    },
  },
})
</script>
