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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import OverviewSection, { overviewMetadata } from '@/components/surgery/IntroductionComponent.vue'
import mushroomPKImage from '@/assets/images/surgery/mushroom-pk.png'

const { t } = useI18n()

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

const paragraphs = computed(() => {
  const trans = t('surgery.mushroomPk.introduction.paragraphs')
  console.log('Translation result for paragraphs:', trans, 'Type:', typeof trans)
  // If translation returns the key itself, it means the translation wasn't found
  if (typeof trans === 'string' && trans === 'surgery.mushroomPk.introduction.paragraphs') {
    console.warn('Translation not found, using fallback content')
    // Temporary fallback content to test
    return [
      "Two-piece microkeratome-assisted Mushroom Penetrating Keratoplasty (PK) is a corneal transplantation technique that employs a mushroom-shaped graft with a larger 9.0mm anterior lamella and smaller 6.0mm posterior lamella. This technique is indicated for eyes with full-thickness central corneal opacities but otherwise healthy peripheral endothelium.",
      "The technique represents a paradigm shift in corneal transplantation by addressing the critical limitation of conventional PK: the inverse relationship between graft size and immunologic rejection risk. By transplanting only the central 6mm of endothelium while maintaining a 9mm optical zone, mushroom PK preserves approximately 75% of the recipient endothelium. This minimal endothelial replacement strategy dramatically reduces the antigenic load and provides a biological reservoir for endothelial cell migration, explaining the exceptionally low rejection rates (<5% at 5 years) observed even in vascularized corneas [1].",
      "The microkeratome-assisted approach involves splitting the donor cornea into anterior and posterior lamellae using a 200μm head on an automated lamellar therapeutic keratoplasty (ALTK) system. This method overcomes the limitations of femtosecond laser-assisted techniques, allowing successful dissection through densely scarred and vascularized tissue. The recipient bed is prepared with a 9mm peripheral lamellar dissection at 250μm depth, followed by central 6mm full-thickness trephination, creating the characteristic stepped wound configuration [1]."
    ]
  }
  return Array.isArray(trans) ? trans : []
})
</script>
