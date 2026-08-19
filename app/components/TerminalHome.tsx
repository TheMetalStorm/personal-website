'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../hooks/useI18n';
import { getFeaturedProjects } from '../data/projectsClient';
import LegalFooter from './LegalFooter';

export default function TerminalHome() {
	const { t, translations } = useI18n();
	const pathname = usePathname();

	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';

	const hubs = [
		{ n: '01', key: 'profile', href: `${prefix}/profile` },
		{ n: '02', key: 'projects', href: `${prefix}/projects` },
		{ n: '03', key: 'games', href: `${prefix}/games` },
		{ n: '04', key: 'commercial', href: `${prefix}/commercial` },
		{ n: '05', key: 'blog', href: null },
	];

	const featured = getFeaturedProjects(translations).slice(0, 3);

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<section className="pb-12">
				<p className="term-dim mb-6 text-[13px]">
					<span className="term-accent">$</span> whoami
				</p>
				<h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
					Simon Arapoglu<span className="term-cursor"></span>
				</h1>
				<p className="term-muted mt-4 text-lg sm:text-2xl">{t('landing.role')}</p>
				<p className="term-desc mt-6 max-w-xl text-[15px] leading-relaxed">{t('landing.tagline')}</p>
			</section>

			<section id="hubs" className="scroll-mt-24">
				<p className="term-dim mb-3 text-[13px]">
					<span className="term-accent">$</span> {t('landing.ls')}
				</p>
				<div className="term-border border-t">
					{hubs.map((hub) => {
						const name = t(`landing.hubs.${hub.key}.name`);
						const desc = t(`landing.hubs.${hub.key}.desc`);
						const path = t(`landing.hubs.${hub.key}.path`);
						const inner = (
							<>
								<span className="term-accent w-8 shrink-0 text-sm">[{hub.n}]</span>
								<span className="term-name text-lg font-semibold sm:text-2xl">
									{name}
									<span className="term-dim">/</span>
								</span>
								<span className="term-dim hidden flex-1 text-sm sm:inline">{desc}</span>
								<span className="term-dim text-xs">{path}</span>
								<span className="term-accent">→</span>
							</>
						);
						return hub.href ? (
							<Link href={hub.href} key={hub.n} className="term-row term-border flex items-baseline gap-4 border-b py-5 sm:gap-6">
								{inner}
							</Link>
						) : (
							<div key={hub.n} className="term-row term-border flex items-baseline gap-4 border-b py-5 sm:gap-6">
								{inner}
							</div>
						);
					})}
				</div>
			</section>

			<section className="py-12">
				<p className="term-dim mb-4 text-[13px]">
					<span className="term-accent">$</span> cat ./projects/{t('landing.featured')}
				</p>
				<ul className="space-y-2">
					{featured.map((p) => (
						<li key={p.slug} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[15px]">
							<Link href={`${prefix}/projects/${p.slug}`} className="term-title font-semibold">
								{p.title}
							</Link>
							<span className="term-dim text-[13px]">{p.technologies.slice(0, 3).join(' · ')}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="py-6">
				<p className="term-dim mb-3 text-[13px]">
					<span className="term-accent">$</span> cat ./blog/latest
				</p>
				<p className="term-dim text-[15px]">- {t('landing.blogSoon')}</p>
			</section>

			<section id="contact" className="scroll-mt-24 py-12">
				<p className="term-dim mb-4 text-[13px]">
					<span className="term-accent">$</span> contact
				</p>
				<div className="term-border border-t">
					<a href="mailto:contact@simonarapoglu.com" className="term-row term-border flex items-baseline gap-4 border-b py-4">
						<span className="term-name flex-1 font-semibold">{t('contact.email')}</span>
						<span className="term-dim text-xs">contact@simonarapoglu.com</span>
						<span className="term-accent">→</span>
					</a>
					<a href="https://github.com/TheMetalStorm" target="_blank" rel="noopener noreferrer" className="term-row term-border flex items-baseline gap-4 border-b py-4">
						<span className="term-name flex-1 font-semibold">{t('contact.github')}</span>
						<span className="term-dim text-xs">github.com/TheMetalStorm</span>
						<span className="term-accent">→</span>
					</a>
					<a href="https://linkedin.com/in/simon-arapoglu" target="_blank" rel="noopener noreferrer" className="term-row term-border flex items-baseline gap-4 border-b py-4">
						<span className="term-name flex-1 font-semibold">{t('contact.linkedin')}</span>
						<span className="term-dim text-xs">linkedin.com/in/simon-arapoglu</span>
						<span className="term-accent">→</span>
					</a>
				</div>
			</section>

			<LegalFooter />
		</main>
	);
}
