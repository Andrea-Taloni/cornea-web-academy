<!-- src/views/surgery/mushroompk/_Complications.vue -->
<template>
  <CollapsibleSection
    :title="complicationsMetadata.title"
    :iconPath="complicationsMetadata.iconPath"
    :colorTheme="complicationsMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="complicationsMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ComplicationsSection
      :intraoperativeBox="complicationsData.intraoperative"
      :postoperativeBox="complicationsData.postoperative"
    />
  </CollapsibleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComplicationsSection, {
  complicationsMetadata,
} from '@/components/surgery/ComplicationsComponent.vue'

const { t } = useI18n()

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// General Mushroom PK Complications
const complicationsData = computed(() => {
  const intraoperativeItems = t('surgery.mushroomPk.complications.intraoperative.items')
  let intraoperativeArray = []
  
  if (typeof intraoperativeItems === 'string' && intraoperativeItems === 'surgery.mushroomPk.complications.intraoperative.items') {
    // Fallback content
    intraoperativeArray = [
      {
        name: "Conversion from intended DALK",
        incidence: "10-20% of DALK attempts",
        management: "Two-piece mushroom PK technique"
      },
      {
        name: "Microkeratome-related issues",
        incidence: "Rare with proper technique",
        management: "Manual dissection or new donor tissue"
      },
      {
        name: "Posterior lamella malpositioning",
        incidence: "1-2%",
        management: "Careful repositioning during surgery"
      }
    ]
  } else {
    intraoperativeArray = Array.isArray(intraoperativeItems) ? intraoperativeItems : []
  }
  
  const earlyItems = t('surgery.mushroomPk.complications.postoperative.early.items')
  const lateItems = t('surgery.mushroomPk.complications.postoperative.late.items')
  
  return {
    intraoperative: {
      title: "Intraoperative Complications",
      colorTheme: 'orange',
      complications: intraoperativeArray.map(item => ({
        name: item.name,
        details: [
          { label: 'Incidence', value: item.incidence },
          { label: 'Management', value: item.management },
        ],
      })),
    },
    postoperative: {
      title: "Postoperative Complications",
      colorTheme: 'red',
      sections: [
        {
          title: "Early Complications (less than 1 month)",
          items: Array.isArray(earlyItems) ? earlyItems : [
            "Posterior lamella detachment",
            "Interface fluid",
            "Wound leak",
            "Pupillary block",
            "Elevated intraocular pressure",
            "Epithelial defects",
            "Primary graft failure"
          ],
        },
        {
          title: "Late Complications (more than 1 month)",
          items: Array.isArray(lateItems) ? lateItems : [
            "Endothelial rejection",
            "Stromal rejection",
            "High astigmatism",
            "Interface opacification",
            "Secondary glaucoma",
            "Wound dehiscence",
            "Progressive endothelial cell loss",
            "Late graft failure"
          ],
        },
      ],
    },
  }
})
</script>
