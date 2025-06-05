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
  mainTitle: 'Mushroom PK Clinical Outcomes: Conversion Cases & Primary Indications',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['Conventional PK', 'Mushroom PK<br/>(Converted from DALK)'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Outcomes (5-year)',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Mean BCVA (logMAR)',
            values: ['0.10-0.15', { text: '0.09 ± 0.15', highlight: true }],
            pValue: '0.88',
          },
          {
            parameter: 'BCVA ≥20/40',
            values: ['65-75%', { text: '95.85%', highlight: true }],
            pValue: '0.67',
          },
          {
            parameter: 'BCVA ≥20/25',
            values: ['45-55%', { text: '~60%', highlight: true }],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Mean astigmatism at 5 years',
            values: ['4.5 ± 2.1 D', { text: '3.02 ± 0.89 D', highlight: true }],
            pValue: '0.042',
          },
          {
            parameter: 'Astigmatism ≤4D',
            values: ['70-75%', { text: '92.65%', highlight: true }],
            pValue: '-',
          },
          {
            parameter: 'Astigmatism >8D',
            values: ['5-10%', { text: '1.47%', highlight: true }],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Endothelial Cell Loss',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'ECL at 1 year',
            values: ['20-30%', { text: '33.53%', highlight: false }],
            pValue: '-',
          },
          {
            parameter: 'ECL at 2 years',
            values: ['35-45%', { text: '46.24%', highlight: false }],
            pValue: '-',
          },
          {
            parameter: 'ECL at 5 years',
            values: ['45-55%', { text: '56.61%', highlight: false }],
            pValue: '-',
          },
          {
            parameter: 'Annual ECL rate',
            values: ['~9%', { text: '11.4%', highlight: false }],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Complications & Survival',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Wound dehiscence',
            values: ['2.8-5.5%', { text: '2.94%', highlight: true }],
            pValue: '-',
          },
          {
            parameter: 'Endothelial rejection',
            values: ['10-20%', { text: '5.88%', highlight: true }],
            pValue: '-',
          },
          {
            parameter: 'Graft survival at 5 years',
            values: ['85-90%', { text: '94.12%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'All-cause failure rate',
            values: ['10-15%', { text: '5.88%', highlight: true }],
            pValue: '-',
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Findings from 5-Year Follow-up',
      items: [
        'Excellent visual outcomes with 95.85% achieving 20/40 or better vision',
        'Low astigmatism with 92.65% maintaining ≤4D',
        'Superior graft survival of 94.12% at 5 years',
        'Reduced wound dehiscence risk compared to conventional PK',
        'Lower endothelial rejection rate (5.88%) despite larger anterior diameter',
        '',
        '**Conversion from DALK**:',
        'No significant difference in BCVA compared to successful DALK',
        'Slightly higher astigmatism (~0.86D more) but clinically manageable',
        'Preserves benefit of large 9mm optical zone',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        'The two-piece microkeratome-assisted mushroom PK demonstrates excellent long-term outcomes, particularly when used as a conversion technique from intended DALK. The 9mm/6mm configuration provides optimal balance between visual quality and graft survival. Despite only transplanting 25% of donor endothelium centrally, the preserved peripheral host endothelium provides a reservoir that may contribute to the low endothelial failure rate. These results support mushroom PK as the technique of choice for DALK conversion and selected primary indications.',
    },
  },
  sourceCitation:
    'Data compiled from: Myerscough et al. Am J Ophthalmol 2020; Busin et al. Trans Am Ophthalmol Soc 2015; Comparative studies of mushroom vs conventional PK outcomes',
})
</script>
