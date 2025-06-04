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
  'Two-piece Mushroom Penetrating Keratoplasty (Mushroom PK) is a microkeratome-assisted technique that creates a mushroom-shaped graft configuration to optimize both visual outcomes and graft survival. This technique employs different diameters for the anterior (9.0 mm) and posterior (6.0 mm) portions of the graft, combining the optical advantages of a large anterior diameter with minimal endothelial replacement.',

  'The procedure addresses limitations of conventional PK by creating a stepped wound configuration that provides inherent stability while preserving approximately 75% of the recipient endothelium. This unique architecture allows for faster wound healing, earlier suture removal (within 12 months), and reduced risk of traumatic wound dehiscence.',

  'The two-piece approach overcomes limitations of femtosecond laser-assisted techniques by allowing dissection through scarred and vascularized tissue, proper differential centration of anterior and posterior components, and standardized reproducible results. The microkeratome-created interface provides optical quality compatible with excellent visual outcomes despite being within the visual axis.',
]
</script>
