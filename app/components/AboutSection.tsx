'use client';

import { useI18n } from '../hooks/useI18n';
import { useScrollSlide } from '../hooks/useScrollSlide';
import { User, Code, Database, Cpu, ArrowRight } from 'lucide-react';

function AboutCard({ section, index }: { section: { id: string; icon: React.ReactNode; title: string; description: string; className: string }; index: number }) {
  const { ref, style } = useScrollSlide(30, index * 0.08);

  return (
    <div
      ref={ref}
      style={style}
      className={`p-8 bento-glass group ${section.className}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
          {section.icon}
        </div>
        <h3 className="text-xl font-outfit font-bold text-white uppercase tracking-tight">
          {section.title}
        </h3>
      </div>
      <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
        {section.description}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const { t } = useI18n();
  const { ref: ctaRef, style: ctaStyle } = useScrollSlide(30, 0.3);

  const sections = [
    {
      id: 'professional',
      icon: <User className="w-6 h-6 text-brand-blue" />,
      title: t('about.sections.professional.title'),
      description: t('about.sections.professional.description'),
      className: 'md:col-span-2'
    },
    {
      id: 'experience',
      icon: <Database className="w-6 h-6 text-brand-violet" />,
      title: t('about.sections.experience.title'),
      description: t('about.sections.experience.description'),
      className: 'md:col-span-1'
    },
    {
      id: 'projects',
      icon: <Code className="w-6 h-6 text-brand-lime" />,
      title: t('about.sections.projects.title'),
      description: t('about.sections.projects.description'),
      className: 'md:col-span-1'
    },
    {
      id: 'philosophy',
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: t('about.sections.philosophy.title'),
      description: t('about.sections.philosophy.description'),
      className: 'md:col-span-2'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-brand-navy/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-slate-400 max-w-xl text-lg text-balance">
            {t('hero.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <AboutCard key={section.id} section={section} index={i} />
          ))}

          {/* Quick Highlight Bento Tile */}
          <div
            ref={ctaRef}
            style={ctaStyle}
            className="p-8 bg-brand-blue rounded-3xl md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-8 min-h-48 overflow-hidden relative group"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-outfit font-bold text-brand-navy mb-2">
                Ready to build something amazing?
              </h3>
              <p className="text-brand-navy/70 font-medium">
                I'm currently looking for new challenges and collaborations.
              </p>
            </div>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative z-10 px-8 py-4 bg-brand-navy text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Let's Talk <ArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute top-0 right-0 h-full w-1/3 bg-white/10 -skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
