<!-- src/views/surgery/dmek/_Complications.vue -->
<template>
  <CollapsibleSection
    :title="complicationsMetadata.title"
    :iconPath="complicationsMetadata.iconPath"
    :colorTheme="complicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="complicationsMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ComplicationsSection
      :intraoperativeBox="complicationsData.intraoperative"
      :postoperativeBox="complicationsData.postoperative"
    />
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComplicationsSection, {
  complicationsMetadata,
} from '@/components/surgery/ComplicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Complications data from Cochrane Meta-Analysis (Stuart et al. 2018)
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications (DMEK vs DSAEK)',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Graft preparation challenges',
        details: [
          { label: 'DMEK tissue tearing', value: '2-5% of cases', highlight: true },
          { label: 'DSAEK preparation failure', value: '<1% of cases' },
          { label: 'Learning curve', value: 'Steeper for DMEK vs DSAEK' },
        ],
      },
      {
        name: 'Graft unfolding difficulties',
        details: [
          { label: 'DMEK unfolding time', value: '5-15 minutes average', highlight: true },
          { label: 'DSAEK unfolding time', value: '2-5 minutes average' },
          { label: 'Conversion to DSAEK', value: '1-3% of DMEK cases' },
        ],
      },
      {
        name: 'Surgical complexity',
        details: [
          { label: 'DMEK difficulty', value: 'High technical demand' },
          { label: 'DSAEK difficulty', value: 'Moderate technical demand' },
          { label: 'Surgeon experience impact', value: 'Critical for DMEK success' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications from Meta-Analysis',
    colorTheme: 'red',
    sections: [
      {
        title: 'Graft Dislocation (Primary Outcome)',
        items: [
          '**DMEK**: 7.9% (13/144 eyes) requiring rebubbling',
          '**DSAEK**: 1.4% (2/144 eyes) requiring rebubbling',
          '**Risk Ratio**: 5.40 (95% CI: 1.51-19.27, P=0.01)',
          'DMEK has 5.4 times higher dislocation risk',
          'Very low-certainty evidence due to study design',
          'Most dislocations occur within 1 week postoperatively',
        ],
      },
      {
        title: 'Primary Graft Failure',
        items: [
          '**DMEK**: 0/72 eyes (0%)',
          '**DSAEK**: 0/72 eyes (0%)',
          'No primary graft failures in any included study',
          'Total 144 eyes analyzed across 4 studies',
          'Suggests both techniques have low failure risk with experienced surgeons',
        ],
      },
      {
        title: 'Graft Rejection Episodes',
        items: [
          '**DMEK**: 0/72 eyes (0%)',
          '**DSAEK**: 1/72 eyes (1.4%)',
          'No significant difference between techniques (P=NS)',
          'Very low rejection rates for both procedures',
          'Follow-up ranged from 6-24 months',
        ],
      },
      {
        title: 'Endothelial Cell Loss',
        items: [
          'Inconsistent results across studies',
          '2 studies showed no difference between DMEK and DSAEK',
          '2 studies showed lower cell loss with DMEK',
          'High heterogeneity prevented meta-analysis (I² >75%)',
          'Both techniques show acceptable cell loss rates',
        ],
      },
      {
        title: 'Visual Complications',
        items: [
          'No severe visual loss (≥1.0 logMAR) in either group',
          'DMEK showed better BCVA by 0.14 logMAR (1-2 lines)',
          'All patients maintained or improved vision',
          'No sight-threatening complications reported',
        ],
      },
      {
        title: 'Study Limitations from Review',
        items: [
          'All studies used paired design (same patients)',
          'DSAEK always performed before DMEK (potential bias)',
          'Small sample sizes (10-30 participants per study)',
          'Certainty of evidence rated as low to very low',
          'Need for larger randomized controlled trials',
        ],
      },
    ],
  },
})
</script>
