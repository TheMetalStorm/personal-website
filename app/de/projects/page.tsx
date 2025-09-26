'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '../../data/projectsClient';
import { useI18n } from '../../hooks/useI18n';

export default function GermanProjectsPage() {
  const { t, translations } = useI18n();
  const allProjects = getAllProjects(translations);
  
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/de" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-6 transition-colors"
          >
            ← {t('navigation.home')}
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            {t('projects.description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/de/projects/${project.slug}`}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    {t('projects.viewProject')}
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
