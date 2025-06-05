<!-- src/views/surgery/dsaek/_Postop.vue -->
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
    medication: 'Prednisolone 1%',
    dosing: [
      'Q2H while awake × 1 week',
      'QID × 1 month',
      'TID × 1 month',
      'BID × 2 months',
      'QD long-term',
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Antibiotic choices:',
    options: ['Moxifloxacin 0.5%', 'Gatifloxacin 0.5%', 'Tobramycin 0.3%'],
    dosingLabel: 'Duration',
    dosing: 'QID × 1-2 weeks',
  },
  followUp: {
    title: 'Follow-up Schedule',
    schedule: [
      'Day 1 (critical)',
      'Week 1',
      'Week 2, 4',
      'Month 2, 3, 6',
      'Every 6 months thereafter',
      'Annual endothelial cell counts',
    ],
  },
  sutureManagement: {
    title: 'Special Considerations',
    timings: [
      { text: 'Positioning: Supine × 1 hour post-op', isSubItem: false },
      { text: 'Face-up as much as possible × 24 hours', isSubItem: true },
      { text: 'Air bubble management:', isSubItem: false },
      { text: 'Should resolve in 2-5 days', isSubItem: true },
      { text: 'Partial release if >90% at day 1', isSubItem: true },
      { text: 'Graft checks:', isSubItem: false },
      { text: 'Daily until attached', isSubItem: true },
      { text: 'Consider rebubble if detached >1/3', isSubItem: true },
    ],
  },
})
</script>
