<!-- src/views/surgery/dalk/_Overview.vue -->
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
import dalkImage from '@/assets/images/surgery/dalk.png'

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggle'])

const overviewImage = {
  src: dalkImage,
  alt: 'DALK Surgical Anatomy Diagram',
}

const paragraphs = [
  'Deep Anterior Lamellar Keratoplasty (DALK) is a surgical procedure that involves selective transplantation of the corneal stroma while preserving the recipient\'s Descemet membrane and endothelium.',
  'For decades, penetrating keratoplasty (PK) has been considered the mainstay surgical treatment for eyes affected by pathological anterior corneal tissue. More recently, deep anterior lamellar keratoplasty (DALK) has become an alternative to PK, with the advantages of eliminating the risk of endothelial rejection (which occurs in approximately 20-30% of penetrating keratoplasty cases over 10 years) and avoiding the complications associated with open-sky surgery.[1]',
  'Busin et al. (2017) have introduced a modified technique using larger 9-mm grafts with clearance limited to a central 6-mm optical zone, demonstrating superior visual and refractive outcomes while minimizing complications.',
]
</script>
