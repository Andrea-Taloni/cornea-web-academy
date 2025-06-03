<!-- src/views/surgery/dalk/_Indications.vue -->
<template>
  <!-- Key Requirements at the top -->
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
    <div class="flex items-center space-x-6 text-sm">
      <span class="font-semibold text-blue-900">Key Requirements:</span>
      <span class="text-blue-700">• Healthy endothelium</span>
      <span class="text-blue-700">• No DM involvement</span>
      <span class="text-blue-700">• Anterior pathology only</span>
    </div>
  </div>

  <div class="grid lg:grid-cols-2 gap-6">
    <!-- Indications -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
      <h3
        class="text-xl font-bold p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 text-blue-900"
      >
        Indications
      </h3>
      <div class="p-5 space-y-4">
        <div class="pl-4 py-2">
          <h4 class="font-bold text-base text-gray-800">
            Keratoconus <span class="text-sm font-normal text-gray-600">(70-80% of cases)</span>
          </h4>
          <p class="text-sm text-gray-600 mt-1">
            Progressive/advanced disease, contact lens intolerance, central scarring, thickness
            &lt;400μm. Busin modification ideal for broad-base cases.
          </p>
        </div>
        <div class="pl-4 py-2">
          <h4 class="font-bold text-base text-gray-800">Corneal Stromal Dystrophies</h4>
          <p class="text-sm text-gray-600 mt-1">
            Granular, lattice, macular, Avellino dystrophies. Preserved endothelial function
            required (ECD &gt;2000/mm²).
          </p>
        </div>
        <div class="pl-4 py-2">
          <h4 class="font-bold text-base text-gray-800">Post-Infectious Scarring</h4>
          <p class="text-sm text-gray-600 mt-1">
            Bacterial, viral (HSV/VZV), fungal, Acanthamoeba sequelae. Deep scars contraindicate
            modified technique.
          </p>
        </div>
        <div class="pl-4 py-2">
          <h4 class="font-bold text-base text-gray-800">Other Anterior Pathology</h4>
          <p class="text-sm text-gray-600 mt-1">
            Trauma (non-perforating), chemical burns (superficial), degenerations, anterior
            dystrophies.
          </p>
        </div>
      </div>
    </div>

    <!-- Contraindications -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <h3 class="text-xl font-bold p-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        Contraindications
      </h3>
      <div class="grid grid-cols-2">
        <div class="p-5 bg-red-50/50 border-r border-gray-200">
          <h4 class="font-bold text-base text-red-700 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Absolute
          </h4>
          <ul class="text-sm text-gray-700 space-y-2">
            <li class="flex items-start">
              <span class="text-red-500 mr-2 mt-0.5">•</span>
              <span
                >Endothelial dysfunction<br /><span class="text-xs text-gray-500"
                  >(ECD &lt;1000 cells/mm²)</span
                ></span
              >
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2 mt-0.5">•</span>
              <span
                >Descemet rupture<br /><span class="text-xs text-gray-500"
                  >(acute hydrops)</span
                ></span
              >
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2 mt-0.5">•</span>
              <span>Deep stromal scars to DM</span>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2 mt-0.5">•</span>
              <span>Active infection</span>
            </li>
          </ul>
        </div>
        <div class="p-5 bg-orange-50/50">
          <h4 class="font-bold text-base text-orange-700 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Relative
          </h4>
          <ul class="text-sm text-gray-700 space-y-2">
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 mt-0.5">•</span>
              <span>Previous IOL surgery</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 mt-0.5">•</span>
              <span>Peripheral thinning</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 mt-0.5">•</span>
              <span>Significant neovascularization</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 mt-0.5">•</span>
              <span>Severe dry eye</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed for this partial
</script>
