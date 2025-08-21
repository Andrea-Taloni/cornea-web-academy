<template>
  <section class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <div class="space-y-4 text-gray-600">
          <p class="text-xl leading-relaxed">
            {{ $t('home.about.procedures') }} <strong class="text-gray-900">{{ $t('home.about.proceduresCount') }}</strong><br>
            {{ $t('home.about.surgeryTypes') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>