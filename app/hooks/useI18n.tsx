'use client';

import { createContext, useContext, useMemo, useCallback, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Import translation files
import enTranslations from '../locales/en.json';
import deTranslations from '../locales/de.json';

export type Locale = 'en' | 'de';

type Translations = typeof enTranslations;

interface I18nContextType {
  locale: Locale;
  translations: Translations;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translationsMap: Record<Locale, Translations> = {
  en: enTranslations,
  de: deTranslations,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Derive locale and translations directly from pathname - no useState/useEffect needed
  const locale: Locale = pathname.startsWith('/de') ? 'de' : 'en';
  const translations = translationsMap[locale];

  const setLocale = useCallback((newLocale: Locale) => {
    const currentPath = pathname;
    let newPath: string;

    // Determine the new path based on locale
    if (newLocale === 'de') {
      if (currentPath.startsWith('/de')) {
        return; // Already on German
      } else if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace(/^\/en/, '/de');
      } else {
        newPath = currentPath === '/' ? '/de' : `/de${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/en')) {
        return; // Already on English
      } else if (currentPath.startsWith('/de')) {
        newPath = currentPath.replace(/^\/de/, '/en');
      } else {
        newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      }
    }

    router.push(newPath);
  }, [pathname, router]);

  // Helper function to get nested translation
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }, [translations]);

  const contextValue = useMemo(() => ({
    locale,
    translations,
    setLocale,
    t,
  }), [locale, translations, setLocale, t]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
