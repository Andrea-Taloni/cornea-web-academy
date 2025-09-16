<!-- src/views/surgery/dmek/_Results.vue -->
<template>
  <CollapsibleSection
    :title="'Results - DMEK vs DSAEK (Cochrane Meta-Analysis)'"
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

// Data exclusively from Cochrane Systematic Review 2018 (Stuart et al.)
const sectionData = ref({
  mainTitle: 'Stuart AJ, Romano V, Virgili G, Shortt AJ. Descemet\'s membrane endothelial keratoplasty (DMEK) versus Descemet\'s stripping automated endothelial keratoplasty (DSAEK) for corneal endothelial failure. Cochrane Database Syst Rev. 2018;6:CD012097.',
  mainTable: {
    parameterColumnTitle: 'Outcome Measure',
    comparisonColumns: ['DSAEK', 'DMEK'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Primary Outcome: Visual Acuity',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Mean BCVA at 12 months (logMAR)',
            values: ['0.35 (range 0.20-0.45)', { text: '0.21', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Mean difference in BCVA',
            values: ['Baseline', { text: '-0.14 logMAR better', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: '95% Confidence Interval',
            values: ['-', { text: '-0.18 to -0.10', highlight: true }],
            pValue: '-',
          },
          {
            parameter: 'Severe visual loss (≥1.0 logMAR)',
            values: ['0/72 eyes', '0/72 eyes'],
            pValue: 'NS',
          },
          {
            parameter: 'Number of studies analyzed',
            values: ['4 studies (70 participants, 140 eyes)', 'Same cohort'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Endothelial Cell Count',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Studies with no difference',
            values: ['2 studies', '2 studies'],
            pValue: 'NS',
          },
          {
            parameter: 'Studies favoring DMEK',
            values: ['Baseline', { text: '2 studies showed higher ECC', highlight: true }],
            pValue: '-',
          },
          {
            parameter: 'Heterogeneity',
            values: ['High (I² >75%)', 'High (I² >75%)'],
            pValue: '-',
          },
          {
            parameter: 'Meta-analysis performed',
            values: ['No - due to inconsistency', 'No - due to inconsistency'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Complications',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Graft dislocation rate',
            values: ['1.4% (2/144 eyes)', { text: '7.9% (13/144 eyes)', highlight: false }],
            pValue: '0.01',
          },
          {
            parameter: 'Risk ratio for dislocation',
            values: ['1.0 (baseline)', { text: 'RR 5.40 (95% CI: 1.51-19.27)', highlight: false }],
            pValue: '0.01',
          },
          {
            parameter: 'Primary graft failure',
            values: ['0/72 eyes', '0/72 eyes'],
            pValue: 'NS',
          },
          {
            parameter: 'Graft rejection episodes',
            values: ['1/72 eyes', '0/72 eyes'],
            pValue: 'NS',
          },
          {
            parameter: 'Certainty of evidence',
            values: ['Low to very low', 'Low to very low'],
            pValue: '-',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Study Characteristics from Meta-Analysis',
  secondaryTable: {
    parameterColumnTitle: 'Study',
    comparisonColumns: ['Country', 'Participants', 'Follow-up', 'Key Finding'],
    showPValue: false,
    headerColorTheme: 'orange',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: 'Bhandari 2015',
            values: ['India', '30 participants', '12 months', 'DMEK: -0.13 logMAR better'],
          },
          {
            parameter: 'Goldich 2015',
            values: ['Canada', '17 participants', '6 months', 'DMEK: -0.14 logMAR better'],
          },
          {
            parameter: 'Guerra 2011',
            values: ['USA', '15 participants', '12 months', 'DMEK: -0.18 logMAR better'],
          },
          {
            parameter: 'Maier 2015',
            values: ['Germany', '10 participants', '6-24 months', 'DMEK: -0.29 logMAR better'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Findings from Cochrane Meta-Analysis',
      items: [
        'Low-certainty evidence that DMEK provides better visual acuity than DSAEK (MD -0.14 logMAR, 95% CI -0.18 to -0.10)',
        'The visual difference equals approximately 1-2 lines better vision on a standard eye chart with DMEK',
        'No participants experienced severe visual loss (BCVA ≥1.0 logMAR) with either technique',
        'Endothelial cell count results were inconsistent across studies - no clear superiority',
        'DMEK associated with 5.4 times higher risk of graft dislocation requiring rebubbling (very low-certainty evidence)',
        'Primary graft failure was not observed in any study (144 eyes total)',
        'Only one graft rejection occurred (in DSAEK group) across all studies',
        'All studies used paired design with DSAEK performed before DMEK in same patients',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Implications from Systematic Review',
      description:
        'The Cochrane review found low-certainty evidence that DMEK provides modest visual advantage over DSAEK at the cost of increased graft dislocations. The review included only paired studies where DSAEK preceded DMEK, potentially introducing bias. Despite DMEK\'s visual superiority, DSAEK remains valuable due to lower technical difficulty, reduced dislocation rates, and suitability for complex cases. The certainty of evidence was downgraded due to risk of bias from study design and imprecision in estimates. Further high-quality RCTs comparing these techniques are needed.',
    },
  },
  sourceCitation:
    'Stuart AJ, Romano V, Virgili G, Shortt AJ. Cochrane Database Syst Rev. 2018;6:CD012097. DOI: 10.1002/14651858.CD012097.pub2',
})
</script>
