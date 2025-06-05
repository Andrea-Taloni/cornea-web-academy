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
    authors: 'Myerscough J, Roberts H, Yu AC, Elkadim M, Bovone C, Busin M.',
    title:
      '5-year Outcomes of Converted Mushroom Keratoplasty from Intended DALK Mandate 9mm Diameter DALK as the Optimal Approach to Keratoconus.',
    journal: 'Am J Ophthalmol.',
    year: '2020',
    volume: '220',
    pages: '9-18',
  },
  {
    authors: 'Busin M, Madi S, Scorcia V, Santorum P, Nahum Y.',
    title:
      'A two-piece microkeratome-assisted mushroom keratoplasty improves the outcomes and survival of grafts performed in eyes with diseased stroma and healthy endothelium.',
    journal: 'Trans Am Ophthalmol Soc.',
    year: '2015',
    volume: '113',
    pages: 'T1',
  },
  {
    authors: 'Busin M, Monks T, Azizi M.',
    title: 'Mushroom keratoplasty in keratoconus.',
    journal: 'Cornea.',
    year: '1995',
    volume: '14(6)',
    pages: '586-593',
  },
  {
    authors: 'Busin M, Arffa RC, Sebastiani A.',
    title:
      'Endokeratoplasty as an alternative to penetrating keratoplasty for the surgical treatment of diseased endothelium: initial results.',
    journal: 'Ophthalmology.',
    year: '2000',
    volume: '107(11)',
    pages: '2077-2082',
  },
  {
    authors: 'Yu AL, Kaiser M, Schaumberger M, Messmer E, Kook D, Welge-Lussen U.',
    title:
      'Donor-related risk factors and preoperative donor tissue parameters as predictors of graft failure after mushroom keratoplasty.',
    journal: 'Cornea.',
    year: '2014',
    volume: '33(12)',
    pages: '1225-1230',
  },
  {
    authors: 'Levinger E, Trivizki O, Levinger S, Kremer I.',
    title:
      'Outcome of "mushroom" pattern femtosecond laser-assisted keratoplasty versus conventional penetrating keratoplasty in patients with keratoconus.',
    journal: 'Cornea.',
    year: '2014',
    volume: '33(5)',
    pages: '481-485',
  },
  {
    authors: 'Fung SSM, Aiello F, Maurino V.',
    title:
      'Outcomes of femtosecond laser-assisted mushroom-configuration keratoplasty in advanced keratoconus.',
    journal: 'Eye (Lond).',
    year: '2016',
    volume: '30(4)',
    pages: '553-561',
  },
  {
    authors: 'Scorcia V, Busin M, Lucisano A, Beltz J, Carta A, Scorcia G.',
    title: 'Anterior segment optical coherence tomography-guided big-bubble technique.',
    journal: 'Ophthalmology.',
    year: '2013',
    volume: '120(3)',
    pages: '471-476',
  },
  {
    authors: 'Jonas JB, Rank RM, Budde WM.',
    title: 'Immunologic graft reactions after allogenic penetrating keratoplasty.',
    journal: 'Am J Ophthalmol.',
    year: '2002',
    volume: '133(4)',
    pages: '437-443',
  },
  {
    authors: 'Seitz B, Langenbucher A, Nguyen NX, Kus MM, Küchle M.',
    title:
      "Long-term follow-up of intraocular pressure after penetrating keratoplasty for keratoconus and Fuchs' dystrophy: comparison of mechanical and laser trephination.",
    journal: 'Cornea.',
    year: '2002',
    volume: '21(4)',
    pages: '368-373',
  },
  {
    authors: 'Liu H, Chen Y, Wang P, Li B, Wang W, Su Y, Sheng M.',
    title:
      'Efficacy and safety of deep anterior lamellar keratoplasty vs. penetrating keratoplasty for keratoconus: a meta-analysis.',
    journal: 'PLoS One.',
    year: '2015',
    volume: '10(1)',
    pages: 'e0113332',
  },
  {
    authors: 'Frost NA, Wu J, Lai TF, Coster DJ.',
    title: 'A review of randomized controlled trials of penetrating keratoplasty techniques.',
    journal: 'Ophthalmology.',
    year: '2006',
    volume: '113(6)',
    pages: '942-949',
  },
]
</script>
