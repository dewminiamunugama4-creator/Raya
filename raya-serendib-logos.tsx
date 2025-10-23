import React from 'react';

const FinalLogo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-2">Raya Serendib</h1>
          <p className="text-emerald-700 text-lg">Final Logo Design - Sun in Divider</p>
        </div>

        {/* Primary Logo - Large Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 mb-8 border border-amber-100">
          <h2 className="text-center text-sm text-gray-500 mb-8 tracking-wider">PRIMARY LOGO</h2>
          <div className="text-center">
            <div className="mb-1">
              <span className="text-5xl font-light text-emerald-900" style={{letterSpacing: '0.1em'}}>RAYA</span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-extralight text-amber-700" style={{letterSpacing: '0.25em'}}>SERENDIB</span>
            </div>
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" className="mx-3">
                <circle cx="12" cy="12" r="7" fill="#d97706" opacity="0.9"/>
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            <p className="text-xs tracking-widest text-gray-600 font-light" style={{letterSpacing: '0.2em'}}>PURE ISLAND SKINCARE</p>
          </div>
        </div>

        {/* Logo Variations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Light Background */}
          <div className="bg-amber-50 rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center border border-amber-200">
            <p className="text-xs text-gray-600 mb-6 tracking-wider">ON LIGHT BACKGROUND</p>
            <div className="text-center">
              <div className="mb-1">
                <span className="text-4xl font-light text-emerald-900" style={{letterSpacing: '0.1em'}}>RAYA</span>
              </div>
              <div className="mb-3">
                <span className="text-2xl font-extralight text-amber-700" style={{letterSpacing: '0.25em'}}>SERENDIB</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <svg width="16" height="16" viewBox="0 0 24 24" className="mx-2">
                  <circle cx="12" cy="12" r="6" fill="#d97706" opacity="0.9"/>
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
              <p className="text-xs tracking-wider text-gray-700 font-light">PURE ISLAND SKINCARE</p>
            </div>
          </div>

          {/* Dark Background */}
          <div className="bg-emerald-900 rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center">
            <p className="text-xs text-amber-200 mb-6 tracking-wider">ON DARK BACKGROUND</p>
            <div className="text-center">
              <div className="mb-1">
                <span className="text-4xl font-light text-amber-100" style={{letterSpacing: '0.1em'}}>RAYA</span>
              </div>
              <div className="mb-3">
                <span className="text-2xl font-extralight text-amber-400" style={{letterSpacing: '0.25em'}}>SERENDIB</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                <svg width="16" height="16" viewBox="0 0 24 24" className="mx-2">
                  <circle cx="12" cy="12" r="6" fill="#fbbf24" opacity="0.9"/>
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
              <p className="text-xs tracking-wider text-amber-100 font-light">PURE ISLAND SKINCARE</p>
            </div>
          </div>

          {/* Minimal Version (No Tagline) */}
          <div className="bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center border border-gray-200">
            <p className="text-xs text-gray-600 mb-6 tracking-wider">MINIMAL VERSION</p>
            <div className="text-center">
              <div className="mb-1">
                <span className="text-4xl font-light text-emerald-900" style={{letterSpacing: '0.1em'}}>RAYA</span>
              </div>
              <div className="mb-3">
                <span className="text-2xl font-extralight text-amber-700" style={{letterSpacing: '0.25em'}}>SERENDIB</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
                <svg width="16" height="16" viewBox="0 0 24 24" className="mx-2">
                  <circle cx="12" cy="12" r="6" fill="#d97706" opacity="0.9"/>
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">Use for small applications,<br/>social media profile pictures</p>
          </div>

          {/* Icon Only - Sun Mark */}
          <div className="bg-gradient-to-br from-amber-100 to-emerald-100 rounded-2xl shadow-lg p-12 flex flex-col items-center justify-center">
            <p className="text-xs text-gray-700 mb-6 tracking-wider">ICON MARK</p>
            <div className="bg-white rounded-full p-8 shadow-lg">
              <svg width="60" height="60" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="18" fill="#d97706" opacity="0.9"/>
                <g stroke="#d97706" strokeWidth="2.5" opacity="0.6">
                  <line x1="40" y1="10" x2="40" y2="5"/>
                  <line x1="40" y1="75" x2="40" y2="70"/>
                  <line x1="10" y1="40" x2="5" y2="40"/>
                  <line x1="75" y1="40" x2="70" y2="40"/>
                  <line x1="18" y1="18" x2="14" y2="14"/>
                  <line x1="66" y1="66" x2="62" y2="62"/>
                  <line x1="62" y1="18" x2="66" y2="14"/>
                  <line x1="14" y1="66" x2="18" y2="62"/>
                </g>
              </svg>
            </div>
            <p className="text-xs text-gray-600 mt-6 text-center">Use for app icons,<br/>social media avatars, seals</p>
          </div>
        </div>

        {/* Product Mockup Example */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8 border border-emerald-100">
          <h2 className="text-center text-sm text-gray-500 mb-8 tracking-wider">PACKAGING MOCKUP EXAMPLE</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-80 bg-gradient-to-b from-amber-50 to-emerald-50 rounded-lg shadow-xl border-2 border-amber-200 flex flex-col items-center justify-center p-8">
              {/* Product Label */}
              <div className="text-center">
                <div className="mb-1">
                  <span className="text-2xl font-light text-emerald-900" style={{letterSpacing: '0.1em'}}>RAYA</span>
                </div>
                <div className="mb-2">
                  <span className="text-lg font-extralight text-amber-700" style={{letterSpacing: '0.25em'}}>SERENDIB</span>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-600"></div>
                  <svg width="12" height="12" viewBox="0 0 24 24" className="mx-2">
                    <circle cx="12" cy="12" r="6" fill="#d97706" opacity="0.9"/>
                  </svg>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-600"></div>
                </div>
                
                <div className="my-6">
                  <p className="text-sm font-light text-emerald-800 mb-1">Radiance Serum</p>
                  <p className="text-xs text-gray-600">30ml / 1 fl oz</p>
                </div>
                
                <div className="absolute bottom-8 left-0 right-0">
                  <p className="text-xs tracking-wider text-gray-600 font-light text-center">PURE ISLAND SKINCARE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Guidelines */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-6">Brand Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colors */}
            <div>
              <h3 className="font-semibold text-emerald-800 mb-4 text-lg">Color Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-emerald-900 shadow-md"></div>
                  <div>
                    <p className="font-medium text-gray-800">Forest Green</p>
                    <p className="text-sm text-gray-600">#064e3b</p>
                    <p className="text-xs text-gray-500">Primary text, dark applications</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-amber-700 shadow-md"></div>
                  <div>
                    <p className="font-medium text-gray-800">Amber Gold</p>
                    <p className="text-sm text-gray-600">#d97706</p>
                    <p className="text-xs text-gray-500">Sun icon, secondary text</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-amber-50 shadow-md border border-amber-200"></div>
                  <div>
                    <p className="font-medium text-gray-800">Cream</p>
                    <p className="text-sm text-gray-600">#fffbeb</p>
                    <p className="text-xs text-gray-500">Backgrounds, packaging</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="font-semibold text-emerald-800 mb-4 text-lg">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-800 mb-1">"RAYA" - Primary</p>
                  <p className="text-sm text-gray-600">Font-weight: 300 (Light)</p>
                  <p className="text-sm text-gray-600">Letter-spacing: 0.1em</p>
                  <p className="text-sm text-gray-600">Color: Emerald-900</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">"SERENDIB" - Secondary</p>
                  <p className="text-sm text-gray-600">Font-weight: 200 (Extra-light)</p>
                  <p className="text-sm text-gray-600">Letter-spacing: 0.25em</p>
                  <p className="text-sm text-gray-600">Color: Amber-700</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Tagline</p>
                  <p className="text-sm text-gray-600">Font-weight: 300 (Light)</p>
                  <p className="text-sm text-gray-600">Letter-spacing: 0.2em</p>
                  <p className="text-sm text-gray-600">All caps, Gray-600</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-emerald-800 mb-4 text-lg">Usage Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">✓ Do's</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Maintain minimum clear space around logo</li>
                  <li>• Use approved color variations only</li>
                  <li>• Keep proportions intact when scaling</li>
                  <li>• Use high-resolution files for print</li>
                  <li>• Center logo on packaging and marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">✗ Don'ts</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Don't alter colors or add effects</li>
                  <li>• Don't distort or stretch the logo</li>
                  <li>• Don't place on busy backgrounds</li>
                  <li>• Don't separate the sun from divider</li>
                  <li>• Don't change letter spacing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-emerald-800 mb-3 text-lg">Applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">Packaging</p>
                <p className="text-xs text-gray-600 mt-1">Primary logo with tagline</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">Website</p>
                <p className="text-xs text-gray-600 mt-1">Minimal version (header)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">Social Media</p>
                <p className="text-xs text-gray-600 mt-1">Icon mark or minimal</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">Print</p>
                <p className="text-xs text-gray-600 mt-1">Primary logo, all versions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-xl font-semibold text-emerald-900 mb-4">Next Steps for Your Brand</h3>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-start">
              <span className="text-amber-600 mr-2">1.</span>
              <span><strong>Trademark & Legal:</strong> File trademark for "Raya Serendib" in target markets</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-600 mr-2">2.</span>
              <span><strong>Digital Assets:</strong> Secure domain (rayaserendib.com) and social handles (@rayaserendib)</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-600 mr-2">3.</span>
              <span><strong>Design Files:</strong> Create vector files (.AI, .SVG) in all variations for designers</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-600 mr-2">4.</span>
              <span><strong>Packaging Design:</strong> Apply logo to product packaging with botanical elements</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-600 mr-2">5.</span>
              <span><strong>Website & Marketing:</strong> Build brand website showcasing Sri Lankan story and products</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalLogo;