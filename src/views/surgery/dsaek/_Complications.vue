<!-- src/views/surgery/dsaek/_Complications.vue -->
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
import ComplicationsSection, {
  complicationsMetadata,
} from '@/components/surgery/ComplicationsComponent.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])

// Complications data from Cornea Donor Study 3-year Results
const complicationsData = ref({
  intraoperative: {
    title: 'Intraoperative Considerations',
    colorTheme: 'orange',
    complications: [
      {
        name: 'Surgical Technique Impact',
        details: [
          { label: 'Study surgeons', value: '2 experienced DSAEK surgeons' },
          { label: 'Incision sizes used', value: '3.2 mm (n=103) and 5.0 mm (n=70)' },
          { label: 'Insertion method', value: 'Forceps (n=167) or funnel glide (n=6)' },
          {
            label: 'Key finding',
            value: '5 mm incision significantly reduces cell loss vs 3.2 mm',
          },
        ],
      },
      {
        name: 'Graft Preparation',
        details: [
          { label: 'Donor criteria', value: 'Age 10-75 years' },
          { label: 'ECD requirement', value: '2300-3300 cells/mm²' },
          { label: 'Death to surgery', value: '≤5 days (mean 4 days in study)' },
          { label: 'Graft diameter', value: '8.25-9.0 mm depending on recipient' },
        ],
      },
    ],
  },
  postoperative: {
    title: 'Postoperative Complications from 3-Year Study',
    colorTheme: 'red',
    sections: [
      {
        title: 'Graft Failure Causes (Within 3 Years)',
        items: [
          '**Primary donor failure**: 0% in DSAEK vs 0.3% in PKP',
          '**Immunologic rejection failure**: 0.6% in DSAEK vs 3.1% in PKP',
          '**Endothelial decompensation**: 1.7% in DSAEK vs 2.1% in PKP',
          '**Unsatisfactory vision**: 1.7% in DSAEK (wrinkles/haze) vs 0% in PKP',
          '**Infection**: 0% in DSAEK vs 1.1% in PKP',
          '**Epithelial defects**: 0% in DSAEK vs 0.5% in PKP',
          '**Overall 3-year failure rate**: 4% in DSAEK (7/173 grafts)',
        ],
      },
      {
        title: 'Rejection Episodes',
        items: [
          '**Total rejection episodes**: 6.4% (11/173) in DSAEK',
          '**3-year predicted probability**: 9% DSAEK vs 20% PKP (P=0.0005)',
          '**Significantly lower risk**: Less than half the rejection rate of PKP',
          '**Note**: Only 1 rejection led to graft failure (0.6%)',
        ],
      },
      {
        title: 'Endothelial Cell Loss Patterns',
        items: [
          '**1-year cell loss**: 36% DSAEK vs 18% PKP (higher initial loss)',
          '**3-year cell loss**: 48% DSAEK vs 53% PKP (comparable)',
          "**Fuchs' dystrophy**: 46% DSAEK vs 51% PKP at 3 years",
          "**Non-Fuchs' cases**: 59% DSAEK vs 61% PKP at 3 years",
          '**Incision width effect**: 60% loss (3.2mm) vs 33% loss (5.0mm) at 3 years',
        ],
      },
      {
        title: 'Study-Specific Outcomes',
        items: [
          '**No wound complications**: Zero cases of dehiscence or trauma',
          '**No suprachoroidal hemorrhage**: Eliminated risk vs PKP',
          '**Visual dissatisfaction regrafts**: 1.7% (unique to DSAEK)',
          '**Follow-up rate**: 64% examined at 3 years, 25% clear but lost to follow-up',
          '**Death rate**: 6.4% died during 3-year study period',
        ],
      },
    ],
  },
})
</script>
