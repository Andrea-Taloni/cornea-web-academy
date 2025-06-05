<!-- src/views/surgery/dmek/_Results.vue -->
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
  mainTitle: 'DMEK vs DSAEK: Comparative Clinical Outcomes',
  mainTable: {
    parameterColumnTitle: 'Outcome Parameter',
    comparisonColumns: ['UT-DSAEK', 'DMEK'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes (6 months)',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'BCVA ≥20/20',
            values: ['21%', { text: '44%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'BCVA ≥20/25',
            values: ['55%', { text: '79%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'BCVA ≥20/40',
            values: ['94%', { text: '96%', highlight: true }],
            pValue: '0.72',
          },
          {
            parameter: 'Mean BCVA (logMAR)',
            values: ['0.12 ± 0.13', { text: '0.04 ± 0.10', highlight: true }],
            pValue: '<0.001',
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Hyperopic shift',
            values: ['+0.75 to +1.25 D', { text: '+0.08 ± 0.43 D', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Induced astigmatism',
            values: ['0.5-1.0 D', { text: '<0.5 D', highlight: true }],
            pValue: '0.03',
          },
          {
            parameter: 'Higher-order aberrations',
            values: ['Increased', { text: 'Near normal', highlight: true }],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Endothelial Cell Loss',
        colorTheme: 'orange',
        rows: [
          {
            parameter: '6 months',
            values: ['25-30%', { text: '32-37%', highlight: false }],
            pValue: '0.15',
          },
          {
            parameter: '1 year',
            values: ['30-35%', { text: '35-40%', highlight: false }],
            pValue: '0.28',
          },
          {
            parameter: '5 years',
            values: ['45-50%', { text: '48-53%', highlight: false }],
            pValue: '0.41',
          },
        ],
      },
      {
        title: 'Complications & Graft Survival',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Primary graft failure',
            values: ['0.5-1%', { text: '1.4%', highlight: false }],
            pValue: '0.35',
          },
          {
            parameter: 'Rejection episodes',
            values: ['5-10%', { text: '0.7-2%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Rebubbling rate',
            values: ['2-10%', { text: '20-30%', highlight: false }],
            pValue: '<0.001',
          },
          {
            parameter: '5-year graft survival',
            values: ['90-93%', { text: '93-95%', highlight: true }],
            pValue: '0.09',
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Findings',
      items: [
        '**Superior Visual Outcomes**: DMEK provides significantly better BCVA with 44% achieving 20/20 vs 21% with UT-DSAEK',
        '**Minimal Refractive Change**: Near-zero hyperopic shift compared to +0.75-1.25D with DSAEK',
        '**Lower Rejection Risk**: Immunologic rejection rare at 0.7-2% vs 5-10% with DSAEK',
        '**Higher Rebubbling Rate**: Technical learning curve results in 20-30% rebubbling vs 2-10% with DSAEK',
        '',
        '**Patient Selection Factors**:',
        'Ideal for younger patients with good visual potential',
        "Complex eyes may benefit from DSAEK's easier positioning",
        'Consider surgeon experience in technique selection',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Impact',
      description:
        'DMEK has established itself as the gold standard for endothelial keratoplasty in straightforward cases, offering superior visual outcomes and lower rejection rates. The main trade-off is a steeper learning curve and higher rebubbling rate. With experienced surgeons, DMEK provides the best possible visual rehabilitation for endothelial dysfunction. The minimal induced refractive error makes it particularly suitable for patients with good visual potential and those requiring precise refractive outcomes.',
    },
  },
  sourceCitation:
    'Data from: Chamberlain et al. Ophthalmology 2019; Price et al. Cornea 2020; Woo et al. Am J Ophthalmol 2019; Dunker et al. JAMA Ophthalmol 2020',
})
</script>
