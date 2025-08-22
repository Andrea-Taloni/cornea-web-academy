<!-- src/views/surgery/mushroompk/_Surgery.vue -->
<template>
  <CollapsibleSection
    :title="techniquesMetadata.title"
    :iconPath="techniquesMetadata.iconPath"
    :colorTheme="techniquesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="techniquesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <TechniquesSection
      :mainSteps="mushroomPKTechnique"
      :alternativeTechniques="alternativeApproaches"
    />
  </CollapsibleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import TechniquesSection, { techniquesMetadata } from '@/components/surgery/SurgeryComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Mushroom PK surgical technique data
const mushroomPKTechnique = computed(() => ({
  title: t('surgery.mushroomPk.surgery.mainTechnique.title'),
  steps: t('surgery.mushroomPk.surgery.mainTechnique.steps')
}))

// Alternative approaches data
const alternativeApproaches = computed(() => ({
  title: t('surgery.mushroomPk.surgery.alternativeTechniques.title'),
  techniques: t('surgery.mushroomPk.surgery.alternativeTechniques.techniques')
}))
</script>
