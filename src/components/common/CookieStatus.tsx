"use client";

import { useCookies } from '@/hooks/useCookies';

interface CookieStatusProps {
  className?: string;
}

export default function CookieStatus({ className = '' }: CookieStatusProps) {
  const { hasConsented, preferences, isLoading } = useCookies();

  if (isLoading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-4 bg-gray-300 rounded w-32"></div>
      </div>
    );
  }

  if (!hasConsented) {
    return (
      <div className={`text-gray-500 text-sm ${className}`}>
        No cookie preferences set
      </div>
    );
  }

  const activeCategories = Object.entries(preferences)
    .filter(([, enabled]) => enabled)
    .map(([category]) => category);

  const totalCategories = Object.keys(preferences).length;
  const activeCount = activeCategories.length;

  return (
    <div className={`text-sm ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-700 font-medium">
            {activeCount} of {totalCategories} cookie types enabled
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-1 text-xs">
        {Object.entries(preferences).map(([category, enabled]) => (
          <div
            key={category}
            className={`flex items-center gap-1 ${
              enabled ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                enabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            <span className="capitalize">{category}</span>
            {enabled ? '✓' : '✗'}
          </div>
        ))}
      </div>
    </div>
  );
}

// Hook untuk menggunakan status cookie di komponen lain
export function useCookieStatus() {
  const { hasConsented, preferences, isLoading } = useCookies();

  const getStatusSummary = () => {
    if (isLoading) return 'Loading...';
    if (!hasConsented) return 'Not configured';

    const activeCount = Object.values(preferences).filter(Boolean).length;
    const totalCount = Object.keys(preferences).length;
    
    return `${activeCount}/${totalCount} active`;
  };

  const isAnalyticsEnabled = () => preferences.analytics;
  const isMarketingEnabled = () => preferences.marketing;
  const isFunctionalEnabled = () => preferences.functional;

  return {
    hasConsented,
    preferences,
    isLoading,
    getStatusSummary,
    isAnalyticsEnabled,
    isMarketingEnabled,
    isFunctionalEnabled
  };
}
