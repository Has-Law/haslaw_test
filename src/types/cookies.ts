// GDPR/CCPA Compliant Cookie Management Types

// Enhanced cookie preference types with legal basis
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

// Legal compliance tracking
export interface LegalConsent {
  hasConsented: boolean;
  preferences: CookiePreferences;
  timestamp: number;
  version: string;
  userAgent: string;
  ipAddress?: string; // For audit trails (if required)
  jurisdiction: 'GDPR' | 'CCPA' | 'OTHER';
  legalBasis: 'consent' | 'legitimate_interest' | 'vital_interest';
  withdrawalMethod?: string;
  lastUpdated: number;
}

// Cookie consent state (alias for backward compatibility)
export type CookieConsent = LegalConsent;

// Privacy rights under GDPR/CCPA
export interface PrivacyRights {
  rightToAccess: boolean;      // Article 15 GDPR / CCPA Right to Know
  rightToRectification: boolean; // Article 16 GDPR
  rightToErasure: boolean;     // Article 17 GDPR / CCPA Right to Delete
  rightToRestrict: boolean;    // Article 18 GDPR
  rightToPortability: boolean; // Article 20 GDPR
  rightToObject: boolean;      // Article 21 GDPR / CCPA Right to Opt-Out
  rightToWithdraw: boolean;    // Article 7(3) GDPR
}

// Data processing purposes (GDPR Article 6)
export interface ProcessingPurposes {
  analytics: {
    purpose: string;
    legalBasis: 'consent' | 'legitimate_interest';
    retentionPeriod: number; // months
    thirdParties: string[];
  };
  marketing: {
    purpose: string;
    legalBasis: 'consent';
    retentionPeriod: number;
    thirdParties: string[];
  };
  functional: {
    purpose: string;
    legalBasis: 'consent' | 'legitimate_interest';
    retentionPeriod: number;
    thirdParties: string[];
  };
}

// Google Analytics consent parameters
export interface GAConsentParams {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  functionality_storage?: 'granted' | 'denied';
  personalization_storage?: 'granted' | 'denied';
  security_storage?: 'granted' | 'denied';
}

// Cookie setting options
export interface CookieOptions {
  expires?: number; // Days
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

// GDPR/CCPA Compliant default preferences (opt-out by default)
export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,  // Always enabled - Article 6(1)(f) GDPR Legitimate Interest
  analytics: false, // Requires explicit consent - Article 6(1)(a) GDPR
  marketing: false, // Requires explicit consent - Article 6(1)(a) GDPR  
  functional: false // Requires explicit consent - Article 6(1)(a) GDPR
};

// Enhanced cookie categories with legal compliance details
export const COOKIE_CATEGORIES = {
  necessary: {
    name: 'Strictly Necessary Cookies',
    shortName: 'Necessary',
    description: 'These cookies are essential for the website to function and cannot be switched off. They enable core functionality such as security, network management, and accessibility.',
    legalBasis: 'Legitimate Interest (GDPR Article 6(1)(f))',
    always_enabled: true,
    canDisable: false,
    retentionPeriod: 'Session or 1 year maximum',
    examples: [
      'Session management and authentication',
      'Security and fraud prevention', 
      'Load balancing and network management',
      'Accessibility features and preferences',
      'Cookie consent preferences'
    ],
    thirdParties: [],
    dataTransfers: 'None outside EEA',
    purposes: [
      'Ensure website security and functionality',
      'Remember your cookie preferences',
      'Enable core website features'
    ]
  },
  analytics: {
    name: 'Analytics and Performance Cookies',
    shortName: 'Analytics', 
    description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information about usage patterns, popular pages, and site performance.',
    legalBasis: 'Consent (GDPR Article 6(1)(a))',
    always_enabled: false,
    canDisable: true,
    retentionPeriod: '26 months (Google Analytics)',
    examples: [
      'Google Analytics (GA4)',
      'Page view tracking and user journeys',
      'Site performance monitoring',
      'Error tracking and diagnostics',
      'A/B testing and optimization'
    ],
    thirdParties: ['Google LLC', 'Google Ireland Limited'],
    dataTransfers: 'Google (US) - Adequacy Decision',
    purposes: [
      'Improve website performance and user experience',
      'Understand visitor behavior and preferences',
      'Generate anonymous statistical reports'
    ]
  },
  marketing: {
    name: 'Marketing and Advertising Cookies',
    shortName: 'Marketing',
    description: 'These cookies are used to deliver personalized advertisements and track the effectiveness of marketing campaigns. They may be set by us or third-party advertising partners.',
    legalBasis: 'Consent (GDPR Article 6(1)(a))',
    always_enabled: false,
    canDisable: true,
    retentionPeriod: '13 months maximum',
    examples: [
      'Google Ads and remarketing pixels',
      'Facebook Pixel and social media tracking',
      'LinkedIn advertising cookies',
      'Campaign performance measurement',
      'Personalized ad targeting'
    ],
    thirdParties: ['Google LLC', 'Meta Platforms Inc.', 'LinkedIn Corporation'],
    dataTransfers: 'US companies - Adequacy Decision or SCCs',
    purposes: [
      'Show relevant advertisements based on interests',
      'Measure advertising campaign effectiveness',
      'Prevent ad fraud and ensure quality'
    ]
  },
  functional: {
    name: 'Functional and Personalization Cookies', 
    shortName: 'Functional',
    description: 'These cookies enable enhanced functionality and personalization features, such as language preferences, chat widgets, and customized content based on your usage.',
    legalBasis: 'Consent (GDPR Article 6(1)(a)) or Legitimate Interest',
    always_enabled: false,
    canDisable: true,
    retentionPeriod: '12 months maximum',
    examples: [
      'Language and region preferences',
      'Live chat and customer support widgets',
      'Content personalization features',
      'Social media integration',
      'User interface customizations'
    ],
    thirdParties: ['Various depending on features used'],
    dataTransfers: 'Varies by service provider',
    purposes: [
      'Remember your preferences and settings',
      'Enable enhanced website features',
      'Provide personalized user experience'
    ]
  }
} as const;

// GDPR/CCPA Compliance Configuration
export const PRIVACY_COMPLIANCE = {
  // Consent management
  COOKIE_CONSENT_VERSION: '2.0',
  CONSENT_RENEWAL_PERIOD: 365, // days - GDPR recommends annual consent renewal
  
  // Legal requirements
  MINIMUM_CONSENT_AGE: 16, // GDPR Article 8 - child consent
  DATA_RETENTION_POLICY: {
    CONSENT_RECORDS: 7 * 365, // 7 years for legal compliance
    ANALYTICS_DATA: 26 * 30,  // 26 months (Google Analytics)
    MARKETING_DATA: 13 * 30,  // 13 months maximum
    FUNCTIONAL_DATA: 12 * 30  // 12 months maximum
  },
  
  // Geographic compliance
  JURISDICTIONS: {
    GDPR: ['EU', 'EEA', 'UK'],
    CCPA: ['CA'], // California
    LGPD: ['BR'], // Brazil
    OTHER: ['default']
  },
  
  // Data subject rights (GDPR Chapter 3)
  USER_RIGHTS: {
    ACCESS: true,           // Article 15 - Right of access
    RECTIFICATION: true,    // Article 16 - Right to rectification  
    ERASURE: true,         // Article 17 - Right to erasure
    RESTRICT: true,        // Article 18 - Right to restrict processing
    PORTABILITY: true,     // Article 20 - Right to data portability
    OBJECT: true,          // Article 21 - Right to object
    WITHDRAW: true,        // Article 7(3) - Right to withdraw consent
    COMPLAINT: true        // Article 77 - Right to lodge complaint
  }
} as const;

// Cookie expiration periods (GDPR-compliant)
export const COOKIE_EXPIRY = {
  CONSENT: 365,           // 1 year - consent renewal required
  ANALYTICS: 790,         // 26 months (GA4 maximum)
  MARKETING: 395,         // 13 months (industry standard)
  FUNCTIONAL: 365,        // 1 year maximum
  NECESSARY: 0            // Session cookies preferred
} as const;

// Data processing lawfulness (GDPR Article 6)
export const LEGAL_BASIS = {
  CONSENT: 'consent',                    // Article 6(1)(a)
  CONTRACT: 'contract',                  // Article 6(1)(b)  
  LEGAL_OBLIGATION: 'legal_obligation',  // Article 6(1)(c)
  VITAL_INTERESTS: 'vital_interests',    // Article 6(1)(d)
  PUBLIC_TASK: 'public_task',           // Article 6(1)(e)
  LEGITIMATE_INTERESTS: 'legitimate_interests' // Article 6(1)(f)
} as const;

// Privacy notice requirements
export const PRIVACY_NOTICE = {
  CONTROLLER_IDENTITY: 'HasLaw Legal Services',
  CONTROLLER_CONTACT: 'privacy@haslaw.com',
  DPO_CONTACT: 'dpo@haslaw.com', // Data Protection Officer
  SUPERVISORY_AUTHORITY: 'Indonesian Data Protection Authority',
  PRIVACY_POLICY_URL: '/privacy-policy',
  COOKIE_POLICY_URL: '/cookie-policy',
  TERMS_OF_SERVICE_URL: '/terms-of-service'
} as const;
