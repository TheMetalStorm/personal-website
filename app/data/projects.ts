export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
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
  demoUrl?: string;
  githubUrl?: string;
  slug: string;
  featured?: boolean; // If true, appears in "Featured Projects" section on homepage
}

export const projects: Project[] = [
  {
    id: "zilo",
    name: "Zilo",
    title: "Zilo Text Editor",
    description: "A reimplementation of the kilo Text Editor, written in the Zig Programming language.",
    fullDescription: "Zilo is a terminal text editor. It includes syntax highlighting and search functionality , all powered by the Zig programming language.",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "Zilo text editor main interface",
        caption: "Main editor interface with syntax highlighting"
      },
      {
        src: "/portrait.jpg",
        alt: "Zilo search functionality", 
        caption: "Built-in search and replace functionality"
      },
      {
        src: "/code.jpg",
        alt: "Zilo terminal integration",
        caption: "Seamless terminal integration"
      }
    ],
    technologies: ["Zig", "Ubuntu", "Linux", "Terminal", "Text Processing"],
    githubUrl: "https://github.com/yourusername/zilo",
    slug: "zilo",
    featured: true // This will appear in Featured Projects
  },
  {
    id: "shooty",
    name: "Shooty", 
    title: "Shooty - Photography Portfolio",
    description: "A sleek photography portfolio website with gallery management and booking system.",
    fullDescription: "Shooty is a professional photography portfolio platform designed for photographers to showcase their work beautifully. It includes features like dynamic galleries, client booking system, image optimization, and social media integration to help photographers grow their business.",
    image: "/portrait.jpg",
    images: [
      {
        src: "/portrait.jpg",
        alt: "Shooty portfolio homepage",
        caption: "Clean and modern portfolio homepage"
      },
      {
        src: "/code.jpg",
        alt: "Gallery management interface",
        caption: "Intuitive gallery management system"
      },
      {
        src: "/portrait.jpg",
        alt: "Booking system",
        caption: "Integrated client booking system"
      },
      {
        src: "/code.jpg",
        alt: "Mobile responsive design",
        caption: "Fully responsive design for all devices"
      }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Sanity CMS", "Stripe"],
    githubUrl: "https://github.com/yourusername/shooty",
    slug: "shooty",
    featured: true // This will appear in Featured Projects
  },
  {
    id: "taskmaster",
    name: "TaskMaster",
    title: "TaskMaster - Project Management Tool",
    description: "A comprehensive project management application with team collaboration features.",
    fullDescription: "TaskMaster is a full-featured project management tool designed for modern teams. It includes task tracking, time management, team collaboration, file sharing, and detailed reporting capabilities to help teams stay organized and productive.",
    image: "/code.jpg",
    images: [
      {
        src: "/code.jpg",
        alt: "TaskMaster dashboard",
        caption: "Clean and intuitive dashboard overview"
      },
      {
        src: "/portrait.jpg",
        alt: "Task management interface",
        caption: "Drag-and-drop task organization"
      }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    githubUrl: "https://github.com/yourusername/taskmaster",
    slug: "taskmaster",
    featured: false // This will only appear in All Projects
  },
  {
    id: "weatherapp",
    name: "WeatherApp",
    title: "WeatherApp - Climate Tracker",
    description: "A simple weather application with location-based forecasts and weather alerts.",
    fullDescription: "WeatherApp provides real-time weather information with detailed forecasts, weather maps, and push notifications for severe weather alerts. Built with a focus on simplicity and accuracy.",
    image: "/portrait.jpg",
    technologies: ["Vue.js", "Express.js", "OpenWeather API", "PWA"],
    githubUrl: "https://github.com/yourusername/weatherapp",
    slug: "weatherapp",
    featured: false // This will only appear in All Projects
  },
  {
    id: "blogplatform",
    name: "BlogPlatform",
    title: "BlogPlatform - Content Management",
    description: "A modern blogging platform with markdown support and SEO optimization.",
    fullDescription: "BlogPlatform is a content management system built for bloggers and content creators. Features include markdown editing, SEO optimization, analytics dashboard, and social media integration.",
    image: "/code.jpg",
    technologies: ["Gatsby", "GraphQL", "Netlify CMS", "Tailwind CSS"],
    demoUrl: "https://blogplatform-demo.netlify.app",
    githubUrl: "https://github.com/yourusername/blogplatform",
    slug: "blogplatform",
    featured: false // This will only appear in All Projects
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured === true);
}

export function getAllProjects(): Project[] {
  return projects;
}
