<!-- src/views/surgery/dalk/_Results2.vue -->
<template>
  <CollapsibleSection
    :title="'Results - Conventional DALK Studies'"
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

// Conventional DALK studies comparison data
const sectionData = ref({
  mainTitle: 'Conventional DALK Technique: Comparative Studies',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: [
      'Study Details',
      'Outcomes',
    ],
    showPValue: false,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'BSCVA ≥20/40',
            values: ['Conventional 7-8mm DALK', '70-85% of cases'],
          },
          {
            parameter: 'BSCVA ≥20/20',
            values: ['Conventional 7-8mm DALK', '15-25% of cases'],
          },
          {
            parameter: 'Time to Visual Recovery',
            values: ['Standard techniques', '6-12 months average'],
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Postoperative Astigmatism',
            values: ['Conventional techniques', '4.5-6.0 D average'],
          },
          {
            parameter: 'High Astigmatism (>6D)',
            values: ['Standard 7-8mm diameter', '10-15% of cases'],
          },
        ],
      },
      {
        title: 'Surgical Success Rates',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'Big Bubble Achievement',
            values: ['Standard pneumatic dissection', '60-75% success rate'],
          },
          {
            parameter: 'Conversion to PK',
            values: ['Conventional techniques', '5-15% of cases'],
          },
          {
            parameter: 'Intraoperative Perforation',
            values: ['Standard approach', '10-20% incidence'],
          },
        ],
      },
      {
        title: 'Endothelial Cell Analysis',
        colorTheme: 'teal',
        rows: [
          {
            parameter: 'Cell Loss at 1 Year',
            values: ['Conventional DALK', '12-18% average'],
          },
          {
            parameter: 'Progressive Cell Loss',
            values: ['5-year follow-up', '20-25% cumulative'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Comparative Analysis Summary',
      items: [
        'Conventional DALK shows variable visual outcomes with 70-85% achieving 20/40',
        'Higher astigmatism rates compared to modified techniques (4.5-6.0 D average)',
        'Big bubble success rates lower than large diameter techniques (60-75% vs 83.7%)',
        'Higher conversion to PK rates in conventional approaches (5-15% vs 0%)',
        'Similar endothelial cell loss patterns across different DALK techniques',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Comparison',
      description:
        'Conventional DALK techniques demonstrate good outcomes but with higher variability compared to the 9-mm/6-mm modified approach. The standard techniques show lower big bubble success rates, higher astigmatism, and increased risk of conversion to penetrating keratoplasty.',
    },
  },
})
</script>