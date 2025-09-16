<!-- src/views/surgery/dalk/_References.vue -->
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
    authors: 'Reinhart WJ, Musch DC, Jacobs DS, Lee WB, Kaufman SC, Shtein RM.',
    title: 'Deep anterior lamellar keratoplasty as an alternative to penetrating keratoplasty a report by the american academy of ophthalmology.',
    journal: 'Ophthalmology.',
    year: '2011',
    volume: '118',
    pages: '209-18',
  },
  {
    authors: 'Eye Bank Association of America.',
    title: '2019 Eye Banking Statistical Report.',
    journal: 'Washington, DC, USA: Eye Bank Association of America',
    year: '2019',
    volume: '',
    pages: 'Available from: https://restoresight.org/wpcontent/uploads/2020/04/2019-EBAA-Stat-Report-FINAL.pdf',
  },
  {
    authors: 'Thanitcul C, Mathews P, Woreta FA, Akpek EK, Varadaraj V, Srikumaran D.',
    title: 'Surgeon preference for keratoplasty techniques and barriers to performing deep anterior lamellar keratoplasty.',
    journal: 'Cornea.',
    year: '2021',
    volume: '40',
    pages: '1406-12',
  },
  {
    authors: 'Anwar M, Teichmann KD.',
    title: 'Big-bubble technique to bare Descemet\'s membrane in anterior lamellar keratoplasty.',
    journal: 'J Cataract Refract Surg.',
    year: '2002',
    volume: '28',
    pages: '398-403',
  },
  {
    authors: 'Busin M, Leon P, Nahum Y, Scorcia V.',
    title: 'Large (9 mm) Deep Anterior Lamellar Keratoplasty with Clearance of a 6-mm Optical Zone Optimizes Outcomes of Keratoconus Surgery.',
    journal: 'Ophthalmology.',
    year: '2017',
    volume: '124(7)',
    pages: '1072-1080',
  },
  {
    authors: 'Borderie VM, Sandali O, Bullet J, Gaujoux T, Touzeau O, Laroche L.',
    title: 'Long-term Results of Deep Anterior Lamellar versus Penetrating Keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2012',
    volume: '119(2)',
    pages: '249-255',
  },
  {
    authors: "Lucisano A, Lionetti G, Yu AC, Giannaccare G, D'Angelo S, Busin M, et al.",
    title:
      'Outcomes of conventional 8.0-mm versus large 9.0-mm diameter deep anterior lamellar keratoplasty for keratoconus.',
    journal: 'Cornea.',
    year: '2023',
    volume: '42(7)',
    pages: '815-820',
  },
]
</script>
