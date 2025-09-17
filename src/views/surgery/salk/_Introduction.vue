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
  'Photorefractive keratectomy (PRK) is a well-established technique for correcting refractive errors such as myopia, hyperopia, and astigmatism. Despite significant progress in reducing complications, some patients may develop corneal haze that compromises visual quality.',
  'Traditional treatment options include superficial keratectomy, PTK (phototherapeutic keratectomy) alone or enhanced with Mitomycin C. Unfortunately, haze can recur even after these treatments, requiring repeated interventions that can be frustrating for patients and may further compromise visual quality.',
  'Sutureless SALK (Superficial Anterior Lamellar Keratoplasty) represents an innovative solution for patients with recurrent haze. This technique can eliminate recurrences for at least 5 years and significantly improve visual acuity, offering a long-lasting solution for those who have undergone PTK treatments without definitive success.',
]
</script>
