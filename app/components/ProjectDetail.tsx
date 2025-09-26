'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';
import ImageGallery from './ImageGallery';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            {project.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="mb-12">
          {project.images && project.images.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
              <ImageGallery images={project.images} />
            </div>
          ) : (
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.fullDescription}
          </p>
        </div>

        {/* Features Section (can be extended in the future) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Modern Design</h3>
              <p className="text-gray-300">Clean and intuitive user interface designed with modern web standards.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Responsive Layout</h3>
              <p className="text-gray-300">Fully responsive design that works seamlessly across all devices.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Performance Optimized</h3>
              <p className="text-gray-300">Built with performance in mind using latest optimization techniques.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Scalable Architecture</h3>
              <p className="text-gray-300">Designed with scalability and maintainability as core principles.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}