<!-- src/views/surgery/dalk/_Outcomes.vue -->
<template>
  <CollapsibleSection
    :title="'Results - 9-mm DALK with 6-mm Optical Zone Clearance'"
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

// All section data - From Busin et al. Ophthalmology 2017
const sectionData = ref({
  mainTitle: '<div style="font-size: 0.9rem; line-height: 1.4;"><div>Busin M, Leon P, Nahum Y, Scorcia V.</div><div style="margin-top: 4px;">Large (9 mm) Deep Anterior Lamellar Keratoplasty with Clearance of a 6-mm Optical Zone Optimizes Outcomes of Keratoconus Surgery.</div><div style="margin-top: 4px;">Ophthalmology. 2017;124(7):1072-1080.</div></div>',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: [
      'Preoperative',
      'Postoperative',
    ],
    showPValue: true,
    headerColorTheme: 'blue',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Surgical Technique Outcomes',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'Big Bubble Success Rate',
            values: ['-', '67/80 (83.7%)'],
            pValue: '-',
          },
          {
            parameter: 'Type 1 Bubble',
            values: ['-', '66/67 (98.5%)'],
            pValue: '-',
          },
          {
            parameter: 'Average Bubble Diameter',
            values: ['-', '7.7 ± 0.8 mm'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Visual Acuity Analysis (After Complete Suture Removal)',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Mean BSCVA (logMAR)',
            values: ['0.54 ± 0.85', '0.09 ± 0.72'],
            pValue: 'P = 0.001',
          },
          {
            parameter: 'BSCVA 20/20 or better',
            values: ['-', '28 eyes (35%)'],
            pValue: '-',
          },
          {
            parameter: 'BSCVA 20/25 or better',
            values: ['-', '54 eyes (67.5%)'],
            pValue: '-',
          },
          {
            parameter: 'BSCVA 20/40 or better',
            values: ['-', '76 eyes (95%)'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Refractive Outcomes (After Complete Suture Removal)',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Mean Refractive Astigmatism',
            values: ['7.2 ± 2.5 D', '3.10 ± 1.30 D'],
            pValue: '0.002',
          },
          {
            parameter: 'Astigmatism ≤4.5 D',
            values: ['-', '73 eyes (91%)'],
            pValue: '-',
          },
          {
            parameter: 'Astigmatism >6 D',
            values: ['-', '0 eyes (0%)'],
            pValue: '-',
          },
          {
            parameter: 'Spherical Equivalent',
            values: ['-', '-1.55 ± 3.3 D'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Anatomical Outcomes (After Complete Suture Removal)',
        colorTheme: 'purple',
        rows: [
          {
            parameter: 'Central Corneal Thickness',
            values: ['-', '492 ± 62.10 μm'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Endothelial Cell Analysis (12 Months Postoperative)',
        colorTheme: 'teal',
        rows: [
          {
            parameter: 'Endothelial Cell Density',
            values: ['-', '2026 ± 397 cells/mm²'],
            pValue: '-',
          },
          {
            parameter: 'Mean Cell Loss from Baseline',
            values: ['-', '11.2%'],
            pValue: '-',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Intraoperative and Postoperative Complications',
  secondaryTable: {
    parameterColumnTitle: 'Complication',
    comparisonColumns: ['Incidence', 'Management/Outcome'],
    showPValue: false,
    headerColorTheme: 'red',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: 'Intraoperative Perforation',
            values: ['4 eyes (5%)', 'Completed with manual dissection, no PK conversion'],
          },
          {
            parameter: 'Loss of Suction',
            values: ['1 eye (1.25%)', 'Procedure completed successfully'],
          },
          {
            parameter: 'Conversion to PK',
            values: ['0 eyes (0%)', 'No conversions required'],
          },
          {
            parameter: 'Double Anterior Chamber',
            values: ['2 eyes (2.5%)', 'Successfully managed with air injection'],
          },
          {
            parameter: 'Stromal Rejection',
            values: ['6 eyes (7.5%)', 'All reversed with topical steroids'],
          },
          {
            parameter: 'Inadvertent Suture Removal',
            values: ['1 eye', 'Both sutures removed at 3 months, no dehiscence'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Statistical Analysis Summary',
      items: [
        'Visual acuity improved: 0.54±0.85 to 0.09±0.72 logMAR (P = 0.001)',
        'Refractive astigmatism reduced from 7.2±2.5 D to 3.10±1.30 D',
        '35% achieved 20/20, 67.5% achieved 20/25, 95% achieved 20/40',
        'No significant difference in BSCVA between pneumatic and manual dissection (P = 0.12)',
        'Endothelial cell loss 11.2% at 12 months',
        'Zero conversion to PK (0/80 cases)',
      ],
    },
    clinicalImpact: {
      title: 'Statistical and Clinical Significance',
      description:
        'This prospective study demonstrates statistically significant improvements in all primary outcome measures (P=0.001 for visual acuity, P=0.002 for astigmatism). The 9-mm/6-mm technique shows superior outcomes compared to historical controls while maintaining excellent safety profile. The absence of PK conversion despite intraoperative complications validates the technique\'s reproducibility.',
    },
  },
})
</script>
