<!-- src/components/surgery/ComplicationsSection.vue -->
<template>
  <div class="w-full">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Intraoperative Complications Box -->
      <div :class="getBoxClass(intraoperativeBox.colorTheme)">
        <h4
          :class="getTitleClass(intraoperativeBox.colorTheme)"
          class="font-bold text-lg mb-4 flex items-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ intraoperativeBox.title }}
        </h4>
        <div class="text-gray-700 space-y-3">
          <div v-for="(complication, index) in intraoperativeBox.complications" :key="index">
            <p class="font-bold text-base" v-html="processBoldText(complication.name)"></p>
            <ul class="text-base pl-4 mt-1">
              <li v-for="(detail, detailIndex) in complication.details" :key="detailIndex">
                • <span v-html="processBoldText(detail.label)"></span>:
                <span v-if="detail.highlight" class="font-bold text-green-600">{{
                  detail.value
                }}</span>
                <span v-else v-html="processBoldText(detail.value)"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Postoperative Complications Box -->
      <div :class="getBoxClass(postoperativeBox.colorTheme)">
        <h4
          :class="getTitleClass(postoperativeBox.colorTheme)"
          class="font-bold text-lg mb-4 flex items-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ postoperativeBox.title }}
        </h4>
        <div class="text-gray-700 space-y-4">
          <div v-for="(section, index) in postoperativeBox.sections" :key="index">
            <p class="font-bold text-base" v-html="processBoldText(section.title)"></p>
            <ul class="text-base pl-4 mt-1 space-y-1">
              <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                • <span v-html="processBoldText(item)"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Export component metadata for CollapsibleSection
export const complicationsMetadata = {
  title: 'Complications',
  iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  colorTheme: 'red',
  defaultExpanded: false,
  maxHeight: '2000px',
}
</script>

<script setup>
import { processBoldText } from '@/utils/textFormatting'

defineProps({
  intraoperativeBox: {
    type: Object,
    required: true,
  },
  postoperativeBox: {
    type: Object,
    required: true,
  },
})

// Helper functions for styling
const getBoxClass = (colorTheme) => {
  const baseClass = 'bg-white p-6 rounded-xl shadow-lg border'
  const borderColors = {
    orange: 'border-orange-200',
    red: 'border-red-200',
    yellow: 'border-yellow-200',
    green: 'border-green-200',
    blue: 'border-blue-200',
    purple: 'border-purple-200',
  }
  return `${baseClass} ${borderColors[colorTheme] || 'border-gray-200'}`
}

const getTitleClass = (colorTheme) => {
  const titleColors = {
    orange: 'text-orange-700',
    red: 'text-red-700',
    yellow: 'text-yellow-700',
    green: 'text-green-700',
    blue: 'text-blue-700',
    purple: 'text-purple-700',
  }
  return titleColors[colorTheme] || 'text-gray-700'
}
</script>
