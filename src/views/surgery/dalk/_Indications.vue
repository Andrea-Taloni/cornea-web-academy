<!-- src/views/surgery/dalk/_Indications.vue -->
<template>
  <CollapsibleSection
    :title="indicationsMetadata.title"
    :iconPath="indicationsMetadata.iconPath"
    :colorTheme="indicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="indicationsMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <IndicationsSection
      :indications="indications"
      :contraindications="contraindications"
    />
  </CollapsibleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import IndicationsSection, { indicationsMetadata } from '@/components/surgery/IndicationsComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Indications data
const indications = computed(() => [
  {
    title: t('surgery.dalk.indications.keratoconus.title'),
    description: t('surgery.dalk.indications.keratoconus.description'),
  },
  {
    title: t('surgery.dalk.indications.dystrophies.title'),
    description: t('surgery.dalk.indications.dystrophies.description'),
  },
  {
    title: t('surgery.dalk.indications.postInfectious.title'),
    description: t('surgery.dalk.indications.postInfectious.description'),
  },
  {
    title: t('surgery.dalk.indications.trauma.title'),
    description: t('surgery.dalk.indications.trauma.description'),
  },
])

// Contraindications data
const contraindications = computed(() => ({
  absolute: [
    {
      title: t('surgery.dalk.indications.contraindications.endothelial.title'),
      description: t('surgery.dalk.indications.contraindications.endothelial.description'),
    },
    {
      title: t('surgery.dalk.indications.contraindications.hydrops.title'),
      description: t('surgery.dalk.indications.contraindications.hydrops.description'),
    },
    {
      title: t('surgery.dalk.indications.contraindications.deepScarring.title'),
      description: t('surgery.dalk.indications.contraindications.deepScarring.description'),
    },
  ],
}))
</script>
