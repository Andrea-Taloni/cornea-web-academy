<!-- src/components/surgery/OutcomesSection.vue -->
<template>
  <div class="max-w-6xl mx-auto">
    <!-- Main Title -->
    <h3 v-if="mainTitle" class="text-2xl font-bold mb-6 text-gray-800 text-center">
      {{ mainTitle }}
    </h3>

    <!-- Main Comparison Table -->
    <div v-if="mainTable" class="mb-8">
      <div class="overflow-x-auto">
        <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead>
            <tr :class="getHeaderGradientClass(mainTable.headerColorTheme)">
              <th class="px-6 py-4 text-left text-base font-bold">
                {{ mainTable.parameterColumnTitle }}
              </th>
              <th
                v-for="(column, index) in mainTable.comparisonColumns"
                :key="index"
                class="px-6 py-4 text-center text-base font-bold"
              >
                <span v-html="column"></span>
              </th>
              <th v-if="mainTable.showPValue" class="px-6 py-4 text-center text-base font-bold">
                P-value
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(section, sectionIndex) in mainTable.dataSections" :key="sectionIndex">
              <!-- Section Header -->
              <tr v-if="section.title" :class="getSectionHeaderClass(section.colorTheme)">
                <td
                  :colspan="
                    mainTable.showPValue
                      ? mainTable.comparisonColumns.length + 2
                      : mainTable.comparisonColumns.length + 1
                  "
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
                :class="{
                  'bg-gray-50': rowIndex % 2 === 1 && mainTable.alternateRowColors,
                }"
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
                  v-if="mainTable.showPValue"
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
    </div>

    <!-- Secondary Title -->
    <h3 v-if="secondaryTitle" class="text-2xl font-bold mb-6 text-gray-800 text-center">
      {{ secondaryTitle }}
    </h3>

    <!-- Secondary Comparison Table -->
    <div v-if="secondaryTable" class="mb-8">
      <div class="overflow-x-auto">
        <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead>
            <tr :class="getHeaderGradientClass(secondaryTable.headerColorTheme)">
              <th class="px-6 py-4 text-left text-base font-bold">
                {{ secondaryTable.parameterColumnTitle }}
              </th>
              <th
                v-for="(column, index) in secondaryTable.comparisonColumns"
                :key="index"
                class="px-6 py-4 text-center text-base font-bold"
              >
                <span v-html="column"></span>
              </th>
              <th
                v-if="secondaryTable.showPValue"
                class="px-6 py-4 text-center text-base font-bold"
              >
                P-value
              </th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(section, sectionIndex) in secondaryTable.dataSections"
              :key="sectionIndex"
            >
              <!-- Section Header -->
              <tr v-if="section.title" :class="getSectionHeaderClass(section.colorTheme)">
                <td
                  :colspan="
                    secondaryTable.showPValue
                      ? secondaryTable.comparisonColumns.length + 2
                      : secondaryTable.comparisonColumns.length + 1
                  "
                  class="px-6 py-3 font-bold text-base"
                  :class="getSectionTextClass(section.colorTheme)"
                >
                  <span v-html="section.title"></span>
                </td>
              </tr>
              <!-- Data Rows -->
              <tr
                v-for="(row, rowIndex) in section.rows"
                :key="`secondary-${sectionIndex}-${rowIndex}`"
                class="hover:bg-gray-50 transition-colors"
                :class="{
                  'bg-gray-50': rowIndex % 2 === 1 && secondaryTable.alternateRowColors,
                }"
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
                  v-if="secondaryTable.showPValue"
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
    </div>

    <!-- Key Summary Section -->
    <div v-if="keySummary" class="mt-8 grid md:grid-cols-2 gap-6">
      <!-- Key Findings -->
      <div
        v-if="keySummary.keyFindings"
        class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
      >
        <h4 class="font-bold text-lg text-blue-900 mb-3">{{ keySummary.keyFindings.title }}</h4>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li
            v-for="(finding, index) in keySummary.keyFindings.items"
            :key="index"
            :class="{ 'flex items-start': finding && !finding.startsWith('**') }"
          >
            <span v-if="finding && !finding.startsWith('**')" class="text-blue-600 mr-2">•</span>
            <span
              v-if="finding && finding.startsWith('**') && finding.endsWith('**')"
              class="font-bold"
            >
              {{ finding.slice(2, -2) }}
            </span>
            <span v-else-if="finding">{{ finding }}</span>
            <div v-else class="h-2"></div>
            <!-- Empty line spacer -->
          </li>
        </ul>
      </div>

      <!-- Clinical Impact -->
      <div
        v-if="keySummary.clinicalImpact"
        class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
      >
        <h4 class="font-bold text-lg text-green-900 mb-3">
          {{ keySummary.clinicalImpact.title }}
        </h4>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ keySummary.clinicalImpact.description }}
        </p>
      </div>
    </div>

    <!-- Additional Summary Boxes (if more than 2) -->
    <div
      v-if="keySummary && keySummary.additionalBoxes && keySummary.additionalBoxes.length > 0"
      class="mt-6 grid md:grid-cols-2 gap-6"
    >
      <div
        v-for="(box, index) in keySummary.additionalBoxes"
        :key="index"
        :class="getAdditionalBoxClass(box.colorTheme)"
      >
        <h4 class="font-bold text-lg mb-3" :class="getAdditionalBoxTitleClass(box.colorTheme)">
          {{ box.title }}
        </h4>
        <p v-if="box.description" class="text-gray-700 text-sm leading-relaxed">
          {{ box.description }}
        </p>
        <ul v-if="box.items" class="space-y-2 text-gray-700 text-sm">
          <li
            v-for="(item, itemIndex) in box.items"
            :key="itemIndex"
            :class="{ 'flex items-start': item && !item.startsWith('**') }"
          >
            <span
              v-if="item && !item.startsWith('**')"
              class="mr-2"
              :class="getAdditionalBoxBulletClass(box.colorTheme)"
              >•</span
            >
            <span v-if="item && item.startsWith('**') && item.endsWith('**')" class="font-bold">
              {{ item.slice(2, -2) }}
            </span>
            <span v-else-if="item">{{ item }}</span>
            <div v-else class="h-2"></div>
            <!-- Empty line spacer -->
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer/Source Citation -->
    <p v-if="sourceCitation" class="text-xs text-gray-500 mt-4 text-center italic">
      {{ sourceCitation }}
    </p>
  </div>
</template>

<script>
// Export component metadata for CollapsibleSection
export const outcomesMetadata = {
  title: 'Results',
  iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  colorTheme: 'purple',
  defaultExpanded: false,
  maxHeight: '2500px',
}
</script>

<script setup>
defineProps({
  // Main title at the top
  mainTitle: {
    type: String,
    default: '',
  },

  // Main comparison table configuration
  mainTable: {
    type: Object,
    default: null,
    /* Expected structure:
    {
      parameterColumnTitle: 'Parameter',
      comparisonColumns: ['Column 1', 'Column 2'],
      showPValue: true,
      headerColorTheme: 'purple',
      alternateRowColors: false,
      dataSections: [
        {
          title: 'Section Title',
          colorTheme: 'blue',
          rows: [
            {
              parameter: 'Row Name',
              values: ['Value 1', { text: 'Value 2', highlight: true }],
              pValue: '0.01'
            }
          ]
        }
      ]
    }
    */
  },

  // Secondary title (optional)
  secondaryTitle: {
    type: String,
    default: '',
  },

  // Secondary comparison table (optional)
  secondaryTable: {
    type: Object,
    default: null,
    // Same structure as mainTable
  },

  // Key summary boxes
  keySummary: {
    type: Object,
    default: null,
    /* Expected structure:
    {
      keyFindings: {
        title: 'Key Findings',
        items: ['Finding 1', 'Finding 2']
      },
      clinicalImpact: {
        title: 'Clinical Impact',
        description: 'Description text...'
      },
      additionalBoxes: [
        {
          title: 'Additional Info',
          colorTheme: 'orange',
          description: 'Text...',
          items: ['Item 1', 'Item 2'] // optional, can have description OR items
        }
      ]
    }
    */
  },

  // Source citation at the bottom
  sourceCitation: {
    type: String,
    default: '',
  },
})

// Helper functions for styling
const getHeaderGradientClass = (colorTheme) => {
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
  return gradients[colorTheme] || gradients.purple
}

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

const getAdditionalBoxClass = (colorTheme) => {
  const boxClasses = {
    purple: 'bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200',
    orange: 'bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200',
    teal: 'bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200',
    indigo: 'bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200',
  }
  return boxClasses[colorTheme] || boxClasses.purple
}

const getAdditionalBoxTitleClass = (colorTheme) => {
  const titleClasses = {
    purple: 'text-purple-900',
    orange: 'text-orange-900',
    teal: 'text-teal-900',
    indigo: 'text-indigo-900',
  }
  return titleClasses[colorTheme] || 'text-gray-900'
}

const getAdditionalBoxBulletClass = (colorTheme) => {
  const bulletClasses = {
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    teal: 'text-teal-600',
    indigo: 'text-indigo-600',
  }
  return bulletClasses[colorTheme] || 'text-gray-600'
}
</script>
