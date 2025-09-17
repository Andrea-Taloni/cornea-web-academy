<!-- src/views/surgery/salk/_Results.vue -->
<template>
  <CollapsibleSection
    :title="'Results - SALK Clinical Outcomes'"
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

// All section data from Myerscough et al. study
const sectionData = ref({
  mainTitle: 'Myerscough J, Bovone C, Thomas PBM, Mimouni M, Aljassar F, Padroni S, Busin M.<br/>Sutureless superficial anterior lamellar keratoplasty for recurrent corneal haze after repeat excimer laser surface ablation.<br/>Br J Ophthalmol. 2019;0:1-4.',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['6 Months', '18 Months', '5 Years'],
    showPValue: false,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Mean BSCVA (logMAR)',
            values: ['0.21 ± 0.12', '0.15 ± 0.13', '0.12 ± 0.12'],
          },
          {
            parameter: 'BSCVA ≥20/20',
            values: ['0/10 (0%)', '2/10 (20%)', '3/10 (30%)'],
          },
          {
            parameter: 'BSCVA ≥20/25',
            values: ['4/10 (40%)', '5/10 (50%)', '5/10 (50%)'],
          },
          {
            parameter: 'BSCVA ≥20/40',
            values: ['10/10 (100%)', '9/10 (90%)', '9/10 (90%)'],
          },
          {
            parameter: 'BSCVA ≥20/50',
            values: ['10/10 (100%)', '10/10 (100%)', '10/10 (100%)'],
          },
          {
            parameter: 'Improvement from preop',
            values: ['p=0.0004', 'p=0.0002', 'p=0.0001'],
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Mean Spherical Equivalent',
            values: ['-2.67 ± 3.73D', '-2.46 ± 4.60D', '-2.85 ± 4.85D'],
          },
          {
            parameter: 'Change from preop',
            values: ['p=0.65', 'p=0.82', 'p=0.46'],
          },
          {
            parameter: 'Surgically Induced Astigmatism',
            values: ['2.50 ± 1.04D', '2.05 ± 0.84D', '2.53 ± 1.39D'],
          },
          {
            parameter: 'J0 vector (vs preop)',
            values: ['p=0.31', 'p=0.43', 'p=0.34'],
          },
          {
            parameter: 'J45 vector (vs preop)',
            values: ['p=0.63', 'p=0.27', 'p=0.27'],
          },
        ],
      },
      {
        title: 'Clinical Outcomes',
        colorTheme: 'purple',
        rows: [
          {
            parameter: 'Haze Recurrence',
            values: [{ text: '0%', highlight: true }, { text: '0%', highlight: true }, { text: '0%', highlight: true }],
          },
          {
            parameter: 'Graft Failure',
            values: ['0%', '0%', '0%'],
          },
          {
            parameter: 'Intraoperative Complications',
            values: [{ text: '0%', highlight: true }, '-', '-'],
          },
          {
            parameter: 'Mean preop BSCVA (logMAR)',
            values: ['0.46 ± 0.12', '-', '-'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Study Findings',
      items: [
        'No recurrence of haze in any eye postoperatively over 5 years',
        'BSCVA improved significantly at all postoperative time points',
        'Mean visual acuity improved from 0.46 logMAR to 0.12 logMAR at 5 years (p=0.0001)',
        '30% achieved 20/20, 50% achieved 20/25, 90% achieved 20/40 at 5 years',
        'All patients (100%) achieved 20/50 or better at 5 years',
        'SIA of 2.50±1.04D at 6 months, stable at 5 years (2.53±1.39D)',
        'No significant change in mean spherical equivalent',
        'No significant difference in astigmatism vectors from preoperative values',
        'No intraoperative complications observed',
        'No primary or late graft failure during 5-year follow-up',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Implications',
      description:
        'This study demonstrates that sutureless SALK provides an effective treatment option for patients with recurrent haze after excimer laser treatment. The technique eliminates haze recurrence for at least 5 years and significantly improves BSCVA. Although there is significant surgically induced astigmatism (mean 2.5D), all astigmatism was correctable with spectacles. The absence of any haze recurrence or graft failure over 5 years validates this approach for managing PRK-related corneal haze that has failed PTK treatment.',
    },
  },
  sourceCitation:
    'Data from prospective interventional study at Villa Igea Hospital, Forli, Italy. All procedures performed by single surgeon (M.B.)',
})
</script>
