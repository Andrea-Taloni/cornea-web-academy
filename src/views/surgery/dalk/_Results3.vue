<!-- src/views/surgery/dalk/_Results3.vue -->
<template>
  <CollapsibleSection
    :title="'Results - DALK vs PK Long-term Comparison'"
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

// DALK vs PK Long-term study data - From Borderie et al. Ophthalmology 2012
const sectionData = ref({
  mainTitle: '<div style="font-size: 0.9rem; line-height: 1.4;"><div>Borderie VM, Sandali O, Bullet J, Gaujoux T, Touzeau O, Laroche L.</div><div style="margin-top: 4px;">Long-term Results of Deep Anterior Lamellar versus Penetrating Keratoplasty.</div><div style="margin-top: 4px;">Ophthalmology. 2012;119(2):249-255.</div></div>',
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: [
      'DALK (n=142)',
      'PK (n=142)',
    ],
    showPValue: true,
    headerColorTheme: 'indigo',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Patient Demographics',
        colorTheme: 'gray',
        rows: [
          {
            parameter: 'Mean Recipient Age',
            values: ['39.0 ± 16.1 years', '39.0 ± 17.4 years'],
            pValue: 'P = 0.99',
          },
          {
            parameter: 'Keratoconus',
            values: ['100 (70.4%)', '100 (70.4%)'],
            pValue: '-',
          },
          {
            parameter: 'Mean Follow-up',
            values: ['42.9 ± 22.9 months', '80.5 ± 50.3 months'],
            pValue: 'P < 0.001',
          },
        ],
      },
      {
        title: 'Endothelial Cell Density Analysis',
        colorTheme: 'blue',
        rows: [
          {
            parameter: '5-year Endothelial Cell Loss',
            values: ['22.3%', '50.1%'],
            pValue: 'P < 0.0001',
          },
          {
            parameter: 'Early Phase Annual Cell Loss',
            values: ['8.3% per year', '15.2% per year'],
            pValue: 'P < 0.001',
          },
          {
            parameter: 'Late Phase Annual Cell Loss',
            values: ['3.9% per year', '7.8% per year'],
            pValue: 'P < 0.001',
          },
        ],
      },
      {
        title: 'Graft Survival Analysis',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Median Predicted Graft Survival',
            values: ['49.0 years', '17.3 years'],
            pValue: 'P < 0.0001',
          },
          {
            parameter: 'Graft Failures (3 years)',
            values: ['3 eyes', '9 eyes'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Visual Acuity Outcomes (Big-Bubble vs Manual vs PK)',
        colorTheme: 'purple',
        rows: [
          {
            parameter: 'BSCVA ≤0.10 (≥20/25) at 12 months',
            values: ['Big-bubble: 35%, Manual: 9%', '27%'],
            pValue: 'P < 0.05',
          },
          {
            parameter: 'BSCVA ≤0.30 (≥20/40) at 12 months',
            values: ['Big-bubble: 87%, Manual: 45%', '72%'],
            pValue: 'P < 0.05',
          },
          {
            parameter: 'BSCVA ≤0.30 (≥20/40) at 36 months',
            values: ['Big-bubble: 97%, Manual: 74%', '85%'],
            pValue: 'P < 0.05',
          },
        ],
      },
      {
        title: 'Corneal Thickness at 12 Months',
        colorTheme: 'teal',
        rows: [
          {
            parameter: 'Central Corneal Thickness',
            values: ['Big-bubble: 523 ± 40 μm, Manual: 562 ± 50 μm', '536 ± 54 μm'],
            pValue: 'P < 0.001',
          },
          {
            parameter: 'Residual Recipient Stroma (Manual)',
            values: ['87 ± 26 μm (range 48-150)', 'N/A'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Postoperative Complications',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Any Complication',
            values: ['27 eyes (19%)', '83 eyes (59%)'],
            pValue: 'P < 0.001',
          },
          {
            parameter: 'Rejection Episodes',
            values: ['17 (12%) - Stromal only', '31 (22%) - Including endothelial'],
            pValue: 'P < 0.05',
          },
          {
            parameter: 'Ocular Hypertension',
            values: ['8 (6%)', '38 (26%)'],
            pValue: 'P < 0.001',
          },
          {
            parameter: 'Double Anterior Chamber',
            values: ['7 (5%)', '0 (0%)'],
            pValue: '-',
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Study Findings',
      items: [
        'Median predicted graft survival: 49 years (DALK) vs 17.3 years (PK)',
        'Endothelial cell loss at 5 years: 22.3% (DALK) vs 50.1% (PK)',
        'Big-bubble technique superior to manual dissection for visual outcomes',
        'Manual dissection visual acuity 1.0-1.8 lines worse than PK',
        'Big-bubble visual acuity 2.2-2.5 lines better than manual dissection',
        'Complication rate: 19% (DALK) vs 59% (PK)',
        'Conversion to PK rate: 9.6% during DALK procedures',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        'This long-term comparative study demonstrates that DALK provides superior endothelial preservation and graft survival compared to PK. The big-bubble technique achieves visual outcomes comparable to PK while maintaining the advantages of DALK. Manual dissection, while providing lower visual acuity, still offers dramatically better long-term graft survival than PK.',
    },
  },
})
</script>