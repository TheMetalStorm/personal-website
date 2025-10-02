'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

const translationsMap = {
  en: enTranslations,
  de: deTranslations,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Determine current locale from pathname
  const getCurrentLocale = (): Locale => {
    if (pathname.startsWith('/de')) {
      return 'de';
    }
    return 'en';
  };

  const [locale, setLocaleState] = useState<Locale>(getCurrentLocale());
  const [translations, setTranslations] = useState<Translations>(translationsMap[locale]);

  // Update locale when pathname changes - critical for language switching
  useEffect(() => {
    const currentLocale = getCurrentLocale();
    console.log('Pathname changed:', { pathname, currentLocale, previousLocale: locale });
    setLocaleState(currentLocale);
    setTranslations(translationsMap[currentLocale]);
  }, [pathname]); // Only depend on pathname

  const setLocale = (newLocale: Locale) => {
    const currentPath = pathname;
    let newPath: string;

    // Determine the new path based on locale
    if (newLocale === 'de') {
      if (currentPath.startsWith('/de')) {
        return; // Already on German
      } else if (currentPath.startsWith('/en')) {
        // /en/something -> /de/something
        // /en -> /de
        newPath = currentPath.replace(/^\/en/, '/de');
      } else {
        // / -> /de
        // /something -> /de/something
        newPath = currentPath === '/' ? '/de' : `/de${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/en')) {
        return; // Already on English
      } else if (currentPath.startsWith('/de')) {
        // /de/something -> /en/something
        // /de -> /en
        newPath = currentPath.replace(/^\/de/, '/en');
      } else {
        // / -> /en
        // /something -> /en/something
        newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      }
    }

    console.log('Language switch:', { from: currentPath, to: newPath, locale: newLocale });
    
    // Navigate to new path (will scroll to top automatically)
    router.push(newPath);
  };

  // Helper function to get nested translation
  const t = (key: string): string => {
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
  };

  return (
    <I18nContext.Provider value={{ locale, translations, setLocale, t }}>
      <div key={pathname} suppressHydrationWarning>
        {children}
      </div>
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
