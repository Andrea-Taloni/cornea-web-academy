<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
      title="Change language"
    >
      <img 
        :src="getFlagUrl(currentFlag)" 
        :alt="currentLanguageName"
        class="w-6 h-4 object-cover rounded-sm"
      />
      <svg
        class="w-3 h-3 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden"
    >
      <div class="py-1">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-all duration-150"
          :class="{ 
            'bg-blue-50 text-blue-600 border-l-4 border-blue-500': currentLocale === lang.code,
            'hover:bg-gray-100': currentLocale !== lang.code 
          }"
        >
          <img 
            :src="getFlagUrl(lang.flag)" 
            :alt="lang.name"
            class="w-7 h-5 object-cover rounded-sm shadow-sm"
          />
          <span class="font-medium">{{ lang.name }}</span>
          <svg v-if="currentLocale === lang.code" class="ml-auto w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const languages = [
  { code: 'en', name: 'English', flag: 'GB', emoji: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: 'IT', emoji: '🇮🇹' },
  { code: 'es', name: 'Español', flag: 'ES', emoji: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: 'FR', emoji: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: 'DE', emoji: '🇩🇪' },
  { code: 'pl', name: 'Polski', flag: 'PL', emoji: '🇵🇱' },
  { code: 'cs', name: 'Čeština', flag: 'CZ', emoji: '🇨🇿' },
  { code: 'ro', name: 'Română', flag: 'RO', emoji: '🇷🇴' },
  { code: 'ru', name: 'Русский', flag: 'RU', emoji: '🇷🇺' },
  { code: 'zh', name: '中文', flag: 'CN', emoji: '🇨🇳' }
]

const currentLocale = computed(() => locale.value)

const currentLanguage = computed(() => 
  languages.find(lang => lang.code === locale.value) || languages[0]
)

const currentFlag = computed(() => currentLanguage.value.flag)
const currentLanguageName = computed(() => currentLanguage.value.name)

// Funzione per ottenere l'URL della bandiera
const getFlagUrl = (countryCode) => {
  return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`
}

const changeLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('language', langCode)
  isOpen.value = false
}
</script>