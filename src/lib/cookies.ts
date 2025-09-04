// GDPR/CCPA Compliant Cookie Management Utilities
import { 
  PRIVACY_COMPLIANCE,
  CookiePreferences,
  LegalConsent
} from '@/types/cookies';

// Enhanced cookie setting with privacy compliance
export const setCookie = (
  name: string, 
  value: string, 
  days: number = 365,
  options: {
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    httpOnly?: boolean;
    domain?: string;
  } = {}
) => {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  
  // Default to secure settings for GDPR compliance
  const {
    secure = true,           // HTTPS only
    sameSite = 'Lax',       // CSRF protection
    httpOnly = false,       // Client-side access needed for consent
    domain = undefined      // Current domain only
  } = options;
  
  let cookieString = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=${sameSite}`;
  
  if (secure) cookieString += ';Secure';
  if (httpOnly) cookieString += ';HttpOnly';
  if (domain) cookieString += `;Domain=${domain}`;
  
  document.cookie = cookieString;
};

// Secure cookie retrieval
export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      try {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      } catch {
        // Handle malformed URI components
        return c.substring(nameEQ.length, c.length);
      }
    }
  }
  return null;
};

// GDPR-compliant cookie deletion
export const deleteCookie = (name: string, domain?: string) => {
  if (typeof document === 'undefined') return;
  
  // Delete with multiple path/domain combinations to ensure removal
  const deletePaths = ['/', ''];
  const deleteDomains = domain ? [domain, `.${domain}`, ''] : [''];
  
  deletePaths.forEach(path => {
    deleteDomains.forEach(dom => {
      let deleteString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
      if (dom) deleteString += ` domain=${dom};`;
      document.cookie = deleteString;
    });
  });
};

// Get user's jurisdiction for compliance
export const getUserJurisdiction = (): keyof typeof PRIVACY_COMPLIANCE.JURISDICTIONS => {
  // Server-side safe geo-detection
  if (typeof window === 'undefined') return 'OTHER';
  
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = typeof navigator !== 'undefined' ? navigator.language : 'en';
  
  // EU/EEA detection
  const euTimezones = ['Europe/'];
  const euLocales = ['de', 'fr', 'it', 'es', 'nl', 'pl', 'sv', 'da', 'no', 'fi'];
  
  if (euTimezones.some(tz => timezone.startsWith(tz)) || 
      euLocales.some(loc => locale.startsWith(loc))) {
    return 'GDPR';
  }
  
  // California detection
  if (timezone.includes('Los_Angeles') || timezone.includes('Pacific')) {
    return 'CCPA';
  }
  
  // Brazil detection
  if (timezone.includes('Sao_Paulo') || locale.startsWith('pt-BR')) {
    return 'LGPD';
  }
  
  return 'OTHER';
};

// GDPR/CCPA Compliance Functions

// Create compliant consent record
export const createLegalConsent = (preferences: CookiePreferences, jurisdiction?: string): LegalConsent => {
  const userJurisdiction = jurisdiction || getUserJurisdiction();
  
  return {
    hasConsented: true,
    preferences,
    timestamp: Date.now(),
    version: PRIVACY_COMPLIANCE.COOKIE_CONSENT_VERSION,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    jurisdiction: userJurisdiction as LegalConsent['jurisdiction'],
    legalBasis: 'consent',
    lastUpdated: Date.now()
  };
};

// Check if consent needs renewal (GDPR Article 7)
export const isConsentExpired = (consentTimestamp: number): boolean => {
  const now = Date.now();
  const renewalPeriod = PRIVACY_COMPLIANCE.CONSENT_RENEWAL_PERIOD * 24 * 60 * 60 * 1000;
  return (now - consentTimestamp) > renewalPeriod;
};

// Validate consent according to GDPR requirements
export const isValidConsent = (consent: unknown): consent is LegalConsent => {
  if (!consent || typeof consent !== 'object') return false;
  
  const consentObj = consent as Record<string, unknown>;
  
  // GDPR Article 7 - Conditions for consent
  const requiredFields = ['hasConsented', 'preferences', 'timestamp', 'version'];
  const hasRequiredFields = requiredFields.every(field => field in consentObj);
  
  if (!hasRequiredFields) return false;
  
  // Check if consent is not expired
  if (typeof consentObj.timestamp === 'number' && isConsentExpired(consentObj.timestamp)) return false;
  
  // Check version compatibility
  if (consentObj.version !== PRIVACY_COMPLIANCE.COOKIE_CONSENT_VERSION) return false;
  
  return true;
};

// Generate audit trail for compliance
export const logConsentAction = (action: string, data: Record<string, unknown>) => {
  const auditLog = {
    timestamp: new Date().toISOString(),
    action,
    data,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    jurisdiction: getUserJurisdiction()
  };
  
  // In production, send to secure audit logging service
  console.log('[CONSENT AUDIT]', auditLog);
};

// Data subject rights implementation
export const handleDataSubjectRequest = (requestType: string) => {
  const supportedRequests = [
    'access',           // Article 15 GDPR
    'rectification',    // Article 16 GDPR
    'erasure',         // Article 17 GDPR
    'restrict',        // Article 18 GDPR
    'portability',     // Article 20 GDPR
    'object',          // Article 21 GDPR
    'withdraw'         // Article 7(3) GDPR
  ];
  
  if (!supportedRequests.includes(requestType)) {
    throw new Error(`Unsupported data subject request: ${requestType}`);
  }
  
  // Log the request for audit purposes
  logConsentAction(`data_subject_request_${requestType}`, { 
    requestType,
    timestamp: Date.now() 
  });
  
  // In production, trigger appropriate workflow
  return {
    requestId: `dsr_${Date.now()}`,
    type: requestType,
    status: 'received',
    message: 'Your request has been received and will be processed within 30 days as required by law.'
  };
};

export const getCookiePreferences = () => {
  const prefs = getCookie('cookie-preferences')
  if (!prefs) return null
  
  try {
    return JSON.parse(prefs)
  } catch {
    return null
  }
}

// Initialize Google Analytics with consent mode
export const initializeGA = (measurementId: string) => {
  if (typeof window === 'undefined') return
  
  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag = gtag
  
  // Initialize GA with consent mode
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  })
  
  gtag('js', new Date())
  gtag('config', measurementId)
}

// Update consent based on user preferences
export const updateConsent = (preferences: {
  analytics: boolean
  marketing: boolean
  functional: boolean
}) => {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('consent', 'update', {
    'analytics_storage': preferences.analytics ? 'granted' : 'denied',
    'ad_storage': preferences.marketing ? 'granted' : 'denied',
    'functionality_storage': preferences.functional ? 'granted' : 'denied',
    'personalization_storage': preferences.functional ? 'granted' : 'denied'
  })
}
