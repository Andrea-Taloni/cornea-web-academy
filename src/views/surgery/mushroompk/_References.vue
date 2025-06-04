<!-- src/views/surgery/mushroompk/_References.vue -->
<template>
  <CollapsibleSection
    :title="referencesMetadata.title"
    :iconPath="referencesMetadata.iconPath"
    :colorTheme="referencesMetadata.colorTheme"
    :isExpanded="isExpanded"
    :maxHeight="referencesMetadata.maxHeight"
    @toggle="$emit('toggle')"
  >
    <ReferencesSection :references="references" />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ReferencesSection, { referencesMetadata } from '@/components/surgery/ReferencesComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// References data
const references = [
  {
    authors: 'Busin M, Madi S, Scorcia V, Santorum P, Nahum Y.',
    title:
      'A two-piece microkeratome-assisted mushroom keratoplasty improves the outcomes and survival of grafts performed in eyes with diseased stroma and healthy endothelium.',
    journal: 'Trans Am Ophthalmol Soc.',
    year: '2015',
    volume: '113',
    pages: 'T1[1-22]',
  },
  {
    authors: 'Busin M, Arffa RC.',
    title: 'Microkeratome-assisted mushroom keratoplasty with minimal endothelial replacement.',
    journal: 'Am J Ophthalmol.',
    year: '2005',
    volume: '140(1)',
    pages: '138-140',
  },
  {
    authors: 'Scorcia V, Busin M.',
    title:
      'Survival of mushroom keratoplasty performed in corneas with postinfectious vascularized scars.',
    journal: 'Am J Ophthalmol.',
    year: '2012',
    volume: '153(1)',
    pages: '44-50',
  },
  {
    authors: 'Busin M, Beltz J, Scorcia V.',
    title: 'Mushroom keratoplasty in pediatric patients.',
    journal: 'Saudi J Ophthalmol.',
    year: '2011',
    volume: '25(3)',
    pages: '269-274',
  },
  {
    authors: 'Busin M.',
    title: 'A new lamellar wound configuration for penetrating keratoplasty surgery.',
    journal: 'Arch Ophthalmol.',
    year: '2003',
    volume: '121(2)',
    pages: '260-265',
  },
  {
    authors: 'Tan DT, Dart JK, Holland EJ, Kinoshita S.',
    title: 'Corneal transplantation.',
    journal: 'Lancet.',
    year: '2012',
    volume: '379(9827)',
    pages: '1749-1761',
  },
  {
    authors: 'Price MO, Thompson RW Jr, Price FW Jr.',
    title: 'Risk factors for various causes of failure in initial corneal grafts.',
    journal: 'Arch Ophthalmol.',
    year: '2003',
    volume: '121(8)',
    pages: '1087-1092',
  },
  {
    authors: 'Borderie VM, Boëlle PY, Touzeau O, Allouch C, Boutboul S, Laroche L.',
    title: 'Predicted long-term outcome of corneal transplantation.',
    journal: 'Ophthalmology.',
    year: '2009',
    volume: '116(12)',
    pages: '2354-2360',
  },
  {
    authors: 'Williams KA, Lowe M, Bartlett C, Kelly TL, Coster DJ.',
    title:
      'Risk factors for human corneal graft failure within the Australian corneal graft registry.',
    journal: 'Transplantation.',
    year: '2008',
    volume: '86(12)',
    pages: '1720-1724',
  },
  {
    authors: 'The Collaborative Corneal Transplantation Studies Research Group.',
    title: 'Effectiveness of histocompatibility matching in high-risk corneal transplantation.',
    journal: 'Arch Ophthalmol.',
    year: '1992',
    volume: '110(10)',
    pages: '1392-1403',
  },
]
</script>
