<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section usando il componente riutilizzabile -->
    <PageHero title="Mushroom PK" subtitle="Two-piece Mushroom Penetrating Keratoplasty" />

    <!-- Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is Mushroom PK?</h2>
            <p class="text-gray-600 mb-4">
              Mushroom Penetrating Keratoplasty (Mushroom PK) is an innovative full-thickness
              corneal transplant technique that creates a mushroom-shaped configuration by using
              different diameters for the anterior and posterior portions of the graft.
            </p>
            <p class="text-gray-600 mb-4">
              This unique design combines the wound stability advantages of a smaller posterior
              diameter with the optical benefits of a larger anterior diameter, offering superior
              outcomes compared to conventional penetrating keratoplasty.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Enhanced wound stability with smaller posterior opening</li>
              <li>Larger optical zone for better visual outcomes</li>
              <li>Reduced risk of wound dehiscence</li>
              <li>Lower astigmatism compared to conventional PK</li>
              <li>Faster visual rehabilitation</li>
              <li>Stronger eye integrity</li>
            </ul>
          </div>
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">Mushroom PK Illustration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Indications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Indications for Mushroom PK</h2>
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
            <h3 class="text-xl font-semibold mb-2">Advanced Keratoconus</h3>
            <p class="text-gray-600">
              Severe keratoconus with central scarring or hydrops not amenable to DALK
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
            <h3 class="text-xl font-semibold mb-2">Full-Thickness Corneal Scars</h3>
            <p class="text-gray-600">
              Deep corneal scarring involving all layers including the endothelium
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
            <h3 class="text-xl font-semibold mb-2">Failed Previous Grafts</h3>
            <p class="text-gray-600">
              Failed DALK, DSAEK, or previous PK requiring full-thickness replacement
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
            <h3 class="text-xl font-semibold mb-2">Corneal Perforations</h3>
            <p class="text-gray-600">
              Active or impending corneal perforations requiring urgent intervention
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
            <h3 class="text-xl font-semibold mb-2">Combined Pathology</h3>
            <p class="text-gray-600">Stromal and endothelial disease coexisting in the same eye</p>
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
            <h3 class="text-xl font-semibold mb-2">Infectious Keratitis</h3>
            <p class="text-gray-600">
              Severe infectious keratitis not responding to medical therapy with tissue loss
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Mushroom PK Surgical Technique</h2>
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
                  Using a femtosecond laser or manual technique, a two-step trephination is
                  performed. The posterior cornea is cut with a smaller diameter (typically 7.0-7.5
                  mm) while the anterior cornea is cut with a larger diameter (8.0-8.5 mm).
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
                <h3 class="text-xl font-semibold mb-2">Donor Preparation</h3>
                <p class="text-gray-600">
                  The donor cornea is prepared using matching diameters to create a complementary
                  mushroom shape. Precise measurements ensure perfect fit between donor and
                  recipient tissues.
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
                <h3 class="text-xl font-semibold mb-2">Recipient Tissue Removal</h3>
                <p class="text-gray-600">
                  The recipient corneal button is carefully removed, revealing the stepped wound
                  configuration that will provide enhanced stability.
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
                <h3 class="text-xl font-semibold mb-2">Graft Placement</h3>
                <p class="text-gray-600">
                  The mushroom-shaped donor graft is positioned precisely, with the smaller
                  posterior portion fitting into the smaller recipient opening, creating a
                  self-sealing configuration.
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
                <h3 class="text-xl font-semibold mb-2">Suturing</h3>
                <p class="text-gray-600">
                  Interrupted or continuous sutures are placed, typically requiring fewer sutures
                  than conventional PK due to the inherent stability of the mushroom configuration.
                  Suture tension is carefully adjusted to minimize astigmatism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Advantages of Mushroom PK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Superior Wound Stability</h3>
            <p class="text-gray-600 text-sm">
              Smaller posterior opening reduces risk of wound dehiscence and traumatic rupture
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Larger Optical Zone</h3>
            <p class="text-gray-600 text-sm">
              Bigger anterior diameter provides better optical quality and wider clear zone
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Reduced Astigmatism</h3>
            <p class="text-gray-600 text-sm">
              Stepped configuration allows for more even suture distribution and tension
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Faster Recovery</h3>
            <p class="text-gray-600 text-sm">
              Enhanced wound stability allows earlier suture removal and visual rehabilitation
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Better IOP Control</h3>
            <p class="text-gray-600 text-sm">
              Self-sealing wound configuration helps maintain intraocular pressure
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Reduced Endothelial Loss</h3>
            <p class="text-gray-600 text-sm">
              Less manipulation during surgery preserves more endothelial cells
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Fewer Sutures Required</h3>
            <p class="text-gray-600 text-sm">
              Inherent stability of design reduces the number of sutures needed
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Lower Rejection Risk</h3>
            <p class="text-gray-600 text-sm">
              Smaller endothelial surface area exposed reduces immunological burden
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison with Conventional PK -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Mushroom PK vs Conventional PK</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Parameter</th>
                <th class="px-6 py-4 text-left font-semibold text-blue-600">Mushroom PK</th>
                <th class="px-6 py-4 text-left font-semibold">Conventional PK</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 font-medium">Wound Configuration</td>
                <td class="px-6 py-4 text-blue-600">Two-diameter stepped</td>
                <td class="px-6 py-4">Single diameter straight</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Wound Stability</td>
                <td class="px-6 py-4 text-blue-600">Superior</td>
                <td class="px-6 py-4">Good</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Risk of Dehiscence</td>
                <td class="px-6 py-4 text-blue-600">Low</td>
                <td class="px-6 py-4">Moderate</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Optical Zone</td>
                <td class="px-6 py-4 text-blue-600">Larger (8.0-8.5 mm)</td>
                <td class="px-6 py-4">Standard (7.5-8.0 mm)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Astigmatism</td>
                <td class="px-6 py-4 text-blue-600">Lower (2-3D average)</td>
                <td class="px-6 py-4">Higher (4-5D average)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Suture Removal</td>
                <td class="px-6 py-4 text-blue-600">Earlier possible</td>
                <td class="px-6 py-4">Later required</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Visual Recovery</td>
                <td class="px-6 py-4 text-blue-600">Faster</td>
                <td class="px-6 py-4">Slower</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Technical Complexity</td>
                <td class="px-6 py-4 text-blue-600">Moderate-High</td>
                <td class="px-6 py-4">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Femtosecond Laser-Assisted Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Femtosecond Laser-Assisted Mushroom PK</h2>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">Femtosecond Laser Mushroom Cut</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4">Precision and Customization</h3>
            <p class="text-gray-600 mb-4">
              Femtosecond laser technology enables precise creation of the mushroom configuration
              with customizable parameters for optimal outcomes.
            </p>
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Perfect Geometry</h4>
                <p class="text-gray-600 text-sm">
                  Exact matching of donor and recipient cuts ensures perfect tissue apposition and
                  wound healing.
                </p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Customizable Parameters</h4>
                <p class="text-gray-600 text-sm">
                  Anterior and posterior diameters, side cut angles, and lamellar depth can be
                  precisely programmed.
                </p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Enhanced Wound Healing</h4>
                <p class="text-gray-600 text-sm">
                  Smooth, regular cuts promote faster and stronger wound healing with less
                  inflammation.
                </p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Reduced Surgical Time</h4>
                <p class="text-gray-600 text-sm">
                  Automated cutting reduces open-sky time and overall surgical duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Post-operative Care Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Post-operative Care & Recovery</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Immediate Post-operative (Day 1-7)</h3>
                <p class="text-gray-600 mb-2">
                  Eye shield protection 24/7 for the first week. Topical antibiotics, steroids, and
                  lubricants initiated. Daily examination to monitor epithelial healing and wound
                  integrity.
                </p>
                <div class="bg-blue-50 p-3 rounded">
                  <p class="text-blue-800 text-sm font-medium">
                    Critical: Avoid any eye trauma or pressure. Sleep with protective shield for
                    several months.
                  </p>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">First Month</h3>
                <p class="text-gray-600">
                  Frequent follow-up visits to monitor healing, IOP, and signs of rejection. Gradual
                  steroid taper based on inflammation. Vision remains blurry due to high
                  astigmatism.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">3-6 Months</h3>
                <p class="text-gray-600">
                  Begin selective suture removal based on topography and refraction. Each suture
                  removal session followed by close monitoring. Vision gradually improves as
                  astigmatism reduces.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">6-12 Months</h3>
                <p class="text-gray-600">
                  Continue suture removal process. Most patients achieve functional vision by 12
                  months. May require glasses or contact lenses for best vision.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Long-term Follow-up</h3>
                <p class="text-gray-600">
                  Lifelong monitoring for rejection, glaucoma, and endothelial health. Annual
                  examinations with endothelial cell counts. Maintain low-dose topical steroids
                  indefinitely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Complications Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Potential Complications</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Early Complications</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Wound leak (less common than conventional PK)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Shallow anterior chamber
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Pupillary block
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Primary graft failure (rare, &lt;1%)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Infection (endophthalmitis risk 0.1-0.5%)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Persistent epithelial defects
              </li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Late Complications</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Graft rejection (15-25% over 5 years)
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                High astigmatism requiring intervention
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Glaucoma (20-35% incidence)
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Progressive endothelial cell loss
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Suture-related complications
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Late wound dehiscence from trauma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Outcomes Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Clinical Outcomes</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-green-50 rounded-lg">
            <div class="text-4xl font-bold text-green-600 mb-2">90%</div>
            <h3 class="font-semibold mb-2">Graft Clarity at 5 Years</h3>
            <p class="text-gray-600 text-sm">
              Excellent long-term survival with proper immunosuppression
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl font-bold text-blue-600 mb-2">70%</div>
            <h3 class="font-semibold mb-2">20/40 Vision or Better</h3>
            <p class="text-gray-600 text-sm">
              Majority achieve driving vision with optical correction
            </p>
          </div>
          <div class="text-center p-6 bg-purple-50 rounded-lg">
            <div class="text-4xl font-bold text-purple-600 mb-2">3D</div>
            <h3 class="font-semibold mb-2">Average Astigmatism</h3>
            <p class="text-gray-600 text-sm">
              Lower than conventional PK due to mushroom configuration
            </p>
          </div>
          <div class="text-center p-6 bg-yellow-50 rounded-lg">
            <div class="text-4xl font-bold text-yellow-600 mb-2">12-18</div>
            <h3 class="font-semibold mb-2">Months to Best Vision</h3>
            <p class="text-gray-600 text-sm">Gradual improvement with suture removal and healing</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Research and Innovation Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Innovation in Mushroom PK</h2>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">The Busin Approach</h3>
              <p class="text-gray-600 mb-2">
                Prof. Massimo Busin has pioneered refinements in the mushroom PK technique,
                optimizing diameter ratios and cut angles for maximum stability while maintaining
                excellent optical outcomes.
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
                <span>Ophthalmology</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">
                Optimized Diameter Ratios for Enhanced Stability
              </h3>
              <p class="text-gray-600 mb-2">
                Research has shown that a 0.5-1.0 mm difference between anterior and posterior
                diameters provides optimal balance between stability and optical quality, reducing
                complications while maximizing visual outcomes.
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
                Combined Procedures: Mushroom PK with Cataract Surgery
              </h3>
              <p class="text-gray-600 mb-2">
                The enhanced stability of mushroom PK makes it ideal for combined procedures,
                allowing safe cataract extraction and IOL implantation during the same surgery with
                reduced risk of wound complications.
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
                <span>Journal of Cataract & Refractive Surgery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Videos Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Related Mushroom PK Videos</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">Femtosecond Laser-Assisted Mushroom PK</h3>
              <p class="text-gray-600 text-sm">
                Prof. Busin demonstrates the precision of laser-assisted mushroom keratoplasty
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">Manual Mushroom PK Technique</h3>
              <p class="text-gray-600 text-sm">
                Step-by-step manual trephination for mushroom configuration
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">Combined Mushroom PK and Cataract Surgery</h3>
              <p class="text-gray-600 text-sm">
                Triple procedure combining mushroom PK with phacoemulsification and IOL
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
