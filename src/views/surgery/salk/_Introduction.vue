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
  'Photorefractive keratectomy (PRK) is a well-established treatment modality in the management of refractive errors. Progress has been made in reducing the associated complications, evidenced in particular by a reduction in the incidence of postoperative corneal haze. Superficial keratectomy with or without phototherapeutic keratectomy (PTK), and PTK alone or augmented by mitomycin C (MMC) have all been described in the treatment of visually significant corneal haze following PRK.',
  'However, this complication can recur following these treatments requiring further re-treatment. The aim of this study was to investigate the efficacy and safety of sutureless superficial anterior lamellar keratoplasty (SALK) in the treatment of corneal haze secondary to PRK, recurring after at least one PTK treatment with or without MMC.',
  'Sutureless SALK provides a useful treatment option in patients with recurrent haze after excimer laser treatment. It can eliminate haze recurrence for at least a period of 5 years and can improve BSCVA, although there may be significant surgically induced astigmatism.',
]
</script>
