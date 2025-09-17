<!-- src/views/surgery/ut-dsaek/_Results.vue -->
<template>
  <CollapsibleSection
    :title="'Results - UT-DSAEK Clinical Outcomes'"
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

// All section data from Madi et al. Cornea 2019 study
const sectionData = ref({
  mainTitle: 'Madi S, Leon P, Nahum Y, D\'Angelo S, Giannaccare G, Beltz J, Busin M.<br/>Five-Year Outcomes of Ultrathin Descemet Stripping Automated Endothelial Keratoplasty.<br/>Cornea. 2019;38(9):1192-1197.',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['1 Year', '2 Years', '3 Years', '5 Years'],
    showPValue: false,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Number of eyes',
            values: ['214', '172', '147', '105'],
          },
          {
            parameter: 'BSCVA ≥20/20 (%)',
            values: ['36.3%', '37.4%', '46.4%', '53.4%'],
          },
          {
            parameter: 'BSCVA ≥20/40 (%)',
            values: ['95.5%', '95.3%', '96.0%', '96.6%'],
          },
          {
            parameter: 'Mean LogMAR',
            values: ['0.11 ± 0.13', '0.10 ± 0.12', '0.08 ± 0.13', '0.09 ± 0.14'],
          },
        ],
      },
      {
        title: 'Graft Survival',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Kaplan-Meier survival',
            values: ['99.1%', '96.2%', '94.2%', '94.2%'],
          },
          {
            parameter: 'Cumulative rejection probability',
            values: ['3.4%', '4.3%', '5.0%', '6.9%'],
          },
          {
            parameter: 'Endothelial cell loss',
            values: ['35.4 ± 11.1%', '42.3 ± 18.4%', '43.3 ± 13.9%', '52.3 ± 9.7%'],
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Study Details and Complications',
  secondaryTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['Study Data'],
    showPValue: false,
    headerColorTheme: 'teal',
    alternateRowColors: true,
    dataSections: [
      {
        title: 'Study Demographics (354 eyes, 348 patients)',
        rows: [
          {
            parameter: 'Mean age',
            values: ['69.8 ± 15.5 years (range: 24-90)'],
          },
          {
            parameter: 'Gender distribution',
            values: ['Female: 210 (60.3%), Male: 138 (39.7%)'],
          },
          {
            parameter: 'Primary indication: Fuchs dystrophy',
            values: ['218 eyes (61.6%)'],
          },
          {
            parameter: 'Pseudophakic/aphakic edema',
            values: ['72 eyes (20.3%)'],
          },
          {
            parameter: 'Failed previous graft (EK/PK)',
            values: ['59 eyes (16.7%)'],
          },
        ],
      },
      {
        title: 'Graft and Surgical Characteristics',
        rows: [
          {
            parameter: 'Mean graft thickness achieved',
            values: ['74 ± 35 μm (range: 19-209 μm)'],
          },
          {
            parameter: 'Success rate <100 μm',
            values: ['80% of grafts'],
          },
          {
            parameter: 'Baseline donor ECD',
            values: ['2523 ± 152 cells/mm² (range: 2100-3000)'],
          },
          {
            parameter: 'Surgical technique',
            values: ['Microkeratome double-pass, Busin glide insertion'],
          },
          {
            parameter: 'Incision size',
            values: ['3.2 mm clear corneal'],
          },
        ],
      },
      {
        title: 'Complication Rates',
        rows: [
          {
            parameter: 'Graft detachment requiring rebubbling',
            values: ['3.9% (14/354 eyes)'],
          },
          {
            parameter: 'Primary graft failure',
            values: ['1.4% (5/354 eyes)'],
          },
          {
            parameter: 'Secondary graft failure',
            values: ['2.5% (9/354 eyes)'],
          },
          {
            parameter: 'Cystoid macular edema',
            values: ['4.2% (15/354 eyes)'],
          },
          {
            parameter: 'Immunologic rejection episodes',
            values: ['3.9% (14/354 eyes)'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Study Findings',
      items: [
        'Excellent 5-year visual outcomes with 53.4% achieving ≥20/20 vision',
        '96.6% of eyes achieved ≥20/40 vision at 5 years',
        'Progressive improvement in BSCVA from year 1 to year 5',
        '5-year graft survival rate of 94.2%',
        'Endothelial cell loss of 52.3% at 5 years, comparable to DMEK',
        'Low rejection rate of 6.9% at 5 years',
        'Rebubbling rate of only 3.9% (14/354 eyes)',
        'Primary graft failure rate of 1.4%',
        'No significant change in refractive cylinder postoperatively',
        'Hyperopic shift of 0.22 ± 0.47 D at 5 years (P=0.017)',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Implications',
      description:
        'This study demonstrates that UT-DSAEK with grafts <100 μm provides excellent long-term outcomes comparable to DMEK. The progressive improvement in visual acuity over 5 years, with more than half of patients achieving 20/20 vision, validates the ultrathin approach. The 94.2% graft survival at 5 years and endothelial cell loss comparable to other EK techniques confirm the durability of UT-DSAEK. The low rebubbling rate (3.9%) and manageable rejection episodes make this a reliable technique for endothelial dysfunction.',
    },
  },
  sourceCitation:
    'Data from prospective study of 354 eyes followed for 5 years at Ospedali Privati Forlì, Italy',
})
</script>
