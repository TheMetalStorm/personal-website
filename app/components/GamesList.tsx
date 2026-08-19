'use client';

import { usePathname } from 'next/navigation';
import { useI18n } from '../hooks/useI18n';
import { getBaseGames, localizeGame } from '../data/gamesBase';
import TerminalCard from './TerminalCard';
import LegalFooter from './LegalFooter';

export default function GamesList() {
	const { t, translations } = useI18n();
	const pathname = usePathname();

	const prefix = pathname.startsWith('/de') ? '/de' : pathname.startsWith('/en') ? '/en' : '';
	const gamesData = translations.gamesData as Record<string, any>;
	const games = getBaseGames().map((g) => localizeGame(g, gamesData?.[g.id]));

	return (
		<main className="term-mono mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
			<section className="pb-8">
				<p className="term-dim text-[13px]">
					<span className="term-accent">$</span> ls ~/games
				</p>
				<h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t('landing.hubs.games.title')}</h1>
				<p className="term-desc mt-2 max-w-xl text-sm sm:text-[15px]">{t('games.description')}</p>
			</section>

			<div className="grid gap-6 sm:grid-cols-2">
				{games.map((g) => {
					const meta = [g.engine, ...(g.genre ? [g.genre] : []), ...(g.playUrl ? [t('games.playableInBrowser')] : [])];
					const actions = [
						...(g.playUrl ? [{ href: g.playUrl, label: 'play' }] : []),
						...(g.githubUrl ? [{ href: g.githubUrl, label: 'github' }] : []),
						...(g.downloadUrl ? [{ href: g.downloadUrl, label: 'download' }] : []),
					];
					return (
						<TerminalCard
							key={g.id}
							href={`${prefix}/games/${g.slug}`}
							image={g.image}
							imageAlt={g.title}
							title={g.title}
							description={g.description}
							meta={meta}
							actions={actions}
							viewLabel={t('games.viewGame')}
						/>
					);
				})}
			</div>
			<LegalFooter />
		</main>
	);
}
