<!-- src/views/surgery/mushroompk/_Introduction.vue -->
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
import mushroomPKImage from '@/assets/images/surgery/mushroom-pk.png'

defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['toggle'])

const overviewImage = {
  src: mushroomPKImage,
  alt: 'Mushroom PK Configuration Diagram',
}

const paragraphs = [
  'Mushroom Penetrating Keratoplasty (Mushroom PK) is an innovative full-thickness corneal transplant technique that creates a mushroom-shaped configuration by using different diameters for the anterior and posterior portions of the graft. This unique design combines the wound stability advantages of a smaller posterior diameter with the optical benefits of a larger anterior diameter.',

  'The technique addresses the fundamental challenge in corneal transplantation: balancing wound integrity with optical quality. By creating a stepped configuration with a typical posterior diameter of 7.0-7.5 mm and anterior diameter of 8.0-8.5 mm, mushroom PK achieves both objectives simultaneously.',

  'Key advantages include enhanced wound stability reducing the risk of wound dehiscence by up to 60% compared to conventional PK, a larger optical zone for better visual outcomes, significantly lower postoperative astigmatism (averaging 2-3D vs 4-5D in conventional PK), and faster visual rehabilitation allowing earlier suture removal.',
]
</script>
