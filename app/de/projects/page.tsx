'use client';

import Link from 'next/link';
import { getAllProjects } from '../../data/projectsClient';
import { useI18n } from '../../hooks/useI18n';
import { Code2, Github, ExternalLink } from 'lucide-react';
import ItemCard from '../../components/ItemCard';

export default function GermanProjectsPage() {
  const { t, translations } = useI18n();
  const allProjects = getAllProjects(translations);

  return (
    <main className="min-h-screen bg-gray-900 relative overflow-hidden pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
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
                href: `/de/projects/${project.slug}`,
                label: t('projects.viewProject'),
                icon: 'Code2' as const,
                isPrimary: true,
                isExternal: false
              },
              ...(project.demoUrl ? [{
                href: project.demoUrl,
                label: '',
                icon: 'ExternalLink' as const,
                isPrimary: false,
                isExternal: true,
                title: 'Live Demo'
              }] : []),
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
