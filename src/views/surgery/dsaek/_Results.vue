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

// DSAEK-specific outcomes data from Cornea Donor Study 3-year Results
const sectionData = ref({
  mainTitle: 'Price MO, Gorovoy M, Price FW Jr, Benetz BA, Menegay HJ, Lass JH.<br/>Descemet stripping automated endothelial keratoplasty 3-year graft and endothelial cell survival compared with penetrating keratoplasty.<br/>Ophthalmology. 2013;120(2):246-251.',
  mainTable: {
    parameterColumnTitle: 'Outcome Parameter',
    comparisonColumns: ['DSAEK (n=173)', 'PKP (n=1101)'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: '3-Year Graft Survival',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Overall 3-year survival',
            values: ['94%', '93%'],
            pValue: 'NS',
          },
          {
            parameter: "Fuchs' dystrophy survival",
            values: ['96%', '96%'],
            pValue: '0.81',
          },
          {
            parameter: "Non-Fuchs' cases survival",
            values: ['86%', '84%'],
            pValue: '0.41',
          },
        ],
      },
      {
        title: 'Endothelial Cell Density and Loss',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Baseline ECD (cells/mm²)',
            values: ['2754 (2568-2983)', '2731 (2513-2895)'],
            pValue: '0.049',
          },
          {
            parameter: '1-year ECD (cells/mm²)',
            values: ['1759 (1236-2295)', '2243 (1732-2646)'],
            pValue: '<0.0001',
          },
          {
            parameter: '3-year ECD (cells/mm²)',
            values: ['1447 (947-2125)', '1238 (767-1900)'],
            pValue: '0.11',
          },
          {
            parameter: '1-year cell loss (%)',
            values: ['36% (17-55)', '18% (3-36)'],
            pValue: '<0.0001',
          },
          {
            parameter: '3-year cell loss (%)',
            values: ['48% (26-65)', '53% (27-72)'],
            pValue: '0.17',
          },
          {
            parameter: "3-year cell loss in Fuchs'",
            values: ['46%', '51%'],
            pValue: '0.33',
          },
          {
            parameter: "3-year cell loss in non-Fuchs'",
            values: ['59%', '61%'],
            pValue: '0.70',
          },
        ],
      },
      {
        title: 'Causes of Graft Failure Within 3 Years',
        colorTheme: 'red',
        rows: [
          {
            parameter: 'Primary donor failure',
            values: ['0%', '0.3%'],
            pValue: '-',
          },
          {
            parameter: 'Immunologic rejection',
            values: ['0.6%', '3.1%'],
            pValue: '-',
          },
          {
            parameter: 'Endothelial decompensation',
            values: ['1.7%', '2.1%'],
            pValue: '-',
          },
          {
            parameter: 'Unsatisfactory vision',
            values: ['1.7%', '0%'],
            pValue: '-',
          },
          {
            parameter: 'Infection',
            values: ['0%', '1.1%'],
            pValue: '-',
          },
          {
            parameter: 'Epithelial defects',
            values: ['0%', '0.5%'],
            pValue: '-',
          },
        ],
      },
      {
        title: 'Rejection Episodes',
        colorTheme: 'orange',
        rows: [
          {
            parameter: 'Predicted probability at 3 years',
            values: ['9%', '20%'],
            pValue: '0.0005',
          },
          {
            parameter: 'Total rejection episodes',
            values: ['11 (6.4%)', '220 (20%)'],
            pValue: '<0.001',
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Effect of DSAEK Incision Width on Outcomes',
  secondaryTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['5.0 mm incision', '3.2 mm incision'],
    showPValue: true,
    headerColorTheme: 'teal',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: '3-year cell loss',
            values: ['33%', '60%'],
            pValue: '0.0007',
          },
          {
            parameter: '3-year graft survival',
            values: ['97%', '92%'],
            pValue: '0.45',
          },
          {
            parameter: 'Recommendation',
            values: ['Associated with less cell loss', 'Higher endothelial trauma'],
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
        '3-year graft survival comparable between DSAEK (94%) and PKP (93%)',
        "Excellent outcomes in Fuchs' dystrophy: 96% survival for both procedures",
        'Higher initial cell loss with DSAEK (36% at 1 year) but comparable at 3 years (48% vs 53%)',
        'Significantly lower rejection risk with DSAEK (9% vs 20% at 3 years, P=0.0005)',
        'No primary donor failures observed in DSAEK group',
        'No infections or epithelial defects in DSAEK vs 1.1% and 0.5% in PKP',
        '5 mm incision width associated with significantly less cell loss than 3.2 mm (33% vs 60%)',
        'Study included 173 DSAEK eyes from 2 experienced surgeons vs 1101 PKP eyes from 68 surgeons',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Implications',
      description:
        'This prospective multicenter study demonstrates that DSAEK performed by experienced surgeons achieves 3-year graft survival comparable to PKP with similar long-term endothelial cell loss. DSAEK shows advantages including significantly lower rejection risk, absence of wound-related complications, and the ability to address unsatisfactory vision through regrafting. The study emphasizes the importance of surgical technique, particularly incision width, with 5 mm incisions showing superior endothelial preservation compared to 3.2 mm incisions. These findings support DSAEK as an effective alternative to PKP for endothelial dysfunction.',
    },
  },
  sourceCitation:
    'Data from the Cornea Donor Study and Specular Microscopy Ancillary Study',
})
</script>
