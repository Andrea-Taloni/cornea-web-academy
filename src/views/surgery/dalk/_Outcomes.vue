<!-- src/views/surgery/dalk/_Outcomes.vue -->
<template>
  <CollapsibleSection
    title="Evidence-Based Outcomes"
    iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    colorTheme="purple"
    :isExpanded="isExpanded"
    maxHeight="2500px"
    @toggle="$emit('toggle')"
  >
    <div class="max-w-6xl mx-auto">
      <h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">
        Conventional vs Large-Diameter DALK Outcomes
      </h3>

      <!-- Main Outcomes Comparison Table -->
      <ComparisonTable
        parameterColumnTitle="Outcome Parameter"
        :comparisonColumns="mainComparisonColumns"
        :dataSections="mainOutcomesData"
        headerColorTheme="purple"
        :showPValue="true"
      />

      <!-- Long-term Graft Survival Table -->
      <h3 class="text-2xl font-bold mb-6 text-gray-800 text-center mt-8">
        Long-term Graft Survival: DALK vs Penetrating Keratoplasty
      </h3>

      <ComparisonTable
        parameterColumnTitle="Time Point"
        :comparisonColumns="survivalComparisonColumns"
        :dataSections="survivalData"
        headerColorTheme="orange"
        :showPValue="true"
        :alternateRowColors="true"
      />

      <!-- Key Summary -->
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div
          class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
        >
          <h4 class="font-bold text-lg text-blue-900 mb-3">Key Findings</h4>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">•</span>
              Superior visual outcomes with 44% achieving 20/20 vision
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">•</span>
              89% of patients maintain astigmatism below 4.5 D
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">•</span>
              Zero conversion to PK in large-diameter technique
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">•</span>
              Significantly better long-term graft survival than PK
            </li>
          </ul>
        </div>
        <div
          class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
        >
          <h4 class="font-bold text-lg text-green-900 mb-3">Clinical Impact</h4>
          <p class="text-gray-700 text-sm leading-relaxed">
            Large-diameter DALK with limited central stromal clearance demonstrates statistically
            significant improvements across all major outcome measures. The technique offers
            superior visual acuity, lower astigmatism, and excellent long-term survival rates,
            providing compelling evidence for its adoption as the standard of care for anterior
            corneal pathology with healthy endothelium.
          </p>
        </div>
      </div>

      <p class="text-xs text-gray-500 mt-4 text-center italic">
        Data compiled from: Yu et al. Taiwan J Ophthalmol 2024; Busin et al. Ophthalmology 2017;
        Lucisano et al. Cornea 2023; comparative studies and long-term follow-up data
      </p>
    </div>
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComparisonTable from '@/components/surgery/ComparisonTable.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Column headers for main outcomes table
const mainComparisonColumns = ref([
  'Conventional DALK<br/>(8.0-8.5 mm)',
  'Large-Diameter DALK<br/>(9 mm/6 mm OZ)',
])

// Data for main outcomes table
const mainOutcomesData = ref([
  {
    title: 'Surgical Outcomes',
    colorTheme: 'purple',
    rows: [
      {
        parameter: 'Bubble Success Rate',
        values: ['57-81%', { text: 'Up to 85%', highlight: true }],
        pValue: '-',
      },
      {
        parameter: 'Conversion to PK',
        values: ['1.2-27%', { text: '0%', highlight: true }],
        pValue: '-',
      },
    ],
  },
  {
    title: 'Visual Acuity Outcomes',
    colorTheme: 'blue',
    rows: [
      {
        parameter: 'BSCVA ≥20/20',
        values: ['26%', { text: '44%', highlight: true }],
        pValue: '0.01',
      },
      {
        parameter: 'BSCVA ≥20/25',
        values: ['59%', { text: '74%', highlight: true }],
        pValue: '0.03',
      },
      {
        parameter: 'BSCVA ≥20/40',
        values: ['80-95%', { text: '94%', highlight: true }],
        pValue: '-',
      },
    ],
  },
  {
    title: 'Refractive Outcomes',
    colorTheme: 'green',
    rows: [
      {
        parameter: 'Mean Postoperative Astigmatism',
        values: ['Higher baseline', { text: '1.0 D lower', highlight: true }],
        pValue: '-',
      },
      {
        parameter: 'Astigmatism &lt;4.5 D',
        values: ['Not reported', { text: '89%', highlight: true }],
        pValue: '-',
      },
      {
        parameter: 'High Astigmatism (&gt;4.5 D)',
        values: ['~16%', { text: '7%', highlight: true }],
        pValue: '-',
      },
    ],
  },
])

// Column headers for survival table
const survivalComparisonColumns = ref(['PK (Historical Control)', 'DALK'])

// Data for survival table
const survivalData = ref([
  {
    rows: [
      {
        parameter: '1 Year Survival',
        values: ['95.1%', { text: '98.2%', highlight: true }],
        pValue: '0.042',
      },
      {
        parameter: '5 Year Survival',
        values: ['89.2%', { text: '95.3%', highlight: true }],
        pValue: '0.018',
      },
      {
        parameter: '10 Year Survival',
        values: ['73.5%', { text: '90.7%', highlight: true }],
        pValue: '&lt;0.001',
      },
    ],
  },
])
</script>
