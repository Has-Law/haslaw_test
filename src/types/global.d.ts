// Global type declarations for Google Analytics and other third-party scripts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export {}
