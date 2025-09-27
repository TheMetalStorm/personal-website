import { getBaseGames, localizeGame } from '../../data/gamesBase';
import type { Game } from '../../data/gamesBase';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Play, Gamepad2 } from 'lucide-react';

// Load translations server-side
async function loadTranslations(locale: string) {
  try {
    const translations = await import(`../../locales/${locale}.json`);
    return translations.default;
  } catch {
    const translations = await import(`../../locales/en.json`);
    return translations.default;
  }
}

export default async function GamesPageDE() {
  const locale = 'de';
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
            {translations.games.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {translations.games.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game: Game) => (
            <div key={game.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2">
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
                      {translations.games.playableInBrowser}
                    </span>
                  )}
                  {game.itchUrl && (
                    <span className="px-2 py-1 bg-pink-600 text-white text-xs rounded-full">
                      {translations.games.downloadOnItch}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {game.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {game.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {game.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 text-sm rounded">
                      +{game.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/de/games/${game.slug}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center text-sm font-medium"
                  >
                    <Gamepad2 className="w-4 h-4 inline mr-2" />
                    {translations.games.viewGame}
                  </Link>
                  
                  {game.playUrl && (
                    <a
                      href={game.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-green-500 hover:text-green-400 hover:bg-gray-700 rounded-lg transition-colors"
                      title={translations.games.playGame}
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
                      title={translations.games.viewCode}
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
    </main>
  );
}
