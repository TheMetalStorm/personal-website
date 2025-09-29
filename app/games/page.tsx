import { getBaseGames, localizeGame } from '../data/gamesBase';
import type { Game } from '../data/gamesBase';
import Link from 'next/link';
import { Github, ExternalLink, Play, Gamepad2 } from 'lucide-react';
import ItemCard from '../components/ItemCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games & Interactive Projects',
  description: 'Explore my game development projects including Unity games, interactive applications, and creative coding experiments. From bachelor thesis work to indie game prototypes.',
  keywords: [
    'Game Development',
    'Unity',
    'C#',
    'Interactive Projects',
    'Game Design',
    'Simon Arapoglu',
    'Indie Games',
    'Creative Coding',
    'Bachelor Thesis',
    'Game Portfolio'
  ],
  openGraph: {
    title: 'Games & Interactive Projects - Simon Arapoglu',
    description: 'Explore my game development projects including Unity games, interactive applications, and creative coding experiments.',
    type: 'website',
  },
};

// Load translations server-side
async function loadTranslations(locale: string) {
  try {
    const translations = await import(`../locales/${locale}.json`);
    return translations.default;
  } catch {
    const translations = await import(`../locales/en.json`);
    return translations.default;
  }
}

export default async function GamesPage() {
  const locale = 'en';
  const translations = await loadTranslations(locale);
  
  const baseGames = getBaseGames();
  const games = baseGames.map(baseGame => 
    localizeGame(baseGame, translations?.gamesData?.[baseGame.id])
  );

  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {translations.games.allGamesTitle}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {translations.games.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game: Game) => {
            const badges = [
              { text: game.engine, color: 'blue' as const },
              ...(game.genre ? [{ text: game.genre, color: 'purple' as const }] : []),
              ...(game.playUrl ? [{ text: translations.games.playableInBrowser, color: 'green' as const }] : []),
              ...(game.downloadUrl ? [{ text: translations.games.download, color: 'pink' as const }] : [])
            ];

            const actions = [
              {
                href: `/games/${game.slug}`,
                label: translations.games.viewGame,
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
                title: translations.games.playGame
              }] : []),
              ...(game.githubUrl ? [{
                href: game.githubUrl,
                label: '',
                icon: 'Github' as const,
                isPrimary: false,
                isExternal: true,
                title: translations.games.viewCode
              }] : []),
              ...(game.downloadUrl ? [{
                href: game.downloadUrl,
                label: '',
                icon: 'ExternalLink' as const,
                isPrimary: false,
                isExternal: true,
                title: translations.games.download
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
    </main>
  );
}
