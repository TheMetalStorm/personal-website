'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../hooks/useI18n';
import { getCommercialProjects } from '../data/projectsClient';
import LegalFooter from './LegalFooter';

export default function CommercialWorkList() {
	const { t, translations } = useI18n();
	const pathname = usePathname();

	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';
	const projects = getCommercialProjects(translations);

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<section className="pb-10">
				<p className="term-dim text-[13px]">
					<span className="term-accent">$</span> ls ~/commercial
				</p>
				<h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t('landing.hubs.commercial.title')}</h1>
				<p className="term-desc mt-2 max-w-xl text-sm sm:text-[15px]">{t('commercial.description')}</p>
			</section>

			{projects.length === 0 ? (
				<p className="term-dim text-[15px]">- {t('landing.commercialSoon')}</p>
			) : (
				<div className="space-y-12">
					{projects.map((project) => (
						<article key={project.id} className="term-border border">
							{(project.headerImage || project.image) && (
								<div className="term-border border-b">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src={project.headerImage || project.image} alt={project.title} className="w-full" />
								</div>
							)}
							<div className="p-5 sm:p-7">
								<h2 className="term-name text-xl font-semibold sm:text-2xl">{project.title}</h2>
								<p className="term-desc mt-3 max-w-2xl text-sm leading-relaxed sm:text-[15px]">{project.description}</p>
								<div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
									{project.demoUrl && (
										<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="term-link text-sm">
											→ {t('commercial.visitWebsite')}
										</a>
									)}
									<Link href={`${prefix}/projects/${project.slug}`} className="term-border term-accent border px-4 py-2 text-sm">
										{t('commercial.moreDetails')} →
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			)}
			<LegalFooter />
		</main>
	);
}
