<!-- src/views/surgery/dmek/_Introduction.vue -->
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
import dmekImage from '@/assets/images/surgery/dsaek-dmek.png'

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggle'])

const overviewImage = {
  src: dmekImage,
  alt: 'DMEK Surgical Technique Diagram',
}

const paragraphs = [
  'Descemet Membrane Endothelial Keratoplasty (DMEK) represents the most anatomically precise form of endothelial keratoplasty, involving selective transplantation of Descemet membrane and endothelium without any accompanying stroma. First described by Melles et al. in 2006, DMEK has emerged as an alternative to DSAEK for treating endothelial dysfunction.',

  'The technique involves transplanting a graft approximately 8.5-9.5 mm in diameter and only 10-15 μm thick, consisting solely of Descemet membrane with its attached endothelial cells.',
]
</script>
