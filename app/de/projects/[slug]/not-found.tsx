'use client';

import { useI18n } from '../../../hooks/useI18n';

export default function GermanProjectNotFound() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-300 mb-6">{t('common.notFound')}</p>
        <a
          href="/de"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          {t('navigation.home')}
        </a>
      </div>
    </div>
  );
}
