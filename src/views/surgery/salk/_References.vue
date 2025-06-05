<!-- src/views/surgery/salk/_References.vue -->
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

// References data - Busin's actual SALK publications
const references = [
  {
    authors: 'Busin M, Zambianchi L, Arffa RC.',
    title: 'Microkeratome-assisted lamellar keratoplasty for the surgical treatment of keratoconus.',
    journal: 'Ophthalmology.',
    year: '2005',
    volume: '112(6)',
    pages: '987-997',
  },
  {
    authors: 'Patel AK, Scorcia V, Kadyan A, Lapenna L, Ponzin D, Busin M.',
    title: 'Microkeratome-assisted superficial anterior lamellar keratoplasty for anterior stromal corneal opacities after penetrating keratoplasty.',
    journal: 'Cornea.',
    year: '2012',
    volume: '31(1)',
    pages: '101-105',
  },
  {
    authors: 'Myerscough J, Bovone C, Scorcia V, Ricci-Filipovic B, Moramarco A, Busin M.',
    title: 'Five-year outcomes of sutureless superficial anterior lamellar keratoplasty using a hyperopic epikeratophakia lenticule in patients with keratoconus-induced corneal ectasia after excimer laser refractive surgery.',
    journal: 'Br J Ophthalmol.',
    year: '2021',
    volume: '105(12)',
    pages: '1651-1655',
  },
  {
    authors: 'Busin M.',
    title: 'A prospective study of a new lamellar keratoplasty technique: keratoplasty with a microkeratome (presented at the German Ophthalmic Surgeons Meeting).',
    journal: 'DOG Conference Proceedings.',
    year: '2002',
    volume: 'Abstract',
    pages: 'N/A',
  },
  {
    authors: 'Haque R, Myerscough J, Bovone C, Busin M.',
    title: 'Long-Term Results of Superficial Anterior Lamellar Keratoplasty (SALK) for Stromal Corneal Dystrophies.',
    journal: 'Invest Ophthalmol Vis Sci.',
    year: '2012',
    volume: '53',
    pages: 'ARVO Abstract',
  },
  {
    authors: 'Busin M, Bovone C, Scorcia V.',
    title: 'Microkeratome-assisted two-stage technique of superficial anterior lamellar keratoplasty for Reis-Bücklers corneal dystrophy.',
    journal: 'Cornea.',
    year: '2011',
    volume: '30(10)',
    pages: '1083-1087',
  },
  {
    authors: 'Bovone C, Myerscough J, Friehmann A, Busin M.',
    title: 'Sutureless anterior lamellar keratoplasty with phacoemulsification.',
    journal: 'J Refract Surg.',
    year: '2015',
    volume: '31(5)',
    pages: '338-340',
  },
  {
    authors: 'Lucisano A, Bovone C, Villani E, Busin M.',
    title: 'Ten-year outcomes of microkeratome-assisted lamellar keratoplasty for keratoconus.',
    journal: 'Cornea.',
    year: '2021',
    volume: '40(10)',
    pages: '1278-1283',
  },
  {
    authors: 'Busin M, Santorum P, Scorcia V, Ponzin D.',
    title: 'Microkeratome-assisted preparation of ultrathin grafts for lamellar keratoplasty.',
    journal: 'Invest Ophthalmol Vis Sci.',
    year: '2012',
    volume: '53(1)',
    pages: '521-524',
  },
  {
    authors: 'Yu AC, Myerscough J, Bovone C, Busin M.',
    title: 'New perspectives on lamellar keratoplasty.',
    journal: 'Adv Ther.',
    year: '2014',
    volume: '31(5)',
    pages: '494-511',
  },
]
</script>
