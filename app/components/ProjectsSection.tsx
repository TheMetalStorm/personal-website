'use client';

import Link from 'next/link';
import { getFeaturedProjects } from '../data/projectsClient';
import { useI18n } from '../hooks/useI18n';
import { ArrowRight } from 'lucide-react';
import ItemCard from './ItemCard';

export default function ProjectsSection() {
	const { t, locale, translations } = useI18n();
	const projectsUrl = locale === 'de' ? '/de/projects' : '/projects';
	const featuredProjects = getFeaturedProjects(translations);

	return (
		<section id="projects" className="relative py-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
					<div>
						<h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-4">
							{t('projects.title')}
						</h2>
						<p className="text-slate-400 max-w-xl text-lg">
							{t('projects.featuredDescription')}
						</p>
					</div>
					<Link
						href={projectsUrl}
						className="group flex items-center gap-2 text-brand-blue font-bold px-6 py-3 bento-glass hover:bg-white/10 transition-all rounded-2xl"
					>
						{t('projects.viewAll')}
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{featuredProjects.map((project) => {
						const badges = [
							{ text: project.technologies[0], color: 'blue' as const }
						];

						const actions = [
							{
								href: `${projectsUrl}/${project.slug}`,
								label: t('projects.viewProject'),
								icon: 'ArrowRight' as const,
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
								imageContain={project.imageContain}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
