'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Play, Gamepad2, Cpu, Tag, Calendar, Home, User, Users } from 'lucide-react';
import { Game } from '../data/gamesBase';
import ImageGallery from './ImageGallery';
import { useI18n } from '../hooks/useI18n';

interface GameDetailProps {
  game: Game;
}

export default function GameDetail({ game }: GameDetailProps) {
  const { t, locale } = useI18n();
  const backUrl = locale === 'de' ? '/de/games' : '/games';
  
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-12">
        
        {/* Back Button */}
        <Link 
          href={backUrl} 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-2 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">{t('games.viewAll')}</span>
          <span className="sm:hidden text-sm">{t('navigation.games')}</span>
        </Link>

        {/* Game Header */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-6 sm:mb-8">
          <div className="relative h-48 sm:h-64 md:h-80">
            <Image src={game.headerImage || game.image} alt={game.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full flex items-center gap-1">
                  <Cpu className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="hidden sm:inline">{game.engine}</span>
                  <span className="sm:hidden">{game.engine.slice(0, 6)}</span>
                </span>
                {game.genre && (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-600 text-white text-xs sm:text-sm rounded-full flex items-center gap-1">
                    <Tag className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span className="hidden sm:inline">{game.genre}</span>
                    <span className="sm:hidden">{game.genre.slice(0, 8)}</span>
                  </span>
                )}
                {game.playUrl && (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600 text-white text-xs sm:text-sm rounded-full flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {t('games.playableInBrowser')}
                  </span>
                )}
                {game.downloadUrl && (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-pink-600 text-white text-xs sm:text-sm rounded-full flex items-center gap-1">
                    <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span className="hidden sm:inline">{t('games.download')}</span>
                    <span className="sm:hidden">DL</span>
                  </span>
                )}
                {game.releaseDate && (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-600 text-white text-xs sm:text-sm rounded-full flex items-center gap-1">
                    <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                    {game.releaseDate}
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                {game.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl line-clamp-3">
                {game.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{t('games.about')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {game.fullDescription}
              </p>
            </div>

            {/* Features Section */}
            {game.features && game.features.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('projectFeatures.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {game.features.map((feature, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Game Gallery */}
            {game.images && game.images.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('games.gallery')}</h2>
                <ImageGallery images={game.images} />
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Action Buttons */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-3">
                {game.playUrl && (
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Play className="w-5 h-5" />
                    {t('games.playGame')}
                  </a>
                )}
                
                {game.githubUrl && (
                  <a
                    href={game.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    {t('games.viewCode')}
                  </a>
                )}

                {game.downloadUrl && (
                  <a
                    href={game.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t('games.download')}
                  </a>
                )}
              </div>
            </div>

            {/* Game Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Game Information</h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-400">{t('games.engine')}:</span>
                  <p className="text-white">{game.engine}</p>
                </div>

                {game.genre && (
                  <div>
                    <span className="text-sm font-medium text-gray-400">{t('games.genre')}:</span>
                    <p className="text-white">{game.genre}</p>
                  </div>
                )}

                {game.releaseDate && (
                  <div>
                    <span className="text-sm font-medium text-gray-400">Release Date:</span>
                    <p className="text-white">{game.releaseDate}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Development Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                {game.developmentType === 'team' ? <Users className="w-5 h-5" /> : <User className="w-5 h-5" />}
                {t('games.development')}
              </h3>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-400">{t('games.developmentType')}:</span>
                  <p className="text-white">
                    {game.developmentType === 'team' ? t('games.teamDevelopment') : t('games.soloDevelopment')}
                  </p>
                </div>
                {game.developmentType === 'team' && (
                  <p className="text-sm text-gray-400 italic">
                    {t('games.creditsInGame')}
                  </p>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">{t('games.technologies')}</h3>
              <div className="flex flex-wrap gap-2">
                {game.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
