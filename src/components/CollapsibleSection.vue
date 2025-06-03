<template>
  <div
    class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
  >
    <button
      @click="toggleSection"
      class="w-full px-8 py-6 flex items-center justify-between transition-all duration-300 group"
      :class="buttonClasses"
    >
      <div class="flex items-center space-x-4">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          :class="iconBgClasses"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 transition-colors" :class="titleHoverClass">
          {{ title }}
        </h2>
      </div>
      <div class="flex items-center space-x-2">
        <span
          class="text-sm text-gray-500 transition-colors"
          :class="helperTextClass"
          v-if="!isExpanded"
        >
          Click to expand
        </span>
        <svg
          class="w-6 h-6 transition-transform duration-300 text-gray-400"
          :class="[{ 'rotate-180': isExpanded }, arrowHoverClass]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="max-h-0 opacity-0"
      :enter-to-class="`max-h-[${maxHeight}] opacity-100`"
      :leave-from-class="`max-h-[${maxHeight}] opacity-100`"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-show="isExpanded" class="overflow-hidden">
        <div class="px-8 py-8 bg-gradient-to-b from-gray-50 to-white">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  iconPath: {
    type: String,
    required: true,
  },
  colorTheme: {
    type: String,
    default: 'blue',
    validator: (value) =>
      ['blue', 'green', 'purple', 'red', 'teal', 'indigo', 'sky', 'gray'].includes(value),
  },
  isExpanded: {
    type: Boolean,
    default: false,
  },
  maxHeight: {
    type: String,
    default: '2000px',
  },
})

const emit = defineEmits(['toggle'])

const toggleSection = () => {
  emit('toggle')
}

// Computed classes based on color theme
const buttonClasses = computed(() => {
  const hoverGradients = {
    blue: 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50',
    green: 'hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50',
    purple: 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50',
    red: 'hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50',
    teal: 'hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50',
    indigo: 'hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50',
    sky: 'hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50',
    gray: 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50',
  }
  return hoverGradients[props.colorTheme] || hoverGradients.blue
})

const iconBgClasses = computed(() => {
  const bgGradients = {
    blue: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    green: 'bg-gradient-to-br from-green-500 to-emerald-600',
    purple: 'bg-gradient-to-br from-purple-500 to-pink-600',
    red: 'bg-gradient-to-br from-red-500 to-orange-600',
    teal: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    indigo: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    sky: 'bg-gradient-to-br from-sky-500 to-blue-600',
    gray: 'bg-gradient-to-br from-gray-500 to-slate-600',
  }
  return bgGradients[props.colorTheme] || bgGradients.blue
})

const titleHoverClass = computed(() => {
  const hoverColors = {
    blue: 'group-hover:text-blue-700',
    green: 'group-hover:text-green-700',
    purple: 'group-hover:text-purple-700',
    red: 'group-hover:text-red-700',
    teal: 'group-hover:text-teal-700',
    indigo: 'group-hover:text-indigo-700',
    sky: 'group-hover:text-sky-700',
    gray: 'group-hover:text-gray-700',
  }
  return hoverColors[props.colorTheme] || hoverColors.blue
})

const helperTextClass = computed(() => {
  const textColors = {
    blue: 'group-hover:text-blue-600',
    green: 'group-hover:text-green-600',
    purple: 'group-hover:text-purple-600',
    red: 'group-hover:text-red-600',
    teal: 'group-hover:text-teal-600',
    indigo: 'group-hover:text-indigo-600',
    sky: 'group-hover:text-sky-600',
    gray: 'group-hover:text-gray-600',
  }
  return textColors[props.colorTheme] || textColors.blue
})

const arrowHoverClass = computed(() => {
  const arrowColors = {
    blue: 'group-hover:text-blue-600',
    green: 'group-hover:text-green-600',
    purple: 'group-hover:text-purple-600',
    red: 'group-hover:text-red-600',
    teal: 'group-hover:text-teal-600',
    indigo: 'group-hover:text-indigo-600',
    sky: 'group-hover:text-sky-600',
    gray: 'group-hover:text-gray-600',
  }
  return arrowColors[props.colorTheme] || arrowColors.blue
})
</script>

<style scoped>
/* Custom transition styles for smooth accordion effect */
.max-h-0 {
  max-height: 0;
}

/* Dynamic max-height classes will be handled inline */
</style>
