'use client';

import { useI18n } from '../hooks/useI18n';
import { useScrollSlide } from '../hooks/useScrollSlide';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  const { t } = useI18n();
  const { ref: ctaRef, style: ctaStyle } = useScrollSlide(30, 0.1);

  return (
    <section className="relative py-12 bg-brand-navy/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ctaRef}
          style={ctaStyle}
          className="p-8 bg-brand-blue rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 min-h-48 overflow-hidden relative group shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-outfit font-bold text-brand-navy mb-2">
              {t('contact.ctaTitle')}
            </h3>
            <p className="text-brand-navy/70 font-medium">
              {t('contact.ctaSubtitle')}
            </p>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative z-10 px-8 py-4 bg-brand-navy text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
          >
            Let&apos;s Talk <ArrowRight className="w-5 h-5" />
          </button>
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/10 -skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
        </div>
      </div>
    </section>
  );
}
