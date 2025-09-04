"use client";

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { 
  CookiePreferences, 
  LegalConsent, 
  DEFAULT_COOKIE_PREFERENCES, 
  PRIVACY_COMPLIANCE 
} from '@/types/cookies';
import { 
  getCookie, 
  setCookie, 
  updateConsent, 
  createLegalConsent,
  isValidConsent,
  logConsentAction,
  getUserJurisdiction
} from '@/lib/cookies';

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  updatePreferences: (newPreferences: CookiePreferences) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  isLoading: boolean;
  jurisdiction: string;
  consentTimestamp?: number;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jurisdiction, setJurisdiction] = useState<string>('OTHER');
  const [consentTimestamp, setConsentTimestamp] = useState<number>();

  useEffect(() => {
    // Initialize jurisdiction detection client-side only
    if (typeof window !== 'undefined') {
      setJurisdiction(getUserJurisdiction());
    }
    
    // Load existing consent on mount
    const consentCookie = getCookie('cookie-consent');
    
    if (consentCookie) {
      try {
        const consent = JSON.parse(consentCookie);
        
        // Validate consent using GDPR-compliant validation
        if (isValidConsent(consent)) {
          setPreferences(consent.preferences);
          setHasConsented(true);
          setConsentTimestamp(consent.timestamp);
          
          // Apply consent to analytics
          updateConsent(consent.preferences);
          
          // Log consent loading for audit
          logConsentAction('consent_loaded', { 
            consentVersion: consent.version,
            jurisdiction 
          });
        } else {
          // Invalid or expired consent - require new consent
          console.log('Cookie consent invalid or expired - requiring new consent');
          deleteCookie('cookie-consent');
          
          logConsentAction('consent_expired_or_invalid', { 
            reason: 'validation_failed',
            jurisdiction 
          });
        }
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        deleteCookie('cookie-consent');
        
        logConsentAction('consent_parse_error', { 
          error: error instanceof Error ? error.message : 'Unknown error',
          jurisdiction 
        });
      }
    }
    
    setIsLoading(false);
  }, [jurisdiction]);

  const saveConsent = (newPreferences: CookiePreferences, action: string = 'consent_updated') => {
    // Create GDPR-compliant consent record
    const consent = createLegalConsent(newPreferences, jurisdiction);

    // Save to cookie with appropriate expiration
    setCookie('cookie-consent', JSON.stringify(consent), PRIVACY_COMPLIANCE.CONSENT_RENEWAL_PERIOD);
    
    // Update state
    setPreferences(newPreferences);
    setHasConsented(true);
    setConsentTimestamp(consent.timestamp);
    
    // Apply to analytics services
    updateConsent(newPreferences);
    
    // Log consent action for audit trail
    logConsentAction(action, {
      preferences: newPreferences,
      jurisdiction,
      consentVersion: consent.version,
      legalBasis: consent.legalBasis
    });
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    // Ensure necessary cookies are always enabled
    const finalPreferences = {
      ...newPreferences,
      necessary: true
    };
    
    saveConsent(finalPreferences, 'preferences_updated');
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    saveConsent(allAccepted, 'accept_all');
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    saveConsent(onlyNecessary, 'reject_all');
  };

  return (
    <CookieContext.Provider
      value={{
        preferences,
        hasConsented,
        updatePreferences,
        acceptAll,
        rejectAll,
        isLoading,
        jurisdiction,
        consentTimestamp
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies(): CookieContextType {
  const context = useContext(CookieContext);
  
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  
  return context;
}

// Helper function to delete cookies
function deleteCookie(name: string) {
  if (typeof document !== 'undefined') {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
