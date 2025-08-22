<!-- src/views/surgery/dalk/_Techniques.vue -->
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
      :mainSteps="largeDiameterTechnique"
      :alternativeTechniques="alternativeTechniquesData"
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

// Large Diameter Big-Bubble Technique data
const largeDiameterTechnique = computed(() => ({
  title: t('surgery.dalk.surgery.largeDiameterTechnique.title'),
  steps: [
    {
      title: t('surgery.dalk.surgery.largeDiameterTechnique.steps.0.title'),
      description: t('surgery.dalk.surgery.largeDiameterTechnique.steps.0.description'),
    },
    {
      title: t('surgery.dalk.surgery.largeDiameterTechnique.steps.1.title'),
      description: t('surgery.dalk.surgery.largeDiameterTechnique.steps.1.description'),
    },
    {
      title: t('surgery.dalk.surgery.largeDiameterTechnique.steps.2.title'),
      description: t('surgery.dalk.surgery.largeDiameterTechnique.steps.2.description'),
    },
    {
      title: t('surgery.dalk.surgery.largeDiameterTechnique.steps.3.title'),
      description: t('surgery.dalk.surgery.largeDiameterTechnique.steps.3.description'),
    },
    {
      title: t('surgery.dalk.surgery.largeDiameterTechnique.steps.4.title'),
      description: t('surgery.dalk.surgery.largeDiameterTechnique.steps.4.description'),
    },
    {
      title: t('surgery.dalk.surgery.largeDiameterTechnique.steps.5.title'),
      description: t('surgery.dalk.surgery.largeDiameterTechnique.steps.5.description'),
    },
  ],
  postoperative: {
    title: t('surgery.dalk.surgery.largeDiameterTechnique.postoperative.title'),
    description: t('surgery.dalk.surgery.largeDiameterTechnique.postoperative.description')
  }
}))

// Alternative dissection strategies data
const alternativeTechniquesData = computed(() => ({
  title: t('surgery.dalk.surgery.alternativeTechniques.title'),
  techniques: [
    {
      title: t('surgery.dalk.surgery.alternativeTechniques.techniques.0.title'),
      description: t('surgery.dalk.surgery.alternativeTechniques.techniques.0.description'),
    },
    {
      title: t('surgery.dalk.surgery.alternativeTechniques.techniques.1.title'),
      description: t('surgery.dalk.surgery.alternativeTechniques.techniques.1.description'),
    },
    {
      title: t('surgery.dalk.surgery.alternativeTechniques.techniques.2.title'),
      description: t('surgery.dalk.surgery.alternativeTechniques.techniques.2.description'),
    },
  ],
}))
</script>
