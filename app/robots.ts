import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://themetalstorm.github.io/personal-website';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/*.map$',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}