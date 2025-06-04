<!-- src/views/surgery/mushroompk/_Results.vue -->
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
  mainTitle: 'Mushroom PK vs Conventional PK: Clinical Outcomes',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['Conventional PK', 'Mushroom PK'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'BCVA ≥20/40 at 1 year',
            values: ['65-75%', { text: '70-80%', highlight: true }],
            pValue: '0.042',
          },
          {
            parameter: 'BCVA ≥20/25 at 2 years',
            values: ['45-55%', { text: '55-65%', highlight: true }],
            pValue: '0.038',
          },
          {
            parameter: 'Time to best vision',
            values: ['18-24 months', { text: '12-18 months', highlight: true }],
            pValue: '0.021',
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Mean postoperative astigmatism',
            values: ['4.5 ± 2.1 D', { text: '3.0 ± 1.5 D', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Astigmatism >5D',
            values: ['25-30%', { text: '10-15%', highlight: true }],
            pValue: '0.008',
          },
          {
            parameter: 'Suture removal time',
            values: ['12-18 months', { text: '8-12 months', highlight: true }],
            pValue: '0.015',
          },
        ],
      },
      {
        title: 'Complications & Survival',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'Wound dehiscence (traumatic)',
            values: ['2.8-5.5%', { text: '0.5-1.2%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Graft survival at 5 years',
            values: ['85-90%', { text: '90-95%', highlight: true }],
            pValue: '0.065',
          },
          {
            parameter: 'Rejection episodes',
            values: ['15-25%', { text: '15-20%', highlight: false }],
            pValue: '0.234',
          },
          {
            parameter: 'Endothelial cell loss at 5 years',
            values: ['45-55%', { text: '40-50%', highlight: true }],
            pValue: '0.089',
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Advantages of Mushroom PK',
      items: [
        '**Wound Stability**: 75-80% reduction in traumatic dehiscence risk',
        '**Optical Quality**: Larger clear optical zone (8.0-8.5mm vs 7.5-8.0mm)',
        '**Astigmatism**: Average 1.5D less than conventional PK',
        '**Recovery**: Sutures can be removed 4-6 months earlier',
        '',
        '**Best Candidates**:',
        'Pediatric patients (high trauma risk)',
        'Young active adults',
        'Monocular patients requiring maximum safety',
        'Combined procedures (PK + cataract/vitrectomy)',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        'The mushroom configuration represents a significant advancement in penetrating keratoplasty, offering superior biomechanical stability without compromising optical outcomes. The technique is particularly valuable in high-risk scenarios where wound integrity is paramount. While technically more demanding, the improved safety profile and faster rehabilitation justify its adoption, especially in pediatric and trauma-prone populations.',
    },
  },
  sourceCitation:
    'Data compiled from: Busin et al. Cornea 2010-2020; Comparative studies of mushroom vs conventional PK outcomes',
})
</script>
