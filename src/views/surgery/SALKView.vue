<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">SALK</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Superficial Anterior Lamellar Keratoplasty - Precision partial-thickness corneal
            transplantation for anterior corneal pathology
          </p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">What is SALK?</h2>
            <p class="text-gray-600 mb-4">
              Superficial Anterior Lamellar Keratoplasty (SALK) is a partial-thickness corneal
              transplant procedure that selectively replaces only the diseased anterior layers of
              the cornea while preserving the healthy posterior stroma, Descemet's membrane, and
              endothelium.
            </p>
            <p class="text-gray-600 mb-4">
              Unlike DALK, which replaces the entire corneal stroma, SALK targets only the
              superficial stromal layers affected by disease, maintaining the structural integrity
              of the deeper stroma and ensuring excellent visual outcomes.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Tissue-conserving approach for anterior pathology</li>
              <li>Preservation of healthy posterior cornea</li>
              <li>Reduced surgical complexity compared to DALK</li>
              <li>Faster visual recovery</li>
              <li>Minimal risk of endothelial rejection</li>
            </ul>
          </div>
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">SALK Procedure Illustration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Indications Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Indications for SALK</h2>
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
            <h3 class="text-xl font-semibold mb-2">Anterior Corneal Scars</h3>
            <p class="text-gray-600">
              Superficial stromal scars from trauma, infection, or previous surgery
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
            <h3 class="text-xl font-semibold mb-2">Anterior Stromal Dystrophies</h3>
            <p class="text-gray-600">
              Granular, lattice, and other stromal dystrophies affecting superficial layers
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Salzmann's Nodular Degeneration</h3>
            <p class="text-gray-600">
              Elevated nodular opacities in the anterior cornea causing visual disturbance
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
            <h3 class="text-xl font-semibold mb-2">Recurrent Erosion Syndrome</h3>
            <p class="text-gray-600">
              Severe cases of recurrent corneal erosions not responding to conservative treatment
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
            <h3 class="text-xl font-semibold mb-2">Mild Keratoconus</h3>
            <p class="text-gray-600">
              Early keratoconus with predominantly anterior corneal changes and regular posterior
              cornea
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
            <h3 class="text-xl font-semibold mb-2">Post-Refractive Surgery Complications</h3>
            <p class="text-gray-600">
              Irregular astigmatism, central islands, or scarring after refractive procedures
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Surgical Technique Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Surgical Technique</h2>
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
                <h3 class="text-xl font-semibold mb-2">Preoperative Evaluation</h3>
                <p class="text-gray-600">
                  Thorough assessment of corneal pathology using topography, pachymetry, and
                  anterior segment OCT to determine the depth and extent of the disease process.
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
                <h3 class="text-xl font-semibold mb-2">Recipient Bed Preparation</h3>
                <p class="text-gray-600">
                  A partial-thickness trephination is performed to an appropriate depth (typically
                  150-250 μm), followed by manual or automated lamellar dissection to remove the
                  diseased tissue.
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
                <h3 class="text-xl font-semibold mb-2">Donor Graft Preparation</h3>
                <p class="text-gray-600">
                  The donor cornea is prepared using a microkeratome or femtosecond laser to create
                  a lamellar cap of appropriate thickness that matches the recipient bed.
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
                  The donor lenticule is carefully positioned on the recipient bed and secured with
                  interrupted or continuous sutures to ensure proper tension and alignment.
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
                <h3 class="text-xl font-semibold mb-2">Suture Adjustment</h3>
                <p class="text-gray-600">
                  Intraoperative keratometry or wavefront analysis may be used to guide suture
                  adjustment to minimize astigmatism and optimize visual outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Benefits of SALK</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Tissue Conservation</h3>
            <p class="text-gray-600 text-sm">
              Removes only the diseased anterior corneal tissue, preserving healthy posterior layers
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Reduced Rejection Risk</h3>
            <p class="text-gray-600 text-sm">
              Minimal risk of endothelial rejection as the host endothelium is preserved
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Stronger Wound</h3>
            <p class="text-gray-600 text-sm">
              Partial-thickness procedure maintains structural integrity with greater resistance to
              trauma
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Faster Recovery</h3>
            <p class="text-gray-600 text-sm">
              Quicker visual rehabilitation compared to full-thickness transplants
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Less Astigmatism</h3>
            <p class="text-gray-600 text-sm">
              Typically results in less postoperative astigmatism than penetrating keratoplasty
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Technical Simplicity</h3>
            <p class="text-gray-600 text-sm">
              Less complex than DALK with decreased risk of intraoperative complications
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Better Visual Outcomes</h3>
            <p class="text-gray-600 text-sm">
              Excellent visual results due to minimal interface irregularities
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-semibold mb-2">Suitable for Outpatient</h3>
            <p class="text-gray-600 text-sm">
              Can be performed as an outpatient procedure with topical or local anesthesia
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison with Other Techniques -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">SALK vs Other Techniques</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Parameter</th>
                <th class="px-6 py-4 text-left font-semibold text-blue-600">SALK</th>
                <th class="px-6 py-4 text-left font-semibold">DALK</th>
                <th class="px-6 py-4 text-left font-semibold">PKP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 font-medium">Tissue Replaced</td>
                <td class="px-6 py-4 text-blue-600">Anterior stroma only</td>
                <td class="px-6 py-4">Full stroma</td>
                <td class="px-6 py-4">Full thickness</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Indications</td>
                <td class="px-6 py-4 text-blue-600">Anterior pathology</td>
                <td class="px-6 py-4">Stromal disease</td>
                <td class="px-6 py-4">Full-thickness disease</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Technical Complexity</td>
                <td class="px-6 py-4 text-blue-600">Moderate</td>
                <td class="px-6 py-4">High</td>
                <td class="px-6 py-4">Moderate</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Risk of Perforation</td>
                <td class="px-6 py-4 text-blue-600">Low</td>
                <td class="px-6 py-4">Moderate</td>
                <td class="px-6 py-4">N/A (planned open sky)</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Visual Recovery</td>
                <td class="px-6 py-4 text-blue-600">3-6 months</td>
                <td class="px-6 py-4">6-12 months</td>
                <td class="px-6 py-4">12+ months</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-medium">Endothelial Rejection</td>
                <td class="px-6 py-4 text-blue-600">None</td>
                <td class="px-6 py-4">None</td>
                <td class="px-6 py-4">Significant risk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Femtosecond Laser-Assisted SALK Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Femtosecond Laser-Assisted SALK</h2>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <span class="text-gray-500">Femtosecond Laser Illustration</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4">Advanced Precision</h3>
            <p class="text-gray-600 mb-4">
              Femtosecond laser technology has revolutionized SALK by enabling precise, customized
              cuts with programmable depth, diameter, and geometric patterns.
            </p>
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Enhanced Accuracy</h4>
                <p class="text-gray-600 text-sm">
                  Enables creation of uniform lamellar cuts with micron-level precision for both
                  donor and recipient tissues.
                </p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Customized Profiles</h4>
                <p class="text-gray-600 text-sm">
                  Allows for complex cut geometries including zig-zag patterns and peripheral
                  alignment markers for better graft positioning.
                </p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Reduced Complications</h4>
                <p class="text-gray-600 text-sm">
                  Minimizes the risk of buttonholes, perforation, and irregular cuts associated with
                  manual dissection techniques.
                </p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-700 mb-2">Better Visual Outcomes</h4>
                <p class="text-gray-600 text-sm">
                  Results in smoother interfaces and more predictable refractive outcomes with less
                  induced astigmatism.
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
        <h2 class="text-3xl font-bold text-center mb-12">Recovery & Follow-up</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold mb-2">Early Post-operative Period (1-2 weeks)</h3>
                <p class="text-gray-600 mb-2">
                  Patients experience moderate discomfort and blurred vision. Topical antibiotics,
                  steroids, and lubricants are prescribed. Eye shield protection during sleep.
                </p>
                <div class="bg-blue-50 p-3 rounded">
                  <p class="text-blue-800 text-sm font-medium">
                    Important: Avoid eye rubbing and maintain frequent follow-up visits to monitor
                    healing
                  </p>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">First Month</h3>
                <p class="text-gray-600">
                  Suture removal typically begins based on topography and refraction. Gradual
                  improvement in vision as corneal surface regularizes. Steroid taper based on
                  inflammation and healing.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">3-6 Months</h3>
                <p class="text-gray-600">
                  Continuation of selective suture removal to manage astigmatism. Most patients
                  achieve functional vision during this period. Contact lens fitting may be
                  considered for residual refractive errors.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Long-term Follow-up</h3>
                <p class="text-gray-600">
                  Annual examinations to monitor graft health and refraction. Regular corneal
                  topography to evaluate stability. Excellent long-term outcomes with minimal
                  complications in most cases.
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
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Surgical Challenges</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Interface haze or scarring
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Irregular lamellar dissection
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Buttonhole formation during dissection
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Intraoperative perforation (less common than in DALK)
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-2">•</span>
                Donor-recipient mismatch
              </li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4 text-red-600">Post-operative Concerns</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Irregular astigmatism
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Epithelial ingrowth at the interface
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Stromal rejection (rare but possible)
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Suture-related complications
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                Recurrence of original pathology (particularly in dystrophies)
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
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-green-50 rounded-lg">
            <div class="text-4xl font-bold text-green-600 mb-2">90%+</div>
            <h3 class="font-semibold mb-2">Graft Clarity</h3>
            <p class="text-gray-600 text-sm">
              Excellent graft clarity rates with minimal interface haze
            </p>
          </div>
          <div class="text-center p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl font-bold text-blue-600 mb-2">80%</div>
            <h3 class="font-semibold mb-2">20/40 Vision or Better</h3>
            <p class="text-gray-600 text-sm">
              Majority of patients achieve functional visual acuity without correction
            </p>
          </div>
          <div class="text-center p-6 bg-purple-50 rounded-lg">
            <div class="text-4xl font-bold text-purple-600 mb-2">&lt;1%</div>
            <h3 class="font-semibold mb-2">Endothelial Rejection</h3>
            <p class="text-gray-600 text-sm">
              Negligible risk of endothelial rejection due to preservation of host endothelium
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Videos Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Related SALK Videos</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">SALK Technique for Anterior Stromal Scarring</h3>
              <p class="text-gray-600 text-sm">
                Prof. Busin demonstrates manual SALK for post-infectious corneal scars
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">Femtosecond Laser-Assisted SALK</h3>
              <p class="text-gray-600 text-sm">
                Advanced laser-guided technique for precise lamellar dissection
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Video Thumbnail</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2">SALK for Salzmann's Nodular Degeneration</h3>
              <p class="text-gray-600 text-sm">
                Surgical management of nodular corneal degeneration using SALK
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
</script>
