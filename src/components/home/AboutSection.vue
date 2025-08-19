<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div class="space-y-4 text-gray-600">
          <p class="text-lg leading-relaxed">
            {{ $t('home.about.intro') }} 
            <strong class="text-gray-900">{{ $t('home.about.department') }}</strong> 
            {{ $t('home.about.location') }}
          </p>
          <p class="text-lg leading-relaxed">
            {{ $t('home.about.founded') }} <strong class="text-gray-900">{{ $t('home.about.year') }}</strong> {{ $t('common.by') || 'by' }} <strong class="text-gray-900">{{ $t('home.about.founder') }}</strong>.
          </p>
          <p class="text-lg leading-relaxed">
            {{ $t('home.about.procedures') }} <strong class="text-gray-900">{{ $t('home.about.proceduresCount') }}</strong>, 
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