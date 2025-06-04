<!-- src/views/surgery/dalk/_Outcomes.vue -->
<template>
  <CollapsibleSection
    :title="outcomesMetadata.title"
    :iconPath="outcomesMetadata.iconPath"
    :colorTheme="outcomesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="outcomesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <OutcomesSection
      :mainTitle="sectionData.mainTitle"
      :mainTable="sectionData.mainTable"
      :secondaryTitle="sectionData.secondaryTitle"
      :secondaryTable="sectionData.secondaryTable"
      :keySummary="sectionData.keySummary"
      :sourceCitation="sectionData.sourceCitation"
    />
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import OutcomesSection, { outcomesMetadata } from '@/components/surgery/ResultsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// All section data
const sectionData = ref({
  mainTitle: 'Conventional vs Large-Diameter DALK Outcomes',
  mainTable: {
    parameterColumnTitle: 'Outcome Parameter',
    comparisonColumns: [
      'Conventional DALK<br/>(8.0-8.5 mm)',
      'Large-Diameter DALK<br/>(9 mm/6 mm OZ)',
    ],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
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
    ],
  },
  secondaryTitle: 'Long-term Graft Survival: DALK vs Penetrating Keratoplasty',
  secondaryTable: {
    parameterColumnTitle: 'Time Point',
    comparisonColumns: ['PK (Historical Control)', 'DALK'],
    showPValue: true,
    headerColorTheme: 'orange',
    alternateRowColors: true,
    dataSections: [
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
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Findings',
      items: [
        'Superior visual outcomes with 44% achieving 20/20 vision',
        '89% of patients maintain astigmatism below 4.5 D',
        'Zero conversion to PK in large-diameter technique',
        'Significantly better long-term graft survival than PK',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Impact',
      description:
        'Large-diameter DALK with limited central stromal clearance demonstrates statistically significant improvements across all major outcome measures. The technique offers superior visual acuity, lower astigmatism, and excellent long-term survival rates, providing compelling evidence for its adoption as the standard of care for anterior corneal pathology with healthy endothelium.',
    },
  },
  sourceCitation:
    'Data compiled from: Yu et al. Taiwan J Ophthalmol 2024; Busin et al. Ophthalmology 2017; Lucisano et al. Cornea 2023; comparative studies and long-term follow-up data',
})
</script>
