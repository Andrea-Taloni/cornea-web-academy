<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero
      title="Deep Anterior Lamellar Keratoplasty (DALK)"
      subtitle="Partial-thickness corneal transplantation technique"
    />

    <!-- Collapsible Sections Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <!-- Clinical Overview Section - Collapsible but open by default -->
      <CollapsibleSection
        title="Clinical Overview"
        iconPath="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        colorTheme="sky"
        :isExpanded="expandedSections.overview"
        @toggle="toggleSection('overview')"
        maxHeight="3000px"
      >
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
            Deep Anterior Lamellar Keratoplasty (DALK) is a surgical procedure that involves
            selective replacement of the corneal epithelium and stroma while preserving the
            recipient's Descemet membrane and endothelium. The technique was first described by
            Anwar and Teichmann in 2002 with the introduction of the "big bubble" technique.
          </p>

          <p class="text-gray-600 leading-relaxed mb-4 text-base">
            The procedure aims to remove pathological anterior corneal tissue while maintaining the
            healthy posterior layers, thereby eliminating the risk of endothelial rejection which
            occurs in approximately 20-30% of penetrating keratoplasty cases over 10 years.
          </p>

          <p class="text-gray-600 leading-relaxed mb-6 text-base">
            Recent advances by Busin et al. (2017) have introduced a modified technique using larger
            9-mm grafts with clearance limited to a central 6-mm optical zone, demonstrating
            superior visual and refractive outcomes while minimizing complications.
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
                  ><strong class="text-gray-900">Trephination diameter:</strong> 7.5-8.5 mm
                  (conventional) or 9.0 mm (Busin modification)</span
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
      </CollapsibleSection>

      <!-- Clinical Indications Section -->
      <CollapsibleSection
        title="Clinical Indications"
        iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        colorTheme="blue"
        :isExpanded="expandedSections.indications"
        @toggle="toggleSection('indications')"
        maxHeight="2000px"
      >
        <div class="max-w-4xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-8">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Primary Indications</h3>
            <div class="space-y-4">
              <div
                class="border-l-4 border-blue-500 pl-6 py-2 hover:bg-blue-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg text-gray-800">Keratoconus</h4>
                <p class="text-gray-600 text-base mt-1">
                  Progressive or advanced disease with contact lens intolerance, central corneal
                  scarring, or corneal thickness &lt;400 μm. Represents 70-80% of DALK procedures in
                  most series. The Busin modification is particularly effective for broad-base
                  keratoconus.
                </p>
              </div>
              <div
                class="border-l-4 border-blue-500 pl-6 py-2 hover:bg-blue-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg text-gray-800">Corneal Stromal Dystrophies</h4>
                <p class="text-gray-600 text-base mt-1">
                  Granular, lattice, macular, and Avellino dystrophies with preserved endothelial
                  function (cell count &gt;2000 cells/mm²).
                </p>
              </div>
              <div
                class="border-l-4 border-blue-500 pl-6 py-2 hover:bg-blue-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg text-gray-800">Post-Infectious Scarring</h4>
                <p class="text-gray-600 text-base mt-1">
                  Bacterial, viral (HSV, VZV), fungal, or Acanthamoeba keratitis sequelae without
                  endothelial compromise. Deep stromal scars are a contraindication for the modified
                  technique.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">Contraindications</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 class="font-bold text-lg text-red-700 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Absolute
                </h4>
                <ul class="text-gray-700 space-y-2">
                  <li class="flex items-start text-base">
                    <span class="text-red-500 mr-2">•</span>
                    Endothelial dysfunction (ECD &lt;1000 cells/mm²)
                  </li>
                  <li class="flex items-start text-base">
                    <span class="text-red-500 mr-2">•</span>
                    Descemet membrane rupture (acute hydrops)
                  </li>
                  <li class="flex items-start text-base">
                    <span class="text-red-500 mr-2">•</span>
                    Deep stromal scarring involving Descemet
                  </li>
                </ul>
              </div>
              <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 class="font-bold text-lg text-orange-700 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Relative
                </h4>
                <ul class="text-gray-700 space-y-2">
                  <li class="flex items-start text-base">
                    <span class="text-orange-500 mr-2">•</span>
                    Previous intraocular surgery
                  </li>
                  <li class="flex items-start text-base">
                    <span class="text-orange-500 mr-2">•</span>
                    Peripheral corneal thinning
                  </li>
                  <li class="flex items-start text-base">
                    <span class="text-orange-500 mr-2">•</span>
                    Significant corneal neovascularization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <!-- Surgical Techniques Section -->
      <CollapsibleSection
        title="Surgical Techniques"
        iconPath="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
        colorTheme="green"
        :isExpanded="expandedSections.techniques"
        @toggle="toggleSection('techniques')"
        maxHeight="4000px"
      >
        <!-- Conventional Technique -->
        <div class="max-w-4xl mx-auto mb-12">
          <h3 class="text-2xl font-bold mb-8 text-gray-800">Conventional Big Bubble Technique</h3>
          <div class="space-y-6">
            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Initial Trephination</h4>
                  <p class="text-gray-600 text-base mb-3">
                    Partial-thickness trephination to 60-80% corneal depth using vacuum trephine or
                    femtosecond laser. Typical diameter: 7.75-8.25 mm.
                  </p>
                  <p
                    class="text-blue-600 text-base italic bg-blue-50 px-4 py-2 rounded-lg inline-block"
                  >
                    💡 Technical note: Pachymetry-guided depth settings reduce perforation risk to
                    &lt;5%.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Pneumatic Dissection</h4>
                  <p class="text-gray-600 text-base mb-3">
                    27-30G needle insertion at 4 mm from center, bevel down, advancing to
                    paracentral area. Injection of filtered air (2-5 ml) to achieve Type 1 bubble
                    (pre-Descemet plane).
                  </p>
                  <p
                    class="text-green-600 text-base italic bg-green-50 px-4 py-2 rounded-lg inline-block"
                  >
                    ✓ Success rates: 70-90% depending on pathology and experience.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-blue-600 font-bold text-lg">3</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Anterior Lamellar Removal</h4>
                  <p class="text-gray-600 text-base mb-3">
                    Quadrant-by-quadrant removal of anterior stroma using crescent blade or
                    scissors. Maintain visualization of bubble throughout.
                  </p>
                  <p
                    class="text-red-600 text-base italic bg-red-50 px-4 py-2 rounded-lg inline-block"
                  >
                    ⚠️ Critical: Avoid excessive manipulation to prevent Descemet rupture.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-blue-600 font-bold text-lg">4</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">
                    Graft Preparation and Suturing
                  </h4>
                  <p class="text-gray-600 text-base mb-3">
                    Donor preparation: Remove Descemet-endothelium complex. Typical oversize:
                    0.25-0.5 mm. Suturing: 16-24 interrupted 10-0 nylon sutures or combined with
                    running suture.
                  </p>
                  <p
                    class="text-purple-600 text-base italic bg-purple-50 px-4 py-2 rounded-lg inline-block"
                  >
                    📊 Mean suture-out time: 12-18 months post-operatively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Busin Modified Technique -->
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-8 text-gray-800">
            Busin Modified Technique (9-mm DALK with 6-mm Optical Zone)
          </h3>
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl mb-8 border border-blue-200"
          >
            <h4 class="font-bold text-xl mb-3 text-blue-900">🔬 Key Innovation</h4>
            <p class="text-gray-700 text-base leading-relaxed">
              This modification combines a larger 9-mm graft with limited removal of deep stroma to
              the central 6-mm optical zone, creating a peripheral crown of residual stroma
              approximately 1.5 mm in width. This approach optimizes visual outcomes while
              minimizing complications.
            </p>
          </div>

          <div class="space-y-6">
            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-green-600 font-bold text-lg">1</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Deep Trephination</h4>
                  <p class="text-gray-600 text-base mb-3">
                    Deep trephination of 450-550 μm depth and 9 mm diameter. Set trephine within 100
                    μm from the thinnest AS-OCT measurement to minimize perforation risk.
                  </p>
                  <p
                    class="text-green-600 text-base italic bg-green-50 px-4 py-2 rounded-lg inline-block"
                  >
                    ✨ Perforation rate: 1.2% with this technique
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-green-600 font-bold text-lg">2</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Pneumatic Dissection</h4>
                  <p class="text-gray-600 text-base mb-3">
                    Insert dedicated probe/cannula 2 mm centripetally from trephination base.
                    Success rate: 83.7%, with 98.5% being Type 1 bubbles.
                  </p>
                  <p
                    class="text-blue-600 text-base italic bg-blue-50 px-4 py-2 rounded-lg inline-block"
                  >
                    📏 Average bubble diameter: 7.7±0.8 mm (range 6-9 mm)
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-green-600 font-bold text-lg">3</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Anterior Stroma Debulking</h4>
                  <p class="text-gray-600 text-base">
                    Remove approximately 80% of anterior stroma regardless of pneumatic dissection
                    success. This step is performed in all cases.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-green-600 font-bold text-lg">4</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">Limited Deep Stroma Removal</h4>
                  <p class="text-gray-600 text-base mb-3">
                    Mark central 6-mm optical zone with handheld trephine. Remove deep stroma
                    (bubble roof) only within this 6-mm zone using Vannas scissors, leaving
                    peripheral crown of deep stroma intact.
                  </p>
                  <p
                    class="text-indigo-600 text-base italic bg-indigo-50 px-4 py-2 rounded-lg inline-block"
                  >
                    🎯 Key advantage: Reduces dissection area by 50%, minimizing perforation risk
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-green-600 font-bold text-lg">5</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-2 text-gray-800">
                    Donor Preparation and Transplantation
                  </h4>
                  <p class="text-gray-600 text-base mb-3">
                    Prepare 9-mm anterior corneal lamella using 400-μm microkeratome head on
                    artificial anterior chamber. Suture with double running 10-0 nylon suture.
                  </p>
                  <p
                    class="text-purple-600 text-base italic bg-purple-50 px-4 py-2 rounded-lg inline-block"
                  >
                    🏗️ Final architecture: 6-mm central thin zone with 1.5-mm peripheral crown
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 bg-gray-100 p-8 rounded-xl">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Alternative Techniques</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg">
              <h4 class="font-bold text-base mb-2 text-gray-800">Manual Dissection (Melles)</h4>
              <p class="text-gray-600 text-base">
                Layer-by-layer dissection for failed bubble cases. Higher interface irregularity.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg">
              <h4 class="font-bold text-base mb-2 text-gray-800">Femtosecond Laser-Assisted</h4>
              <p class="text-gray-600 text-base">
                Precise lamellar cuts but no advantage in visual outcomes vs big bubble.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <!-- Clinical Outcomes Section -->
      <CollapsibleSection
        title="Evidence-Based Outcomes"
        iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        colorTheme="purple"
        :isExpanded="expandedSections.outcomes"
        @toggle="toggleSection('outcomes')"
        maxHeight="3000px"
      >
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
                  <th class="px-6 py-4 text-center text-base">
                    Busin Modified DALK<br />(9 mm/6 mm OZ)
                  </th>
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
                  <td class="px-6 py-4 text-center font-bold text-green-600 text-base">
                    3.1±1.3 D
                  </td>
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
          <div
            class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200"
          >
            <p class="text-gray-700 mb-6 text-base font-medium">
              Mean endothelial cell loss rates:
            </p>
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
      </CollapsibleSection>

      <!-- Complications Section -->
      <CollapsibleSection
        title="Complications and Management"
        iconPath="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        colorTheme="red"
        :isExpanded="expandedSections.complications"
        @toggle="toggleSection('complications')"
        maxHeight="2000px"
      >
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
                    <td class="px-6 py-4 text-base text-gray-600">
                      9mm PK or mushroom keratoplasty
                    </td>
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
                  <li class="text-base">
                    • Descemet membrane detachment: 2.5% (manageable with air)
                  </li>
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
                  <li class="text-base">
                    • Stromal rejection: 7.5% (Busin) vs 1-10% (conventional)
                  </li>
                  <li class="text-base">• Interface opacification: 5-10%</li>
                  <li class="text-base">• Secondary glaucoma: 5-15%</li>
                  <li class="text-base">• Late endothelial failure: 2-5%</li>
                  <li class="text-base">• No wound dehiscence reported with Busin technique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <!-- Post-operative Management Section -->
      <CollapsibleSection
        title="Post-operative Management Protocol"
        iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        colorTheme="teal"
        :isExpanded="expandedSections.postop"
        @toggle="toggleSection('postop')"
        maxHeight="2000px"
      >
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-xl shadow-xl p-10">
            <h3 class="text-2xl font-bold mb-8 text-gray-800">Standard Post-operative Regimen</h3>

            <div class="space-y-6">
              <div
                class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg mb-2 text-gray-800">💊 Topical Corticosteroids</h4>
                <p class="text-gray-600 text-base">
                  Prednisolone acetate 1% or dexamethasone 0.1%: QID × 1 month, TID × 1 month, BID ×
                  2 months, then taper. For 9mm grafts: Continue daily steroids for 8 months to
                  prevent rejection.
                </p>
              </div>

              <div
                class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg mb-2 text-gray-800">🦠 Antimicrobial Prophylaxis</h4>
                <p class="text-gray-600 text-base">
                  Moxifloxacin 0.5% or tobramycin 0.3%: QID × 2 weeks
                </p>
              </div>

              <div
                class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg mb-2 text-gray-800">📅 Follow-up Schedule</h4>
                <ul class="text-gray-600 space-y-1">
                  <li class="text-base">• Day 1, Week 1, 2, 4</li>
                  <li class="text-base">• Monthly for 6 months</li>
                  <li class="text-base">• Every 3 months year 1</li>
                  <li class="text-base">• Biannually thereafter</li>
                </ul>
              </div>

              <div
                class="border-l-4 border-teal-500 pl-6 py-3 hover:bg-teal-50 transition-colors rounded-r-lg"
              >
                <h4 class="font-bold text-lg mb-2 text-gray-800">✂️ Suture Management</h4>
                <div class="text-gray-600 space-y-3">
                  <p class="text-base">
                    <strong>Conventional DALK:</strong> Selective removal based on topography
                    starting at 3-6 months. Complete removal by 12-24 months.
                  </p>
                  <p class="text-base">
                    <strong>Busin Modified:</strong> One running suture removed at 2-3 months,
                    second suture removed at 10 months (&lt;30 years) or 12 months (&gt;30 years).
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
              <p class="text-base text-gray-700">
                <strong class="text-yellow-700">⚠️ Note:</strong> Unlike PK, long-term topical
                steroids are typically not required after 6-12 months due to absence of endothelial
                rejection risk. However, 9mm grafts may require extended steroid therapy to prevent
                stromal rejection.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <!-- Advantages of Busin Modification Section -->
      <CollapsibleSection
        title="Advantages of the Busin Modification"
        iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        colorTheme="indigo"
        :isExpanded="expandedSections.advantages"
        @toggle="toggleSection('advantages')"
        maxHeight="2000px"
      >
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 class="font-bold text-xl text-blue-800 mb-4 flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Surgical Advantages
              </h3>
              <ul class="text-gray-700 space-y-3">
                <li class="flex items-start text-base">
                  <span class="text-blue-600 mr-2 text-xl">✓</span>
                  <span
                    >Eliminates need for peripheral dissection when bubble doesn't reach
                    trephination</span
                  >
                </li>
                <li class="flex items-start text-base">
                  <span class="text-blue-600 mr-2 text-xl">✓</span>
                  <span>50% reduction in dissection area (28.3 mm² vs 50.2-53.4 mm²)</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-blue-600 mr-2 text-xl">✓</span>
                  <span>Lower perforation risk during manual dissection</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-blue-600 mr-2 text-xl">✓</span>
                  <span>No conversion to PK necessary</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-blue-600 mr-2 text-xl">✓</span>
                  <span>Better management of broad-base keratoconus</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200"
            >
              <h3 class="font-bold text-xl text-green-800 mb-4 flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Clinical Advantages
              </h3>
              <ul class="text-gray-700 space-y-3">
                <li class="flex items-start text-base">
                  <span class="text-green-600 mr-2 text-xl">✓</span>
                  <span>Superior visual acuity outcomes (35% achieve 20/20)</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-green-600 mr-2 text-xl">✓</span>
                  <span>More regular astigmatism (90% topographically regular)</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-green-600 mr-2 text-xl">✓</span>
                  <span>Lower overall astigmatism with larger grafts</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-green-600 mr-2 text-xl">✓</span>
                  <span>Better wound stability with "lap-joint" configuration</span>
                </li>
                <li class="flex items-start text-base">
                  <span class="text-green-600 mr-2 text-xl">✓</span>
                  <span>Potential for earlier suture removal</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="mt-8 bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200"
          >
            <h3 class="font-bold text-xl text-yellow-800 mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Important Considerations
            </h3>
            <ul class="text-gray-700 space-y-2">
              <li class="text-base">
                • Requires longer steroid therapy (8 months) due to larger graft size
              </li>
              <li class="text-base">
                • Risk of stromal rejection slightly higher (7.5%) but all cases reversible
              </li>
              <li class="text-base">
                • If conversion to PK needed, requires 9mm graft or mushroom keratoplasty
              </li>
              <li class="text-base">
                • Posterior corneal step remodels within months without affecting vision
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      <!-- References Section -->
      <CollapsibleSection
        title="Key References"
        iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        colorTheme="gray"
        :isExpanded="expandedSections.references"
        @toggle="toggleSection('references')"
        maxHeight="1500px"
      >
        <div class="max-w-4xl mx-auto">
          <div class="space-y-4">
            <div
              class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <p class="text-gray-700 text-base">
                1. Busin M, Leon P, Nahum Y, Scorcia V. Large (9 mm) Deep Anterior Lamellar
                Keratoplasty with Clearance of a 6-mm Optical Zone Optimizes Outcomes of Keratoconus
                Surgery. <em class="text-gray-600">Ophthalmology.</em> 2017;124(7):1-9.
              </p>
            </div>
            <div
              class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <p class="text-gray-700 text-base">
                2. Anwar M, Teichmann KD. Big-bubble technique to bare Descemet's membrane in
                anterior lamellar keratoplasty.
                <em class="text-gray-600">J Cataract Refract Surg.</em> 2002;28(3):398-403.
              </p>
            </div>
            <div
              class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <p class="text-gray-700 text-base">
                3. Reinhart WJ, et al. Deep anterior lamellar keratoplasty as an alternative to
                penetrating keratoplasty: a report by the American Academy of Ophthalmology.
                <em class="text-gray-600">Ophthalmology.</em> 2011;118(1):209-218.
              </p>
            </div>
            <div
              class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <p class="text-gray-700 text-base">
                4. Borderie VM, et al. Long-term results of deep anterior lamellar versus
                penetrating keratoplasty.
                <em class="text-gray-600">Ophthalmology.</em> 2012;119(2):249-255.
              </p>
            </div>
            <div
              class="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <p class="text-gray-700 text-base">
                5. Busin M, Scorcia V, Leon P, Nahum Y. Outcomes of air injection within 2 mm inside
                a deep trephination for deep anterior lamellar keratoplasty in eyes with
                keratoconus. <em class="text-gray-600">Am J Ophthalmol.</em> 2016;164:6-13.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import CollapsibleSection from '@/components/CollapsibleSection.vue'
import dalkImage from '@/assets/images/surgery/dalk.png'

// Reactive state for expanded sections
const expandedSections = ref({
  overview: true, // Open by default
  indications: false,
  techniques: false,
  outcomes: false,
  complications: false,
  postop: false,
  advantages: false,
  references: false,
})

// Toggle function for sections
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}
</script>
