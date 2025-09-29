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
    <div className="flex items-center gap-2">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => setLocale(language.code)}
          className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-200 ${
            locale === language.code
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
          title={language.name}
        >
          <span className="text-lg">{language.flag}</span>
          <span className="text-sm font-medium hidden sm:inline">{language.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
