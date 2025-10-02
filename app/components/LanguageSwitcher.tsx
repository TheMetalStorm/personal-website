'use client';

import { useI18n, Locale } from '../hooks/useI18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const languages = [
    {
      code: 'en' as Locale,
      name: 'English',
      flag: '🇬🇧'
    },
    {
      code: 'de' as Locale,
      name: 'Deutsch',
      flag: '🇩🇪'
    }
  ];

  return (
    <div className="flex items-center gap-1">
      {languages.map((language) => {
        const isActive = locale === language.code;
        
        return (
          <button
            key={language.code}
            onClick={() => setLocale(language.code)}
            disabled={isActive}
            className={`flex items-center gap-1 px-1.5 sm:px-2 py-1 rounded-md transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-md cursor-default'
                : 'text-gray-300 hover:text-white hover:bg-gray-700 cursor-pointer'
            }`}
            title={language.name}
            aria-label={`Switch to ${language.name}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="text-base sm:text-lg">{language.flag}</span>
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">{language.code.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
