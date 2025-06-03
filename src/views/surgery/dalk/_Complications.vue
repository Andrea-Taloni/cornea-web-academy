<!-- src/views/surgery/dalk/_Complications.vue -->
<template>
  <div class="max-w-4xl mx-auto">
    <!-- Intraoperative -->
    <div class="mb-8">
      <h3 class="text-2xl font-bold mb-6 text-gray-800">Intraoperative Complications</h3>
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <tr>
              <th class="px-6 py-4 text-left text-base">Complication</th>
              <th class="px-6 py-4 text-center text-base">Conventional</th>
              <th class="px-6 py-4 text-center text-base">Busin Modified</th>
              <th class="px-6 py-4 text-left text-base">Management</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-base font-medium">Descemet perforation</td>
              <td class="px-6 py-4 text-center text-base">5-32%</td>
              <td class="px-6 py-4 text-center font-bold text-green-600 text-base">3.7%</td>
              <td class="px-6 py-4 text-base text-gray-600">
                Air tamponade, conversion to PK if large
              </td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-base font-medium">Failed big bubble</td>
              <td class="px-6 py-4 text-center text-base">10-43%</td>
              <td class="px-6 py-4 text-center font-bold text-green-600 text-base">16.3%</td>
              <td class="px-6 py-4 text-base text-gray-600">
                Manual dissection (limited to 6mm in modified)
              </td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-base font-medium">Conversion to PK</td>
              <td class="px-6 py-4 text-center text-base">1.2-27%</td>
              <td class="px-6 py-4 text-center font-bold text-green-600 text-base">0%</td>
              <td class="px-6 py-4 text-base text-gray-600">9mm PK or mushroom keratoplasty</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Postoperative -->
    <div>
      <h3 class="text-2xl font-bold mb-6 text-gray-800">Postoperative Complications</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
          <h4 class="font-bold text-lg text-orange-700 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Early (&lt;1 month)
          </h4>
          <ul class="text-gray-700 space-y-2">
            <li class="text-base">
              • Double anterior chamber: 2.5% (Busin) vs 8-15% (conventional)
            </li>
            <li class="text-base">• Interface haze: 10-20%</li>
            <li class="text-base">• Epithelial defects: 5-10%</li>
            <li class="text-base">• Pupillary block: 2-5%</li>
            <li class="text-base">• Descemet membrane detachment: 2.5% (manageable with air)</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg border border-red-200">
          <h4 class="font-bold text-lg text-red-700 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Late (&gt;1 month)
          </h4>
          <ul class="text-gray-700 space-y-2">
            <li class="text-base">• Stromal rejection: 7.5% (Busin) vs 1-10% (conventional)</li>
            <li class="text-base">• Interface opacification: 5-10%</li>
            <li class="text-base">• Secondary glaucoma: 5-15%</li>
            <li class="text-base">• Late endothelial failure: 2-5%</li>
            <li class="text-base">• No wound dehiscence reported with Busin technique</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed for this partial
</script>
