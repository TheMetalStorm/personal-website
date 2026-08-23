'use client';

import Link from 'next/link';
import { getFeaturedGames } from '../data/gamesClient';
import { useI18n } from '../hooks/useI18n';
import { ArrowRight } from 'lucide-react';
import ItemCard from './ItemCard';

export default function GamesSection() {
	const { t, locale, translations } = useI18n();
	const gamesUrl = locale === 'de' ? '/de/games' : '/games';
	const featuredGames = getFeaturedGames(translations);

	return (
		<section id="games" className="relative py-24 bg-brand-navy/30">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
					<div>
						<h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-4">
							{t('games.title')}
						</h2>
						<p className="text-slate-400 max-w-xl text-lg">
							{t('games.featuredDescription')}
						</p>
					</div>
					<Link
						href={gamesUrl}
						className="group flex items-center gap-2 text-brand-blue font-bold px-6 py-3 bento-glass hover:bg-white/10 transition-all rounded-2xl border-brand-blue/10"
					>
						{t('games.viewAll')}
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{featuredGames.map((game) => {
						const badges = [
							{ text: game.engine, color: 'blue' as const },
							...(game.playUrl ? [{ text: t('games.playableInBrowser'), color: 'green' as const }] : [])
						];

						const actions = [
							{
								href: `${gamesUrl}/${game.slug}`,
								label: t('games.viewGame'),
								icon: 'ArrowRight' as const,
								isPrimary: true,
								isExternal: false
							},
							...(game.playUrl ? [{
								href: game.playUrl,
								label: '',
								icon: 'Play' as const,
								isPrimary: false,
								isExternal: true,
								title: t('games.playGame')
							}] : []),
							...(game.githubUrl ? [{
								href: game.githubUrl,
								label: '',
								icon: 'Github' as const,
								isPrimary: false,
								isExternal: true,
								title: t('games.viewCode')
							}] : [])
						];

						return (
							<ItemCard
								key={game.id}
								id={game.id}
								title={game.title}
								description={game.description}
								image={game.image}
								badges={badges}
								technologies={game.technologies}
								actions={actions}
								type="game"
								hoverColor="blue"
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
