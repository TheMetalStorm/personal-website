'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Project } from '../data/projectsBase';
import { getProjectBySlug } from '../data/projectsClient';
import ImageGallery from './ImageGallery';
import LegalFooter from './LegalFooter';
import { useI18n } from '../hooks/useI18n';
import { notFound } from 'next/navigation';

interface ProjectDetailProps {
	project?: Project;
	slug?: string;
}

export default function ProjectDetail({ project: propProject, slug }: ProjectDetailProps) {
	const { t, translations } = useI18n();
	const pathname = usePathname();
	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';
	const backUrl = `${prefix}/projects`;

	const project = propProject || (slug ? getProjectBySlug(slug, translations) : undefined);

	if (!project) {
		notFound();
	}

	const headerImage = project.headerImage || project.image;
	const headerName =
		project.images?.find((img) => img.src === headerImage)?.caption ||
		headerImage.split('/').pop() ||
		'';

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<p className="term-dim mb-6 text-[13px]">
				<span className="term-accent">$</span> cd ~/projects/{project.slug}
			</p>

			<Link href={backUrl} className="term-link text-sm">← {t('projects.viewAll')}</Link>

			<section className="mt-8 pb-10">
				<div className="term-border relative border">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={headerImage} alt={project.title} className="w-full" />
					<div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-black/60 px-4 py-2 backdrop-blur-sm">
						<span className="truncate text-xs text-white/90">{headerName}</span>
						<a
							href={headerImage}
							target="_blank"
							rel="noopener noreferrer"
							className="term-border shrink-0 border bg-black/50 px-3 py-1 text-xs text-white hover:text-[var(--terminal-accent)]"
						>
							Open ↗
						</a>
					</div>
				</div>
				<h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
					{project.title}<span className="term-cursor"></span>
				</h1>
				<p className="term-desc mt-3 max-w-2xl text-[15px] leading-relaxed">{project.description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{project.technologies.slice(0, 6).map((tech, i) => (
						<span key={i} className="term-border term-dim border px-2 py-0.5 text-[11px]">{tech}</span>
					))}
				</div>
			</section>

			{(project.demoUrl || project.githubUrl) && (
				<section className="pb-10">
					<p className="term-dim mb-3 text-[13px]">
						<span className="term-accent">$</span> open links
					</p>
					<div className="flex flex-wrap gap-3">
						{project.demoUrl && (
							<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="term-border term-accent border px-4 py-2 text-sm">→ demo</a>
						)}
						{project.githubUrl && (
							<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="term-border term-link border px-4 py-2 text-sm">→ {t('projects.viewCode')}</a>
						)}
					</div>
				</section>
			)}

			<section className="pb-10">
				<p className="term-dim mb-3 text-[13px]">
					<span className="term-accent">$</span> cat about.md
				</p>
				<div className="term-desc max-w-3xl space-y-4 text-[15px] leading-relaxed">
					{project.fullDescription.split('\n').map((para, i) => (
						<p key={i}>{para}</p>
					))}
				</div>
			</section>

			<section className="pb-10">
				<p className="term-dim mb-3 text-[13px]">
					<span className="term-accent">$</span> cat info
				</p>
				<div className="term-border border-t">
					<div className="term-border flex items-baseline gap-4 border-b py-3">
						<span className="term-dim w-44 shrink-0 text-xs">{t('projects.type')}</span>
						<span>{project.type ? t(`projects.projectTypes.${project.type}`) : t('projects.projectTypes.software')}</span>
					</div>
					<div className="term-border flex items-baseline gap-4 border-b py-3">
						<span className="term-dim w-44 shrink-0 text-xs">{t('projects.development')}</span>
						<span>
							{project.developmentType === 'freelance'
								? t('projects.freelanceDevelopment')
								: project.developmentType === 'team'
								? t('projects.teamDevelopment')
								: t('projects.soloDevelopment')}
						</span>
					</div>
					<div className="term-border flex items-baseline gap-4 border-b py-3">
						<span className="term-dim w-44 shrink-0 text-xs">{t('projects.technologies')}</span>
						<span className="flex flex-wrap gap-2">
							{project.technologies.map((tech, i) => (
								<span key={i} className="term-border term-dim border px-2 py-0.5 text-[11px]">{tech}</span>
							))}
						</span>
					</div>
				</div>
			</section>

			{project.features && project.features.length > 0 && (
				<section className="pb-10">
					<p className="term-dim mb-3 text-[13px]">
						<span className="term-accent">$</span> cat features
					</p>
					<div className="term-border border-t">
						{project.features.map((feature, i) => (
							<div key={i} className="term-border border-b py-4">
								<h3 className="term-name font-semibold">{t(`projectsData.${project.id}.features.${feature.title}`)}</h3>
								<p className="term-desc mt-1 text-sm leading-relaxed">{t(`projectsData.${project.id}.features.${feature.description}`)}</p>
							</div>
						))}
					</div>
				</section>
			)}

			{project.images && project.images.length > 0 && (
				<section className="pb-10">
					<p className="term-dim mb-3 text-[13px]">
						<span className="term-accent">$</span> cat gallery
					</p>
					<ImageGallery images={project.images} />
				</section>
			)}

			<LegalFooter />
		</main>
	);
}
