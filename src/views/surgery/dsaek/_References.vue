<!-- src/views/surgery/dsaek/_References.vue -->
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

// Updated references with recent high-impact studies
const references = [
  {
    authors: 'Wacker K, Böhringer D, Reinhard T, et al.',
    title:
      'Ten-year outcomes after DMEK, DSAEK, and PK: insights on graft survival, endothelial cell density loss, rejection and visual acuity.',
    journal: 'Sci Rep.',
    year: '2025',
    volume: '15(1)',
    pages: '692',
  },
  {
    authors: 'Romano V, Passacantando T, Airaldi M, et al.',
    title:
      'Ultrathin Descemet Stripping Automated Endothelial Keratoplasty (UT-DSAEK) versus Descemet Membrane Endothelial Keratoplasty (DMEK)—a systematic review and meta-analysis.',
    journal: 'Eye (Lond).',
    year: '2023',
    volume: '37(15)',
    pages: '3088-3095',
  },
  {
    authors: 'Lass JH, Benetz BA, Patel SV, et al.',
    title:
      'Donor, Recipient, and Operative Factors Associated With Increased Endothelial Cell Loss in the Cornea Preservation Time Study.',
    journal: 'JAMA Ophthalmol.',
    year: '2019',
    volume: '137(2)',
    pages: '185-193',
  },
  {
    authors: 'Price MO, Calhoun P, Kollman C, Price FW Jr, Lass JH.',
    title:
      'Descemet Stripping Endothelial Keratoplasty: Ten-Year Endothelial Cell Loss Compared with Penetrating Keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2016',
    volume: '123(7)',
    pages: '1421-7',
  },
  {
    authors: 'Woo JH, Htoon HM, Tan D.',
    title:
      'Hybrid Descemet Membrane Endothelial Keratoplasty (H-DMEK): results of a donor insertion pull-through technique using donor stroma as carrier.',
    journal: 'Br J Ophthalmol.',
    year: '2020',
    volume: '104(10)',
    pages: '1358-1362',
  },
  {
    authors: 'Birbal RS, Parker J, Dirisamer M, et al.',
    title:
      'Descemet Membrane Endothelial Keratoplasty: The Learning Curve and Comparison With Descemet Stripping Automated Endothelial Keratoplasty Outcomes.',
    journal: 'Cornea.',
    year: '2021',
    volume: '40(9)',
    pages: '1112-1119',
  },
  {
    authors: 'Chamberlain W, Lin CC, Austin A, et al.',
    title:
      'Descemet Endothelial Thickness Comparison Trial: A Randomized Trial Comparing Ultrathin Descemet Stripping Automated Endothelial Keratoplasty with Descemet Membrane Endothelial Keratoplasty.',
    journal: 'Ophthalmology.',
    year: '2019',
    volume: '126(1)',
    pages: '19-26',
  },
  {
    authors: 'Busin M, Madi S, Santorum P, Scorcia V, Beltz J.',
    title:
      "Ultrathin descemet's stripping automated endothelial keratoplasty with the microkeratome double-pass technique: two-year outcomes.",
    journal: 'Ophthalmology.',
    year: '2013',
    volume: '120(6)',
    pages: '1186-94',
  },
  {
    authors: 'Dunker SL, Dickman MM, Wisse RPL, et al.',
    title:
      'Rebubbling and graft failure in Descemet membrane endothelial keratoplasty: a prospective Dutch registry study.',
    journal: 'Br J Ophthalmol.',
    year: '2023',
    volume: '107(1)',
    pages: '17-23',
  },
  {
    authors: 'Sharma N, Maharana PK, Singhi S, et al.',
    title:
      'Descemet Stripping Automated Endothelial Keratoplasty in Pediatric Age Group: A Decade of Our Experience.',
    journal: 'Cornea.',
    year: '2021',
    volume: '40(12)',
    pages: '1571-1576',
  },
  {
    authors: 'Alshaker S, Mimouni M, Batawi H, et al.',
    title:
      'Four-Year Survival Comparison of Endothelial Keratoplasty Techniques in Patients With Previous Glaucoma Surgery.',
    journal: 'Cornea.',
    year: '2021',
    volume: '40(10)',
    pages: '1282-1289',
  },
  {
    authors: 'Terry MA, Shamie N, Chen ES, et al.',
    title:
      "Endothelial keratoplasty for Fuchs' dystrophy with cataract: complications and clinical results with the new triple procedure.",
    journal: 'Ophthalmology.',
    year: '2009',
    volume: '116(4)',
    pages: '631-9',
  },
  {
    authors: 'Patel SV, Hodge DO, Treichel EJ, et al.',
    title:
      'Predicting Corneal Endothelial Cell Loss After Cataract Surgery: A Simple Risk Score Using Preoperative Variables.',
    journal: 'Ophthalmology.',
    year: '2021',
    volume: '128(9)',
    pages: '1325-1332',
  },
  {
    authors: 'Stuart AJ, Romano V, Virgili G, Shortt AJ.',
    title:
      "Descemet's membrane endothelial keratoplasty (DMEK) versus Descemet's stripping automated endothelial keratoplasty (DSAEK) for corneal endothelial failure.",
    journal: 'Cochrane Database Syst Rev.',
    year: '2018',
    volume: '6(6)',
    pages: 'CD012097',
  },
  {
    authors: 'Price MO, Mehta JS, Jurkunas UV, Price FW Jr.',
    title: 'Corneal endothelial dysfunction: Evolving understanding and treatment options.',
    journal: 'Prog Retin Eye Res.',
    year: '2021',
    volume: '82',
    pages: '100904',
  },
]
</script>
