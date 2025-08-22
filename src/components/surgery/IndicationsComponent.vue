<!-- src/components/surgery/IndicationsSection.vue -->
<template>
  <!-- Key Requirements at the top -->
  <div v-if="keyRequirements" class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
    <div class="flex items-center space-x-6 text-sm">
      <span class="font-semibold text-green-900">Key Requirements:</span>
      <span v-for="(req, index) in keyRequirements" :key="index" class="text-green-800">
        • <span v-html="processBoldText(req)"></span>
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
            <span v-html="processBoldText(indication.title)"></span>
            <span v-if="indication.subtitle" class="text-sm font-normal text-gray-600">
              {{ indication.subtitle }}
            </span>
          </h4>
          <p class="text-sm text-gray-600 mt-1" v-html="processBoldText(indication.description)"></p>
        </div>
      </div>
    </div>

    <!-- Contraindications -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
      <h3
        class="text-xl font-bold p-4 bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200 text-red-900"
      >
        Contraindications
      </h3>
      <div class="p-5 space-y-4">
        <div v-for="(item, index) in contraindications.absolute" :key="index" class="pl-4 py-2">
          <h4 class="font-bold text-base text-gray-800">
            <span v-html="processBoldText(item.title || item.text || item)"></span>
          </h4>
          <p v-if="item.description" class="text-sm text-gray-600 mt-1" v-html="processBoldText(item.description)"></p>
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
import { processBoldText } from '@/utils/textFormatting'

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
      return 'absolute' in value
    },
  },
})

// Helper function to format contraindications with possible subtitles
const formatContraindication = (item) => {
  if (typeof item === 'string') {
    return processBoldText(item)
  }
  if (item.text && item.subtitle) {
    return `${processBoldText(item.text)}<br /><span class="text-xs text-gray-500">${processBoldText(item.subtitle)}</span>`
  }
  return processBoldText(item.text || item)
}
</script>
