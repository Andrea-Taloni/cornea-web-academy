<!-- src/views/surgery/dalk/_References.vue -->
<template>
  <CollapsibleSection
    title="References"
    iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    colorTheme="gray"
    :isExpanded="isExpanded"
    maxHeight="2000px"
    @toggle="$emit('toggle')"
  >
    <div class="max-w-4xl mx-auto">
      <div class="space-y-4">
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            1. Yu AC, Sollazzo A, Bovone C, Busin M. Large-diameter deep anterior lamellar
            keratoplasty: A narrative review.
            <em class="text-gray-600">Taiwan J Ophthalmol.</em> 2024;14(1):27-33.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            2. Busin M, Leon P, Nahum Y, Scorcia V. Large (9 mm) Deep Anterior Lamellar Keratoplasty
            with Clearance of a 6-mm Optical Zone Optimizes Outcomes of Keratoconus Surgery.
            <em class="text-gray-600">Ophthalmology.</em> 2017;124(7):1072-1080.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            3. Lucisano A, Lionetti G, Yu AC, Giannaccare G, D'Angelo S, Busin M, et al. Outcomes of
            conventional 8.0-mm versus large 9.0-mm diameter deep anterior lamellar keratoplasty for
            keratoconus.
            <em class="text-gray-600">Cornea.</em> 2023;42(7):815-820.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            4. Myerscough J, Roberts H, Yu AC, Elkadim M, Bovone C, Busin M. Five-year outcomes of
            converted mushroom keratoplasty from intended deep anterior lamellar keratoplasty (DALK)
            mandate 9-mm diameter DALK as the optimal approach to keratoconus.
            <em class="text-gray-600">Am J Ophthalmol.</em> 2020;220:9-18.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            5. Anwar M, Teichmann KD. Big-bubble technique to bare Descemet's membrane in anterior
            lamellar keratoplasty.
            <em class="text-gray-600">J Cataract Refract Surg.</em> 2002;28(3):398-403.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            6. Reinhart WJ, et al. Deep anterior lamellar keratoplasty as an alternative to
            penetrating keratoplasty: a report by the American Academy of Ophthalmology.
            <em class="text-gray-600">Ophthalmology.</em> 2011;118(1):209-218.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            7. Borderie VM, et al. Long-term results of deep anterior lamellar versus penetrating
            keratoplasty.
            <em class="text-gray-600">Ophthalmology.</em> 2012;119(2):249-255.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            8. Busin M, Scorcia V, Leon P, Nahum Y. Outcomes of air injection within 2 mm inside a
            deep trephination for deep anterior lamellar keratoplasty in eyes with keratoconus.
            <em class="text-gray-600">Am J Ophthalmol.</em> 2016;164:6-13.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            9. Scorcia V, Giannaccare G, Lucisano A, Soda M, Scalzo GC, Myerscough J, et al.
            Predictors of bubble formation and type obtained with pneumatic dissection during deep
            anterior lamellar keratoplasty in keratoconus.
            <em class="text-gray-600">Am J Ophthalmol.</em> 2020;212:127-133.
          </p>
        </div>
        <div
          class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <p class="text-gray-700 text-base">
            10. Arundhati A, Chew MC, Lim L, Mehta JS, Lang SS, Htoon HM, et al. Comparative study
            of long-term graft survival between penetrating keratoplasty and deep anterior lamellar
            keratoplasty.
            <em class="text-gray-600">Am J Ophthalmol.</em> 2021;224:207-216.
          </p>
        </div>
      </div>
    </div>
  </CollapsibleSection>
</template>

<script setup>
import CollapsibleSection from '@/components/CollapsibleSection.vue'

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle'])
</script>
