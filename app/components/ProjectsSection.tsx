'use client';

import Link from 'next/link';
import { getFeaturedProjects } from '../data/projectsClient';
import { useI18n } from '../hooks/useI18n';
import { Code2, Github, ExternalLink } from 'lucide-react';
import ItemCard from './ItemCard';

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
					{featuredProjects.map((project) => {
						const badges = [
							{ text: project.technologies[0], color: 'blue' as const }
						];

						const actions = [
							{
								href: `${projectsUrl}/${project.slug}`,
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
		</section>
	);
}
