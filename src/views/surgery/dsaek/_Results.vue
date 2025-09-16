<!-- src/views/surgery/dsaek/_Results.vue -->
<template>
  <CollapsibleSection
    :title="'Results - DSAEK Clinical Outcomes'"
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

// DSAEK-specific outcomes data
const sectionData = ref({
  mainTitle: 'DSAEK Clinical Outcomes and Long-term Results',
  mainTable: {
    parameterColumnTitle: 'Outcome Parameter',
    comparisonColumns: ['Standard DSAEK', 'Ultrathin DSAEK'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Mean BCVA at 6 months',
            values: ['20/40 (0.30 logMAR)', '20/32 (0.20 logMAR)'],
            pValue: '0.02',
          },
          {
            parameter: 'Mean BCVA at 12 months',
            values: ['20/32 (0.20 logMAR)', '20/25 (0.10 logMAR)'],
            pValue: '0.01',
          },
          {
            parameter: 'Achieving 20/20 vision',
            values: ['15-20%', '30-40%'],
            pValue: '<0.01',
          },
          {
            parameter: 'Achieving 20/25 or better',
            values: ['40-50%', '60-75%'],
            pValue: '<0.01',
          },
          {
            parameter: 'Mean graft thickness',
            values: ['130-180 μm', '50-90 μm'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Graft Survival and Endothelial Cell Loss',
        colorTheme: 'green',
        rows: [
          {
            parameter: '5-year graft survival',
            values: ['93-95%', '94-96%'],
            pValue: 'NS',
          },
          {
            parameter: '10-year graft survival',
            values: ['85-90%', 'Limited data'],
            pValue: '-',
          },
          {
            parameter: 'ECC loss at 1 year',
            values: ['30-35%', '25-30%'],
            pValue: '0.04',
          },
          {
            parameter: 'ECC loss at 5 years',
            values: ['45-55%', '40-50%'],
            pValue: '0.03',
          },
          {
            parameter: 'Annual ECC decline after year 1',
            values: ['2.5-3.5%', '2.0-3.0%'],
            pValue: 'NS',
          },
        ],
      },
      {
        title: 'Complications and Re-interventions',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Primary graft failure',
            values: ['1-2%', '0.5-1.5%'],
            pValue: 'NS',
          },
          {
            parameter: 'Graft dislocation requiring rebubbling',
            values: ['2-5%', '3-7%'],
            pValue: 'NS',
          },
          {
            parameter: 'Immunologic rejection rate',
            values: ['5-10% at 5 years', '4-8% at 5 years'],
            pValue: 'NS',
          },
          {
            parameter: 'Interface complications',
            values: ['2-5%', '1-3%'],
            pValue: '0.04',
          },
          {
            parameter: 'Pupillary block',
            values: ['1-2%', '1-2%'],
            pValue: 'NS',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Factors Affecting DSAEK Outcomes',
  secondaryTable: {
    parameterColumnTitle: 'Factor',
    comparisonColumns: ['Impact on Outcomes', 'Clinical Significance'],
    showPValue: false,
    headerColorTheme: 'orange',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: 'Graft thickness <100 μm',
            values: ['Improved BCVA by 1-2 lines', 'Ultrathin DSAEK preferred when feasible'],
          },
          {
            parameter: 'Insertion technique',
            values: ['20-40% ECC loss variation', 'Modern inserters reduce trauma'],
          },
          {
            parameter: 'Donor age >65 years',
            values: ['No significant impact on survival', 'Acceptable for most cases'],
          },
          {
            parameter: 'Fuchs dystrophy indication',
            values: ['Better outcomes vs other causes', 'Most favorable indication'],
          },
          {
            parameter: 'Previous glaucoma surgery',
            values: ['Increased failure risk (2-3x)', 'Requires closer monitoring'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key DSAEK Outcomes Summary',
      items: [
        'DSAEK provides excellent visual rehabilitation with 40-50% achieving 20/25 or better vision',
        'Ultrathin DSAEK (<100 μm) significantly improves visual outcomes compared to standard thickness',
        '5-year graft survival rates exceed 90% in most series',
        'Endothelial cell loss stabilizes after first year at 2-3% annual decline',
        'Graft dislocation rates are low (2-5%) with modern techniques',
        'Primary graft failure remains rare at 1-2% with experienced surgeons',
        'Interface complications are minimized with ultrathin grafts',
        'DSAEK remains excellent option for complex eyes unsuitable for DMEK',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Practice Considerations',
      description:
        'DSAEK has evolved significantly with ultrathin grafts providing visual outcomes approaching DMEK while maintaining technical advantages. The procedure offers predictable outcomes, lower dislocation rates than DMEK, and broader applicability to complex cases including eyes with anterior chamber abnormalities, previous vitrectomy, or glaucoma devices. Long-term survival data demonstrates excellent durability. While DMEK may offer superior visual potential in ideal cases, DSAEK remains the procedure of choice for challenging anatomy and continues to be refined with thinner grafts and improved insertion techniques.',
    },
  },
  sourceCitation:
    'Data compiled from multiple large series including Price MO et al. Ophthalmology 2018, Wacker K et al. Cornea 2016, and Cornea Donor Study 10-year results.',
})
</script>
