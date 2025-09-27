'use client';

import Link from 'next/link';
import { getFeaturedGames } from '../data/gamesClient';
import { useI18n } from '../hooks/useI18n';
import { Gamepad2, Play, Github, ExternalLink } from 'lucide-react';
import ItemCard from './ItemCard';

export default function GamesSection() {
	const { t, locale, translations } = useI18n();
	const gamesUrl = locale === 'de' ? '/de/games' : '/games';
	const featuredGames = getFeaturedGames(locale, translations);
	
	return (
		<section id="games" className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center mb-6 sm:mb-8">
					<h2 className="text-xl sm:text-2xl font-bold text-white">{t('games.title')}</h2>
					<Link 
						href={gamesUrl} 
						className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
					>
						{t('games.viewAll')} →
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{featuredGames.map((game) => {
						const badges = [
							{ text: game.engine, color: 'blue' as const },
							...(game.genre ? [{ text: game.genre, color: 'purple' as const }] : []),
							...(game.playUrl ? [{ text: t('games.playableInBrowser'), color: 'green' as const }] : []),
							...(game.itchUrl ? [{ text: t('games.downloadOnItch'), color: 'pink' as const }] : [])
						];

						const actions = [
							{
								href: `${gamesUrl}/${game.slug}`,
								label: t('games.viewGame'),
								icon: 'Gamepad2' as const,
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
							}] : []),
							...(game.itchUrl ? [{
								href: game.itchUrl,
								label: '',
								icon: 'ExternalLink' as const,
								isPrimary: false,
								isExternal: true,
								title: 'View on itch.io'
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
