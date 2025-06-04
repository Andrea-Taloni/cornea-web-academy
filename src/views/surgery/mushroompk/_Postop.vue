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
    medication: 'Tobramycin-Dexamethasone initially, then Dexamethasone 0.2%',
    dosing: [
      'Q2H × 2 weeks (with antibiotic)',
      'Q3H × 2 weeks (with antibiotic)',
      'QID × 1 month (steroid only)',
      'TID × 1 month → BID × 1 month',
      'QD indefinitely (unless phakic/steroid responder)',
    ],
  },
  antimicrobial: {
    title: 'Special Prophylaxis',
    optionsLabel: 'High-risk eyes:',
    options: ['Systemic prednisone 1.5mg/kg × 3 months (tapered)', 'Started 3 days preoperatively'],
    dosingLabel: 'Herpetic keratitis',
    dosing: 'Acyclovir 400mg BID × 1 year minimum, then topical indefinitely',
  },
  followUp: {
    title: 'Follow-up Schedule',
    schedule: [
      'Day 1 (check posterior lamella position)',
      'Frequent visits first month',
      'Month 6, then yearly',
      'Complete suture removal by 12 months',
      'Long-term annual monitoring',
    ],
  },
  sutureManagement: {
    title: 'Suture Management',
    timings: [
      { text: 'All sutures removed within 12 months', isSubItem: false },
      { text: 'Earlier removal possible due to wound stability', isSubItem: false },
      { text: 'Selective removal for astigmatism as needed', isSubItem: true },
      { text: 'Wound revision if astigmatism >4.5D persists', isSubItem: false },
      { text: 'Mean astigmatism reduction with revision: 4.52D', isSubItem: true },
    ],
  },
})
</script>
