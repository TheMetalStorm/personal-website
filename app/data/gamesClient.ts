"use client";

import { Game, getBaseGames } from './gamesBase';

// Client-side utilities for games localization
export function getLocalizedGames(locale: string, translations: any): Game[] {
  const baseGames = getBaseGames();
  
  return baseGames.map((game) => {
    const gameTranslations = translations?.gamesData?.[game.id];
    
    if (!gameTranslations) {
      console.warn(`Missing translations for game ${game.id}`);
      return {
        ...game,
        title: game.name,
        description: "Missing translation",
        fullDescription: "Missing translation"
      };
    }

    // Localize features
    const localizedFeatures = game.features?.map(feature => ({
      title: gameTranslations.features?.[feature.title] || feature.title,
      description: gameTranslations.features?.[feature.description] || feature.description
    }));

    // Localize image captions
    const localizedImages = game.images?.map(image => ({
      ...image,
      caption: image.captionKey ? 
        gameTranslations.imageCaptions?.[image.captionKey] : 
        ('caption' in image ? image.caption : image.alt)
    }));

    return {
      ...game,
      title: gameTranslations.title,
      description: gameTranslations.description,
      fullDescription: gameTranslations.fullDescription,
      features: localizedFeatures,
      images: localizedImages
    };
  });
}

export function getFeaturedGames(locale: string, translations: any): Game[] {
  return getLocalizedGames(locale, translations).filter(game => game.featured);
}

export function getGameBySlug(slug: string, locale: string, translations: any): Game | undefined {
  return getLocalizedGames(locale, translations).find(game => game.slug === slug);
}
