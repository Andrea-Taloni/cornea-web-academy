<!-- src/views/surgery/dsaek/_Results.vue -->
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

// All section data with updated research findings
const sectionData = ref({
  mainTitle: 'DSAEK Clinical Outcomes: Contemporary Data',
  mainTable: {
    parameterColumnTitle: 'Outcome Measure',
    comparisonColumns: ['Standard DSAEK', 'UT-DSAEK (<100μm)', 'DMEK (Reference)'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'BCVA ≥20/20',
            values: ['21%', { text: '48.8%', highlight: true }, '44%'],
            pValue: '<0.001',
          },
          {
            parameter: 'BCVA ≥20/25',
            values: ['55%', { text: '74%', highlight: true }, '79%'],
            pValue: '<0.001',
          },
          {
            parameter: 'BCVA ≥20/40',
            values: ['85%', '94%', '96%'],
            pValue: '0.72',
          },
          {
            parameter: 'Mean logMAR (1 year)',
            values: ['0.12 ± 0.13', { text: '0.08 ± 0.11', highlight: true }, '0.04 ± 0.10'],
            pValue: '<0.001',
          },
          {
            parameter: 'Time to stable vision',
            values: ['12.4 months', { text: '6-8 months', highlight: true }, '2-3 months'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Graft Survival & Endothelial Cell Density',
        colorTheme: 'green',
        rows: [
          {
            parameter: '5-year survival',
            values: ['90-93%', { text: '95%', highlight: true }, '93-95%'],
            pValue: '0.09',
          },
          {
            parameter: '10-year survival',
            values: [{ text: '73%', highlight: false }, 'No data yet', '80%'],
            pValue: '0.02',
          },
          {
            parameter: 'ECD at 10 years >1000/mm²',
            values: [{ text: '8%', highlight: false }, 'No data yet', '12%'],
            pValue: '-',
          },
          {
            parameter: 'Annual ECD loss (after 1yr)',
            values: ['2-5%', '2-4%', '3-5%'],
            pValue: '0.41',
          },
        ],
      },
      {
        title: 'Complications',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Overall complication rate',
            values: [{ text: '25.2%', highlight: true }, '28%', '57.3%'],
            pValue: '<0.001',
          },
          {
            parameter: 'Rebubbling rate',
            values: [{ text: '9.1-16.2%', highlight: true }, '12%', '33.7%'],
            pValue: '<0.001',
          },
          {
            parameter: 'Primary graft failure',
            values: ['0.86%', '1.2%', '1.4%'],
            pValue: '0.35',
          },
          {
            parameter: 'Rejection episodes',
            values: ['5-10%', { text: '3-7%', highlight: true }, '0.7-2%'],
            pValue: '<0.001',
          },
          {
            parameter: 'IOP elevation',
            values: ['28.8-54%', '35%', '15-20%'],
            pValue: '0.02',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'DSAEK Outcomes by Indication',
  secondaryTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['FECD', 'PBK', 'Failed Graft', 'Pediatric CHED'],
    showPValue: false,
    headerColorTheme: 'orange',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: '5-year survival',
            values: [{ text: '95%', highlight: true }, '76%', '71%', '77.7% (7-year)'],
          },
          {
            parameter: 'BCVA ≥20/40',
            values: [{ text: '95%', highlight: true }, '85%', '80%', '61.5%'],
          },
          {
            parameter: 'Time to best vision',
            values: ['3 months', '6 months', '6-9 months', '12 months'],
          },
          {
            parameter: 'Rebubbling rate',
            values: ['8%', '12%', { text: '20%', highlight: false }, '15%'],
          },
          {
            parameter: 'Special considerations',
            values: [
              'Best outcomes',
              'May need IOL work',
              'Higher failure risk',
              'Amblyopia management',
            ],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Clinical Findings',
      items: [
        '**Visual Recovery**: Median 12.4 months to achieve ≥6/12 Snellen with 83% probability of maintaining at 5 years',
        '**UT-DSAEK Revolution**: 48.8% achieve 20/20 vision with <100μm grafts, approaching DMEK outcomes',
        '**Safety Profile**: 25.2% complication rate vs 57.3% for DMEK, with 3x lower rebubbling rates',
        '**Long-term Concerns**: Only 8% maintain >1000 cells/mm² at 10 years, highlighting need for improved protocols',
        '',
        '**Quality of Life**: No significant difference vs DMEK when controlling for visual acuity (NEI-VFQ 76.1 vs 84.2, p=0.440)',
        '**Cost-Effectiveness**: $877 savings vs PKP over 5 years with 0.68 additional QALYs gained',
        '',
        '**Optimal Candidates**:',
        'FECD with central guttae and mild edema',
        'Complex anterior segments unsuitable for DMEK',
        'Patients prioritizing safety over maximal vision',
        'Pediatric cases requiring faster rehabilitation',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        'Modern DSAEK, particularly ultrathin variants, has evolved to offer visual outcomes approaching DMEK while maintaining superior safety profiles. The technique remains invaluable for complex cases, with innovations in graft preparation and insertion devices continuing to improve outcomes. While long-term endothelial cell loss remains concerning, ongoing refinements in donor selection (avoiding diabetic donors), surgical technique (complete Descemet stripping, optimal graft thickness), and postoperative protocols (intensive steroid therapy, optimized positioning) continue to enhance results. The emergence of NT-DSAEK with sub-50μm grafts may further narrow the gap with DMEK outcomes.',
    },
  },
  sourceCitation:
    'Data from: German Registry 10-year outcomes (2025); UT-DSAEK meta-analysis Eye 2023; Cornea Preservation Time Study; DSAEK vs DMEK systematic reviews 2018-2024',
})
</script>
