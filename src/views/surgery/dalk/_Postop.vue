<!-- src/views/surgery/dalk/_Postop.vue -->
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
import { ref, computed } from 'vue'
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

// Post-operative management data - From Busin et al. 2017
const postopData = computed(() => ({
  corticosteroids: {
    title: t('surgery.dalk.postoperative.corticosteroids.title'),
    medication: t('surgery.dalk.postoperative.corticosteroids.medication'),
    dosing: [
      t('surgery.dalk.postoperative.corticosteroids.dosing.0'),
      t('surgery.dalk.postoperative.corticosteroids.dosing.1'),
      t('surgery.dalk.postoperative.corticosteroids.dosing.2'),
    ],
  },
  antimicrobial: {
    title: t('surgery.dalk.postoperative.antimicrobial.title'),
    optionsLabel: t('surgery.dalk.postoperative.antimicrobial.initial'),
    options: [t('surgery.dalk.postoperative.antimicrobial.medication')],
    dosingLabel: t('surgery.dalk.labels.dosing'),
    dosing: t('surgery.dalk.postoperative.antimicrobial.dosing'),
  },
  followUp: {
    title: t('surgery.dalk.postoperative.followUp.title'),
    schedule: t('surgery.dalk.postoperative.followUp.schedule'),
  },
  sutureManagement: {
    title: t('surgery.dalk.postoperative.sutureManagement.title'),
    timings: [
      { text: t('surgery.dalk.postoperative.sutureManagement.firstRemoval'), isSubItem: false },
      { text: t('surgery.dalk.postoperative.sutureManagement.secondRemoval'), isSubItem: false },
      { text: t('surgery.dalk.postoperative.sutureManagement.underThirty'), isSubItem: true },
      { text: t('surgery.dalk.postoperative.sutureManagement.overThirty'), isSubItem: true },
      { text: t('surgery.dalk.postoperative.sutureManagement.monitoring'), isSubItem: false },
    ],
  },
}))
</script>
