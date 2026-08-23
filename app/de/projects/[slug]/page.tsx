import { getAllProjectSlugs, getBaseProjectBySlug, localizeProject } from '../../../data/projectsBase';
import ProjectDetail from '../../../components/ProjectDetail';
import type { Metadata } from 'next';
import { createPageMetadata } from '../../../metadata';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

async function loadGermanTranslations() {
  const translations = await import('../../../locales/de.json');
  return translations.default;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseProject = getBaseProjectBySlug(slug);

  if (!baseProject) {
    return createPageMetadata({
      locale: 'de',
      path: `/projects/${slug}`,
      title: 'Projekt nicht gefunden',
      description: 'Das angeforderte Projekt wurde nicht gefunden.',
    });
  }

  const translations = await loadGermanTranslations();
  const project = localizeProject(baseProject, translations.projectsData?.[baseProject.id as keyof typeof translations.projectsData]);

  return createPageMetadata({
    locale: 'de',
    path: `/projects/${slug}`,
    title: project.title,
    description: project.description,
    keywords: [project.name, ...project.technologies, 'Softwareentwicklung', 'Simon Arapoglu'],
    image: project.headerImage || project.image,
    type: 'article',
  });
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function GermanProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  return <ProjectDetail slug={slug} />;
}
