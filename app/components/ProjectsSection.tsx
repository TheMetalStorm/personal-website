'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '../data/projectsClient';
import { useI18n } from '../hooks/useI18n';
import { Code2, Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
	const { t, locale, translations } = useI18n();
	const projectsUrl = locale === 'de' ? '/de/projects' : '/projects';
	const featuredProjects = getFeaturedProjects(translations);
	
	return (
		<section id="projects" className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center mb-6 sm:mb-8">
					<h2 className="text-xl sm:text-2xl font-bold text-white">{t('projects.title')}</h2>
					<Link 
						href={projectsUrl} 
						className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
					>
						{t('projects.viewAll')} →
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{featuredProjects.map((project) => (
						<div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-gray-300 text-sm sm:text-base mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech, index) => (
										<span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>
								<div className="flex items-center gap-3">
									<Link 
										href={`${projectsUrl}/${project.slug}`} 
										className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center text-sm font-medium"
									>
										<Code2 className="w-4 h-4 inline mr-2" />
										{t('projects.viewProject')}
									</Link>
									
									{project.demoUrl && (
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 text-green-500 hover:text-green-400 hover:bg-gray-700 rounded-lg transition-colors"
											title="Live Demo"
										>
											<ExternalLink className="w-5 h-5" />
										</a>
									)}

									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
											title={t('projects.viewCode')}
										>
											<Github className="w-5 h-5" />
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
