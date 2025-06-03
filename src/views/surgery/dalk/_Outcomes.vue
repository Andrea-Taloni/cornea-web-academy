<!-- src/views/surgery/dalk/_Outcomes.vue -->
<template>
  <!-- Comparison Table -->
  <div class="max-w-6xl mx-auto mb-12">
    <h3 class="text-2xl font-bold mb-6 text-gray-800">
      Comparative Outcomes: Conventional vs Modified DALK
    </h3>
    <div class="overflow-x-auto">
      <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <thead class="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <tr>
            <th class="px-6 py-4 text-left text-base">Parameter</th>
            <th class="px-6 py-4 text-center text-base">Conventional DALK<br />(8-8.5 mm)</th>
            <th class="px-6 py-4 text-center text-base">Busin Modified DALK<br />(9 mm/6 mm OZ)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">Bubble Success Rate</td>
            <td class="px-6 py-4 text-center text-base">57-81%</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">83.7%</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">BSCVA ≥20/20</td>
            <td class="px-6 py-4 text-center text-base">16-23%</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">35%</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">BSCVA ≥20/25</td>
            <td class="px-6 py-4 text-center text-base">50-73%</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">67.5%</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">BSCVA ≥20/40</td>
            <td class="px-6 py-4 text-center text-base">80-95%</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">95%</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">Mean Astigmatism</td>
            <td class="px-6 py-4 text-center text-base">2.9-4.1 D</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">3.1±1.3 D</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">Astigmatism ≤4.5 D</td>
            <td class="px-6 py-4 text-center text-base">~84%</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">91%</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">Regular Topographic Astigmatism</td>
            <td class="px-6 py-4 text-center text-base">Not reported</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">90%</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">Conversion to PK</td>
            <td class="px-6 py-4 text-center text-base">1.2-27%</td>
            <td class="px-6 py-4 text-center font-bold text-green-600 text-base">0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Graft Survival -->
  <div class="max-w-4xl mx-auto mb-8">
    <h3 class="text-2xl font-bold mb-6 text-gray-800">Graft Survival Rates</h3>
    <div class="overflow-x-auto">
      <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <thead class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <tr>
            <th class="px-6 py-4 text-left text-base">Time Point</th>
            <th class="px-6 py-4 text-center text-base">DALK</th>
            <th class="px-6 py-4 text-center text-base">PK (Historical Control)</th>
            <th class="px-6 py-4 text-center text-base">P-value</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">1 year</td>
            <td class="px-6 py-4 text-center text-base font-bold text-blue-600">98.2%</td>
            <td class="px-6 py-4 text-center text-base">95.1%</td>
            <td class="px-6 py-4 text-center text-base">0.042</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">5 years</td>
            <td class="px-6 py-4 text-center text-base font-bold text-blue-600">95.3%</td>
            <td class="px-6 py-4 text-center text-base">89.2%</td>
            <td class="px-6 py-4 text-center text-base">0.018</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-base font-medium">10 years</td>
            <td class="px-6 py-4 text-center text-base font-bold text-blue-600">90.7%</td>
            <td class="px-6 py-4 text-center text-base">73.5%</td>
            <td class="px-6 py-4 text-center text-base">&lt;0.001</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Endothelial Cell Density -->
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold mb-6 text-gray-800">Endothelial Cell Preservation</h3>
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
      <p class="text-gray-700 mb-6 text-base font-medium">Mean endothelial cell loss rates:</p>
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="text-3xl font-bold text-blue-600 mb-2">7.8%</div>
          <div class="text-base text-gray-600">6 months</div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="text-3xl font-bold text-blue-600 mb-2">11.2-11.4%</div>
          <div class="text-base text-gray-600">1 year</div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="text-3xl font-bold text-blue-600 mb-2">17.3%</div>
          <div class="text-base text-gray-600">5 years</div>
        </div>
      </div>
      <p class="text-gray-600 text-base mt-6 text-center italic">
        ✨ Significantly lower than PK (25-45% at 5 years), p&lt;0.001
      </p>
    </div>
  </div>
</template>

<script setup>
// No imports needed for this partial
</script>
