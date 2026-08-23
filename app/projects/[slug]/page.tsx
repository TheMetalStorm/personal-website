import { getAllProjectSlugs, getBaseProjectBySlug, localizeProject } from '../../data/projectsBase';
import ProjectDetail from '../../components/ProjectDetail';
import type { Metadata } from 'next';
import { createPageMetadata } from '../../metadata';

// Load translations server-side
async function loadTranslations(locale: string) {
  try {
    const translations = await import(`../../locales/${locale}.json`);
    return translations.default;
  } catch {
    const translations = await import(`../../locales/en.json`);
    return translations.default;
  }
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = 'en';
  
  const baseProject = getBaseProjectBySlug(slug);
  if (!baseProject) {
		return createPageMetadata({
			locale: 'en',
			path: `/projects/${slug}`,
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
		});
  }

  const translations = await loadTranslations(locale);
  const project = localizeProject(baseProject, translations?.projectsData?.[baseProject.id as keyof typeof translations.projectsData]);

  const projectImage = project.headerImage || project.image;

	return createPageMetadata({
		locale: 'en',
		path: `/projects/${slug}`,
    title: project.title,
    description: project.description,
    keywords: [
      project.name,
      ...project.technologies,
      'Software Development',
      'Simon Arapoglu',
      ...(project.developmentType ? [project.developmentType] : []),
    ],
    image: projectImage,
    type: 'article',
  });
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  return <ProjectDetail slug={slug} />;
}
