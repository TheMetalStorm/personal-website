'use client';

import Link from 'next/link';
import { getAllProjects } from '../data/projectsClient';
import { useI18n } from '../hooks/useI18n';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import ItemCard from '../components/ItemCard';

export default function ProjectsPage() {
  const { t, translations } = useI18n();
  const allProjects = getAllProjects(translations);

  return (
    <main className="min-h-screen bg-brand-navy relative overflow-hidden pt-24 pb-20">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        {/* Animated Scanline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent animate-scanline" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-brand-blue font-outfit font-bold px-4 py-2 bento-glass rounded-xl mb-12 hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6 tracking-tight">
            {t('projects.allProjectsTitle')}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            {t('projects.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => {
            const badges = [
              { text: project.technologies[0], color: 'blue' as const }
            ];

            const actions = [
              {
                href: `/projects/${project.slug}`,
                label: t('projects.viewProject'),
                icon: 'ArrowRight' as any,
                isPrimary: true,
                isExternal: false
              },
              ...(project.githubUrl ? [{
                href: project.githubUrl,
                label: '',
                icon: 'Github' as const,
                isPrimary: false,
                isExternal: true,
                title: t('projects.viewCode')
              }] : [])
            ];

            return (
              <ItemCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                badges={badges}
                technologies={project.technologies}
                actions={actions}
                type="project"
                hoverColor="purple"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
