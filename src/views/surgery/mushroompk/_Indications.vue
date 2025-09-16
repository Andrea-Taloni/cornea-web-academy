<!-- src/views/surgery/mushroompk/_Indications.vue -->
<template>
  <CollapsibleSection
    :title="indicationsMetadata.title"
    :iconPath="indicationsMetadata.iconPath"
    :colorTheme="indicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="indicationsMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <IndicationsSection
      :indications="indications"
      :contraindications="contraindications"
    />
  </CollapsibleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import IndicationsSection, {
  indicationsMetadata,
} from '@/components/surgery/IndicationsComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Indications data
const indications = computed(() => {
  const trans = t('surgery.mushroomPk.indications.indications.items')
  if (typeof trans === 'string' && trans === 'surgery.mushroomPk.indications.indications.items') {
    // Fallback content
    return [
      {
        title: "Conversion from DALK",
        description: "When DALK cannot be completed due to DM macroperforation."
      },
      {
        title: "Advanced Keratoconus",
        description: "Severe keratoconus with central full-thickness scarring not amenable to DALK."
      },
      {
        title: "Full-Thickness Corneal Scars",
        description: "Deep corneal scarring involving all layers including endothelium."
      },
      {
        title: "Corneal Perforations",
        description: "Active or impending perforations requiring urgent intervention."
      }
    ]
  }
  return Array.isArray(trans) ? trans : []
})

// Contraindications data
const contraindications = computed(() => {
  const trans = t('surgery.mushroomPk.indications.contraindications.absolute.items')
  if (typeof trans === 'string' && trans === 'surgery.mushroomPk.indications.contraindications.absolute.items') {
    // Fallback content
    return {
      absolute: [
        {
          title: "Endothelial cell density <1000 cells/mm² in recipient periphery",
          description: "Healthy peripheral endothelium provides a reservoir for cell migration."
        },
        {
          title: "Endothelial diseases",
          description: "These conditions require endothelial keratoplasty (DMEK/DSAEK)"
        }
      ]
    }
  }
  return {
    absolute: Array.isArray(trans) ? trans : []
  }
})
</script>
