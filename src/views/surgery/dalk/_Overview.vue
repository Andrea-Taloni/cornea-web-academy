<!-- src/views/surgery/dalk/_Overview.vue -->
<template>
  <div class="prose max-w-none">
    <div class="float-right ml-8 mb-6 w-full md:w-96 lg:w-[450px]">
      <div class="rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          :src="dalkImage"
          alt="DALK Surgical Anatomy Diagram"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>

    <p class="text-gray-600 leading-relaxed mb-4 text-base">
      Deep Anterior Lamellar Keratoplasty (DALK) is a surgical procedure that involves selective
      replacement of the corneal epithelium and stroma while preserving the recipient's Descemet
      membrane and endothelium. The technique was first described by Anwar and Teichmann in 2002
      with the introduction of the "big bubble" technique.
    </p>

    <p class="text-gray-600 leading-relaxed mb-4 text-base">
      The procedure aims to remove pathological anterior corneal tissue while maintaining the
      healthy posterior layers, thereby eliminating the risk of endothelial rejection which occurs
      in approximately 20-30% of penetrating keratoplasty cases over 10 years.
    </p>

    <p class="text-gray-600 leading-relaxed mb-6 text-base">
      Recent advances by Busin et al. (2017) have introduced a modified technique using larger 9-mm
      grafts with clearance limited to a central 6-mm optical zone, demonstrating superior visual
      and refractive outcomes while minimizing complications.
    </p>

    <div
      class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl clear-left border border-blue-100"
    >
      <h4 class="font-bold mb-4 text-xl text-blue-900">Key Technical Parameters:</h4>
      <ul class="text-gray-700 space-y-3">
        <li class="flex items-start">
          <span class="text-blue-600 mr-3 text-xl">•</span>
          <span class="text-base"
            ><strong class="text-gray-900">Graft thickness:</strong> Variable (epithelium to
            pre-Descemet layer)</span
          >
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-3 text-xl">•</span>
          <span class="text-base"
            ><strong class="text-gray-900">Trephination diameter:</strong> 7.5-8.5 mm (conventional)
            or 9.0 mm (Busin modification)</span
          >
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-3 text-xl">•</span>
          <span class="text-base"
            ><strong class="text-gray-900">Optical zone clearance:</strong> Full diameter
            (conventional) or central 6 mm (Busin modification)</span
          >
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-3 text-xl">•</span>
          <span class="text-base"
            ><strong class="text-gray-900">Residual bed thickness:</strong> 20-80 μm</span
          >
        </li>
        <li class="flex items-start">
          <span class="text-blue-600 mr-3 text-xl">•</span>
          <span class="text-base"
            ><strong class="text-gray-900">Big bubble success rate:</strong> 70-90% (varies by
            experience)</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import dalkImage from '@/assets/images/surgery/dalk.png'
</script>
