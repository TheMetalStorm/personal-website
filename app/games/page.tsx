import { getBaseGames, localizeGame } from '../data/gamesBase';
import type { Game } from '../data/gamesBase';
import Link from 'next/link';
import { Github, Play, ArrowLeft, ArrowRight } from 'lucide-react';
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
    <main className="min-h-screen bg-gray-900 relative overflow-hidden pt-24 pb-20">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6 tracking-tight">
            {translations.games.allGamesTitle}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            {translations.games.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game: Game) => {
            const badges = [
              { text: game.engine, color: 'blue' as const },
              ...(game.genre ? [{ text: game.genre, color: 'purple' as const }] : []),
              ...(game.playUrl ? [{ text: translations.games.playableInBrowser, color: 'green' as const }] : [])
            ];

            const actions = [
              {
                href: `/games/${game.slug}`,
                label: translations.games.viewGame,
                icon: 'ArrowRight' as any,
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
