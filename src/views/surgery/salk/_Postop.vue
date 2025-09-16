<!-- src/views/surgery/salk/_Postop.vue -->
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

// Post-operative management data from Busin's protocol
const postopData = ref({
  corticosteroids: {
    title: 'Topical Corticosteroids (Busin Protocol)',
    medication: 'Fluorometholone 0.1% (mild steroid only)',
    dosing: [
      'QID × 2 weeks',
      'TID × 1 week',
      'BID × 1 week',
      'Stop at 1 month'
    ],
  },
  antimicrobial: {
    title: 'Antimicrobial Prophylaxis',
    optionsLabel: 'Busin\'s choice:',
    options: ['Moxifloxacin 0.5%', 'Ofloxacin 0.3%'],
    dosingLabel: 'Duration',
    dosing: 'QID × 1 week only',
  },
  sutureManagement: {
    title: 'Suture Management - Critical',
    timings: [
      { text: 'Busin\'s KEY INNOVATION:', isSubItem: false },
      { text: 'Remove ALL sutures at 2-3 days', isSubItem: true },
      { text: 'Maximum 7 days (never longer)', isSubItem: true },
      { text: 'Early removal prevents astigmatism', isSubItem: true },
      { text: 'Sutureless technique:', isSubItem: false },
      { text: 'No sutures to manage', isSubItem: true },
      { text: 'BCL removal at 1 week if used', isSubItem: true },
    ],
  },
})
</script>
