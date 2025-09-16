'use client'

import { useEffect } from 'react'

const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {

    if (typeof window !== 'undefined') {
   
      const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

      if (GA_MEASUREMENT_ID) {
   
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        document.head.appendChild(script)


        window.dataLayer = window.dataLayer || []
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args)
        }
        window.gtag = gtag

     
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
