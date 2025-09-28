export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video' | 'pdf';
  poster?: string; // For video thumbnails
  pdfThumbnail?: string; // For PDF first page thumbnails
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
  image: string; // Preview card image
  headerImage?: string; // Detail page header image (falls back to image if not specified)
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
    image: "/media/spring_library/TechStack.svg",
    //headerImage: "/media/spring_library/ArchitectureChart.svg",
    images: [
      {
        src: "/media/spring_library/TechStack.svg",
        alt: "Technology stack used in the project",
        captionKey: "techStack"
      },
      {
        src: "/media/spring_library/ArchitectureChart.svg",
        alt: "System architecture diagram showing component relationships",
        captionKey: "architecture"
      },
      {
        src: "/media/spring_library/ERChart.svg",
        alt: "Entity relationship diagram of the database schema",
        captionKey: "erDiagram"
      },
      {
        src: "/media/spring_library/Docs.PNG",
        alt: "API documentation interface and endpoints",
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
    image: "/media/c8_serenity/title.png",
    headerImage: "/media/c8_serenity/title.png",
    images: [
      {
        src: "/media/c8_serenity/title.png",
        alt: "CHIP-8 emulator for SerenityOS title screen",
        captionKey: "title",
        type: "image"
      },
      {
        src: "/media/c8_serenity/flightrunner.mp4",
        alt: "FlightRunner game running on the CHIP-8 emulator",
        captionKey: "flightrunner",
        type: "video"
      },
      {
        src: "/media/c8_serenity/tetris_by_fran_dachille.mp4",
        alt: "Tetris by Fran Dachille running on the emulator",
        captionKey: "tetris",
        type: "video"
      },
      {
        src: "/media/c8_serenity/particle_demo_by_zeroZshadow.mp4",
        alt: "Particle demo by zeroZshadow showcasing graphics capabilities",
        captionKey: "particleDemo",
        type: "video"
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
    image: "/media/zilo/card_preview.png",
    headerImage: "/media/zilo/header_image.png",

    images: [
      {
        src: "/media/zilo/welcome_screen.png",
        alt: "Zilo text editor welcome screen",
        captionKey: "welcome",
        type: "image"
      },
      {
        src: "/media/zilo/syntax_highlighting.png",
        alt: "Syntax highlighting for C and Zig programming languages",
        captionKey: "syntax",
        type: "image"
      },
      {
        src: "/media/zilo/search.mp4",
        alt: "Search functionality in action",
        captionKey: "search",
        type: "video"
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
    id: "socket-fun",
    name: "SocketFun",
    image: "/media/socket_fun/title.png",
    headerImage: "/media/socket_fun/title.png",
    images: [
      {
        src: "/media/socket_fun/title.png",
        alt: "SocketFun project title and overview",
        captionKey: "title",
        type: "image"
      },
      {
        src: "/media/socket_fun/echo_server.mp4",
        alt: "Echo server and client communication demonstration",
        captionKey: "echoServer",
        type: "video"
      },
      {
        src: "/media/socket_fun/chat_server.mp4",
        alt: "Chat server handling multiple clients simultaneously",
        captionKey: "chatServer",
        type: "video"
      }
    ],
    technologies: ["C", "Linux", "Sockets", "epoll", "TCP", "Makefile"],
    features: [
      { title: "echoServer", description: "echoServerDesc" },
      { title: "chatServer", description: "chatServerDesc" },
      { title: "concurrentConnections", description: "concurrentConnectionsDesc" },
      { title: "epollHandling", description: "epollHandlingDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/SocketFun",
    slug: "socket-fun",
    featured: false
  },
  {
    id: "world-launcher",
    name: "World-Launcher",
    image: "/media/world_launcher/title.svg",
    headerImage: "/media/world_launcher/title.svg",
    images: [
      {
        src: "/media/world_launcher/title.svg",
        alt: "World-Launcher application title and logo",
        captionKey: "title",
        type: "image"
      },
      {
        src: "/media/world_launcher/main_menu.PNG",
        alt: "Main menu interface of World-Launcher",
        captionKey: "mainMenu",
        type: "image"
      },
      {
        src: "/media/world_launcher/patching_and_starting_game.mp4",
        alt: "ROM patching process and game launching demonstration",
        captionKey: "patchingAndLaunching",
        type: "video"
      }
    ],
    technologies: ["C#", "C++", "Windows Forms", ".NET", "Floating IPS"],
    features: [
      { title: "romPatching", description: "romPatchingDesc" },
      { title: "gameLauncher", description: "gameLauncherDesc" },
      { title: "emulatorIntegration", description: "emulatorIntegrationDesc" },
      { title: "userFriendlyInterface", description: "userFriendlyInterfaceDesc" }
    ],
    githubUrl: "https://github.com/TheMetalStorm/World-Launcher",
    slug: "world-launcher",
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
