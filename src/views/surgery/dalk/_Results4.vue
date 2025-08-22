<!-- src/views/surgery/dalk/_Results4.vue -->
<template>
  <CollapsibleSection
    :title="'Results - 8.0-mm vs 9.0-mm DALK Comparison'"
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

// Data from Lucisano et al. Cornea 2023 - Abstract only
const sectionData = ref({
  mainTitle: '<div style="font-size: 0.9rem; line-height: 1.4;"><div>Lucisano A, Lionetti G, Yu AC, Giannaccare G, D\'Angelo S, Busin M, Scorcia V.</div><div style="margin-top: 4px;">Outcomes of Conventional 8.0-mm Versus Large 9.0-mm Diameter Deep Anterior Lamellar Keratoplasty for Keratoconus.</div><div style="margin-top: 4px;">Cornea. 2023;42(7):815-820.</div></div>',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: [
      '8.0-mm DALK (n=133)',
      '9.0-mm DALK (n=124)',
    ],
    showPValue: true,
    headerColorTheme: 'teal',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes at 1 Year',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'BSCVA ≥20/40',
            values: ['90%', '93%'],
            pValue: 'P = 0.571',
          },
          {
            parameter: 'BSCVA ≥20/25',
            values: ['59%', '74%'],
            pValue: 'P = 0.03',
          },
          {
            parameter: 'BSCVA ≥20/20',
            values: ['26%', '44%'],
            pValue: 'P = 0.01',
          },
        ],
      },
      {
        title: 'Refractive Outcomes at 1 Year',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Refractive Astigmatism ≤4.0 D',
            values: ['72%', '90%'],
            pValue: 'P = 0.002',
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Findings from Abstract',
      items: [
        'Retrospective comparison of 133 conventional 8.0-mm vs 124 large 9.0-mm DALK cases',
        'BSCVA ≥20/20: 44% (9.0-mm) vs 26% (8.0-mm), P = 0.01',
        'BSCVA ≥20/25: 74% (9.0-mm) vs 59% (8.0-mm), P = 0.03',
        'Refractive astigmatism ≤4.0 D: 90% (9.0-mm) vs 72% (8.0-mm), P = 0.002',
        'No significant difference in BSCVA ≥20/40: 93% vs 90%, P = 0.571',
      ],
    },
    clinicalImpact: {
      title: 'Study Conclusion',
      description:
        'Large 9.0-mm DALK can provide superior visual outcomes at higher levels of Snellen BSCVA and significantly lower degrees of astigmatism without an increased risk of immune rejection and graft failure.',
    },
  },
})
</script>