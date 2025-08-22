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
const postopData = computed(() => ({
  corticosteroids: {
    title: t('surgery.mushroomPk.postoperative.corticosteroids.title'),
    medication: t('surgery.mushroomPk.postoperative.corticosteroids.medication'),
    dosing: t('surgery.mushroomPk.postoperative.corticosteroids.dosing'),
  },
  antimicrobial: {
    title: t('surgery.mushroomPk.postoperative.antimicrobial.title'),
    optionsLabel: t('surgery.mushroomPk.postoperative.antimicrobial.initial'),
    options: [t('surgery.mushroomPk.postoperative.antimicrobial.medication')],
    dosingLabel: 'Additional',
    dosing: ` ${t('surgery.mushroomPk.postoperative.antimicrobial.additional')}`,
  },
  followUp: {
    title: t('surgery.mushroomPk.postoperative.followUp.title'),
    schedule: t('surgery.mushroomPk.postoperative.followUp.schedule'),
  },
  sutureManagement: {
    title: t('surgery.mushroomPk.postoperative.sutureManagement.title'),
    timings: [
      { text: t('surgery.mushroomPk.postoperative.sutureManagement.allSuturesRemoved'), isSubItem: false },
      { text: t('surgery.mushroomPk.postoperative.sutureManagement.earlierRemoval'), isSubItem: true },
      { text: t('surgery.mushroomPk.postoperative.sutureManagement.selectiveRemoval'), isSubItem: false },
      { text: t('surgery.mushroomPk.postoperative.sutureManagement.noSutureBeyond'), isSubItem: false },
    ],
  },
}))
</script>
