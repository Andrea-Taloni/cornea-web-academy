<!-- src/views/surgery/salk/_Results.vue -->
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

// All section data from Busin's research
const sectionData = ref({
  mainTitle: 'Busin\'s SALK Clinical Outcomes',
  mainTable: {
    parameterColumnTitle: 'Time Point',
    comparisonColumns: [
      'Original Series<br/>(n=20)',
      'Post-PK Series<br/>(n=9)',
      '5-Year PRK Haze<br/>(n=10)',
    ],
    showPValue: false,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: 'Visual Acuity Outcomes (BCVA)',
        colorTheme: 'blue',
        rows: [
          {
            parameter: 'Preoperative ≥20/40',
            values: ['5%', '22.2%', 'Not reported'],
          },
          {
            parameter: '1 Month ≥20/40',
            values: [{ text: '100%', highlight: true }, { text: '77.8%', highlight: true }, 'Improved'],
          },
          {
            parameter: '1 Month ≥20/30',
            values: [{ text: '70%', highlight: true }, 'Not reported', 'Significant improvement'],
          },
          {
            parameter: '6 Months ≥20/30',
            values: [{ text: '77.8%', highlight: true }, 'Not reported', 'Sustained'],
          },
          {
            parameter: '12 Months ≥20/30',
            values: [{ text: '76.9%', highlight: true }, { text: '77.8%', highlight: true }, 'Maintained'],
          },
          {
            parameter: 'Final ≥20/25',
            values: ['44.4%', '35%', 'Not specified'],
          },
        ],
      },
      {
        title: 'Refractive Outcomes',
        colorTheme: 'green',
        rows: [
          {
            parameter: 'Postop Astigmatism ≤4D',
            values: [{ text: '100%', highlight: true }, 'Not reported', { text: '100%', highlight: true }],
          },
          {
            parameter: 'Mean Astigmatism Change',
            values: ['Not reported', { text: '-0.7D', highlight: true }, 'Minimal'],
          },
          {
            parameter: 'Refractive Stability',
            values: [{ text: '1 month', highlight: true }, '3 months', '1 month'],
          },
        ],
      },
      {
        title: 'Surgical Outcomes',
        colorTheme: 'purple',
        rows: [
          {
            parameter: 'Technical Success',
            values: [{ text: '100%', highlight: true }, { text: '100%', highlight: true }, { text: '100%', highlight: true }],
          },
          {
            parameter: 'Haze Recurrence',
            values: ['0%', 'N/A', { text: '0%', highlight: true }],
          },
          {
            parameter: 'Graft Clarity',
            values: [{ text: '100%', highlight: true }, { text: '100%', highlight: true }, { text: '100%', highlight: true }],
          },
          {
            parameter: 'Follow-up (months)',
            values: ['12-24', '28±3.9', '60'],
          },
        ],
      },
    ],
  },
  secondaryTitle: 'Busin\'s Technique Evolution: Sutured vs Sutureless SALK',
  secondaryTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['Original Sutured SALK', 'Sutureless SALK'],
    showPValue: false,
    headerColorTheme: 'green',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: 'Suture Technique',
            values: ['16 interrupted or Star of David', 'None - fibrin glue or BCL'],
          },
          {
            parameter: 'Suture Removal',
            values: [{ text: '2-3 days (max 7)', highlight: true }, 'Not applicable'],
          },
          {
            parameter: 'Visual Recovery',
            values: ['1 month', { text: '2-4 weeks', highlight: true }],
          },
          {
            parameter: 'Patient Comfort',
            values: ['Good after suture removal', { text: 'Excellent from day 1', highlight: true }],
          },
          {
            parameter: 'Astigmatism',
            values: ['Minimal if early removal', { text: 'None induced', highlight: true }],
          },
          {
            parameter: 'Best Indication',
            values: ['All SALK cases', { text: 'Post-refractive, selected cases', highlight: true }],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: 'Busin\'s Key Clinical Findings',
      items: [
        '**100% achieve 20/40 or better vision at 1 month** in original series',
        '70-77.8% achieve 20/30 or better (sustained at 1 year)',
        '44.4% achieve 20/25 or better in long-term follow-up',
        'Zero endothelial rejection risk (extraocular procedure)',
        '0% haze recurrence at 5 years for post-PRK cases',
        'Suture removal at 2-3 days critical for outcomes',
        '100% graft clarity maintained throughout all follow-up periods',
      ],
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description:
        'Busin\'s SALK studies demonstrate that this targeted superficial keratoplasty achieves visual outcomes superior to penetrating keratoplasty for anterior pathology, with 100% of patients achieving functional vision (≥20/40) by 1 month. The technique\'s evolution from sutured to sutureless approaches maintains these excellent outcomes while further reducing recovery time. With zero endothelial rejection risk and sustained long-term results, SALK represents a paradigm shift in corneal surgery for superficial pathologies.',
    },
    additionalBoxes: [
      {
        title: 'Indication-Specific Outcomes (Busin Data)',
        colorTheme: 'orange',
        items: [
          '**Corneal dystrophies (60%):** 12/20 eyes, excellent outcomes',
          '**Post-refractive complications (30%):** 6/20 eyes, 0% haze recurrence',
          '**Keratitis scars (10%):** 2/20 eyes, complete visual rehabilitation',
          '**Post-PK opacities:** 77.8% achieve ≥20/40, astigmatism reduced',
        ],
      },
      {
        title: 'Busin\'s Technical Innovations',
        colorTheme: 'teal',
        items: [
          'Standardized microkeratome parameters (130-160 μm)',
          'Extraocular procedure enabling topical anesthesia',
          'Early suture removal protocol (2-3 days maximum 7)',
          'Evolution to completely sutureless technique',
          'Two-stage approach for recurrent dystrophies',
          'Validated triple procedure with phacoemulsification',
        ],
      },
    ],
  },
  sourceCitation:
    'Data from: Busin M et al. Ophthalmology 2005;112(6):987-97; Patel AK et al. Cornea 2012;31(1):101-5; Myerscough J et al. Br J Ophthalmol 2021;105(12):1651-1655; German Ophthalmic Surgeons Meeting 2002',
})
</script>
