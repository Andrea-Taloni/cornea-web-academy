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
  mainTitle: 'Visual and Refractive Outcomes: 5-Year Results',
  mainTable: {
    parameterColumnTitle: 'Time Point',
    comparisonColumns: ['Mean BCVA (Snellen)', 'BCVA ≥20/40', 'BCVA ≥20/20'],
    showPValue: false,
    headerColorTheme: 'blue',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: 'Preoperative',
            values: ['20/2224', '0%', '0%'],
          },
          {
            parameter: '6 Months',
            values: ['20/38', '73.8%', '0%'],
          },
          {
            parameter: '1 Year',
            values: ['20/33', '83.1%', '11.9%'],
          },
          {
            parameter: '2 Years',
            values: [{ text: '20/25', highlight: true }, '93.9%', '40.8%'],
          },
          {
            parameter: '3 Years',
            values: ['20/24', '96.9%', '34.4%'],
          },
          {
            parameter: '4 Years',
            values: ['20/22', { text: '100%', highlight: true }, '51.9%'],
          },
          {
            parameter: '5 Years',
            values: [
              '20/22',
              { text: '100%', highlight: true },
              { text: '58.8%', highlight: true },
            ],
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Refractive Outcomes and Graft Survival',
  secondaryTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['6 Months', '1 Year', '5 Years'],
    showPValue: false,
    headerColorTheme: 'green',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Mean Astigmatism (D)',
            values: ['3.90 ± 1.94', '3.50 ± 1.87', { text: '3.92 ± 2.26', highlight: true }],
          },
          {
            parameter: 'Astigmatism ≤4.5 D',
            values: ['56.6%', '73.0%', { text: '81.8%', highlight: true }],
          },
          {
            parameter: 'Regular Topographic Pattern',
            values: ['89.5%', '92.8%', { text: '90.9%', highlight: true }],
          },
        ],
      },
      {
        title: 'Graft Survival & Rejection',
        colorTheme: 'purple',
        rows: [
          {
            parameter: 'Graft Survival (All Eyes)',
            values: ['98.3%', '98.3%', { text: '95.3%', highlight: true }],
          },
          {
            parameter: 'Graft Survival (High-Risk)',
            values: ['96.1%', '96.1%', { text: '93.9%', highlight: true }],
          },
          {
            parameter: 'Rejection Rate (Overall)',
            values: ['1.2%', '1.8%', { text: '<5%', highlight: true }],
          },
          {
            parameter: 'Endothelial Cell Loss',
            values: ['26.9%', '35.3%', { text: '47.8%', highlight: true }],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Findings from 172 Eyes',
      items: [
        '**Visual Outcomes**: 100% achieved ≥20/40, >50% achieved 20/20 by 5 years',
        '**Refractive Stability**: Mean astigmatism <4D throughout follow-up',
        '**Regular Topography**: >90% maintained regular astigmatic patterns',
        '**Endothelial Survival**: Cell loss stabilized at ~40% after 2 years',
        '',
        '**High-Risk Performance** (76 eyes with vascularization):',
        'No significant difference in outcomes vs low-risk eyes',
        'Graft survival 93.9% at 5 years',
        'Rejection rate only 6.8% despite high-risk status',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        "This large series demonstrates that two-piece mushroom PK provides excellent visual outcomes comparable to or better than conventional PK, with remarkably low rejection rates even in high-risk eyes. The technique's preservation of 75% of recipient endothelium appears to confer immunologic advantage, while the stepped wound configuration ensures superior stability without compromising optical quality.",
    },
  },
  sourceCitation:
    'Data from: Busin M, et al. Trans Am Ophthalmol Soc 2015;113:T1[1-22] - 172 consecutive eyes, 5-year follow-up',
})
</script>
