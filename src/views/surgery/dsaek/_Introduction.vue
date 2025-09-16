<!-- src/views/surgery/dsaek/_Introduction.vue -->
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
import dsaekImage from '@/assets/images/surgery/dsaek-dmek.png'

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggle'])

const overviewImage = {
  src: dsaekImage,
  alt: 'DSAEK Surgical Technique Diagram',
}

const paragraphs = [
  "Descemet's Stripping Automated Endothelial Keratoplasty (DSAEK) is a partial-thickness corneal transplant that replaces only the diseased endothelium and Descemet's membrane along with a thin layer of posterior stroma. This revolutionary technique, developed in the early 2000s, has largely replaced penetrating keratoplasty for isolated endothelial dysfunction.",

  "DSAEK offers significant advantages over full-thickness penetrating keratoplasty, including faster visual recovery, stronger wound integrity, and reduced risk of complications. The procedure involves transplanting a donor disc approximately 100-200 μm thick, containing healthy endothelium, Descemet's membrane, and a thin layer of posterior stroma.",

  "With over 15 years of widespread clinical use, DSAEK has proven to be a reliable and reproducible technique with excellent long-term outcomes. The procedure maintains structural integrity of the eye, induces predictable refractive changes, and achieves 5-year graft survival rates exceeding 95% in appropriate candidates.",
]
</script>
