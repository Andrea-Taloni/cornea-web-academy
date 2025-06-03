<!-- src/views/surgery/dalk/_Techniques.vue -->
<template>
  <!-- Use full width with compact layout -->
  <div class="mb-8">
    <h3 class="text-xl font-bold mb-4 text-gray-800">Conventional Big Bubble Technique</h3>
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-blue-600 font-bold text-sm">1</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Initial Trephination</h4>
            <p class="text-gray-600 text-sm">
              Partial-thickness trephination to 60-80% corneal depth. Diameter: 7.75-8.25 mm.
              <span class="text-blue-600 italic"
                >Pachymetry-guided reduces perforation risk &lt;5%.</span
              >
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-blue-600 font-bold text-sm">2</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Pneumatic Dissection</h4>
            <p class="text-gray-600 text-sm">
              27-30G needle 4mm from center, inject 2-5ml air for Type 1 bubble.
              <span class="text-green-600 italic">Success: 70-90%.</span>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-blue-600 font-bold text-sm">3</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Anterior Lamellar Removal</h4>
            <p class="text-gray-600 text-sm">
              Quadrant-by-quadrant removal with crescent blade.
              <span class="text-red-600 italic">⚠️ Avoid excessive manipulation.</span>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-blue-600 font-bold text-sm">4</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Graft Preparation & Suturing</h4>
            <p class="text-gray-600 text-sm">
              Remove Descemet-endothelium. Oversize: 0.25-0.5mm. 16-24 interrupted 10-0 nylon.
              <span class="text-purple-600 italic">Suture removal: 12-18 months.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Busin Modified Technique -->
  <div>
    <h3 class="text-xl font-bold mb-4 text-gray-800">
      Busin Modified Technique (9-mm DALK with 6-mm Optical Zone)
    </h3>

    <div class="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-200">
      <p class="text-gray-700 text-sm">
        <strong class="text-blue-900">Key Innovation:</strong> Combines 9-mm graft with limited deep
        stroma removal to central 6-mm zone, creating 1.5-mm peripheral crown. Optimizes outcomes
        while minimizing complications.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-sm">1</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Deep Trephination</h4>
            <p class="text-gray-600 text-sm">
              450-550μm depth, 9mm diameter. Set within 100μm of AS-OCT measurement.
              <span class="text-green-600 font-medium">Perforation: 1.2%</span>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-sm">2</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Pneumatic Dissection</h4>
            <p class="text-gray-600 text-sm">
              Insert probe 2mm from trephination. Success: 83.7%, 98.5% Type 1.
              <span class="text-blue-600 font-medium">Bubble: 7.7±0.8mm</span>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-sm">3</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Anterior Stroma Debulking</h4>
            <p class="text-gray-600 text-sm">
              Remove ~80% anterior stroma in all cases, regardless of bubble success.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-sm">4</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Limited Deep Stroma Removal</h4>
            <p class="text-gray-600 text-sm">
              Mark 6mm zone. Remove deep stroma only within 6mm.
              <span class="text-indigo-600 font-medium">50% less dissection area</span>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div class="flex items-start space-x-3">
          <div
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-sm">5</span>
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-base mb-1 text-gray-800">Donor Transplantation</h4>
            <p class="text-gray-600 text-sm">
              9mm lamella with 400μm microkeratome. Double running 10-0 nylon.
              <span class="text-purple-600 font-medium">6mm central + 1.5mm crown</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-3 mt-4">
      <div class="bg-gray-100 p-3 rounded-lg">
        <h4 class="font-semibold text-sm mb-1 text-gray-800">Manual Dissection (Melles)</h4>
        <p class="text-gray-600 text-xs">
          Layer-by-layer for failed bubbles. Higher interface irregularity.
        </p>
      </div>
      <div class="bg-gray-100 p-3 rounded-lg">
        <h4 class="font-semibold text-sm mb-1 text-gray-800">Femtosecond Laser-Assisted</h4>
        <p class="text-gray-600 text-xs">Precise cuts but no visual advantage vs big bubble.</p>
      </div>
      <div class="bg-gray-100 p-3 rounded-lg">
        <h4 class="font-semibold text-sm mb-1 text-gray-800">Visco-dissection</h4>
        <p class="text-gray-600 text-xs">Alternative when air injection fails. Variable results.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed for this partial
</script>
