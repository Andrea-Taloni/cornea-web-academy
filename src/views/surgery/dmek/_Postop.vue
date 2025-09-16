<!-- src/views/surgery/dmek/_Postop.vue -->
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
    medication: 'Prednisolone 1% or Dexamethasone 0.1%',
    dosing: [
      'Q1H × 1 week (while awake)',
      'QID × 1 month',
      'TID × 2 months',
      'BID × 3 months',
      'QD indefinitely',
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Options:',
    options: ['Moxifloxacin 0.5%', 'Gatifloxacin 0.5%'],
    dosingLabel: 'Dosing',
    dosing: 'QID × 2 weeks then stop',
  },
  sutureManagement: {
    title: 'Special Considerations',
    timings: [
      { text: 'Positioning: Supine 24-48 hours', isSubItem: false },
      { text: 'Face-up as much as possible first week', isSubItem: true },
      { text: 'Air bubble management:', isSubItem: false },
      { text: 'Monitor size - should last 3-5 days', isSubItem: true },
      { text: 'If >50% at day 1, may need partial release', isSubItem: true },
      { text: 'Graft assessment:', isSubItem: false },
      { text: 'OCT at day 1 if unclear clinically', isSubItem: true },
      { text: 'Rebubble threshold varies by location/size', isSubItem: true },
    ],
  },
})
</script>
