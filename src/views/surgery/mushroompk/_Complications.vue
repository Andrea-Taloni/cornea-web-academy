<!-- src/views/surgery/mushroompk/_Complications.vue -->
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
import { computed } from 'vue'
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

// General Mushroom PK Complications
const complicationsData = computed(() => ({
  intraoperative: {
    title: t('surgery.mushroomPk.complications.intraoperative.title'),
    colorTheme: 'orange',
    complications: t('surgery.mushroomPk.complications.intraoperative.items').map(item => ({
      name: item.name,
      details: [
        { label: 'Incidence', value: item.incidence },
        { label: 'Management', value: item.management },
      ],
    })),
  },
  postoperative: {
    title: t('surgery.mushroomPk.complications.postoperative.title'),
    colorTheme: 'red',
    sections: [
      {
        title: t('surgery.mushroomPk.complications.postoperative.early.title'),
        items: t('surgery.mushroomPk.complications.postoperative.early.items'),
      },
      {
        title: t('surgery.mushroomPk.complications.postoperative.late.title'),
        items: t('surgery.mushroomPk.complications.postoperative.late.items'),
      },
    ],
  },
}))
</script>
