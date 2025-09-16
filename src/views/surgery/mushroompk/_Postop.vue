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
      :sutureManagement="postopData.sutureManagement"
    />
  </CollapsibleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import PostopSection, { postopMetadata } from '@/components/surgery/PostopComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Post-operative management data - Based on Busin et al. 2015
const postopData = computed(() => {
  const dosingTrans = t('surgery.mushroomPk.postoperative.corticosteroids.dosing')
  const dosing = typeof dosingTrans === 'string' && dosingTrans === 'surgery.mushroomPk.postoperative.corticosteroids.dosing' 
    ? [
        "Every 2 hours × 2 weeks",
        "Every 3 hours × 2 weeks",
        "QID × 1 month",
        "TID × 1 month",
        "BID × 1 month",
        "QD indefinitely (except phakic or steroid responders)"
      ]
    : dosingTrans
    
  return {
    corticosteroids: {
      title: "Topical Corticosteroids",
      medication: "Tobramycin 0.3% + Dexamethasone 0.1% combination",
      dosing: dosing,
    },
    antimicrobial: {
      title: "Antimicrobial Prophylaxis",
      optionsLabel: "Initial therapy:",
      options: ["Tobramycin/Dexamethasone combination as above"],
      dosingLabel: 'Additional',
      dosing: "For herpetic keratitis: systemic acyclovir 400mg BID starting 3 months pre-op, continued ≥1 year",
    },
    sutureManagement: {
      title: "Suture Management",
      timings: [
        { text: "All sutures removed within 12 months", isSubItem: false },
        { text: "Earlier removal possible due to enhanced wound stability", isSubItem: true },
        { text: "Selective removal based on topographic astigmatism", isSubItem: false },
        { text: "No suture left beyond 12 months", isSubItem: false },
      ],
    },
  }
})
</script>
