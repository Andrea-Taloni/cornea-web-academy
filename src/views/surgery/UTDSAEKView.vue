<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero
      title="UT-DSAEK"
      subtitle="Ultra-Thin Descemet's Stripping Automated Endothelial Keratoplasty"
    />

    <!-- Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is UT-DSAEK?</h2>
            <p class="text-gray-600 mb-4">
              Ultra-Thin Descemet's Stripping Automated Endothelial Keratoplasty (UT-DSAEK) is an
              advanced variation of standard DSAEK that utilizes significantly thinner donor grafts,
              typically 50-100 μm in thickness.
            </p>
            <p class="text-gray-600 mb-4">
              This innovative refinement bridges the gap between conventional DSAEK and DMEK,
              offering superior visual outcomes compared to standard DSAEK while maintaining greater
              surgical control and lower detachment rates than DMEK.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Ultra-thin grafts (50-100 μm)</li>
              <li>Superior visual outcomes to standard DSAEK</li>
              <li>Less astigmatism and hyperopic shift</li>
              <li>Faster visual recovery</li>
              <li>Technically easier than DMEK</li>
              <li>Better graft stability than DMEK</li>
            </ul>
          </div>
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">UT-DSAEK Procedure Illustration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Evolution Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Evolution of Endothelial Keratoplasty</h2>
        <div class="max-w-5xl mx-auto">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <!-- Timeline items -->
            <div class="relative mb-10">
              <div class="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
              <div class="ml-16">
                <div class="text-sm text-gray-500 mb-1">1905-2000s</div>
                <h3 class="text-xl font-bold mb-2">Penetrating Keratoplasty (PKP)</h3>
                <p class="text-gray-600">
                  Full-thickness corneal transplant that replaced all corneal layers. Standard of
                  care for decades, but associated with long visual recovery, high astigmatism, and
                  wound integrity issues.
                </p>
              </div>
            </div>

            <div class="relative mb-10">
              <div class="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
              <div class="ml-16">
                <div class="text-sm text-gray-500 mb-1">2000s</div>
                <h3 class="text-xl font-bold mb-2">DSEK/DSAEK</h3>
                <p class="text-gray-600">
                  Partial-thickness endothelial keratoplasty with automated microkeratome
                  preparation. Used relatively thick grafts (150-200 μm) that provided improved
                  outcomes over PKP but still caused optical aberrations.
                </p>
              </div>
            </div>

            <div class="relative mb-10">
              <div class="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
              <div class="ml-16">
                <div class="text-sm text-gray-500 mb-1">2010s</div>
                <h3 class="text-xl font-bold mb-2 text-blue-600">UT-DSAEK</h3>
                <p class="text-gray-600">
                  <strong>Ultra-Thin DSAEK</strong> technique pioneered by Prof. Massimo Busin. Uses
                  specialized techniques to create grafts 50-100 μm thick, significantly improving
                  visual outcomes while maintaining surgical control.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
              <div class="ml-16">
                <div class="text-sm text-gray-500 mb-1">2010s-Present</div>
                <h3 class="text-xl font-bold mb-2">DMEK</h3>
                <p class="text-gray-600">
                  Pure Descemet's membrane transplant (10-15 μm). Offers the best visual outcomes
                  but with higher surgical complexity, longer learning curve, and increased
                  detachment rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Indications Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Indications for UT-DSAEK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fuchs' Endothelial Dystrophy</h3>
            <p class="text-gray-600">
              Primary indication when optimal visual outcomes are desired with lower surgical risk
              than DMEK
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Complex Anterior Segments</h3>
            <p class="text-gray-600">
              Cases with anterior chamber abnormalities where DMEK would be technically challenging
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Failed DMEK</h3>
            <p class="text-gray-600">
              Alternative approach after DMEK failure, offering greater surgical predictability
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Pseudophakic Bullous Keratopathy</h3>
            <p class="text-gray-600">
              Endothelial decompensation following cataract surgery or other intraocular procedures
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Aphakic Eyes</h3>
            <p class="text-gray-600">
              Patients without a lens implant where DMEK may be more challenging to perform
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Previous Glaucoma Surgery</h3>
            <p class="text-gray-600">
              Eyes with tube shunts or filtering procedures where air management is challenging
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Busin Technique Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4">The Busin Method</h2>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Prof. Massimo Busin pioneered the specialized technique for preparing ultra-thin DSAEK
          grafts that combine the visual benefits of DMEK with the stability of DSAEK
        </p>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Double-Pass Microkeratome Technique</h3>
                <p class="text-gray-600">
                  The donor cornea is mounted on an artificial anterior chamber, and an initial
                  microkeratome pass removes anterior corneal tissue. After replacing the
                  microkeratome head with a different cutting depth, a second pass creates an
                  ultra-thin posterior lamella.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Controlled Tissue Thickness</h3>
                <p class="text-gray-600">
                  Using pachymetry measurements between passes allows precise calculation of
                  remaining tissue thickness, enabling the surgeon to consistently achieve grafts
                  between 50-100 μm.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Preservation of Endothelial Function</h3>
                <p class="text-gray-600">
                  Specialized handling techniques and cutting methods minimize endothelial trauma,
                  preserving cell density and function despite the manipulation required for
                  ultra-thin preparation.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  4
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Pull-Through Insertion Method</h3>
                <p class="text-gray-600">
                  The Busin glide instrument and forceps are used to pull the graft through a small
                  incision, minimizing endothelial damage during insertion and facilitating
                  controlled positioning of the ultra-thin tissue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">UT-DSAEK Surgical Technique</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Recipient Preparation</h3>
                <p class="text-gray-600">
                  The patient's diseased Descemet's membrane and endothelium are stripped through
                  small incisions. Careful scoring and controlled removal ensure a clean recipient
                  bed for graft attachment.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Graft Insertion</h3>
                <p class="text-gray-600">
                  The ultra-thin graft is loaded onto the Busin glide and inserted through a 3-4mm
                  incision. Using a pull-through technique, the graft is carefully drawn into the
                  anterior chamber while minimizing endothelial contact.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Graft Positioning</h3>
                <p class="text-gray-600">
                  Careful manipulation using irrigation and specialized instruments ensures the
                  graft is centered properly. The thinner tissue conforms more readily to the
                  posterior corneal surface than standard DSAEK grafts.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  4
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Air Tamponade</h3>
                <p class="text-gray-600">
                  An air bubble is injected into the anterior chamber to press the graft against the
                  recipient stroma. The air bubble is sized appropriately to maintain intraocular
                  pressure without causing pupillary block.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  5
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Final Adjustment</h3>
                <p class="text-gray-600">
                  After 10-15 minutes, some air is removed to reduce the bubble size, leaving enough
                  to maintain graft apposition while minimizing risks of pupillary block or
                  intraocular pressure elevation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">UT-DSAEK vs Other Techniques</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Parameter</th>
                <th class="px-6 py-4 text-left font-semibold">Standard DSAEK</th>
                <th class="px-6 py-4 text-left font-semibold text-blue-600">UT-DSAEK</th>
                <th class="px-6 py-4 text-left font-semibold">DMEK</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 font-medium">Graft Thickness</td>
                <td class="px-6 py-4">100-200 μm</td>
                <td class="px-6 py-4 text-blue-600">50-100 μm</td>
                <td class="px-6 py-4">10-15 μm</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Visual Outcome</td>
                <td class="px-6 py-4">Good (20/30-20/40)</td>
                <td class="px-6 py-4 text-blue-600">Very Good (20/25-20/30)</td>
                <td class="px-6 py-4">Excellent (20/20-20/25)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Hyperopic Shift</td>
                <td class="px-6 py-4">+1.0 to +1.5D</td>
                <td class="px-6 py-4 text-blue-600">+0.5 to +1.0D</td>
                <td class="px-6 py-4">Minimal</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Surgical Difficulty</td>
                <td class="px-6 py-4">Moderate</td>
                <td class="px-6 py-4 text-blue-600">Moderate-High</td>
                <td class="px-6 py-4">High</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Detachment Rate</td>
                <td class="px-6 py-4">1-5%</td>
                <td class="px-6 py-4 text-blue-600">3-8%</td>
                <td class="px-6 py-4">10-25%</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Endothelial Cell Loss</td>
                <td class="px-6 py-4">30-35% at 1 year</td>
                <td class="px-6 py-4 text-blue-600">35-40% at 1 year</td>
                <td class="px-6 py-4">30-45% at 1 year</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Recovery Time</td>
                <td class="px-6 py-4">3-6 months</td>
                <td class="px-6 py-4 text-blue-600">2-4 months</td>
                <td class="px-6 py-4">1-3 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Advantages of UT-DSAEK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Superior Visual Outcomes</h3>
            <p class="text-gray-600 text-sm">
              Better visual acuity than standard DSAEK, approaching DMEK results due to reduced
              thickness
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Reduced Hyperopic Shift</h3>
            <p class="text-gray-600 text-sm">
              Less induced hyperopia compared to standard DSAEK, minimizing refractive changes
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Faster Visual Recovery</h3>
            <p class="text-gray-600 text-sm">
              Quicker clearing of the interface with more rapid visual improvement
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Greater Stability</h3>
            <p class="text-gray-600 text-sm">
              Lower detachment rates and fewer rebubbling procedures than DMEK
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Wider Applicability</h3>
            <p class="text-gray-600 text-sm">
              Suitable for complex cases where DMEK might be challenging (e.g., aphakia, anterior
              chamber abnormalities)
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Reproducible Technique</h3>
            <p class="text-gray-600 text-sm">
              More standardized and predictable preparation process than DMEK
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Smoother Learning Curve</h3>
            <p class="text-gray-600 text-sm">
              More manageable transition for surgeons already familiar with standard DSAEK
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Excellent Graft Survival</h3>
            <p class="text-gray-600 text-sm">
              High long-term success rates with good endothelial cell preservation
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2 text-green-600">Less Pupillary Block</h3>
            <p class="text-gray-600 text-sm">
              Reduced risk of pupillary block and related pressure complications compared to DMEK
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Challenges and Considerations</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Technical Challenges</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Advanced microkeratome technique required for consistent graft preparation
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Specialized equipment needs (pachymetry, specific microkeratome heads)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                More difficult handling due to increased tissue flexibility compared to standard
                DSAEK
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Risk of perforation during double-pass preparation
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Higher endothelial cell loss during preparation phase
              </li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Surgical Considerations</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Slightly higher detachment rate than standard DSAEK
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                More skill-dependent than standard DSAEK
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Limited availability in some eye banks
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Higher cost due to specialized preparation requirements
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Less optimal visual outcomes than DMEK for straightforward cases
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Outcomes Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Clinical Outcomes</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl font-bold text-blue-600 mb-2">80%</div>
            <h3 class="font-semibold mb-2">20/30 Vision or Better</h3>
            <p class="text-gray-600 text-sm">Excellent visual outcomes approaching DMEK results</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-lg">
            <div class="text-4xl font-bold text-green-600 mb-2">95%</div>
            <h3 class="font-semibold mb-2">5-Year Graft Survival</h3>
            <p class="text-gray-600 text-sm">
              Excellent long-term success rates with proper technique
            </p>
          </div>
          <div class="text-center p-6 bg-yellow-50 rounded-lg">
            <div class="text-4xl font-bold text-yellow-600 mb-2">+0.75D</div>
            <h3 class="font-semibold mb-2">Avg. Hyperopic Shift</h3>
            <p class="text-gray-600 text-sm">
              Minimal refractive change compared to standard DSAEK
            </p>
          </div>
          <div class="text-center p-6 bg-purple-50 rounded-lg">
            <div class="text-4xl font-bold text-purple-600 mb-2">5%</div>
            <h3 class="font-semibold mb-2">Detachment Rate</h3>
            <p class="text-gray-600 text-sm">
              Lower than DMEK, slightly higher than standard DSAEK
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Key Research by Prof. Busin</h2>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">
                Long-term Outcomes of Ultra-Thin DSAEK (2023)
              </h3>
              <p class="text-gray-600 mb-2">
                Five-year follow-up study demonstrating excellent graft survival and endothelial
                cell preservation with UT-DSAEK. Comparative analysis showed visual outcomes
                approaching DMEK with superior graft stability.
              </p>
              <div class="flex items-center text-sm text-blue-600">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                  ></path>
                </svg>
                <span>American Journal of Ophthalmology</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">
                Double-Pass Microkeratome Technique for UT-DSAEK (2021)
              </h3>
              <p class="text-gray-600 mb-2">
                Landmark paper describing the refinement of the double-pass technique, including
                optimization of microkeratome head selection, pachymetry guidance, and endothelial
                cell preservation strategies.
              </p>
              <div class="flex items-center text-sm text-blue-600">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                  ></path>
                </svg>
                <span>Cornea</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">
                Comparative Study: UT-DSAEK vs DMEK in Complex Cases (2022)
              </h3>
              <p class="text-gray-600 mb-2">
                Research comparing outcomes between UT-DSAEK and DMEK in challenging cases including
                aphakic eyes, complex anterior segments, and post-glaucoma surgery patients.
                Demonstrated superior success rates with UT-DSAEK in these scenarios.
              </p>
              <div class="flex items-center text-sm text-blue-600">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                  ></path>
                </svg>
                <span>British Journal of Ophthalmology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Videos Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Related UT-DSAEK Videos</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">UT-DSAEK Graft Preparation</h3>
              <p class="text-gray-600 text-sm">
                Prof. Busin demonstrates the double-pass microkeratome technique
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">UT-DSAEK Surgery for Fuchs' Dystrophy</h3>
              <p class="text-gray-600 text-sm">
                Complete surgical case with step-by-step commentary
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">UT-DSAEK in Complex Cases</h3>
              <p class="text-gray-600 text-sm">
                Strategies for successful outcomes in challenging anterior segments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PageHero from '@/components/HeroComponent.vue'
</script>
