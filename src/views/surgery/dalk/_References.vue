<!-- ====== src/views/surgery/dalk/_References.vue ====== -->
<template>
  <CollapsibleSection
    title="References"
    iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    colorTheme="gray"
    :isExpanded="isExpanded"
    maxHeight="1200px"
    @toggle="$emit('toggle')"
  >
    <ReferencesSection :references="references" />
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import ReferencesSection from '@/components/surgery/ReferencesSection.vue'

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
    authors: 'Yu AC, Sollazzo A, Bovone C, Busin M.',
    title: 'Large-diameter deep anterior lamellar keratoplasty: A narrative review.',
    journal: 'Taiwan J Ophthalmol.',
    year: '2024',
    volume: '14(1)',
    pages: '27-33',
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
    authors: 'Lucisano A, Lionetti G, Yu AC, Giannaccare G, D\'Angelo S, Busin M, et al.',
    title: 'Outcomes of conventional 8.0-mm versus large 9.0-mm diameter deep anterior lamellar keratoplasty for keratoconus.',
    journal: 'Cornea.',
    year: '2023',
    volume: '42(7)',
    pages: '815-820',
  },
  {
    authors: 'Myerscough J, Roberts H, Yu AC, Elkadim M, Bovone C, Busin M.',
    title: 'Five-year outcomes of converted mushroom keratoplasty from intended deep anterior lamellar keratoplasty (DALK) mandate 9-mm diameter DALK as the optimal approach to keratoconus.',
    journal: 'Am J Ophthalmol.',
    year: '2020',
    volume: '220',
    pages: '9-18',
  },
  {
    authors: 'Anwar M, Teichmann KD.',
    title: 'Big-bubble technique to bare Descemet\'s membrane in anterior lamellar keratoplasty.',
    journal: 'J Cataract Refract Surg.',
    year: '2002',
    volume: '28(3)',
    pages: '398-403',
  },
  {
    authors: 'Reinhart WJ, et al.',
    title: 'Deep anterior lamellar keratoplasty as an alternative to penetrating keratoplasty: a report by the American Academy of Ophthalmology.',
    journal: 'Ophthalmology.',
    year: '2011',
    volume: '118(1)',
    pages: '209-218',
  },
  {
    authors: 'Borderie VM, et al.',
    title: 'Long-term results of deep anterior lamellar versus penetrating keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2012',
    volume: '119(2)',
    pages: '249-255',
  },
  {
    authors: 'Busin M, Scorcia V, Leon P, Nahum Y.',
    title: 'Outcomes of air injection within 2 mm inside a deep trephination for deep anterior lamellar keratoplasty in eyes with keratoconus.',
    journal: 'Am J Ophthalmol.',
    year: '2016',
    volume: '164',
    pages: '6-13',
  },
  {
    authors: 'Scorcia V, Giannaccare G, Lucisano A, Soda M, Scalzo GC, Myerscough J, et al.',
    title: 'Predictors of bubble formation and type obtained with pneumatic dissection during deep anterior lamellar keratoplasty in keratoconus.',
    journal: 'Am J Ophthalmol.',
    year: '2020',
    volume: '212',
    pages: '127-133',
  },
  {
    authors: 'Arundhati A, Chew MC, Lim L, Mehta JS, Lang SS, Htoon HM, et al.',
    title: 'Comparative study of long-term graft survival between penetrating keratoplasty and deep anterior lamellar keratoplasty.',
    journal: 'Am J Ophthalmol.',
    year: '2021',
    volume: '224',
    pages: '207-216',
  },
]
</script>
