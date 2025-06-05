<!-- src/views/surgery/ut-dsaek/_Postop.vue -->
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

// Post-operative management data for UT-DSAEK
const postopData = ref({
  corticosteroids: {
    title: 'Topical Corticosteroids',
    medication: 'Prednisolone 1% or Dexamethasone 0.1%',
    dosing: [
      'Q1H while awake × 1 week',
      'Q2H × 1 week',
      'QID × 1 month',
      'TID × 2 months',
      'BID × 3 months',
      'QD indefinitely',
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Fourth-generation fluoroquinolone:',
    options: ['Moxifloxacin 0.5%', 'Besifloxacin 0.6%', 'Gatifloxacin 0.5%'],
    dosingLabel: 'Duration',
    dosing: 'QID × 2 weeks, then stop',
  },
  followUp: {
    title: 'Follow-up Schedule',
    schedule: [
      'Day 1 (critical for UT-DSAEK)',
      'Day 3-5 (check attachment)',
      'Week 1, 2',
      'Month 1, 2, 3, 6',
      'Every 6 months year 1',
      'Annually with ECD counts',
    ],
  },
  sutureManagement: {
    title: 'UT-DSAEK Specific Care',
    timings: [
      { text: 'Positioning:', isSubItem: false },
      { text: 'Strict supine × 1 hour immediately post-op', isSubItem: true },
      { text: 'Face-up 50% of time × 48 hours', isSubItem: true },
      { text: 'Less critical than DMEK due to better adherence', isSubItem: true },
      { text: 'Air bubble management:', isSubItem: false },
      { text: 'Check size day 1 - should be 50-70%', isSubItem: true },
      { text: 'Release if >80% to prevent pupil block', isSubItem: true },
      { text: 'Special considerations:', isSubItem: false },
      { text: 'Higher rebubbling threshold (>40% detached)', isSubItem: true },
      { text: 'Interface fluid more common - may resolve', isSubItem: true },
    ],
  },
})
</script>
