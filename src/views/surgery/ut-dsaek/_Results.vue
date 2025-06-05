<!-- src/views/surgery/ut-dsaek/_Results.vue -->
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
  mainTitle: 'UT-DSAEK Clinical Outcomes: Comparative Analysis',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['Standard DSAEK<br/>(100-200 μm)', 'UT-DSAEK<br/>(50-100 μm)', 'DMEK<br/>(10-15 μm)'],
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
            values: ['21%', { text: '48.8%', highlight: true }, '44-67%'],
            pValue: '<0.001',
          },
          {
            parameter: 'BCVA ≥20/25',
            values: ['55%', { text: '74%', highlight: true }, '79-85%'],
            pValue: '0.003',
          },
          {
            parameter: 'BCVA ≥20/40',
            values: ['85%', { text: '94%', highlight: true }, '96%'],
            pValue: '0.21',
          },
          {
            parameter: 'Time to Best Vision',
            values: ['6-12 months', { text: '3-6 months', highlight: true }, '1-3 months'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Hyperopic Shift',
            values: ['+1.0 to +1.5D', { text: '+0.5 to +0.75D', highlight: true }, 'Minimal'],
            pValue: '<0.001',
          },
          {
            parameter: 'Induced Astigmatism',
            values: ['0.5-1.0D', { text: '0.3-0.5D', highlight: true }, '<0.25D'],
            pValue: '0.02',
          },
          {
            parameter: 'Higher-Order Aberrations',
            values: ['Increased', { text: 'Mildly increased', highlight: true }, 'Minimal'],
            pValue: '0.01',
          },
        ],
      },
      {
        title: 'Surgical Outcomes',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'Rebubbling Rate',
            values: ['9-16%', { text: '12-15%', highlight: false }, '25-35%'],
            pValue: '<0.001',
          },
          {
            parameter: 'Primary Graft Failure',
            values: ['0.8%', '1.2%', '1.4%'],
            pValue: '0.73',
          },
          {
            parameter: 'Surgical Difficulty',
            values: ['Moderate', { text: 'Moderate-High', highlight: false }, 'High'],
            pValue: '-',
          },
          {
            parameter: 'Learning Curve (cases)',
            values: ['15-25', { text: '25-50', highlight: false }, '50-100'],
            pValue: '-',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Long-term Outcomes and Graft Survival',
  secondaryTable: {
    parameterColumnTitle: 'Follow-up Period',
    comparisonColumns: ['UT-DSAEK Outcomes', 'Comparison to Standard DSAEK'],
    showPValue: false,
    headerColorTheme: 'green',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: '1 Year',
            values: [
              { text: '98% graft survival', highlight: true },
              'Similar to standard DSAEK (97%)',
            ],
          },
          {
            parameter: '2 Years',
            values: [
              { text: 'ECD: 1,850 ± 450 cells/mm²', highlight: true },
              '35-40% cell loss (vs 30-35%)',
            ],
          },
          {
            parameter: '5 Years',
            values: [
              { text: '95% graft survival', highlight: true },
              'Superior to standard DSAEK (90-93%)',
            ],
          },
          {
            parameter: 'Annual ECD Loss',
            values: [
              '2-4% after year 1',
              'Similar to standard DSAEK',
            ],
          },
          {
            parameter: 'Rejection Episodes',
            values: [
              { text: '3-7%', highlight: true },
              'Lower than standard DSAEK (5-10%)',
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
        '**Visual Superiority**: UT-DSAEK achieves 2.3x higher rates of 20/20 vision compared to standard DSAEK',
        '**Optimal Thickness**: Grafts 70-90 μm provide best balance of visual outcomes and handling',
        '**Reduced Optical Impact**: 50% less hyperopic shift allows better refractive planning',
        '**Faster Recovery**: Visual rehabilitation 2x faster than standard DSAEK',
        '',
        '**Special Populations**:',
        'Complex anterior segments: 92% success rate',
        'Failed DMEK: 88% successful rescue',
        'Pediatric cases: Better than standard DSAEK outcomes',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        'UT-DSAEK represents the optimal balance between visual outcomes and surgical predictability in endothelial keratoplasty. The technique provides visual results approaching DMEK while maintaining the surgical advantages of DSAEK, including lower detachment rates, easier handling, and applicability to complex cases. The Busin double-pass technique has standardized graft preparation, making ultra-thin grafts reproducibly achievable. For surgeons and patients seeking excellent visual outcomes with acceptable risk profiles, UT-DSAEK offers a compelling alternative to both standard DSAEK and DMEK.',
    },
    additionalBoxes: [
      {
        title: 'Future Directions',
        colorTheme: 'purple',
        description: 'Ongoing innovations include pre-loaded UT-DSAEK grafts, standardized eye bank preparation protocols, and investigation of grafts <50 μm thickness (NT-DSAEK). Artificial intelligence-guided thickness optimization and improved storage media specifically designed for ultra-thin tissue are under development.',
      },
    ],
  },
  sourceCitation:
    'Data from: Busin et al. Ophthalmology 2013; Romano et al. Eye 2023 meta-analysis; Chamberlain et al. DETECT Trial 2019; comparative studies 2013-2024',
})
</script>
