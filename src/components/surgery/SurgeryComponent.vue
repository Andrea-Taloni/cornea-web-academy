<!-- src/components/surgery/SurgeryComponent.vue -->
<template>
  <div class="w-full space-y-8">
    <!-- Main Surgical Steps Section -->
    <div v-if="mainSteps" class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-gray-800" v-html="processBoldText(mainSteps.title)"></h3>

      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          v-for="(step, index) in mainSteps.steps"
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
              <h4 class="font-semibold text-base mb-1 text-gray-800" v-html="processBoldText(step.title)"></h4>
              <p class="text-gray-600 text-sm" v-html="processBoldText(step.description)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alternative Techniques Section -->
    <div v-if="alternativeTechniques">
      <h3 class="text-xl font-bold mb-4 text-gray-800" v-html="processBoldText(alternativeTechniques.title || 'Alternative Dissection Strategies')"></h3>
      <div class="grid md:grid-cols-3 gap-3">
        <div
          v-for="(technique, index) in alternativeTechniques.techniques"
          :key="index"
          class="bg-gray-100 p-3 rounded-lg"
        >
          <h4 class="font-semibold text-sm mb-1 text-gray-800" v-html="processBoldText(technique.title)"></h4>
          <p class="text-gray-600 text-xs" v-html="processBoldText(technique.description)"></p>
        </div>
      </div>
    </div>

    <!-- Additional Techniques Sections (if needed) -->
    <div v-for="(section, sectionIndex) in additionalSections" :key="`section-${sectionIndex}`" class="mb-8">
      <h3 class="text-xl font-bold mb-4 text-gray-800" v-html="processBoldText(section.title)"></h3>

      <!-- If section has numbered steps -->
      <div v-if="section.numbered" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <div
          v-for="(item, index) in section.items"
          :key="index"
          class="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <div class="flex items-start space-x-3">
            <div
              :class="getNumberBgClass(section.numberColor)"
              class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <span
                :class="getNumberTextClass(section.numberColor)"
                class="font-bold text-sm"
              >
                {{ index + 1 }}
              </span>
            </div>
            <div class="flex-1">
              <h4 class="font-semibold text-base mb-1 text-gray-800" v-html="processBoldText(item.title)"></h4>
              <p class="text-gray-600 text-sm" v-html="processBoldText(item.description)"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- If section has unnumbered items -->
      <div v-else class="grid md:grid-cols-3 gap-3">
        <div
          v-for="(item, index) in section.items"
          :key="index"
          :class="getItemBgClass(section.bgColor)"
          class="p-3 rounded-lg"
        >
          <h4 class="font-semibold text-sm mb-1 text-gray-800" v-html="processBoldText(item.title)"></h4>
          <p class="text-gray-600 text-xs" v-html="processBoldText(item.description)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Export component metadata for CollapsibleSection
export const techniquesMetadata = {
  title: 'Surgical Technique',
  iconPath: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z',
  colorTheme: 'green',
  defaultExpanded: false,
  maxHeight: '2500px',
}
</script>

<script setup>
import { processBoldText } from '@/utils/textFormatting'

defineProps({
  // Main surgical steps (numbered)
  mainSteps: {
    type: Object,
    default: null,
  },

  // Alternative techniques (unnumbered grid)
  alternativeTechniques: {
    type: Object,
    default: null,
  },

  // Additional sections for flexibility
  additionalSections: {
    type: Array,
    default: () => [],
  }
})

// Helper functions for dynamic classes
const getNumberBgClass = (color) => {
  const colorMap = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    red: 'bg-red-100',
    yellow: 'bg-yellow-100',
    gray: 'bg-gray-100',
  }
  return colorMap[color] || 'bg-blue-100'
}

const getNumberTextClass = (color) => {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    gray: 'text-gray-600',
  }
  return colorMap[color] || 'text-blue-600'
}

const getItemBgClass = (color) => {
  const colorMap = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    red: 'bg-red-100',
    yellow: 'bg-yellow-100',
    gray: 'bg-gray-100',
  }
  return colorMap[color] || 'bg-gray-100'
}
</script>
