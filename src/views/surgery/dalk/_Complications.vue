<!-- src/views/surgery/dalk/_Complications.vue -->
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
import { ref } from 'vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ComplicationsSection, { complicationsMetadata } from '@/components/surgery/ComplicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Complications data
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Complications',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Descemet perforation',
        details: [
          { label: 'Conventional', value: '5-32%' },
          { label: 'Busin Modified', value: '3.7%', highlight: true },
          { label: 'Management', value: 'Air tamponade, conversion to PK if large' },
        ],
      },
      {
        name: 'Failed big bubble',
        details: [
          { label: 'Conventional', value: '10-43%' },
          { label: 'Busin Modified', value: '16.3%', highlight: true },
          { label: 'Management', value: 'Manual dissection (limited to 6mm in modified)' },
        ],
      },
      {
        name: 'Conversion to PK',
        details: [
          { label: 'Conventional', value: '1.2-27%' },
          { label: 'Busin Modified', value: '0%', highlight: true },
          { label: 'Management', value: '9mm PK or mushroom keratoplasty' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications',
    colorTheme: 'red',
    sections: [
      {
        title: 'Early (&lt;1 month)',
        items: [
          'Double anterior chamber: 2.5% (Busin) vs 8-15% (conventional)',
          'Interface haze: 10-20%',
          'Epithelial defects: 5-10%',
          'Pupillary block: 2-5%',
          'Descemet membrane detachment: 2.5% (manageable with air)',
        ],
      },
      {
        title: 'Late (&gt;1 month)',
        items: [
          'Stromal rejection: 7.5% (Busin) vs 1-10% (conventional)',
          'Interface opacification: 5-10%',
          'Secondary glaucoma: 5-15%',
          'Late endothelial failure: 2-5%',
          'No wound dehiscence reported with Busin technique',
        ],
      },
    ],
  },
})
</script>
