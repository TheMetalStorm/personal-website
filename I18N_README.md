# Internationalization (i18n) Implementation

## Overview
This website now supports both German and English languages:
- **English**: Default language, available at `/` 
- **German**: Available at `/de/` routes

## Features

### Language Switching
- Language switcher with flag icons (🇺🇸/🇩🇪) in the hero section
- Automatic URL routing:
  - English: `/`, `/projects/`, `/projects/[slug]`
  - German: `/de/`, `/de/projects/`, `/de/projects/[slug]`

### Translation System
- JSON-based translations in `app/locales/`
  - `en.json` - English translations
  - `de.json` - German translations
- React Context API for state management
- Custom hook `useI18n()` for easy access

### File Structure
```
app/
├── locales/
│   ├── en.json          # English translations
│   └── de.json          # German translations
├── hooks/
│   └── useI18n.tsx      # i18n hook and context
├── components/
│   └── LanguageSwitcher.tsx  # Language switcher component
└── de/                  # German routes
    ├── page.tsx         # German homepage
    └── projects/        # German projects pages
        ├── page.tsx
        └── [slug]/
            ├── page.tsx
            └── not-found.tsx
```

### Usage in Components
```tsx
import { useI18n } from '../hooks/useI18n';

function MyComponent() {
  const { t, locale, setLocale } = useI18n();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### Translation Keys
Available translation keys include:
- `hero.*` - Hero section content
- `navigation.*` - Navigation items
- `projects.*` - Projects section
- `skills.*` - Skills section  
- `contact.*` - Contact section
- `common.*` - Common UI elements

## Routes
- English (default): `/`, `/projects/`, `/projects/[slug]`
- German: `/de/`, `/de/projects/`, `/de/projects/[slug]`

The language switcher automatically navigates between corresponding routes while maintaining the current page context.
