<!-- src/views/surgery/mushroompk/_Results.vue -->
<template>
  <CollapsibleSection
    :title="t('surgery.mushroomPk.results.title')"
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

// All section data - From Myerscough et al. Am J Ophthalmol 2020
const sectionData = computed(() => ({
  mainTitle: `<div style="font-size: 0.9rem; line-height: 1.4;"><div>Myerscough J, Bovone C, Scorcia V, Ricci-Filipovic B, Moramarco A, Fontana L, Busin M.</div><div style="margin-top: 4px;">The role of microkeratome-assisted anterior lamellar keratoplasty in the management of keratoconus: a multicenter study.</div><div style="margin-top: 4px;">Am J Ophthalmol. 2020;220:82-90. [2]</div></div>`,
  mainTable: {
    parameterColumnTitle: 'Parameter',
    comparisonColumns: ['Successful DALK', 'Mushroom PK<br/>(Converted from DALK)'],
    showPValue: true,
    headerColorTheme: 'purple',
    alternateRowColors: false,
    dataSections: [
      {
        title: t('surgery.mushroomPk.results.studyPopulation.title'),
        colorTheme: 'gray',
        rows: [
          {
            parameter: t('surgery.mushroomPk.results.studyPopulation.totalProcedures'),
            values: ['416 DALK attempts', '68 conversions (16.4%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.mushroomPk.results.studyPopulation.eyesIncluded'),
            values: ['348 eyes', '68 eyes'],
            pValue: '-',
          },
          {
            parameter: t('surgery.mushroomPk.results.studyPopulation.meanFollowUp'),
            values: ['49 ± 21', '41 ± 22'],
            pValue: '0.005',
          },
        ],
      },
      {
        title: t('surgery.mushroomPk.results.visualOutcomes.title'),
        colorTheme: 'blue',
        rows: [
          {
            parameter: t('surgery.mushroomPk.results.visualOutcomes.meanBCVA1Year'),
            values: ['0.23 ± 0.21', '0.24 ± 0.16'],
            pValue: '0.84',
          },
          {
            parameter: t('surgery.mushroomPk.results.visualOutcomes.meanBCVA2Years'),
            values: ['0.17 ± 0.13', '0.20 ± 0.16'],
            pValue: '0.21',
          },
          {
            parameter: t('surgery.mushroomPk.results.visualOutcomes.meanBCVA5Years'),
            values: ['0.09 ± 0.11', '0.09 ± 0.15'],
            pValue: '0.88',
          },
          {
            parameter: t('surgery.mushroomPk.results.visualOutcomes.eyes2040'),
            values: ['96.23%', '95.85%'],
            pValue: '0.67',
          },
        ],
      },
      {
        title: t('surgery.mushroomPk.results.refractiveOutcomes.title'),
        colorTheme: 'green',
        rows: [
          {
            parameter: t('surgery.mushroomPk.results.refractiveOutcomes.astigmatism1Year'),
            values: ['3.36 ± 1.97 D', '4.23 ± 2.42 D'],
            pValue: '0.002',
          },
          {
            parameter: t('surgery.mushroomPk.results.refractiveOutcomes.astigmatism2Years'),
            values: ['2.68 ± 1.59 D', '3.45 ± 2.27 D'],
            pValue: '0.006',
          },
          {
            parameter: t('surgery.mushroomPk.results.refractiveOutcomes.astigmatism5Years'),
            values: ['2.16 ± 1.31 D', '3.02 ± 0.89 D'],
            pValue: '0.042',
          },
          {
            parameter: t('surgery.mushroomPk.results.refractiveOutcomes.eyes4D'),
            values: ['98.26%', '92.65%'],
            pValue: '0.001',
          },
        ],
      },
      {
        title: t('surgery.mushroomPk.results.endothelialAnalysis.title'),
        colorTheme: 'orange',
        rows: [
          {
            parameter: t('surgery.mushroomPk.results.endothelialAnalysis.preoperativeECD'),
            values: ['2688 ± 209', '2685 ± 189'],
            pValue: '0.93',
          },
          {
            parameter: t('surgery.mushroomPk.results.endothelialAnalysis.ecd1Year'),
            values: ['2160 ± 331', '1785 ± 375'],
            pValue: '<0.001',
          },
          {
            parameter: t('surgery.mushroomPk.results.endothelialAnalysis.ecd2Years'),
            values: ['1908 ± 370', '1444 ± 364'],
            pValue: '<0.001',
          },
          {
            parameter: t('surgery.mushroomPk.results.endothelialAnalysis.ecd5Years'),
            values: ['1587 ± 312', '1166 ± 321'],
            pValue: '<0.001',
          },
          {
            parameter: t('surgery.mushroomPk.results.endothelialAnalysis.cellLoss5Years'),
            values: ['40.97%', '56.61%'],
            pValue: '<0.001',
          },
        ],
      },
      {
        title: t('surgery.mushroomPk.results.graftSurvival.title'),
        colorTheme: 'red',
        rows: [
          {
            parameter: t('surgery.mushroomPk.results.graftSurvival.survival1Year'),
            values: ['100%', '100%'],
            pValue: '1.0',
          },
          {
            parameter: t('surgery.mushroomPk.results.graftSurvival.survival2Years'),
            values: ['100%', '98.53%'],
            pValue: '0.04',
          },
          {
            parameter: t('surgery.mushroomPk.results.graftSurvival.survival5Years'),
            values: ['99.42%', '94.12%'],
            pValue: '<0.001',
          },
          {
            parameter: t('surgery.mushroomPk.results.graftSurvival.graftFailures'),
            values: ['2 eyes (0.57%)', '4 eyes (5.88%)'],
            pValue: '0.002',
          },
          {
            parameter: t('surgery.mushroomPk.results.graftSurvival.rejectionEpisodes'),
            values: ['0 eyes', '4 eyes (5.88%)'],
            pValue: '<0.001',
          },
        ],
      },
    ],
  },
  secondaryTitle: t('surgery.mushroomPk.results.complications.title'),
  secondaryTable: {
    parameterColumnTitle: t('surgery.mushroomPk.results.complications.tableHeaders.complication'),
    comparisonColumns: [t('surgery.mushroomPk.results.complications.tableHeaders.dalkGroup'), t('surgery.mushroomPk.results.complications.tableHeaders.mushroomGroup')],
    showPValue: true,
    headerColorTheme: 'red',
    alternateRowColors: true,
    dataSections: [
      {
        rows: [
          {
            parameter: t('surgery.mushroomPk.results.complications.intraoperativePerforation'),
            values: ['-', '68/416 (16.4%)'],
            pValue: '-',
          },
          {
            parameter: t('surgery.mushroomPk.results.complications.postoperativeRejection'),
            values: ['0/348 (0%)', '4/68 (5.88%)'],
            pValue: '<0.001',
          },
          {
            parameter: t('surgery.mushroomPk.results.complications.graftFailureAll'),
            values: ['2/348 (0.57%)', '4/68 (5.88%)'],
            pValue: '0.002',
          },
          {
            parameter: t('surgery.mushroomPk.results.complications.failureDueRejection'),
            values: ['0/348 (0%)', '4/68 (5.88%)'],
            pValue: '<0.001',
          },
          {
            parameter: t('surgery.mushroomPk.results.complications.meanTimeFailure'),
            values: ['-', '36 months (range 24-48)'],
            pValue: '-',
          },
        ],
      },
    ],
  },
  keySummary: {
    keyFindings: {
      title: t('surgery.mushroomPk.results.keySummary.title'),
      items: t('surgery.mushroomPk.results.keySummary.findings'),
    },
    clinicalImpact: {
      title: 'Clinical Significance',
      description: t('surgery.mushroomPk.results.keySummary.clinicalSignificance'),
    },
  },
}))
</script>
