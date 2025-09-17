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
  'Endothelial keratoplasty (EK) represents the gold standard for surgical treatment of eyes with endothelial failure because of undisputed advantages over penetrating keratoplasty, including faster visual recovery, minimal postoperative refractive error, and lower rates of immunologic rejection.',

  'Since its introduction in 1999, EK has evolved into two types: Descemet stripping automated endothelial keratoplasty (DSAEK) and Descemet membrane endothelial keratoplasty (DMEK). Although DSAEK was still the more popular type of EK in 2016, mainly because it is relatively easy to master, the number of DMEK procedures being performed has been increasing constantly since the first report in 2006 because this procedure allows faster visual recovery and a higher percentage of eyes with 20/20 vision, at least in the short to medium term.',

  'In 2009, ultrathin DSAEK (UT-DSAEK) was proposed as a "middle way" between the two techniques, combining the technical ease of DSAEK with the better visual outcomes of DMEK. Theoretically, minimizing the stromal component to a thin pre-Descemetic layer could eliminate its possibly detrimental effect on vision by optimizing the shape and regularity of the graft as well as the transparency of the interface. The microkeratome-assisted double-pass technique aims at a graft thickness <100 μm.'
]
</script>
