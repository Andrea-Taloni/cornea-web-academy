<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <PageHero
      title="Deep Anterior Lamellar Keratoplasty (DALK)"
      subtitle="Partial-thickness corneal transplantation technique"
    />

    <!-- Clinical Overview Section - Always visible -->
    <section class="py-8 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-6">Clinical Overview</h2>

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

          <p class="text-gray-600 leading-relaxed mb-4">
            Deep Anterior Lamellar Keratoplasty (DALK) is a surgical procedure that involves
            selective replacement of the corneal epithelium and stroma while preserving the
            recipient's Descemet membrane and endothelium. The technique was first described by
            Anwar and Teichmann in 2002 with the introduction of the "big bubble" technique.
          </p>

          <p class="text-gray-600 leading-relaxed mb-4">
            The procedure aims to remove pathological anterior corneal tissue while maintaining the
            healthy posterior layers, thereby eliminating the risk of endothelial rejection which
            occurs in approximately 20-30% of penetrating keratoplasty cases over 10 years.
          </p>

          <p class="text-gray-600 leading-relaxed mb-6">
            Recent advances by Busin et al. (2017) have introduced a modified technique using larger
            9-mm grafts with clearance limited to a central 6-mm optical zone, demonstrating
            superior visual and refractive outcomes while minimizing complications.
          </p>

          <div class="bg-gray-100 p-6 rounded-lg clear-left">
            <h4 class="font-semibold mb-3 text-lg">Key Technical Parameters:</h4>
            <ul class="text-gray-600 space-y-2 text-sm">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span
                  ><strong>Graft thickness:</strong> Variable (epithelium to pre-Descemet
                  layer)</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span
                  ><strong>Trephination diameter:</strong> 7.5-8.5 mm (conventional) or 9.0 mm
                  (Busin modification)</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span
                  ><strong>Optical zone clearance:</strong> Full diameter (conventional) or central
                  6 mm (Busin modification)</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span><strong>Residual bed thickness:</strong> 20-80 μm</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span><strong>Big bubble success rate:</strong> 70-90% (varies by experience)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Collapsible Sections Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <!-- Clinical Indications Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('indications')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Clinical Indications</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.indications }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[2000px] opacity-100"
          leave-from-class="max-h-[2000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.indications" class="overflow-hidden">
            <div class="px-6 py-8">
              <div class="max-w-4xl mx-auto">
                <div class="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 class="text-xl font-semibold mb-4">Primary Indications</h3>
                  <div class="space-y-3">
                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Keratoconus</h4>
                      <p class="text-gray-600 text-sm">
                        Progressive or advanced disease with contact lens intolerance, central
                        corneal scarring, or corneal thickness &lt;400 μm. Represents 70-80% of DALK
                        procedures in most series. The Busin modification is particularly effective
                        for broad-base keratoconus.
                      </p>
                    </div>
                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Corneal Stromal Dystrophies</h4>
                      <p class="text-gray-600 text-sm">
                        Granular, lattice, macular, and Avellino dystrophies with preserved
                        endothelial function (cell count &gt;2000 cells/mm²).
                      </p>
                    </div>
                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Post-Infectious Scarring</h4>
                      <p class="text-gray-600 text-sm">
                        Bacterial, viral (HSV, VZV), fungal, or Acanthamoeba keratitis sequelae
                        without endothelial compromise. Deep stromal scars are a contraindication
                        for the modified technique.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="text-xl font-semibold mb-4">Contraindications</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 class="font-semibold text-red-600 mb-2">Absolute</h4>
                      <ul class="text-gray-600 text-sm space-y-1">
                        <li>• Endothelial dysfunction (ECD &lt;1000 cells/mm²)</li>
                        <li>• Descemet membrane rupture (acute hydrops)</li>
                        <li>• Deep stromal scarring involving Descemet</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-orange-600 mb-2">Relative</h4>
                      <ul class="text-gray-600 text-sm space-y-1">
                        <li>• Previous intraocular surgery</li>
                        <li>• Peripheral corneal thinning</li>
                        <li>• Significant corneal neovascularization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Surgical Techniques Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('techniques')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Surgical Techniques</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.techniques }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[4000px] opacity-100"
          leave-from-class="max-h-[4000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.techniques" class="overflow-hidden">
            <div class="px-6 py-8">
              <!-- Conventional Technique -->
              <div class="max-w-4xl mx-auto mb-12">
                <h3 class="text-2xl font-semibold mb-6">Conventional Big Bubble Technique</h3>
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">1. Initial Trephination</h4>
                    <p class="text-gray-600 mb-2">
                      Partial-thickness trephination to 60-80% corneal depth using vacuum trephine
                      or femtosecond laser. Typical diameter: 7.75-8.25 mm.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Technical note: Pachymetry-guided depth settings reduce perforation risk to
                      &lt;5%.
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">2. Pneumatic Dissection</h4>
                    <p class="text-gray-600 mb-2">
                      27-30G needle insertion at 4 mm from center, bevel down, advancing to
                      paracentral area. Injection of filtered air (2-5 ml) to achieve Type 1 bubble
                      (pre-Descemet plane).
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Success rates: 70-90% depending on pathology and experience.
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">3. Anterior Lamellar Removal</h4>
                    <p class="text-gray-600 mb-2">
                      Quadrant-by-quadrant removal of anterior stroma using crescent blade or
                      scissors. Maintain visualization of bubble throughout.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Critical: Avoid excessive manipulation to prevent Descemet rupture.
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">4. Graft Preparation and Suturing</h4>
                    <p class="text-gray-600 mb-2">
                      Donor preparation: Remove Descemet-endothelium complex. Typical oversize:
                      0.25-0.5 mm. Suturing: 16-24 interrupted 10-0 nylon sutures or combined with
                      running suture.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Mean suture-out time: 12-18 months post-operatively.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Busin Modified Technique -->
              <div class="max-w-4xl mx-auto">
                <h3 class="text-2xl font-semibold mb-6">
                  Busin Modified Technique (9-mm DALK with 6-mm Optical Zone)
                </h3>
                <div class="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 class="font-semibold mb-2">Key Innovation</h4>
                  <p class="text-gray-700">
                    This modification combines a larger 9-mm graft with limited removal of deep
                    stroma to the central 6-mm optical zone, creating a peripheral crown of residual
                    stroma approximately 1.5 mm in width. This approach optimizes visual outcomes
                    while minimizing complications.
                  </p>
                </div>

                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">1. Deep Trephination</h4>
                    <p class="text-gray-600 mb-2">
                      Deep trephination of 450-550 μm depth and 9 mm diameter. Set trephine within
                      100 μm from the thinnest AS-OCT measurement to minimize perforation risk.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Perforation rate: 1.2% with this technique
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">2. Pneumatic Dissection</h4>
                    <p class="text-gray-600 mb-2">
                      Insert dedicated probe/cannula 2 mm centripetally from trephination base.
                      Success rate: 83.7%, with 98.5% being Type 1 bubbles.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Average bubble diameter: 7.7±0.8 mm (range 6-9 mm)
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">3. Anterior Stroma Debulking</h4>
                    <p class="text-gray-600 mb-2">
                      Remove approximately 80% of anterior stroma regardless of pneumatic dissection
                      success. This step is performed in all cases.
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">4. Limited Deep Stroma Removal</h4>
                    <p class="text-gray-600 mb-2">
                      Mark central 6-mm optical zone with handheld trephine. Remove deep stroma
                      (bubble roof) only within this 6-mm zone using Vannas scissors, leaving
                      peripheral crown of deep stroma intact.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Key advantage: Reduces dissection area by 50%, minimizing perforation risk
                    </p>
                  </div>

                  <div class="bg-white p-6 rounded-lg shadow-md border">
                    <h4 class="font-semibold mb-2">5. Donor Preparation and Transplantation</h4>
                    <p class="text-gray-600 mb-2">
                      Prepare 9-mm anterior corneal lamella using 400-μm microkeratome head on
                      artificial anterior chamber. Suture with double running 10-0 nylon suture.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      Final architecture: 6-mm central thin zone with 1.5-mm peripheral crown
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-3">Alternative Techniques</h3>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 class="font-semibold">Manual Dissection (Melles)</h4>
                    <p class="text-gray-600">
                      Layer-by-layer dissection for failed bubble cases. Higher interface
                      irregularity.
                    </p>
                  </div>
                  <div>
                    <h4 class="font-semibold">Femtosecond Laser-Assisted</h4>
                    <p class="text-gray-600">
                      Precise lamellar cuts but no advantage in visual outcomes vs big bubble.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Clinical Outcomes Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('outcomes')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Evidence-Based Outcomes</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.outcomes }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[3000px] opacity-100"
          leave-from-class="max-h-[3000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.outcomes" class="overflow-hidden">
            <div class="px-6 py-8">
              <!-- Comparison Table -->
              <div class="max-w-6xl mx-auto mb-12">
                <h3 class="text-xl font-semibold mb-4">
                  Comparative Outcomes: Conventional vs Modified DALK
                </h3>
                <div class="overflow-x-auto">
                  <table class="w-full bg-white rounded-lg shadow-md">
                    <thead class="bg-gray-100">
                      <tr>
                        <th class="px-4 py-3 text-left">Parameter</th>
                        <th class="px-4 py-3 text-center">Conventional DALK<br />(8-8.5 mm)</th>
                        <th class="px-4 py-3 text-center">
                          Busin Modified DALK<br />(9 mm/6 mm OZ)
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="px-4 py-3">Bubble Success Rate</td>
                        <td class="px-4 py-3 text-center">57-81%</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">83.7%</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">BSCVA ≥20/20</td>
                        <td class="px-4 py-3 text-center">16-23%</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">35%</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">BSCVA ≥20/25</td>
                        <td class="px-4 py-3 text-center">50-73%</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">67.5%</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">BSCVA ≥20/40</td>
                        <td class="px-4 py-3 text-center">80-95%</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">95%</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Mean Astigmatism</td>
                        <td class="px-4 py-3 text-center">2.9-4.1 D</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">
                          3.1±1.3 D
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Astigmatism ≤4.5 D</td>
                        <td class="px-4 py-3 text-center">~84%</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">91%</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Regular Topographic Astigmatism</td>
                        <td class="px-4 py-3 text-center">Not reported</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">90%</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Conversion to PK</td>
                        <td class="px-4 py-3 text-center">1.2-27%</td>
                        <td class="px-4 py-3 text-center font-semibold text-green-600">0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Graft Survival -->
              <div class="max-w-4xl mx-auto mb-8">
                <h3 class="text-xl font-semibold mb-4">Graft Survival Rates</h3>
                <div class="overflow-x-auto">
                  <table class="w-full bg-white rounded-lg shadow-md">
                    <thead class="bg-gray-100">
                      <tr>
                        <th class="px-4 py-3 text-left">Time Point</th>
                        <th class="px-4 py-3 text-center">DALK</th>
                        <th class="px-4 py-3 text-center">PK (Historical Control)</th>
                        <th class="px-4 py-3 text-center">P-value</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="px-4 py-3">1 year</td>
                        <td class="px-4 py-3 text-center">98.2%</td>
                        <td class="px-4 py-3 text-center">95.1%</td>
                        <td class="px-4 py-3 text-center">0.042</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">5 years</td>
                        <td class="px-4 py-3 text-center">95.3%</td>
                        <td class="px-4 py-3 text-center">89.2%</td>
                        <td class="px-4 py-3 text-center">0.018</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">10 years</td>
                        <td class="px-4 py-3 text-center">90.7%</td>
                        <td class="px-4 py-3 text-center">73.5%</td>
                        <td class="px-4 py-3 text-center">&lt;0.001</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Endothelial Cell Density -->
              <div class="max-w-4xl mx-auto">
                <h3 class="text-xl font-semibold mb-4">Endothelial Cell Preservation</h3>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <p class="text-gray-600 mb-3">Mean endothelial cell loss rates:</p>
                  <div class="grid md:grid-cols-3 gap-4 text-center">
                    <div class="bg-white p-4 rounded">
                      <div class="text-2xl font-bold text-blue-600">7.8%</div>
                      <div class="text-sm text-gray-600">6 months</div>
                    </div>
                    <div class="bg-white p-4 rounded">
                      <div class="text-2xl font-bold text-blue-600">11.2-11.4%</div>
                      <div class="text-sm text-gray-600">1 year</div>
                    </div>
                    <div class="bg-white p-4 rounded">
                      <div class="text-2xl font-bold text-blue-600">17.3%</div>
                      <div class="text-sm text-gray-600">5 years</div>
                    </div>
                  </div>
                  <p class="text-gray-500 text-xs mt-4">
                    Significantly lower than PK (25-45% at 5 years), p&lt;0.001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Complications Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('complications')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Complications and Management</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.complications }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[2000px] opacity-100"
          leave-from-class="max-h-[2000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.complications" class="overflow-hidden">
            <div class="px-6 py-8">
              <div class="max-w-4xl mx-auto">
                <!-- Intraoperative -->
                <div class="mb-6">
                  <h3 class="text-xl font-semibold mb-4">Intraoperative Complications</h3>
                  <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <table class="w-full">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-4 py-3 text-left">Complication</th>
                          <th class="px-4 py-3 text-center">Conventional</th>
                          <th class="px-4 py-3 text-center">Busin Modified</th>
                          <th class="px-4 py-3 text-left">Management</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td class="px-4 py-3">Descemet perforation</td>
                          <td class="px-4 py-3 text-center">5-32%</td>
                          <td class="px-4 py-3 text-center font-semibold text-green-600">3.7%</td>
                          <td class="px-4 py-3 text-sm">
                            Air tamponade, conversion to PK if large
                          </td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3">Failed big bubble</td>
                          <td class="px-4 py-3 text-center">10-43%</td>
                          <td class="px-4 py-3 text-center font-semibold text-green-600">16.3%</td>
                          <td class="px-4 py-3 text-sm">
                            Manual dissection (limited to 6mm in modified)
                          </td>
                        </tr>
                        <tr>
                          <td class="px-4 py-3">Conversion to PK</td>
                          <td class="px-4 py-3 text-center">1.2-27%</td>
                          <td class="px-4 py-3 text-center font-semibold text-green-600">0%</td>
                          <td class="px-4 py-3 text-sm">9mm PK or mushroom keratoplasty</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Postoperative -->
                <div>
                  <h3 class="text-xl font-semibold mb-4">Postoperative Complications</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                      <h4 class="font-semibold text-orange-600 mb-2">Early (&lt;1 month)</h4>
                      <ul class="text-gray-600 text-sm space-y-1">
                        <li>• Double anterior chamber: 2.5% (Busin) vs 8-15% (conventional)</li>
                        <li>• Interface haze: 10-20%</li>
                        <li>• Epithelial defects: 5-10%</li>
                        <li>• Pupillary block: 2-5%</li>
                        <li>• Descemet membrane detachment: 2.5% (manageable with air)</li>
                      </ul>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md">
                      <h4 class="font-semibold text-red-600 mb-2">Late (&gt;1 month)</h4>
                      <ul class="text-gray-600 text-sm space-y-1">
                        <li>• Stromal rejection: 7.5% (Busin) vs 1-10% (conventional)</li>
                        <li>• Interface opacification: 5-10%</li>
                        <li>• Secondary glaucoma: 5-15%</li>
                        <li>• Late endothelial failure: 2-5%</li>
                        <li>• No wound dehiscence reported with Busin technique</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Post-operative Management Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('postop')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Post-operative Management Protocol</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.postop }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[2000px] opacity-100"
          leave-from-class="max-h-[2000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.postop" class="overflow-hidden">
            <div class="px-6 py-8">
              <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg shadow-lg p-8">
                  <h3 class="text-xl font-semibold mb-6">Standard Post-operative Regimen</h3>

                  <div class="space-y-4">
                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Topical Corticosteroids</h4>
                      <p class="text-gray-600 text-sm">
                        Prednisolone acetate 1% or dexamethasone 0.1%: QID × 1 month, TID × 1 month,
                        BID × 2 months, then taper. For 9mm grafts: Continue daily steroids for 8
                        months to prevent rejection.
                      </p>
                    </div>

                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Antimicrobial Prophylaxis</h4>
                      <p class="text-gray-600 text-sm">
                        Moxifloxacin 0.5% or tobramycin 0.3%: QID × 2 weeks
                      </p>
                    </div>

                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Follow-up Schedule</h4>
                      <ul class="text-gray-600 text-sm space-y-1">
                        <li>• Day 1, Week 1, 2, 4</li>
                        <li>• Monthly for 6 months</li>
                        <li>• Every 3 months year 1</li>
                        <li>• Biannually thereafter</li>
                      </ul>
                    </div>

                    <div class="border-l-4 border-blue-500 pl-4">
                      <h4 class="font-semibold">Suture Management</h4>
                      <div class="text-gray-600 text-sm space-y-2">
                        <p>
                          <strong>Conventional DALK:</strong> Selective removal based on topography
                          starting at 3-6 months. Complete removal by 12-24 months.
                        </p>
                        <p>
                          <strong>Busin Modified:</strong> One running suture removed at 2-3 months,
                          second suture removed at 10 months (&lt;30 years) or 12 months (&gt;30
                          years).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 p-4 bg-yellow-50 rounded">
                    <p class="text-sm text-gray-700">
                      <strong>Note:</strong> Unlike PK, long-term topical steroids are typically not
                      required after 6-12 months due to absence of endothelial rejection risk.
                      However, 9mm grafts may require extended steroid therapy to prevent stromal
                      rejection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Advantages of Busin Modification Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('advantages')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Advantages of the Busin Modification</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.advantages }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[2000px] opacity-100"
          leave-from-class="max-h-[2000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.advantages" class="overflow-hidden">
            <div class="px-6 py-8">
              <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="bg-blue-50 p-6 rounded-lg">
                    <h3 class="font-semibold text-blue-700 mb-3">Surgical Advantages</h3>
                    <ul class="text-gray-700 space-y-2">
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span
                          >Eliminates need for peripheral dissection when bubble doesn't reach
                          trephination</span
                        >
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>50% reduction in dissection area (28.3 mm² vs 50.2-53.4 mm²)</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>Lower perforation risk during manual dissection</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>No conversion to PK necessary</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>Better management of broad-base keratoconus</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-green-50 p-6 rounded-lg">
                    <h3 class="font-semibold text-green-700 mb-3">Clinical Advantages</h3>
                    <ul class="text-gray-700 space-y-2">
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>Superior visual acuity outcomes (35% achieve 20/20)</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>More regular astigmatism (90% topographically regular)</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>Lower overall astigmatism with larger grafts</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>Better wound stability with "lap-joint" configuration</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>Potential for earlier suture removal</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="mt-6 bg-yellow-50 p-6 rounded-lg">
                  <h3 class="font-semibold text-yellow-700 mb-2">Important Considerations</h3>
                  <ul class="text-gray-700 space-y-1 text-sm">
                    <li>• Requires longer steroid therapy (8 months) due to larger graft size</li>
                    <li>
                      • Risk of stromal rejection slightly higher (7.5%) but all cases reversible
                    </li>
                    <li>
                      • If conversion to PK needed, requires 9mm graft or mushroom keratoplasty
                    </li>
                    <li>
                      • Posterior corneal step remodels within months without affecting vision
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- References Section -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          @click="toggleSection('references')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-2xl font-bold">Key References</h2>
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': expandedSections.references }"
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
        </button>
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[1500px] opacity-100"
          leave-from-class="max-h-[1500px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="expandedSections.references" class="overflow-hidden">
            <div class="px-6 py-8">
              <div class="max-w-4xl mx-auto">
                <div class="space-y-3 text-sm">
                  <div class="p-4 bg-gray-50 rounded">
                    <p class="text-gray-700">
                      1. Busin M, Leon P, Nahum Y, Scorcia V. Large (9 mm) Deep Anterior Lamellar
                      Keratoplasty with Clearance of a 6-mm Optical Zone Optimizes Outcomes of
                      Keratoconus Surgery. <em>Ophthalmology.</em> 2017;124(7):1-9.
                    </p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded">
                    <p class="text-gray-700">
                      2. Anwar M, Teichmann KD. Big-bubble technique to bare Descemet's membrane in
                      anterior lamellar keratoplasty.
                      <em>J Cataract Refract Surg.</em> 2002;28(3):398-403.
                    </p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded">
                    <p class="text-gray-700">
                      3. Reinhart WJ, et al. Deep anterior lamellar keratoplasty as an alternative
                      to penetrating keratoplasty: a report by the American Academy of
                      Ophthalmology.
                      <em>Ophthalmology.</em> 2011;118(1):209-218.
                    </p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded">
                    <p class="text-gray-700">
                      4. Borderie VM, et al. Long-term results of deep anterior lamellar versus
                      penetrating keratoplasty. <em>Ophthalmology.</em> 2012;119(2):249-255.
                    </p>
                  </div>
                  <div class="p-4 bg-gray-50 rounded">
                    <p class="text-gray-700">
                      5. Busin M, Scorcia V, Leon P, Nahum Y. Outcomes of air injection within 2 mm
                      inside a deep trephination for deep anterior lamellar keratoplasty in eyes
                      with keratoconus. <em>Am J Ophthalmol.</em> 2016;164:6-13.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
import dalkImage from '@/assets/images/surgery/dalk.png'

// Reactive state for expanded sections
const expandedSections = ref({
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

<style scoped>
/* Custom transition styles for smooth accordion effect */
.max-h-0 {
  max-height: 0;
}
.max-h-\[1500px\] {
  max-height: 1500px;
}
.max-h-\[2000px\] {
  max-height: 2000px;
}
.max-h-\[3000px\] {
  max-height: 3000px;
}
.max-h-\[4000px\] {
  max-height: 4000px;
}
</style>
