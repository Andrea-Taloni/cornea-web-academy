<!-- src/views/surgery/dalk/_Postop.vue -->
<template>
  <CollapsibleSection
    title="Post-operative Management Protocol"
    iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    colorTheme="teal"
    :isExpanded="isExpanded"
    maxHeight="2000px"
    @toggle="$emit('toggle')"
  >
    <div class="max-w-3xl mx-auto">
      <div class="bg-white rounded-xl shadow-xl p-10">
        <h3 class="text-2xl font-bold mb-8 text-gray-800">Standard Post-operative Regimen</h3>

        <div class="space-y-6">
          <div
            class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
          >
            <h4 class="font-bold text-lg mb-2 text-gray-800">💊 Topical Corticosteroids</h4>
            <p class="text-gray-600 text-base">
              Prednisolone acetate 1% or dexamethasone 0.1%: QID × 1 month, TID × 1 month, BID × 2
              months, then taper. For 9mm grafts: Continue daily steroids for 8 months to prevent
              rejection.
            </p>
          </div>

          <div
            class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
          >
            <h4 class="font-bold text-lg mb-2 text-gray-800">🦠 Antimicrobial Prophylaxis</h4>
            <p class="text-gray-600 text-base">
              Moxifloxacin 0.5% or tobramycin 0.3%: QID × 2 weeks
            </p>
          </div>

          <div
            class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
          >
            <h4 class="font-bold text-lg mb-2 text-gray-800">📅 Follow-up Schedule</h4>
            <ul class="text-gray-600 space-y-1">
              <li class="text-base">• Day 1, Week 1, 2, 4</li>
              <li class="text-base">• Monthly for 6 months</li>
              <li class="text-base">• Every 3 months year 1</li>
              <li class="text-base">• Biannually thereafter</li>
            </ul>
          </div>

          <div
            class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
          >
            <h4 class="font-bold text-lg mb-2 text-gray-800">✂️ Suture Management</h4>
            <div class="text-gray-600 space-y-3">
              <p class="text-base">
                <strong>Conventional DALK:</strong> Selective removal based on topography starting
                at 3-6 months. Complete removal by 12-24 months.
              </p>
              <p class="text-base">
                <strong>Busin Modified:</strong> One running suture removed at 2-3 months, second
                suture removed at 10 months (&lt;30 years) or 12 months (&gt;30 years).
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <p class="text-base text-gray-700">
            <strong class="text-yellow-700">⚠️ Note:</strong> Unlike PK, long-term topical steroids
            are typically not required after 6-12 months due to absence of endothelial rejection
            risk. However, 9mm grafts may require extended steroid therapy to prevent stromal
            rejection.
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
