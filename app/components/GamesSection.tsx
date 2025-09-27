'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedGames } from '../data/gamesClient';
import { useI18n } from '../hooks/useI18n';
import { Gamepad2, Play, Github, ExternalLink } from 'lucide-react';

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
					{featuredGames.map((game) => (
						<div key={game.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={game.image} alt={game.title} fill className="object-cover" />
								<div className="absolute top-3 right-3 flex flex-wrap justify-end gap-2">
									<span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
										{game.engine}
									</span>
									{game.genre && (
										<span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
											{game.genre}
										</span>
									)}
									{game.playUrl && (
										<span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
											{t('games.playableInBrowser')}
										</span>
									)}
									{game.itchUrl && (
										<span className="px-2 py-1 bg-pink-600 text-white text-xs rounded-full">
											{t('games.downloadOnItch')}
										</span>
									)}
								</div>
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{game.title}</h3>
								<p className="text-gray-300 text-sm sm:text-base mb-4">{game.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{game.technologies.slice(0, 3).map((tech, index) => (
										<span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
											{tech}
										</span>
									))}
									{game.technologies.length > 3 && (
										<span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
											+{game.technologies.length - 3}
										</span>
									)}
								</div>
								<div className="flex items-center gap-3">
									<Link 
										href={`${gamesUrl}/${game.slug}`} 
										className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center text-sm font-medium"
									>
										<Gamepad2 className="w-4 h-4 inline mr-2" />
										{t('games.viewGame')}
									</Link>
									
									{game.playUrl && (
										<a
											href={game.playUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 text-green-500 hover:text-green-400 hover:bg-gray-700 rounded-lg transition-colors"
											title={t('games.playGame')}
										>
											<Play className="w-5 h-5" />
										</a>
									)}

									{game.githubUrl && (
										<a
											href={game.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
											title={t('games.viewCode')}
										>
											<Github className="w-5 h-5" />
										</a>
									)}

									{game.itchUrl && (
										<a
											href={game.itchUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 text-purple-500 hover:text-purple-400 hover:bg-gray-700 rounded-lg transition-colors"
											title="View on itch.io"
										>
											<ExternalLink className="w-5 h-5" />
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
