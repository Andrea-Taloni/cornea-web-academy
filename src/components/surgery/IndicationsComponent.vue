<!-- src/components/surgery/IndicationsSection.vue -->
<template>
  <!-- Key Requirements at the top -->
  <div v-if="keyRequirements" class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
    <div class="flex items-center space-x-6 text-sm">
      <span class="font-semibold text-green-900">Key Requirements:</span>
      <span v-for="(req, index) in keyRequirements" :key="index" class="text-green-800">
        • {{ req }}
      </span>
    </div>
  </div>

  <div class="grid lg:grid-cols-2 gap-6">
    <!-- Indications -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
      <h3
        class="text-xl font-bold p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 text-blue-900"
      >
        Indications
      </h3>
      <div class="p-5 space-y-4">
        <div v-for="(indication, index) in indications" :key="index" class="pl-4 py-2">
          <h4 class="font-bold text-base text-gray-800">
            {{ indication.title }}
            <span v-if="indication.subtitle" class="text-sm font-normal text-gray-600">
              {{ indication.subtitle }}
            </span>
          </h4>
          <p class="text-sm text-gray-600 mt-1">{{ indication.description }}</p>
        </div>
      </div>
    </div>

    <!-- Contraindications -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <h3
        class="text-xl font-bold p-4 bg-gradient-to-r from-red-100 to-red-200 border-b border-red-200 text-red-900"
      >
        Contraindications
      </h3>
      <div class="grid grid-cols-2">
        <!-- Absolute Contraindications -->
        <div class="p-5 bg-red-50 border-r border-gray-200">
          <h4 class="font-bold text-base text-red-800 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Absolute
          </h4>
          <ul class="text-sm text-gray-700 space-y-2">
            <li
              v-for="(item, index) in contraindications.absolute"
              :key="index"
              class="flex items-start"
            >
              <span class="text-red-700 mr-2 mt-0.5">•</span>
              <span v-html="formatContraindication(item)"></span>
            </li>
          </ul>
        </div>

        <!-- Relative Contraindications -->
        <div class="p-5 bg-orange-50">
          <h4 class="font-bold text-base text-orange-800 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Relative
          </h4>
          <ul class="text-sm text-gray-700 space-y-2">
            <li
              v-for="(item, index) in contraindications.relative"
              :key="index"
              class="flex items-start"
            >
              <span class="text-orange-700 mr-2 mt-0.5">•</span>
              <span v-html="formatContraindication(item)"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Export component metadata for CollapsibleSection
export const indicationsMetadata = {
  title: 'Indications',
  iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  colorTheme: 'blue',
  defaultExpanded: false,
  maxHeight: '2000px',
}
</script>

<script setup>
defineProps({
  keyRequirements: {
    type: Array,
    default: null,
  },
  indications: {
    type: Array,
    required: true,
  },
  contraindications: {
    type: Object,
    required: true,
    validator: (value) => {
      return 'absolute' in value && 'relative' in value
    },
  },
})

// Helper function to format contraindications with possible subtitles
const formatContraindication = (item) => {
  if (typeof item === 'string') {
    return item
  }
  if (item.text && item.subtitle) {
    return `${item.text}<br /><span class="text-xs text-gray-500">${item.subtitle}</span>`
  }
  return item.text || item
}
</script>
