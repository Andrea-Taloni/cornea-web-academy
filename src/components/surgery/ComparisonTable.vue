<!-- src/components/surgery/ComparisonTable.vue -->
<template>
  <div class="overflow-x-auto">
    <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <thead>
        <tr :class="headerGradientClass">
          <th class="px-6 py-4 text-left text-base font-bold">
            {{ parameterColumnTitle }}
          </th>
          <th
            v-for="(column, index) in comparisonColumns"
            :key="index"
            class="px-6 py-4 text-center text-base font-bold"
          >
            <span v-html="column"></span>
          </th>
          <th v-if="showPValue" class="px-6 py-4 text-center text-base font-bold">P-value</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(section, sectionIndex) in dataSections" :key="sectionIndex">
          <!-- Section Header -->
          <tr v-if="section.title" :class="getSectionHeaderClass(section.colorTheme)">
            <td
              :colspan="showPValue ? comparisonColumns.length + 2 : comparisonColumns.length + 1"
              class="px-6 py-3 font-bold text-base"
              :class="getSectionTextClass(section.colorTheme)"
            >
              <span v-html="section.title"></span>
            </td>
          </tr>
          <!-- Data Rows -->
          <tr
            v-for="(row, rowIndex) in section.rows"
            :key="`${sectionIndex}-${rowIndex}`"
            class="hover:bg-gray-50 transition-colors"
            :class="{ 'bg-gray-50': rowIndex % 2 === 1 && alternateRowColors }"
          >
            <td class="px-6 py-3 text-base" v-html="row.parameter"></td>
            <td
              v-for="(value, valueIndex) in row.values"
              :key="valueIndex"
              class="px-6 py-3 text-center"
              :class="{
                'font-bold text-green-600': value.highlight,
                'text-gray-500': value.isPlaceholder,
              }"
            >
              <span v-html="value.text || value"></span>
            </td>
            <td
              v-if="showPValue"
              class="px-6 py-3 text-center"
              :class="{ 'font-medium': row.pValue && row.pValue !== '-' }"
            >
              <span v-html="row.pValue || '-'"></span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Column configuration
  parameterColumnTitle: {
    type: String,
    default: 'Parameter',
  },
  comparisonColumns: {
    type: Array,
    required: true,
    // Example: ['Conventional Technique', 'Advanced Technique']
  },
  showPValue: {
    type: Boolean,
    default: true,
  },

  // Data structure
  dataSections: {
    type: Array,
    required: true,
    /* Example structure:
    [
      {
        title: 'Visual Outcomes', // optional section header
        colorTheme: 'blue', // options: 'purple', 'blue', 'green', 'orange', 'red', 'teal', 'indigo'
        rows: [
          {
            parameter: 'BSCVA ≥20/20',
            values: [
              '26%', // simple string
              { text: '44%', highlight: true }, // object with highlight
              { text: '-', isPlaceholder: true } // placeholder styling
            ],
            pValue: '0.01' // optional if showPValue is true
          }
        ]
      }
    ]
    */
  },

  // Styling options
  headerColorTheme: {
    type: String,
    default: 'purple',
    validator: (value) =>
      ['purple', 'blue', 'green', 'orange', 'red', 'teal', 'indigo', 'gray'].includes(value),
  },
  alternateRowColors: {
    type: Boolean,
    default: false,
  },
})

// Computed gradient classes based on color theme
const headerGradientClass = computed(() => {
  const gradients = {
    purple: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
    blue: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
    green: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white',
    orange: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
    red: 'bg-gradient-to-r from-red-600 to-rose-600 text-white',
    teal: 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white',
    indigo: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
    gray: 'bg-gradient-to-r from-gray-600 to-slate-600 text-white',
  }
  return gradients[props.headerColorTheme] || gradients.purple
})

// Helper functions for section styling
const getSectionHeaderClass = (colorTheme) => {
  const bgColors = {
    purple: 'bg-purple-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    orange: 'bg-orange-50',
    red: 'bg-red-50',
    teal: 'bg-teal-50',
    indigo: 'bg-indigo-50',
    gray: 'bg-gray-50',
  }
  return bgColors[colorTheme] || 'bg-gray-50'
}

const getSectionTextClass = (colorTheme) => {
  const textColors = {
    purple: 'text-purple-900',
    blue: 'text-blue-900',
    green: 'text-green-900',
    orange: 'text-orange-900',
    red: 'text-red-900',
    teal: 'text-teal-900',
    indigo: 'text-indigo-900',
    gray: 'text-gray-900',
  }
  return textColors[colorTheme] || 'text-gray-900'
}
</script>
