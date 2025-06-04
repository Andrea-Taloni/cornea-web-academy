<!-- src/components/surgery/ComplicationsSection.vue -->
<template>
  <div class="w-full">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Intraoperative Complications Box -->
      <div :class="getBoxClass(intraoperativeBox.colorTheme)">
        <h4
          :class="getTitleClass(intraoperativeBox.colorTheme)"
          class="font-bold text-lg mb-4 flex items-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ intraoperativeBox.title }}
        </h4>
        <div class="text-gray-700 space-y-3">
          <div v-for="(complication, index) in intraoperativeBox.complications" :key="index">
            <p class="font-bold text-base">{{ complication.name }}</p>
            <ul class="text-base pl-4 mt-1">
              <li v-for="(detail, detailIndex) in complication.details" :key="detailIndex">
                • {{ detail.label }}:
                <span v-if="detail.highlight" class="font-bold text-green-600">{{
                  detail.value
                }}</span>
                <span v-else>{{ detail.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Postoperative Complications Box -->
      <div :class="getBoxClass(postoperativeBox.colorTheme)">
        <h4
          :class="getTitleClass(postoperativeBox.colorTheme)"
          class="font-bold text-lg mb-4 flex items-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ postoperativeBox.title }}
        </h4>
        <div class="text-gray-700 space-y-4">
          <div v-for="(section, index) in postoperativeBox.sections" :key="index">
            <p class="font-bold text-base" v-html="section.title"></p>
            <ul class="text-base pl-4 mt-1 space-y-1">
              <li v-for="(item, itemIndex) in section.items" :key="itemIndex">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  intraoperativeBox: {
    type: Object,
    required: true,
    /* Expected structure:
    {
      title: 'Intraoperative Complications',
      colorTheme: 'orange', // 'orange', 'red', 'yellow', 'green', 'blue', 'purple'
      complications: [
        {
          name: 'Descemet perforation',
          details: [
            { label: 'Conventional', value: '5-32%' },
            { label: 'Busin Modified', value: '3.7%', highlight: true },
            { label: 'Management', value: 'Air tamponade, conversion to PK if large' }
          ]
        }
      ]
    }
    */
  },
  postoperativeBox: {
    type: Object,
    required: true,
    /* Expected structure:
    {
      title: 'Postoperative Complications',
      colorTheme: 'red',
      sections: [
        {
          title: 'Early (<1 month)', // can include HTML like &lt;
          items: [
            'Double anterior chamber: 2.5% (Busin) vs 8-15% (conventional)',
            'Interface haze: 10-20%'
          ]
        }
      ]
    }
    */
  },
})

// Helper functions for styling
const getBoxClass = (colorTheme) => {
  const baseClass = 'bg-white p-6 rounded-xl shadow-lg border'
  const borderColors = {
    orange: 'border-orange-200',
    red: 'border-red-200',
    yellow: 'border-yellow-200',
    green: 'border-green-200',
    blue: 'border-blue-200',
    purple: 'border-purple-200',
  }
  return `${baseClass} ${borderColors[colorTheme] || 'border-gray-200'}`
}

const getTitleClass = (colorTheme) => {
  const titleColors = {
    orange: 'text-orange-700',
    red: 'text-red-700',
    yellow: 'text-yellow-700',
    green: 'text-green-700',
    blue: 'text-blue-700',
    purple: 'text-purple-700',
  }
  return titleColors[colorTheme] || 'text-gray-700'
}
</script>
