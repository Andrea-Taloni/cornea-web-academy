<!-- src/views/surgery/ut-dsaek/_Introduction.vue -->
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
import utDsaekImage from '@/assets/images/surgery/ut-dsaek.png'

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggle'])

const overviewImage = {
  src: utDsaekImage,
  alt: 'UT-DSAEK Technique Diagram',
}

const paragraphs = [
  'Ultra-Thin Descemet\'s Stripping Automated Endothelial Keratoplasty (UT-DSAEK) is an advanced variation of standard DSAEK that utilizes significantly thinner donor grafts, typically 50-100 μm in thickness. This innovative refinement was pioneered by Prof. Massimo Busin in 2013, bridging the gap between conventional DSAEK and DMEK.',

  'The technique combines the superior visual outcomes approaching those of DMEK with the surgical control and lower detachment rates of standard DSAEK. By reducing graft thickness to less than 100 μm, UT-DSAEK minimizes optical interface irregularities and reduces the hyperopic shift commonly seen with thicker grafts, while maintaining the structural support that makes the procedure more forgiving than DMEK.',

  'The evolution from standard DSAEK (150-200 μm) to UT-DSAEK represents a significant advancement in endothelial keratoplasty. Clinical studies have demonstrated that UT-DSAEK achieves 20/20 vision rates of 48.8% compared to 21% with standard DSAEK, while maintaining similar safety profiles and complication rates. This makes UT-DSAEK particularly valuable for complex cases where DMEK might be technically challenging, such as eyes with anterior chamber abnormalities, aphakia, or previous glaucoma surgery.'
]
</script>
