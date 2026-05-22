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
    <main className="min-h-screen bg-gray-900 relative overflow-hidden pt-24 pb-20">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Back Button */}
        <Link
          href={backUrl}
          className="group inline-flex items-center gap-2 text-brand-blue font-outfit font-bold px-5 py-2 bento-glass rounded-xl mb-12 hover:bg-white/5 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('games.viewAll')}
        </Link>

        {/* Game Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12 group">
          <div className="relative h-64 sm:h-80 md:h-[450px] w-full">
            <Image
              src={game.headerImage || game.image}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-blue/10 backdrop-blur-md border border-brand-blue/20 text-brand-blue text-xs font-bold rounded-lg uppercase tracking-wider">
                  {game.engine}
                </span>
                {game.genre && (
                  <span className="px-3 py-1 bg-brand-violet/10 backdrop-blur-md border border-brand-violet/20 text-brand-violet text-xs font-bold rounded-lg uppercase tracking-wider">
                    {game.genre}
                  </span>
                )}
                {game.playUrl && (
                  <span className="px-3 py-1 bg-brand-blue/10 backdrop-blur-md border border-brand-blue/20 text-brand-blue text-xs font-bold rounded-lg uppercase tracking-wider flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {t('games.playableInBrowser')}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
                {game.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light drop-shadow-md">
                {game.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* About Section */}
            <div className="bento-glass p-8 md:p-10 rounded-3xl border-white/5">
              <h2 className="text-2xl md:text-3xl font-outfit font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-brand-violet rounded-full" />
                {t('games.about')}
              </h2>
              <div className="text-slate-300 leading-relaxed text-lg space-y-4 font-light">
                {game.fullDescription.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Features Section */}
            {game.features && game.features.length > 0 && (
              <div className="bento-glass p-8 md:p-10 rounded-3xl border-white/5">
                <h2 className="text-2xl md:text-3xl font-outfit font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-blue rounded-full" />
                  {t('projectFeatures.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {game.features.map((feature, index) => (
                    <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-blue/20 transition-all group">
                      <h3 className="font-outfit font-bold text-white mb-3 text-lg group-hover:text-brand-blue transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Game Gallery */}
            {game.images && game.images.length > 0 && (
              <div className="bento-glass p-8 md:p-10 rounded-3xl border-white/5">
                <h2 className="text-2xl md:text-3xl font-outfit font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-blue rounded-full" />
                  {t('games.gallery')}
                </h2>
                <ImageGallery images={game.images} />
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-8 sticky top-24">

            {/* Action Buttons */}
            <div className="bento-glass p-8 rounded-3xl border-white/5">
              <div className="space-y-4">
                {game.playUrl && (
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-blue h-14 rounded-2xl text-brand-navy font-outfit font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
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
                    className="w-full bento-glass h-14 border-white/10 text-white font-outfit font-bold flex items-center justify-center gap-2 hover:bg-white/10 active:scale-[0.98] transition-all"
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
                    className="w-full bg-brand-violet h-14 rounded-2xl text-white font-outfit font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(112,0,255,0.3)] hover:shadow-[0_0_30px_rgba(112,0,255,0.5)]"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t('games.download')}
                  </a>
                )}
              </div>
            </div>

            {/* Game Info */}
            <div className="bento-glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-outfit font-bold text-white mb-6 uppercase tracking-widest text-sm opacity-50">
                Game Information
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter block mb-1">
                    {t('games.engine')}
                  </span>
                  <p className="text-white font-outfit font-semibold text-lg">{game.engine}</p>
                </div>

                {game.genre && (
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter block mb-1">
                      {t('games.genre')}
                    </span>
                    <p className="text-white font-outfit font-semibold text-lg">{game.genre}</p>
                  </div>
                )}

                {game.releaseDate && (
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter block mb-1">
                      Release Date
                    </span>
                    <p className="text-white font-outfit font-semibold text-lg">{game.releaseDate}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Development Section */}
            <div className="bento-glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-outfit font-bold text-white mb-6 uppercase tracking-widest text-sm opacity-50 flex items-center gap-2">
                {game.developmentType === 'team' ? <Users className="w-4 h-4" /> : <User className="w-4 h-4" />}
                {t('games.development')}
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter block mb-1">
                    {t('games.developmentType')}
                  </span>
                  <p className="text-white font-outfit font-semibold text-lg">
                    {game.developmentType === 'team' ? t('games.teamDevelopment') : t('games.soloDevelopment')}
                  </p>
                </div>
                {game.developmentType === 'team' && (
                  <p className="text-sm text-slate-500 italic font-light">
                    {t('games.creditsInGame')}
                  </p>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="bento-glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-outfit font-bold text-white mb-6 uppercase tracking-widest text-sm opacity-50">
                {t('games.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {game.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 text-sm font-medium rounded-xl hover:border-brand-blue/30 transition-colors">
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
