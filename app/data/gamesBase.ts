export interface GameImage {
  src: string;
  alt: string;
  caption?: string;
  captionKey?: string;
  type?: 'image' | 'video' | 'pdf';
  poster?: string; // For video thumbnails
  pdfThumbnail?: string; // For PDF first page thumbnails
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
  image: string; // Preview card image
  headerImage?: string; // Detail page header image (falls back to image if not specified)
  images?: GameImage[];
  engine: string;
  technologies: string[];
  features?: GameFeature[];
  playUrl?: string;
  githubUrl?: string;
  itchUrl?: string;
  downloadUrl?: string;
  slug: string;
  featured?: boolean;
  genre?: string;
  releaseDate?: string;
}

// Base games data (language-neutral) - Server-side safe
const baseGames = [
  {
    id: "bachelor-thesis",
    name: "Bachelor Thesis - 3D Animation Rendering",
    image: "/media/ba/title.png",
    images: [
      {
        src: "/media/ba/NachbildungGertie.png",
        alt: "Gertie the Dinosaur recreation in 3D",
        captionKey: "gertieRecreation",
        type: "image"
      },
      {
        src: "/media/ba/NachbildungMononoke.png",
        alt: "Princess Mononoke recreation in 3D",
        captionKey: "mononokeRecreation",
        type: "image"
      },
      {
        src: "/media/ba/NachbildungDisney.png",
        alt: "Disney animation recreation in 3D",
        captionKey: "disneyRecreation",
        type: "image"
      },
      {
        src: "/media/ba/Bachelorarbeit.pdf",
        alt: "Bachelor thesis PDF document",
        pdfThumbnail: "/media/ba/pdf_preview.png",
        captionKey: "thesisPdf",
        type: "pdf"
      }
    ],
    engine: "Unity",
    technologies: ["Unity", "C#", "HLSL", "Custom Render Pipeline", "3D Graphics", "Shader Development"],
    features: [
      {
        title: "customShaders",
        description: "customShadersDesc"
      },
      {
        title: "renderPipeline",
        description: "renderPipelineDesc"
      },
      {
        title: "animationRecreation",
        description: "animationRecreationDesc"
      },
      {
        title: "technicalResearch",
        description: "technicalResearchDesc"
      }
    ],
    githubUrl: "https://github.com/TheMetalStorm/Rendering-classic-hand-drawn-cartoon-animations",
    downloadUrl: "https://github.com/TheMetalStorm/Rendering-classic-hand-drawn-cartoon-animations/releases/tag/v1.0.0",
    playUrl: "/unity/ba/index.html",
    slug: "bachelor-thesis",
    featured: true,
    genre: "Technical Demo",
    releaseDate: "2023"
  },
   {
    id: "spitting-sugar",
    name: "Spitting Sugar",
    image: "/media/spitting_sugar/title.jpg",
    headerImage: "/media/spitting_sugar/start_area.png",
    images: [
      {
        src: "/media/spitting_sugar/title.jpg",
        alt: "Spitting Sugar game title screen",
        captionKey: "title",
        type: "image"
      },
      {
        src: "/media/spitting_sugar/start_area.png",
        alt: "Starting area of the game",
        captionKey: "startArea",
        type: "image"
      },
      {
        src: "/media/spitting_sugar/bouncy_bears.mp4",
        alt: "Bouncy bear enemies in action",
        captionKey: "bouncyBears",
        type: "video"
      },
      {
        src: "/media/spitting_sugar/build_bridges.mp4",
        alt: "Building bridges with sugar projectiles",
        captionKey: "buildBridges", 
        type: "video"
      },
      {
        src: "/media/spitting_sugar/solve_puzzles.mp4",
        alt: "Solving puzzles in the game",
        captionKey: "solvePuzzles",
        type: "video"
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
    id: "kalos",
    name: "KALOS",
    image: "/media/kalos/environment.png",
    images: [
      {
        src: "/media/kalos/title.png",
        alt: "KALOS game title screen",
        captionKey: "title",
        type: "image"
      },
      {
        src: "/media/kalos/cutscene.mp4",
        alt: "Voice acted animated cutscene",
        captionKey: "cutscene",
        type: "video"
      },
      {
        src: "/media/kalos/environment.png",
        alt: "Atmospheric low poly environment",
        captionKey: "environment",
        type: "image"
      },
      {
        src: "/media/kalos/minigame.png",
        alt: "Lock picking minigame",
        captionKey: "minigame",
        type: "image"
      },
      {
        src: "/media/kalos/rythm_game.mp4",
        alt: "Prayer rhythm game mechanics",
        captionKey: "rhythmGame",
        type: "video"
      }
    ],
    engine: "Unity",
    technologies: ["Unity", "C#", "Ink Narrative Scripting", "Voice Acting", "3D Modeling", "Audio Design"],
    features: [
      {
        title: "voiceActedCutscenes",
        description: "voiceActedCutscenesDesc"
      },
      {
        title: "multiplePaths",
        description: "multiplePathsDesc"
      },
      {
        title: "inkScripting",
        description: "inkScriptingDesc"
      },
      {
        title: "lowPolyEnvironments",
        description: "lowPolyEnvironmentsDesc"
      },
      {
        title: "miniGames",
        description: "miniGamesDesc"
      }
    ],
    //githubUrl: "https://github.com/TheMetalStorm/KALOS",
    slug: "kalos",
    featured: true,
    genre: "Interactive Narrative",
    releaseDate: "2024"
  },
  {
    id: "pirate-game-jam-2025",
    name: "Living Armory",
    image: "/media/living_armory/intro_animation.png",
    headerImage: "/media/living_armory/header.jpeg",
    images: [
      {
        src: "/media/living_armory/intro_animation.png",
        alt: "Game intro animation screenshot",
        captionKey: "introAnimation",
        type: "image"
      },
      {
        src: "/media/living_armory/be_the_weapon.mp4",
        alt: "Be the weapon gameplay mechanic",
        captionKey: "beTheWeapon",
        type: "video"
      },
      {
        src: "/media/living_armory/find_the_fastest_route.mp4",
        alt: "Finding the fastest route through levels",
        captionKey: "fastestRoute",
        type: "video"
      },
      {
        src: "/media/living_armory/fight_boss.mp4",
        alt: "Boss fight gameplay sequence",
        captionKey: "fightBoss",
        type: "video"
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
    image: "/media/shooty/title.png",
    headerImage: "/media/shooty/title.png",
    images: [
      {
        src: "/media/shooty/title.png",
        alt: "Shooty game title screen",
        captionKey: "title",
        type: "image"
      },
      {
        src: "/media/shooty/main_menu.png",
        alt: "Main menu interface",
        captionKey: "mainMenu",
        type: "image"
      },
      {
        src: "/media/shooty/tutorial.png",
        alt: "Tutorial screen explaining game mechanics",
        captionKey: "tutorial",
        type: "image"
      },
      {
        src: "/media/shooty/bomb_item.png",
        alt: "Bomb item power-up in the game",
        captionKey: "bombItem",
        type: "image"
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
    featured: false
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
