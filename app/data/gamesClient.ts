"use client";

import { Game, getBaseGames, localizeGame } from './gamesBase';
import type { Translations } from '../hooks/useI18n';

// Client-side utilities for games localization
export function getLocalizedGames(translations: Translations): Game[] {
  return getBaseGames().map((game) => localizeGame(game, translations.gamesData?.[game.id as keyof typeof translations.gamesData]));
}

export function getFeaturedGames(translations: Translations): Game[] {
  return getLocalizedGames(translations).filter(game => game.featured);
}

export function getGameBySlug(slug: string, translations: Translations): Game | undefined {
  return getLocalizedGames(translations).find(game => game.slug === slug);
}
