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
  'Descemet Membrane Endothelial Keratoplasty (DMEK) represents the most anatomically precise form of endothelial keratoplasty, involving selective transplantation of Descemet membrane and endothelium without any accompanying stroma. First described by Melles et al. in 2006, DMEK has evolved to become the gold standard for treating endothelial dysfunction due to its superior visual outcomes and lower rejection rates.',

  'The technique involves transplanting a graft approximately 8.5-9.5 mm in diameter and only 10-15 μm thick, consisting solely of Descemet membrane with its attached endothelial cells. This ultra-thin graft restores normal corneal anatomy more precisely than any other keratoplasty technique, resulting in faster visual recovery with 40% of patients achieving 20/20 vision and over 75% achieving 20/25 or better.',

  'Despite its technical challenges, DMEK offers significant advantages over DSAEK including better visual acuity outcomes (typically 1-2 lines better), faster visual recovery (weeks versus months), lower rejection rates (1-2% versus 5-10%), and more predictable refractive outcomes with minimal induced hyperopic shift. The learning curve is steep, with surgeons typically requiring 15-25 cases to achieve consistent outcomes, but the superior results have driven widespread adoption globally.',
]
</script>
