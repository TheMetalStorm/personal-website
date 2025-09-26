'use client';

import { Project, getBaseProjects } from './projectsBase';

interface ProjectTranslation {
  title: string;
  description: string;
  fullDescription: string;
  imagesCaptions?: { [key: string]: string };
}

interface Translations {
  projectsData: { [key: string]: ProjectTranslation };
}

export function getLocalizedProjects(translations: Translations): Project[] {
  const baseProjects = getBaseProjects();
  
  return baseProjects.map(baseProject => {
    const translation = translations.projectsData[baseProject.id];
    
    return {
      ...baseProject,
      title: translation?.title || baseProject.name,
      description: translation?.description || '',
      fullDescription: translation?.fullDescription || '',
      images: baseProject.images?.map(img => ({
        ...img,
        caption: translation?.imagesCaptions?.[img.captionKey as string] || img.alt
      }))
    } as Project;
  });
}

export function getProjectBySlug(slug: string, translations: Translations): Project | undefined {
  const projects = getLocalizedProjects(translations);
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(translations: Translations): Project[] {
  const projects = getLocalizedProjects(translations);
  return projects.filter(project => project.featured === true);
}

export function getAllProjects(translations: Translations): Project[] {
  return getLocalizedProjects(translations);
}
