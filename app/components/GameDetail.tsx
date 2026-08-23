'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Game } from '../data/gamesBase';
import ImageGallery from './ImageGallery';
import LegalFooter from './LegalFooter';
import { useI18n } from '../hooks/useI18n';

interface GameDetailProps {
	game: Game;
}

export default function GameDetail({ game }: GameDetailProps) {
	const { t, locale } = useI18n();
	const pathname = usePathname();
	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';
	const backUrl = `${prefix}/games`;

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<p className="term-dim mb-6 text-[13px]">
				<span className="term-accent">$</span> cd ~/games/{game.slug}
			</p>

			<Link href={backUrl} className="term-link text-sm">← {t('games.viewAll')}</Link>

			<section className="mt-8 pb-10">
				<div className="term-border border">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={game.headerImage || game.image} alt={game.title} className="w-full" />
				</div>
				<h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
					{game.title}<span className="term-cursor"></span>
				</h1>
				<p className="term-desc mt-3 max-w-2xl text-[15px] leading-relaxed">{game.description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					<span className="term-border term-dim border px-2 py-0.5 text-[11px]">{game.engine}</span>
					{game.genre && <span className="term-border term-dim border px-2 py-0.5 text-[11px]">{game.genre}</span>}
					{game.playUrl && <span className="term-border term-accent border px-2 py-0.5 text-[11px]">{t('games.playableInBrowser')}</span>}
				</div>
			</section>

			{(game.playUrl || game.githubUrl || game.downloadUrl) && (
				<section className="pb-10">
					<p className="term-dim mb-3 text-[13px]">
						<span className="term-accent">$</span> open links
					</p>
					<div className="flex flex-wrap gap-3">
						{game.playUrl && (
							<a href={game.playUrl} target="_blank" rel="noopener noreferrer" className="term-border term-accent border px-4 py-2 text-sm">→ {t('games.playGame')}</a>
						)}
						{game.githubUrl && (
							<a href={game.githubUrl} target="_blank" rel="noopener noreferrer" className="term-border term-link border px-4 py-2 text-sm">→ {t('games.viewCode')}</a>
						)}
						{game.downloadUrl && (
							<a href={game.downloadUrl} target="_blank" rel="noopener noreferrer" className="term-border term-link border px-4 py-2 text-sm">→ {t('games.download')}</a>
						)}
					</div>
				</section>
			)}

			<section className="pb-10">
				<p className="term-dim mb-3 text-[13px]">
					<span className="term-accent">$</span> cat about.md
				</p>
				<div className="term-desc max-w-3xl space-y-4 text-[15px] leading-relaxed">
					{game.fullDescription.split('\n').map((para, i) => (
						<p key={i}>{para}</p>
					))}
				</div>
			</section>

			<section className="pb-10">
				<p className="term-dim mb-3 text-[13px]">
					<span className="term-accent">$</span> cat info
				</p>
				<div className="term-border border-t">
					<div className="term-border flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-baseline sm:gap-4">
						<span className="term-dim text-xs sm:w-44 sm:shrink-0">{t('games.engine')}</span>
						<span>{game.engine}</span>
					</div>
					{game.genre && (
						<div className="term-border flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-baseline sm:gap-4">
							<span className="term-dim text-xs sm:w-44 sm:shrink-0">{t('games.genre')}</span>
							<span>{game.genre}</span>
						</div>
					)}
					{game.releaseDate && (
						<div className="term-border flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-baseline sm:gap-4">
							<span className="term-dim text-xs sm:w-44 sm:shrink-0">{locale === 'de' ? 'Veröffentlichung' : 'Release'}</span>
							<span>{game.releaseDate}</span>
						</div>
					)}
					<div className="term-border flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-baseline sm:gap-4">
						<span className="term-dim text-xs sm:w-44 sm:shrink-0">{t('games.developmentType')}</span>
						<span>{game.developmentType === 'team' ? t('games.teamDevelopment') : t('games.soloDevelopment')}</span>
					</div>
					<div className="term-border flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-baseline sm:gap-4">
						<span className="term-dim text-xs sm:w-44 sm:shrink-0">{t('games.technologies')}</span>
						<span className="flex flex-wrap gap-2">
							{game.technologies.map((tech, i) => (
								<span key={i} className="term-border term-dim border px-2 py-0.5 text-[11px]">{tech}</span>
							))}
						</span>
					</div>
				</div>
			</section>

			{game.features && game.features.length > 0 && (
				<section className="pb-10">
					<p className="term-dim mb-3 text-[13px]">
						<span className="term-accent">$</span> cat features
					</p>
					<div className="term-border border-t">
						{game.features.map((feature, i) => (
							<div key={i} className="term-border border-b py-4">
								<h3 className="term-name font-semibold">{feature.title}</h3>
								<p className="term-desc mt-1 text-sm leading-relaxed">{feature.description}</p>
							</div>
						))}
					</div>
				</section>
			)}

			{game.images && game.images.length > 0 && (
				<section className="pb-10">
					<p className="term-dim mb-3 text-[13px]">
						<span className="term-accent">$</span> cat gallery
					</p>
					<ImageGallery images={game.images} />
				</section>
			)}

			<LegalFooter />
		</main>
	);
}
