<!-- src/views/surgery/dalk/_Complications.vue -->
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComplicationsSection, {
  complicationsMetadata,
} from '@/components/surgery/ComplicationsComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// General DALK Complications
const complicationsData = computed(() => {
  // Get early and late items arrays
  const earlyItems = t('surgery.dalk.complications.postoperative.early.items')
  const lateItems = t('surgery.dalk.complications.postoperative.late.items')
  
  // Ensure items are arrays - handle if vue-i18n returns arrays as strings
  const earlyItemsArray = Array.isArray(earlyItems) ? earlyItems : [
    "Double anterior chamber",
    "Interface haze",
    "Epithelial defects",
    "Pupillary block",
    "Descemet membrane detachment",
    "Wound leak",
    "Elevated intraocular pressure"
  ]
  const lateItemsArray = Array.isArray(lateItems) ? lateItems : [
    "Stromal rejection",
    "Interface opacification",
    "Secondary glaucoma",
    "Late endothelial failure",
    "Wound dehiscence",
    "Recurrence of primary disease",
    "Irregular astigmatism"
  ]
  
  return {
    intraoperative: {
      title: t('surgery.dalk.complications.intraoperative.title'),
      colorTheme: 'orange',
      complications: [
        {
          name: t('surgery.dalk.complications.intraoperative.items.0.name'),
          details: [
            { label: t('surgery.dalk.labels.incidence'), value: t('surgery.dalk.complications.intraoperative.items.0.incidence') },
            { label: t('surgery.dalk.labels.management'), value: t('surgery.dalk.complications.intraoperative.items.0.management') },
          ],
        },
        {
          name: t('surgery.dalk.complications.intraoperative.items.1.name'),
          details: [
            { label: t('surgery.dalk.labels.incidence'), value: t('surgery.dalk.complications.intraoperative.items.1.incidence') },
            { label: t('surgery.dalk.labels.management'), value: t('surgery.dalk.complications.intraoperative.items.1.management') },
          ],
        },
        {
          name: t('surgery.dalk.complications.intraoperative.items.2.name'),
          details: [
            { label: t('surgery.dalk.labels.incidence'), value: t('surgery.dalk.complications.intraoperative.items.2.incidence') },
            { label: t('surgery.dalk.labels.management'), value: t('surgery.dalk.complications.intraoperative.items.2.management') },
          ],
        },
      ],
    },
    postoperative: {
      title: t('surgery.dalk.complications.postoperative.title'),
      colorTheme: 'red',
      sections: [
        {
          title: t('surgery.dalk.complications.postoperative.early.title'),
          items: earlyItemsArray,
        },
        {
          title: t('surgery.dalk.complications.postoperative.late.title'),
          items: lateItemsArray,
        },
      ],
    },
  }
})
</script>
