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

  // Update locale when pathname changes
  useEffect(() => {
    const currentLocale = getCurrentLocale();
    setLocaleState(currentLocale);
    setTranslations(translationsMap[currentLocale]);
  }, [pathname]);

  // Restore scroll position after language change
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (savedScrollPosition) {
        // Wait for the page to fully render before scrolling
        const scrollY = parseInt(savedScrollPosition, 10);
        const restoreScroll = () => {
          window.scrollTo(0, scrollY);
          sessionStorage.removeItem('scrollPosition');
        };
        
        // Try immediate restore first
        restoreScroll();
        
        // Also try after a short delay to ensure content is loaded
        setTimeout(restoreScroll, 50);
      }
    }
  }, [pathname]);

  const setLocale = (newLocale: Locale) => {
    const currentPath = pathname;
    let newPath: string;

    if (newLocale === 'de') {
      // Switch to German
      if (currentPath.startsWith('/de')) {
        newPath = currentPath; // Already on German path
      } else {
        newPath = `/de${currentPath === '/' ? '' : currentPath}`;
      }
    } else {
      // Switch to English
      if (currentPath.startsWith('/de')) {
        newPath = currentPath.replace('/de', '') || '/';
      } else {
        newPath = currentPath; // Already on English path
      }
    }

    if (newPath !== currentPath) {
      // Store current scroll position in sessionStorage (client-side only)
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        sessionStorage.setItem('scrollPosition', scrollY.toString());
      }
      
      // Navigate to new path
      router.push(newPath);
    }
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
