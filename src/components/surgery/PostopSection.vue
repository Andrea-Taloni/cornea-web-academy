<!-- src/components/surgery/PostopSection.vue -->
<template>
  <div class="w-full">
    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      <!-- Topical Corticosteroids -->
      <div class="bg-white p-4 rounded-xl shadow-lg border border-teal-200">
        <h4 class="font-bold text-base mb-3 text-teal-700 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          {{ corticosteroids.title }}
        </h4>
        <div class="text-gray-700 space-y-2">
          <p class="font-bold text-sm">{{ corticosteroids.medication }}</p>
          <ul class="text-sm space-y-1">
            <li
              v-for="(dose, index) in corticosteroids.dosing"
              :key="index"
              class="flex items-start"
            >
              <span class="text-teal-600 mr-2">•</span>
              <span>{{ dose }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Antimicrobial Prophylaxis -->
      <div class="bg-white p-4 rounded-xl shadow-lg border border-green-200">
        <h4 class="font-bold text-base mb-3 text-green-700 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          {{ antimicrobial.title }}
        </h4>
        <div class="text-gray-700 space-y-2">
          <p class="font-bold text-sm">{{ antimicrobial.optionsLabel }}</p>
          <ul class="text-sm space-y-1">
            <li
              v-for="(option, index) in antimicrobial.options"
              :key="index"
              class="flex items-start"
            >
              <span class="text-green-600 mr-2">•</span>
              <span>{{ option }}</span>
            </li>
          </ul>
          <p class="text-sm mt-2">
            <span class="font-bold">{{ antimicrobial.dosingLabel }}:</span>
            {{ antimicrobial.dosing }}
          </p>
        </div>
      </div>

      <!-- Follow-up Schedule -->
      <div class="bg-white p-4 rounded-xl shadow-lg border border-blue-200">
        <h4 class="font-bold text-base mb-3 text-blue-700 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {{ followUp.title }}
        </h4>
        <div class="text-gray-700">
          <ul class="text-sm space-y-1">
            <li
              v-for="(schedule, index) in followUp.schedule"
              :key="index"
              class="flex items-start"
            >
              <span class="text-blue-600 mr-2">•</span>
              <span>{{ schedule }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Suture Management -->
      <div class="bg-white p-4 rounded-xl shadow-lg border border-purple-200">
        <h4 class="font-bold text-base mb-3 text-purple-700 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
            />
          </svg>
          {{ sutureManagement.title }}
        </h4>
        <div class="text-gray-700">
          <ul class="text-sm space-y-1">
            <li
              v-for="(timing, index) in sutureManagement.timings"
              :key="index"
              class="flex items-start"
              :class="{ 'ml-4': timing.isSubItem }"
            >
              <span class="text-purple-600 mr-2">{{ timing.isSubItem ? '◦' : '•' }}</span>
              <span>{{ timing.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  corticosteroids: {
    type: Object,
    required: true,
  },
  antimicrobial: {
    type: Object,
    required: true,
  },
  followUp: {
    type: Object,
    required: true,
  },
  sutureManagement: {
    type: Object,
    required: true,
  },
})
</script>
