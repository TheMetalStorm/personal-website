import { MetadataRoute } from 'next';
import { getAllProjectSlugs } from './data/projectsBase';
import { getAllGameSlugs } from './data/gamesBase';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://themetalstorm.github.io/personal-website';
  const currentDate = new Date().toISOString();

  // Get all project and game slugs
  const projectSlugs = getAllProjectSlugs();
  const gameSlugs = getAllGameSlugs();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/de`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Projects pages
  const projectPages = [
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/de/projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Games pages
  const gamePages = [
    {
      url: `${baseUrl}/games`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/games`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/de/games`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Individual project pages
  const individualProjectPages = projectSlugs.flatMap(slug => [
    {
      url: `${baseUrl}/projects/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/projects/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/projects/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ]);

  // Individual game pages
  const individualGamePages = gameSlugs.flatMap(slug => [
    {
      url: `${baseUrl}/games/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/games/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/games/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ]);

  return [
    ...mainPages,
    ...projectPages,
    ...gamePages,
    ...individualProjectPages,
    ...individualGamePages,
  ];
}