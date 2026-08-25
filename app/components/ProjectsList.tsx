'use client';

import { usePathname } from 'next/navigation';
import { useI18n } from '../hooks/useI18n';
import { getAllProjects } from '../data/projectsClient';
import TerminalCard from './TerminalCard';
import LegalFooter from './LegalFooter';

export default function ProjectsList() {
	const { t, translations } = useI18n();
	const pathname = usePathname();

	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';
	const allProjects = getAllProjects(translations);

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<section className="pb-8">
				<p className="term-dim text-[13px]">
					<span className="term-accent">$</span> ls ~/projects
				</p>
				<h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t('landing.hubs.projects.title')}</h1>
				<p className="term-desc mt-2 max-w-xl text-sm sm:text-[15px]">{t('projects.description')}</p>
			</section>

			<div className="grid gap-6 sm:grid-cols-2">
				{allProjects.map((project) => {
					const actions = [
						...(project.demoUrl ? [{ href: project.demoUrl, label: t('projects.projectTypes.website') }] : []),
						...(project.githubUrl ? [{ href: project.githubUrl, label: 'github' }] : []),
					];
					return (
						<TerminalCard
							key={project.id}
							href={`${prefix}/projects/${project.slug}`}
							image={project.image}
							imageAlt={project.title}
							imageContain={project.imageContain}
							title={project.title}
							description={project.description}
							meta={project.technologies}
							actions={actions}
							viewLabel={t('projects.viewProject')}
						/>
					);
				})}
			</div>
			<LegalFooter />
		</main>
	);
}
