'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useI18n } from '../hooks/useI18n';
import { getProfileProjects } from '../data/projectsClient';
import LegalFooter from './LegalFooter';

const HIGHLIGHTS: Record<'en' | 'de', string[]> = {
	en: [
		'fullstack developer',
		'backend foundation',
		'end-to-end',
		'APIs',
		'web applications',
		'data models',
		'databases',
		'user interfaces',
		'developer tooling',
		'Java',
		'Spring framework',
		'reporting platforms',
		'PostgreSQL',
		'MongoDB',
		'CI/CD pipelines',
		'terminal editors',
		'emulators',
		'C++',
		'Zig',
		'TypeScript',
		'React',
		'Next.js',
		'Astro',
		'Contentful',
		'clean architecture',
		'performance',
		'deployment',
	],
	de: [
		'Fullstack-Entwickler',
		'Backend-Basis',
		'End-to-End',
		'APIs',
		'Webanwendungen',
		'Datenmodelle',
		'Datenbanken',
		'Benutzeroberflächen',
		'Developer-Tools',
		'Java',
		'Spring-Framework',
		'Reporting-Plattformen',
		'PostgreSQL',
		'MongoDB',
		'CI/CD-Pipelines',
		'Terminal-Editoren',
		'Emulatoren',
		'C++',
		'Zig',
		'TypeScript',
		'React',
		'Next.js',
		'Astro',
		'Contentful',
		'saubere Architektur',
		'Performance',
		'Deployment',
	],
};

function highlightTerms(text: string, terms: string[]): ReactNode {
	if (terms.length === 0) return text;
	const sorted = [...terms].sort((a, b) => b.length - a.length);
	const escaped = sorted.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
	const regex = new RegExp(`(${escaped.join('|')})`, 'g');
	return text.split(regex).map((part, i) =>
		sorted.includes(part) ? <span key={i} className="term-accent">{part}</span> : part
	);
}

export default function ProfilePage() {
	const { t, locale, translations } = useI18n();
	const pathname = usePathname();

	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';
	const resumePath = locale === 'de' ? '/resume/Resume_German.pdf' : '/resume/Resume_English.pdf';

	const profileProjects = getProfileProjects(translations);

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<section className="pb-12">
				<p className="term-dim mb-5 text-[13px]">
					<span className="term-accent">$</span> cat about.md
				</p>
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					{t('landing.hubs.profile.title')}
				</h1>
				<div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
					<div className="w-full overflow-hidden sm:w-[300px]">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="/portrait.jpg" alt="Simon Arapoglu" className="w-full scale-[1.2]" />
					</div>
					<div>
						<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							Simon Arapoglu
						</h2>
						<p className="term-accent mt-2 text-sm">{t('hero.title')}</p>
					</div>
				</div>
				<div className="term-desc mt-8 max-w-2xl space-y-4 text-[15px] leading-relaxed">
					{translations.about.paragraphs.map((para, i) => (
						<p key={i}>{highlightTerms(para, HIGHLIGHTS[locale])}</p>
					))}
				</div>
			</section>

			<section className="pb-12">
				<p className="term-dim mb-4 text-[13px]">
					<span className="term-accent">$</span> ls projects
				</p>
				<div className="term-border border-t">
					{profileProjects.map((p) => (
						<Link key={p.slug} href={`${prefix}/projects/${p.slug}`} className="term-row term-border block border-b py-4">
							<div className="flex items-baseline gap-4">
								<span className="term-name flex-1 font-semibold">{p.title}</span>
								<span className="term-accent">→</span>
							</div>
							<p className="term-desc mt-1 text-sm leading-relaxed">{p.description}</p>
							<p className="term-dim mt-1 text-xs">{p.technologies.slice(0, 4).join(' · ')}</p>
						</Link>
					))}
				</div>
				<Link href={`${prefix}/projects`} className="term-link mt-3 inline-block text-sm">
					{t('projects.viewAll')} →
				</Link>
			</section>

			<section className="pb-4">
				<p className="term-dim mb-4 text-[13px]">
					<span className="term-accent">$</span> open lebenslauf.pdf
				</p>
				<a href={resumePath} target="_blank" rel="noopener noreferrer" className="term-border inline-flex items-center gap-3 border px-5 py-3">
					<span className="term-name font-semibold">{t('contact.resume')}</span>
					<span className="term-dim text-sm">{t('contact.downloadResume')}</span>
					<span className="term-accent">↓</span>
				</a>
			</section>

			<LegalFooter />
		</main>
	);
}
