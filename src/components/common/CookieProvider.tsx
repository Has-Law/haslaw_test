'use client'

import { useEffect } from 'react'

// Cookie Provider to initialize analytics services based on saved preferences
const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize Google Analytics with consent mode
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics Measurement ID - replace with your actual GA4 ID
      const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

      if (GA_MEASUREMENT_ID) {
        // Create and append gtag script
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        document.head.appendChild(script)

        // Initialize gtag with consent mode
        window.dataLayer = window.dataLayer || []
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args)
        }
        window.gtag = gtag

        // Set default consent state
        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'security_storage': 'granted',
          'wait_for_update': 500
        })

        gtag('js', new Date())
        gtag('config', GA_MEASUREMENT_ID)

        // Check for existing cookie preferences and apply them
        const preferences = getCookiePreferences()
        if (preferences) {
          gtag('consent', 'update', {
            'analytics_storage': preferences.analytics ? 'granted' : 'denied',
            'ad_storage': preferences.marketing ? 'granted' : 'denied',
            'functionality_storage': preferences.functional ? 'granted' : 'denied',
            'personalization_storage': preferences.functional ? 'granted' : 'denied'
          })
        }
      }
    }
  }, [])

  return <>{children}</>
}

// Helper function to get cookie preferences
const getCookiePreferences = () => {
  if (typeof document === 'undefined') return null
  
  const prefs = getCookie('cookie-preferences')
  if (!prefs) return null
  
  try {
    return JSON.parse(prefs)
  } catch {
    return null
  }
}

// Helper function to get cookie
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null
  
  const nameEQ = name + "="
  const ca = document.cookie.split(';')
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export default CookieProvider
