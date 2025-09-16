<!-- src/views/surgery/dalk/_Outcomes.vue -->
<template>
  <CollapsibleSection
    :title="t('surgery.dalk.results.study1.title')"
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import OutcomesSection, { outcomesMetadata } from '@/components/surgery/ResultsComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// All section data - From Busin et al. Ophthalmology 2017
const sectionData = computed(() => ({
  mainTitle: t('surgery.dalk.results.study1.citation'),
  mainTable: {
    parameterColumnTitle: t('surgery.dalk.results.study1.tableHeaders.parameter'),
    comparisonColumns: [
      t('surgery.dalk.results.study1.tableHeaders.preoperative'),
      t('surgery.dalk.results.study1.tableHeaders.postoperative'),
    ],
    showPValue: true,
    headerColorTheme: 'blue',
    alternateRowColors: false,
    dataSections: [
      {
        title: t('surgery.dalk.results.study1.sections.surgicalOutcomes.title'),
        colorTheme: 'orange',
        rows: [
          {
            parameter: t('surgery.dalk.results.study1.sections.surgicalOutcomes.bigBubbleSuccess'),
            values: ['-', '67/80 (83.7%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.surgicalOutcomes.type1Bubble'),
            values: ['-', '66/67 (98.5%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.surgicalOutcomes.averageBubbleDiameter'),
            values: ['-', '7.7 ± 0.8 mm'],
            pValue: '-',
          },
        ],
      },
      {
        title: t('surgery.dalk.results.study1.sections.visualAcuity.title'),
        colorTheme: 'blue',
        rows: [
          {
            parameter: t('surgery.dalk.results.study1.sections.visualAcuity.meanBSCVA'),
            values: ['0.54 ± 0.85', '0.09 ± 0.72'],
            pValue: 'P = 0.001',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.visualAcuity.bscva2020'),
            values: ['-', '28 eyes (35%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.visualAcuity.bscva2025'),
            values: ['-', '54 eyes (67.5%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.visualAcuity.bscva2040'),
            values: ['-', '76 eyes (95%)'],
            pValue: '-',
          },
        ],
      },
      {
        title: t('surgery.dalk.results.study1.sections.refractiveOutcomes.title'),
        colorTheme: 'green',
        rows: [
          {
            parameter: t('surgery.dalk.results.study1.sections.refractiveOutcomes.meanAstigmatism'),
            values: ['7.2 ± 2.5 D', '3.10 ± 1.30 D'],
            pValue: '0.002',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.refractiveOutcomes.astigmatism45'),
            values: ['-', '73 eyes (91%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.refractiveOutcomes.astigmatism6'),
            values: ['-', '0 eyes (0%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.refractiveOutcomes.sphericalEquivalent'),
            values: ['-', '-1.55 ± 3.3 D'],
            pValue: '-',
          },
        ],
      },
      {
        title: t('surgery.dalk.results.study1.sections.anatomicalOutcomes.title'),
        colorTheme: 'purple',
        rows: [
          {
            parameter: t('surgery.dalk.results.study1.sections.anatomicalOutcomes.centralCornealThickness'),
            values: ['-', '492 ± 62.10 μm'],
            pValue: '-',
          },
        ],
      },
      {
        title: t('surgery.dalk.results.study1.sections.endothelialAnalysis.title'),
        colorTheme: 'teal',
        rows: [
          {
            parameter: t('surgery.dalk.results.study1.sections.endothelialAnalysis.endothelialCellDensity'),
            values: ['-', '2026 ± 397 cells/mm²'],
            pValue: '-',
          },
          {
            parameter: t('surgery.dalk.results.study1.sections.endothelialAnalysis.meanCellLoss'),
            values: ['-', '11.2%'],
            pValue: '-',
          },
        ],
      },
    ],
  },
  secondaryTitle: t('surgery.dalk.results.study1.complications.title'),
  secondaryTable: {
    parameterColumnTitle: t('surgery.dalk.results.study1.complications.tableHeaders.complication'),
    comparisonColumns: [t('surgery.dalk.results.study1.complications.tableHeaders.incidence'), t('surgery.dalk.results.study1.complications.tableHeaders.management')],
    showPValue: false,
    headerColorTheme: 'red',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: t('surgery.dalk.results.study1.complications.items.intraoperativePerforation'),
            values: ['4 eyes (5%)', 'Completed with manual dissection, no PK conversion'],
          },
          {
            parameter: t('surgery.dalk.results.study1.complications.items.lossOfSuction'),
            values: ['1 eye (1.25%)', 'Procedure completed successfully'],
          },
          {
            parameter: t('surgery.dalk.results.study1.complications.items.conversionToPK'),
            values: ['0 eyes (0%)', 'No conversions required'],
          },
          {
            parameter: t('surgery.dalk.results.study1.complications.items.doubleAnteriorChamber'),
            values: ['2 eyes (2.5%)', 'Successfully managed with air injection'],
          },
          {
            parameter: t('surgery.dalk.results.study1.complications.items.stromalRejection'),
            values: ['6 eyes (7.5%)', 'All reversed with topical steroids'],
          },
          {
            parameter: t('surgery.dalk.results.study1.complications.items.inadvertentSutureRemoval'),
            values: ['1 eye', 'Both sutures removed at 3 months, no dehiscence'],
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: t('surgery.dalk.results.study1.keySummary.statisticalAnalysis'),
      items: [
        t('surgery.dalk.results.study1.keySummary.keyFindings.0'),
        t('surgery.dalk.results.study1.keySummary.keyFindings.1'),
        t('surgery.dalk.results.study1.keySummary.keyFindings.2'),
        t('surgery.dalk.results.study1.keySummary.keyFindings.3'),
        t('surgery.dalk.results.study1.keySummary.keyFindings.4'),
        t('surgery.dalk.results.study1.keySummary.keyFindings.5'),
      ],
    },
    clinicalImpact: {
      title: t('surgery.dalk.results.study1.keySummary.clinicalSignificance'),
      description: t('surgery.dalk.results.study1.keySummary.clinicalImpact'),
    },
  },
}))
</script>
