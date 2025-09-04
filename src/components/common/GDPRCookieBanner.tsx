"use client";

import { useState, useEffect } from 'react';
import { useCookies } from '@/hooks/useCookies';
import { COOKIE_CATEGORIES, PRIVACY_COMPLIANCE } from '@/types/cookies';

export default function GDPRCookieBanner() {
  const { 
    hasConsented, 
    preferences, 
    updatePreferences, 
    acceptAll, 
    rejectAll, 
    jurisdiction,
    consentTimestamp,
    isLoading 
  } = useCookies();
  
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(preferences);

  useEffect(() => {
    // Show banner after delay if user hasn't consented or consent is expired
    if (!hasConsented && !isLoading) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
    
    // Check for consent expiration (GDPR Article 7 - consent renewal)
    if (hasConsented && consentTimestamp) {
      const now = Date.now();
      const renewalPeriod = PRIVACY_COMPLIANCE.CONSENT_RENEWAL_PERIOD * 24 * 60 * 60 * 1000;
      
      if ((now - consentTimestamp) > renewalPeriod) {
        console.log('Cookie consent expired - requiring renewal');
        setShowBanner(true);
      }
    }
  }, [hasConsented, isLoading, consentTimestamp]);

  useEffect(() => {
    setTempPreferences(preferences);
  }, [preferences]);

  if ((hasConsented && !showBanner) || isLoading) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSaveCustom = () => {
    updatePreferences(tempPreferences);
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleTogglePreference = (category: keyof typeof tempPreferences) => {
    if (category === 'necessary') return; // Can't disable necessary cookies
    
    setTempPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Get jurisdiction-specific text
  const getJurisdictionText = () => {
    switch (jurisdiction) {
      case 'GDPR':
        return {
          title: 'Cookie Preferences - GDPR Compliance',
          description: 'We respect your privacy rights under GDPR. You have full control over which cookies you accept.',
          rights: 'You have the right to access, rectify, erase, restrict, port, object to processing, and withdraw consent at any time.',
          legal: 'Legal basis for processing is your explicit consent (GDPR Article 6(1)(a)) or our legitimate interests (Article 6(1)(f)).'
        };
      case 'CCPA':
        return {
          title: 'Cookie Preferences - CCPA Compliance', 
          description: 'As a California resident, you have specific privacy rights. You can opt out of the sale of your personal information.',
          rights: 'You have the right to know, delete, opt-out of sale, and non-discrimination under CCPA.',
          legal: 'We do not sell personal information. Cookies help us provide and improve our services.'
        };
      default:
        return {
          title: 'Cookie Preferences',
          description: 'We use cookies to enhance your browsing experience and provide personalized content.',
          rights: 'You can manage your cookie preferences at any time.',
          legal: 'Our use of cookies is based on your consent and our legitimate business interests.'
        };
    }
  };

  const jurisdictionText = getJurisdictionText();

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
      
      {/* GDPR/CCPA Compliant Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#780014] shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          {!showCustomize ? (
            // Initial Banner with Jurisdiction Info
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-[#780014] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🍪</span>
                  </div>
                  <h3 className="font_britanica_bold text-lg text-[#780014]">
                    {jurisdictionText.title}
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {jurisdiction}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {jurisdictionText.description}
                </p>
                
                <p className="text-xs text-gray-500 mb-2">
                  {jurisdictionText.rights}
                </p>
                
                <p className="text-xs text-gray-500">
                  <a href="/privacy-policy" className="text-[#780014] hover:underline">
                    Privacy Policy
                  </a>
                  {' • '}
                  <a href="/cookie-policy" className="text-[#780014] hover:underline">
                    Cookie Policy  
                  </a>
                  {jurisdiction === 'GDPR' && (
                    <>
                      {' • '}
                      <span className="text-[#780014]">
                        Data Controller: HasLaw Legal Services
                      </span>
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                >
                  {jurisdiction === 'CCPA' ? 'Opt Out of All' : 'Reject All'}
                </button>
                
                <button
                  onClick={handleCustomize}
                  className="px-6 py-2 border-2 border-[#780014] text-[#780014] rounded-lg hover:bg-[#780014]/5 transition-colors font-medium text-sm"
                >
                  Manage Preferences
                </button>
                
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-[#780014] text-white rounded-lg hover:bg-[#780014]/90 transition-colors font-medium text-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // GDPR-Compliant Customization Panel
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font_britanica_bold text-xl text-[#780014]">
                    Cookie Preferences - Detailed Control
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {jurisdictionText.legal}
                  </p>
                </div>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <span className="sr-only">Close</span>
                  ✕
                </button>
              </div>

              <div className="grid gap-4 mb-6 max-h-[60vh] overflow-y-auto">
                {Object.entries(COOKIE_CATEGORIES).map(([key, category]) => (
                  <div key={key} className="bg-gray-50 p-5 rounded-lg border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font_britanica_bold text-lg text-gray-900">
                            {category.name}
                          </h4>
                          {category.always_enabled && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="text-xs text-gray-500 space-y-1">
                          <div><span className="font-medium">Legal Basis:</span> {category.legalBasis}</div>
                          <div><span className="font-medium">Retention:</span> {category.retentionPeriod}</div>
                          <div><span className="font-medium">Third Parties:</span> {category.thirdParties.join(', ') || 'None'}</div>
                          <div><span className="font-medium">Data Transfers:</span> {category.dataTransfers}</div>
                        </div>
                        
                        <details className="mt-2">
                          <summary className="text-xs text-[#780014] cursor-pointer hover:underline">
                            View Purposes & Examples
                          </summary>
                          <div className="mt-2 text-xs text-gray-600 space-y-1">
                            <div><span className="font-medium">Purposes:</span></div>
                            <ul className="list-disc list-inside ml-2">
                              {category.purposes.map((purpose, idx) => (
                                <li key={idx}>{purpose}</li>
                              ))}
                            </ul>
                            <div className="mt-2"><span className="font-medium">Examples:</span></div>
                            <ul className="list-disc list-inside ml-2">
                              {category.examples.map((example, idx) => (
                                <li key={idx}>{example}</li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      </div>
                      
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={tempPreferences[key as keyof typeof tempPreferences]}
                          onChange={() => handleTogglePreference(key as keyof typeof tempPreferences)}
                          disabled={category.always_enabled}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#780014]/20 rounded-full peer peer-disabled:opacity-50 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#780014]"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compliance Notice */}
              {jurisdiction === 'GDPR' && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
                  <h5 className="font-medium text-blue-900 mb-1">Your Rights Under GDPR:</h5>
                  <p className="text-blue-800">
                    You can withdraw consent, request data access/deletion, or file complaints with supervisory authorities. 
                    Contact our Data Protection Officer: dpo@haslaw.com
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                
                <button
                  onClick={handleSaveCustom}
                  className="px-6 py-2 bg-[#780014] text-white rounded-lg hover:bg-[#780014]/90 transition-colors font-medium"
                >
                  Save My Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
