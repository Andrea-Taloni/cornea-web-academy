<!-- src/views/surgery/dmek/_Results2.vue -->
<template>
  <CollapsibleSection
    :title="'Results - DSAEK vs DMEK vs PK (Comparative Outcomes)'"
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

// Comparative data between DSAEK, DMEK and PK
const sectionData = ref({
  mainTitle: 'Endothelial Keratoplasty versus Penetrating Keratoplasty: Comparative Outcomes',
  mainTable: {
    parameterColumnTitle: 'Outcome Parameter',
    comparisonColumns: ['PK', 'DSAEK', 'DMEK'],
    showPValue: true,
    headerColorTheme: 'indigo',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Mean BCVA at 1 year',
            values: ['20/40 (0.30 logMAR)', '20/32 (0.20 logMAR)', { text: '20/25 (0.10 logMAR)', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Time to best vision',
            values: ['12-18 months', '3-6 months', { text: '1-3 months', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: '≥20/20 vision achieved',
            values: ['20-30%', '20-25%', { text: '40-50%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: '≥20/40 vision achieved',
            values: ['75-80%', '80-85%', { text: '90-95%', highlight: true }],
            pValue: '0.002',
          },
          {
            parameter: 'Refractive predictability',
            values: ['Poor (±3-5D)', 'Good (±1-2D)', { text: 'Excellent (±0.5-1D)', highlight: true }],
            pValue: '<0.001',
          },
        ],
      },
      {
        title: 'Graft Survival and Rejection',
        colorTheme: 'green',
        rows: [
          {
            parameter: '5-year graft survival',
            values: ['73-80%', '93-95%', { text: '95-98%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: '10-year graft survival',
            values: ['64-70%', '85-90%', { text: '90-95% (projected)', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Rejection episodes (5 years)',
            values: ['20-35%', '5-10%', { text: '1-5%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Steroid dependence',
            values: ['Lifelong high-dose', 'Long-term low-dose', { text: 'Minimal/tapered', highlight: true }],
            pValue: '-',
          },
          {
            parameter: 'Endothelial cell loss (1 year)',
            values: ['35-45%', '30-35%', { text: '25-30%', highlight: true }],
            pValue: '0.01',
          },
        ],
      },
      {
        title: 'Surgical and Recovery Characteristics',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'Surgical time',
            values: ['45-60 minutes', '30-45 minutes', '30-45 minutes'],
            pValue: '0.04',
          },
          {
            parameter: 'Wound stability',
            values: ['Poor (360° wound)', { text: 'Excellent (small incision)', highlight: true }, { text: 'Excellent (small incision)', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Visual recovery',
            values: ['12-24 months', '3-6 months', { text: '1-3 months', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Return to activities',
            values: ['3-6 months', '4-6 weeks', { text: '2-4 weeks', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Suture-related issues',
            values: ['Common (100% sutured)', 'Rare (1-2 sutures)', { text: 'None (sutureless)', highlight: true }],
            pValue: '<0.001',
          },
        ],
      },
      {
        title: 'Complications',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Wound dehiscence risk',
            values: ['5-8% lifetime', '<0.1%', { text: '<0.1%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Glaucoma progression',
            values: ['15-25%', '5-10%', { text: '3-8%', highlight: true }],
            pValue: '0.002',
          },
          {
            parameter: 'Cataract formation',
            values: ['30-50%', '10-20%', { text: '5-15%', highlight: true }],
            pValue: '<0.001',
          },
          {
            parameter: 'Graft dislocation',
            values: ['N/A', '2-5%', '8-20%'],
            pValue: '0.01',
          },
          {
            parameter: 'Refractive surprise',
            values: ['Common (3-5D)', 'Uncommon (1-2D)', { text: 'Rare (<1D)', highlight: true }],
            pValue: '<0.001',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Patient Selection Criteria',
  secondaryTable: {
    parameterColumnTitle: 'Clinical Scenario',
    comparisonColumns: ['Preferred Technique', 'Rationale'],
    showPValue: false,
    headerColorTheme: 'teal',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: 'Isolated endothelial dysfunction',
            values: ['DMEK', 'Best visual outcomes, fastest recovery'],
          },
          {
            parameter: 'Complex anterior segment',
            values: ['DSAEK or PK', 'DMEK technically challenging'],
          },
          {
            parameter: 'Previous vitrectomy',
            values: ['DSAEK', 'Lower dislocation risk than DMEK'],
          },
          {
            parameter: 'Aphakia/ACIOL',
            values: ['DSAEK or PK', 'DMEK contraindicated'],
          },
          {
            parameter: 'Stromal scarring + endothelial failure',
            values: ['PK', 'Full-thickness replacement needed'],
          },
          {
            parameter: 'Failed PK with clear graft',
            values: ['DMEK or DSAEK', 'Endothelial replacement only'],
          },
          {
            parameter: 'Pediatric cases',
            values: ['PK or DSAEK', 'DMEK too challenging'],
          },
          {
            parameter: 'Hypotony/severe glaucoma',
            values: ['DSAEK or PK', 'Better structural support'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Key Comparative Findings',
      items: [
        'DMEK provides superior visual outcomes compared to both DSAEK and PK, with 40-50% achieving 20/20 vision',
        'Endothelial keratoplasty techniques (DMEK/DSAEK) show significantly better graft survival than PK at 5 and 10 years',
        'Rejection rates are lowest with DMEK (1-5%), followed by DSAEK (5-10%), then PK (20-35%)',
        'Visual recovery is fastest with DMEK (1-3 months), intermediate with DSAEK (3-6 months), slowest with PK (12-24 months)',
        'PK maintains highest risk of wound-related complications due to 360-degree incision',
        'DMEK has highest graft dislocation rate (8-20%) but best long-term outcomes',
        'DSAEK offers best balance of outcomes and technical ease for complex cases',
        'PK remains necessary for combined stromal and endothelial disease',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Decision Making',
      description:
        'The evolution from PK to selective endothelial replacement has transformed corneal transplantation. DMEK offers superior visual outcomes and faster recovery for isolated endothelial dysfunction in anatomically normal eyes. DSAEK provides excellent results with greater surgical flexibility for complex cases. PK remains essential for full-thickness disease but carries higher long-term risks. Selection between techniques should consider anatomical factors, surgeon experience, and patient visual potential. The trend toward selective tissue replacement has improved outcomes while reducing complications and recovery time.',
    },
  },
  sourceCitation:
    'Comparative data from Cornea Donor Study, EBAA Statistical Reports, and multiple systematic reviews 2018-2024',
})
</script>