<!-- src/views/surgery/dsaek/_Indications.vue -->
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
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import IndicationsSection, {
  indicationsMetadata,
} from '@/components/surgery/IndicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Indications data
const indications = [
  {
    title: "Fuchs' Endothelial Dystrophy",
    subtitle: '(Most common indication)',
    description:
      'Symptomatic corneal edema with visual impairment. Best outcomes when performed before significant stromal scarring develops. Consider earlier intervention in patients with good visual potential.',
  },
  {
    title: 'Pseudophakic Bullous Keratopathy',
    description:
      'Endothelial decompensation following cataract surgery or IOL complications. Second most common indication. May require concurrent IOL exchange or repositioning.',
  },
  {
    title: 'Posterior Polymorphous Dystrophy',
    description:
      'Congenital endothelial dystrophy causing corneal edema and visual impairment. Less common but excellent outcomes when endothelium is primary pathology.',
  },
  {
    title: 'Iridocorneal Endothelial Syndrome',
    description:
      'ICE syndrome variants with corneal edema and endothelial dysfunction. May have concurrent glaucoma requiring management. Progressive nature may affect long-term outcomes.',
  },
  {
    title: 'Endothelial Trauma',
    description:
      'Endothelial damage from surgical trauma, inflammation, or toxic substances. Common after complicated cataract surgery or anterior segment procedures.',
  },
  {
    title: 'Failed Previous Grafts',
    description:
      'Endothelial failure of previous penetrating or endothelial keratoplasty. DSAEK can be performed after failed PKP, DSAEK, or DMEK with good success rates.',
  },
]

// Contraindications data
const contraindications = {
  absolute: [
    'Significant stromal scarring affecting visual axis',
    'Active corneal infection or inflammation',
    'Severe dry eye with epithelial compromise',
    'Uncontrolled glaucoma',
  ],
  relative: [
    'Extensive peripheral anterior synechiae',
    'Severe anterior chamber abnormalities',
    'Previous vitrectomy with unstable chamber',
    'Poor compliance with postoperative care',
    'Inability to position supine',
    'Significant corneal neovascularization',
  ],
}
</script>
