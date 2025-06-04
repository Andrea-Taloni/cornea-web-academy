<!-- src/views/surgery/mushroompk/_Complications.vue -->
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

// Complications data
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Posterior lamella detachment',
        details: [
          { label: 'Incidence', value: '1.2% (2/172 eyes)', highlight: true },
          { label: 'Timing', value: 'Within 24 hours postop' },
          { label: 'Management', value: 'Air injection, 100% success rate' },
        ],
      },
      {
        name: 'Technical challenges',
        details: [
          { label: 'Vascularized corneas', value: '44.2% of cases' },
          { label: 'Scarred tissue dissection', value: 'Manageable with careful technique' },
          { label: 'Combined procedures', value: '12.8% required additional surgery' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications',
    colorTheme: 'red',
    sections: [
      {
        title: 'Most Common',
        items: [
          'High astigmatism (>4.5D): 27% - managed with wound revision (22 eyes), toric IOL (4), or RGP (9)',
          'Cataract formation: 11.9% of phakic eyes - routine phaco successful',
          'Immunologic rejection: 3.6% overall (6/172) - mostly reversible with steroids',
          'Endothelial cell loss: 47.8% at 5 years but stable after 2 years',
        ],
      },
      {
        title: 'Serious Complications',
        items: [
          'Graft failure: 3.5% (6/172 eyes) over 5 years',
          'Herpetic recurrence: 7.3% of herpetic cases (3/43)',
          'Persistent epithelial defect: 1.7% (3 eyes) - led to early failure',
          'No wound dehiscence after suture removal (0% vs 2.8-5.5% in conventional PK)',
        ],
      },
      {
        title: 'Management Outcomes',
        items: [
          'Failed grafts successfully regrafted: 4/6 cases',
          'Wound revision for astigmatism: Mean reduction 4.52D',
          'All rejection episodes except one reversed with treatment',
          'Secondary procedures well-tolerated through mushroom wound',
        ],
      },
    ],
  },
})
</script>
