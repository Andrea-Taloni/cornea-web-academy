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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import OverviewSection, { overviewMetadata } from '@/components/surgery/IntroductionComponent.vue'
import dalkImage from '@/assets/images/surgery/dalk.png'

const { t } = useI18n()

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

const paragraphs = computed(() => [
  t('surgery.dalk.introduction.paragraph1'),
  t('surgery.dalk.introduction.paragraph2'),
  t('surgery.dalk.introduction.paragraph3'),
  t('surgery.dalk.introduction.paragraph4'),
  t('surgery.dalk.introduction.paragraph5'),
])
</script>
