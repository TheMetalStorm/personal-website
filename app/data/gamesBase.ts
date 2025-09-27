export interface GameImage {
  src: string;
  alt: string;
  caption?: string;
  captionKey?: string;
}

export interface GameFeature {
  title: string;
  description: string;
}

export interface Game {
  id: string;
  name: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: GameImage[];
  engine: string;
  technologies: string[];
  features?: GameFeature[];
  playUrl?: string;
  githubUrl?: string;
  itchUrl?: string;
  slug: string;
  featured?: boolean;
  genre?: string;
  releaseDate?: string;
}

// TODO: Add ISPN game and Bachelor Thesis project
// Base games data (language-neutral) - Server-side safe
const baseGames = [
  {
    id: "spitting-sugar",
    name: "Spitting Sugar",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "Spitting Sugar gameplay",
        captionKey: "gameplay"
      },
      {
        src: "/portrait.jpg",
        alt: "Sweet projectile mechanics",
        captionKey: "mechanics"
      },
      {
        src: "/code.jpg",
        alt: "Puzzle level design",
        captionKey: "puzzles"
      },
      {
        src: "/portrait.jpg",
        alt: "Game jam development",
        captionKey: "development"
      }
    ],
    engine: "Unity",
    technologies: ["Unity", "C#", "WebGL", "First Person Controller"],
    genre: "First Person Puzzle",
    features: [
      { title: "sweetProjectiles", description: "sweetProjectilesDesc" },
      { title: "bridgeBuilding", description: "bridgeBuildingDesc" },
      { title: "enemyCombat", description: "enemyCombatDesc" },
      { title: "portalInspiredPuzzles", description: "portalInspiredPuzzlesDesc" }
    ],
    playUrl: "/unity/spitting-sugar/index.html",
    slug: "spitting-sugar",
    featured: true
  },
  {
    id: "pirate-game-jam-2025",
    name: "Living Armory",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "Living Armory gameplay",
        captionKey: "gameplay"
      },
      {
        src: "/portrait.jpg",
        alt: "Game mechanics and features",
        captionKey: "mechanics"
      },
      {
        src: "/code.jpg",
        alt: "Unity development environment",
        captionKey: "development"
      },
      {
        src: "/portrait.jpg",
        alt: "Game jam submission interface",
        captionKey: "submission"
      }
    ],
    engine: "Unity",
    technologies: ["Unity", "C#", "WebGL"],
    genre: "Metroidbrainia",
    features: [
      { title: "gameJamDevelopment", description: "gameJamDevelopmentDesc" },
      { title: "rapidPrototyping", description: "rapidPrototypingDesc" },
      { title: "creativeChallenges", description: "creativeChallengesDesc" },
      { title: "timeConstraints", description: "timeConstraintsDesc" }
    ],
    githubUrl: "https://github.com/Nashi1337/pirategamejam25",
    itchUrl: "https://nashi1337.itch.io/living-armory",
    playUrl: "/unity/living-armory/index.html",
    slug: "pirate-game-jam-2025",
    featured: true
  },
  {
    id: "shooty",
    name: "Shooty",
    image: "/portrait.jpg",
    images: [
      {
        src: "/portrait.jpg",
        alt: "Shooty gameplay screenshot",
        captionKey: "gameplay"
      },
      {
        src: "/code.jpg",
        alt: "Player shooting mechanics",
        captionKey: "shooting"
      },
      {
        src: "/portrait.jpg",
        alt: "Enemy AI system",
        captionKey: "enemies"
      },
      {
        src: "/code.jpg",
        alt: "Game over screen",
        captionKey: "gameover"
      }
    ],
    engine: "Raylib",
    technologies: ["Zig", "Raylib"],
    genre: "Arcade Shooter",
    features: [
      { title: "spriteAnimation", description: "spriteAnimationDesc" },
      { title: "collisionDetection", description: "collisionDetectionDesc" },
      { title: "scoreSystem", description: "scoreSystemDesc" },
      { title: "soundEffects", description: "soundEffectsDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/shooty",
    itchUrl: "https://themetalstorm.itch.io/shooty",
    slug: "shooty",
    featured: true
  }
];

// Server-safe functions for static generation
export function getAllGameSlugs(): string[] {
  return baseGames.map(game => game.slug);
}

export function getBaseGames() {
  return baseGames;
}

export function getBaseGameBySlug(slug: string) {
  return baseGames.find(game => game.slug === slug);
}

// Server-safe localization function
export function localizeGame(baseGame: any, gameTranslations: any): Game {
  if (!gameTranslations) {
    return {
      ...baseGame,
      title: baseGame.name,
      description: "Missing translation",
      fullDescription: "Missing translation"
    };
  }

  // Localize features
  const localizedFeatures = baseGame.features?.map((feature: any) => ({
    title: gameTranslations.features?.[feature.title] || feature.title,
    description: gameTranslations.features?.[feature.description] || feature.description
  }));

  // Localize image captions
  const localizedImages = baseGame.images?.map((image: any) => ({
    ...image,
    caption: image.captionKey ? 
      gameTranslations.imageCaptions?.[image.captionKey] : 
      ('caption' in image ? image.caption : image.alt)
  }));

  return {
    ...baseGame,
    title: gameTranslations.title,
    description: gameTranslations.description,
    fullDescription: gameTranslations.fullDescription,
    features: localizedFeatures,
    images: localizedImages
  };
}
