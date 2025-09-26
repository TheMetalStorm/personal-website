export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: ProjectImage[];
  technologies: string[];
  features?: ProjectFeature[];
  demoUrl?: string;
  githubUrl?: string;
  slug: string;
  featured?: boolean;
}

// Base project data (language-neutral) - Server-side safe
const baseProjects = [
      {
    id: "spring-library-api",
    name: "Spring Library Management API",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "REST API endpoints overview",
        captionKey: "apiEndpoints"
      },
      {
        src: "/portrait.jpg",
        alt: "Database schema design",
        captionKey: "database"
      },
      {
        src: "/code.jpg",
        alt: "API documentation interface",
        captionKey: "documentation"
      }
    ],
    technologies: ["Java", "Spring Boot", "REST API", "JPA", "MongoDB", "Maven"],
    features: [
      { title: "restfulApi", description: "restfulApiDesc" },
      { title: "databaseIntegration", description: "databaseIntegrationDesc" },
      { title: "crudOperations", description: "crudOperationsDesc" },
      { title: "apiDocumentation", description: "apiDocumentationDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/Spring-Library-Management-API",
    slug: "spring-library-api",
    featured: true
  },
  {
    id: "c8-serenityos",
    name: "C8 SerenityOS",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "CHIP-8 emulator main interface",
        captionKey: "emulator"
      },
      {
        src: "/portrait.jpg",
        alt: "Game running on emulator",
        captionKey: "gameplay"
      },
      {
        src: "/code.jpg",
        alt: "Debugger interface",
        captionKey: "debugger"
      }
    ],
    technologies: ["C++", "SerenityOS", "CHIP-8", "Emulation"],
    features: [
      { title: "cpuEmulation", description: "cpuEmulationDesc" },
      { title: "graphicsRendering", description: "graphicsRenderingDesc" },
      { title: "soundSystem", description: "soundSystemDesc" },
      { title: "debuggerTools", description: "debuggerToolsDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/c8-serenityOS",
    slug: "c8-serenityos",
    featured: true
  },
  {
    id: "zilo",
    name: "Zilo",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "Zilo text editor main interface",
        captionKey: "main"
      },
      {
        src: "/portrait.jpg",
        alt: "Zilo search functionality", 
        captionKey: "search"
      },
      {
        src: "/code.jpg",
        alt: "Zilo terminal integration",
        captionKey: "terminal"
      }
    ],
    technologies: ["Zig", "Ubuntu", "Linux", "Terminal"],
    features: [
      { title: "syntaxHighlighting", description: "syntaxHighlightingDesc" },
      { title: "searchReplace", description: "searchReplaceDesc" },
      { title: "terminalIntegration", description: "terminalIntegrationDesc" },
      { title: "lightweightFast", description: "lightweightFastDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/zilo",
    slug: "zilo",
    featured: true
  },
  {
    id: "shooty",
    name: "Shooty", 
    image: "/portrait.jpg",
    images: [
      {
        src: "/portrait.jpg",
        alt: "Shooty portfolio homepage",
        captionKey: "homepage"
      },
      {
        src: "/code.jpg",
        alt: "Gallery management interface",
        captionKey: "gallery"
      },
      {
        src: "/portrait.jpg",
        alt: "Booking system",
        captionKey: "booking"
      },
      {
        src: "/code.jpg",
        alt: "Mobile responsive design",
        captionKey: "mobile"
      }
    ],
    technologies: ["Zig", "Raylib"],
    features: [
      { title: "spriteAnimation", description: "spriteAnimationDesc" },
      { title: "bookingSystem", description: "bookingSystemDesc" },
      { title: "imageOptimization", description: "imageOptimizationDesc" },
      { title: "socialMedia", description: "socialMediaDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/shooty",
    slug: "shooty",
    featured: false
  }
];

// Server-safe functions for static generation
export function getAllProjectSlugs(): string[] {
  return baseProjects.map(project => project.slug);
}

export function getBaseProjects() {
  return baseProjects;
}
