<!-- src/views/surgery/salk/_Introduction.vue -->
<template>
  <CollapsibleSection
    :title="overviewMetadata.title"
    :iconPath="overviewMetadata.iconPath"
    :colorTheme="overviewMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="overviewMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <OverviewSection :image="overviewImage" :paragraphs="paragraphs" />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import OverviewSection, { overviewMetadata } from '@/components/surgery/IntroductionComponent.vue'
import salkImage from '@/assets/images/surgery/salk.png'

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggle'])

const overviewImage = {
  src: salkImage,
  alt: 'SALK Surgical Technique Diagram',
}

const paragraphs = [
  'Superficial Anterior Lamellar Keratoplasty (SALK) is a partial-thickness corneal transplant procedure pioneered by Prof. Massimo Busin in 2001. First presented at the German Ophthalmic Surgeons Meeting in 2002 and published in Ophthalmology in 2005, SALK selectively replaces only the diseased anterior layers of the cornea while preserving the healthy posterior stroma, Descemet\'s membrane, and endothelium.',
  'The technique utilizes a standardized microkeratome-assisted approach, typically creating grafts of 130-160 μm thickness with 9.0-9.5 mm diameter. Unlike DALK, which replaces the entire corneal stroma, SALK targets only the superficial stromal layers affected by disease, maintaining the structural integrity of the deeper stroma and ensuring excellent visual outcomes while eliminating the risk of endothelial rejection.',
  'Busin\'s landmark studies demonstrate that SALK achieves 100% of patients reaching 20/40 or better vision, with 70-77.8% achieving 20/30 or better at 6-12 months. The technique has evolved from the original sutured approach to include sutureless modifications using fibrin glue or bandage contact lenses, significantly reducing recovery time while maintaining the excellent outcomes that have established SALK as the gold standard for superficial anterior stromal pathologies.',
]
</script>
