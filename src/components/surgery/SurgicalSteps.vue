<!-- src/components/surgery/SurgicalSteps.vue -->
<template>
  <div class="mb-8">
    <h3 class="text-xl font-bold mb-4 text-gray-800">{{ title }}</h3>

    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
      >
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-sm">{{ index + 1 }}</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">{{ step.title }}</h4>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (step) => typeof step === 'object' && 'title' in step && 'description' in step,
      )
    },
  },
})
</script>
