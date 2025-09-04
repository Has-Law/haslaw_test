'use client'

import { useState, useEffect } from 'react'
import { setCookie, getCookie, updateConsent } from '@/lib/cookies'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made cookie choices
    const cookieConsent = getCookie('cookie-consent')
    if (!cookieConsent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    
    // Set cookie preferences
    setCookie('cookie-consent', 'accepted', 365)
    setCookie('cookie-preferences', JSON.stringify(allAccepted), 365)
    
    // Update consent for analytics services
    updateConsent({
      analytics: true,
      marketing: true,
      functional: true
    })
    
    setShowBanner(false)
  }

  const handleAcceptSelected = () => {
    setCookie('cookie-consent', 'selected', 365)
    setCookie('cookie-preferences', JSON.stringify(preferences), 365)
    
    // Update consent based on selected preferences
    updateConsent({
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      functional: preferences.functional
    })
    
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const minimalPrefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    
    setCookie('cookie-consent', 'rejected', 365)
    setCookie('cookie-preferences', JSON.stringify(minimalPrefs), 365)
    
    // Update consent to reject all optional cookies
    updateConsent({
      analytics: false,
      marketing: false,
      functional: false
    })
    
    setShowBanner(false)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      {/* Cookie Banner */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-gray-200">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#780014] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font_britanica_black text-gray-900">Cookie Preferences</h3>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-700 font_britanica_regular leading-relaxed mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies as described in our{' '}
              <a href="/privacy-policy" className="text-[#780014] hover:underline font-medium">
                Privacy Policy
              </a>.
            </p>

            {showDetails && (
              <div className="space-y-4 border-t pt-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-1">Necessary Cookies</h4>
                    <p className="text-sm text-gray-600 font_britanica_regular">
                      Essential for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-6 bg-[#780014] rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 font_britanica_regular">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-[#780014]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 font_britanica_regular">
                      Used to track visitors across websites for personalized advertising.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-[#780014]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-1">Functional Cookies</h4>
                    <p className="text-sm text-gray-600 font_britanica_regular">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? 'bg-[#780014]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {!showDetails ? (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-[#780014] text-white px-6 py-3 rounded-lg font_britanica_bold hover:bg-[#860016] transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font_britanica_bold hover:border-gray-400 transition-colors"
                >
                  Customize Settings
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 text-gray-600 px-6 py-3 rounded-lg font_britanica_regular hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-[#780014] text-white px-6 py-3 rounded-lg font_britanica_bold hover:bg-[#860016] transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 border-2 border-[#780014] text-[#780014] px-6 py-3 rounded-lg font_britanica_bold hover:bg-[#780014] hover:text-white transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 text-gray-600 px-6 py-3 rounded-lg font_britanica_regular hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
