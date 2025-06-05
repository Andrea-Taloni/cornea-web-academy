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

  'The technique addresses the fundamental challenge in corneal transplantation: balancing wound integrity with optical quality. By creating a stepped configuration with a typical posterior diameter of 6.0-7.5 mm and anterior diameter of 8.0-9.0 mm, mushroom PK achieves both objectives simultaneously. Recent studies have shown excellent outcomes when using a 9mm anterior lamella with a 6mm posterior lamella configuration.',

  'Key advantages include enhanced wound stability reducing the risk of wound dehiscence by up to 75-80% compared to conventional PK (0.5-1.2% vs 2.8-5.5%), a larger optical zone for better visual outcomes, significantly lower postoperative astigmatism (averaging 3D at 5 years), and faster visual rehabilitation allowing earlier suture removal. The technique is particularly valuable as a conversion strategy when deep anterior lamellar keratoplasty (DALK) cannot be completed due to Descemet membrane perforation or full-thickness opacity.',
]
</script>
