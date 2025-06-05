<!-- src/views/surgery/mushroompk/_Postop.vue -->
<template>
  <CollapsibleSection
    :title="postopMetadata.title"
    :iconPath="postopMetadata.iconPath"
    :colorTheme="postopMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="postopMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <PostopSection
      :corticosteroids="postopData.corticosteroids"
      :antimicrobial="postopData.antimicrobial"
      :followUp="postopData.followUp"
      :sutureManagement="postopData.sutureManagement"
    />
  </CollapsibleSection>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import PostopSection, { postopMetadata } from '@/components/surgery/PostopComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Post-operative management data
const postopData = ref({
  corticosteroids: {
    title: 'Topical Corticosteroids',
    medication: 'Prednisolone 1% / Dexamethasone 0.1%',
    dosing: [
      'QID × 3 months',
      'TID × 3 months',
      'BID × 6 months',
      'QD indefinitely (low-dose maintenance)',
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Options:',
    options: ['Moxifloxacin 0.5%', 'Gatifloxacin 0.5%', 'Tobramycin 0.3%'],
    dosingLabel: 'Dosing',
    dosing: 'QID × 1 month, then stop',
  },
  followUp: {
    title: 'Follow-up Schedule',
    schedule: [
      'Day 1, 3, 7',
      'Weekly × 1 month',
      'Monthly × 6 months',
      'Every 3 months year 1',
      'Every 6 months thereafter',
    ],
  },
  sutureManagement: {
    title: 'Suture Management',
    timings: [
      { text: 'Selective removal based on topography', isSubItem: false },
      { text: 'Start at 3-4 months (earlier than conventional PK)', isSubItem: false },
      { text: 'Remove tight sutures causing high astigmatism', isSubItem: true },
      { text: 'Complete removal by 12 months (vs 12-18 months for PK)', isSubItem: false },
      { text: 'Enhanced wound stability allows earlier removal', isSubItem: true },
      { text: 'Monitor for wound stability at each removal', isSubItem: true },
    ],
  },
})
</script>
