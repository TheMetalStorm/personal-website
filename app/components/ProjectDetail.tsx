'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Code2, Calendar, Tag } from 'lucide-react';
import { Project } from '../data/projectsBase';
import { getProjectBySlug } from '../data/projectsClient';
import ImageGallery from './ImageGallery';
import { useI18n } from '../hooks/useI18n';
import { notFound } from 'next/navigation';

interface ProjectDetailProps {
  project?: Project;
  slug?: string;
}

export default function ProjectDetail({ project: propProject, slug }: ProjectDetailProps) {
  const { t, locale, translations } = useI18n();
  const backUrl = locale === 'de' ? '/de/projects' : '/projects';
  
  // Get project from slug if not provided as prop
  const project = propProject || (slug ? getProjectBySlug(slug, translations) : undefined);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button */}
        <Link 
          href={backUrl} 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('projects.viewAll')}
        </Link>

        {/* Project Header */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-8">
          <div className="relative h-64 md:h-80">
            <Image src={project.headerImage || project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full flex items-center gap-1">
                    <Code2 className="w-4 h-4" />
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{t('projects.about')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('projectFeatures.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">
                        {t(`projectsData.${project.id}.features.${feature.title}`)}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {t(`projectsData.${project.id}.features.${feature.description}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('projects.gallery')}</h2>
                <ImageGallery images={project.images} />
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Action Buttons */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    {t('projects.viewCode')}
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Information</h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-400">Type:</span>
                  <p className="text-white">Software Project</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">{t('projects.technologies')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}