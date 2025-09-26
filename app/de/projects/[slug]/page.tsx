import { notFound } from 'next/navigation';
import { getAllProjectSlugs } from '../../../data/projectsBase';
import ProjectDetail from '../../../components/ProjectDetail';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
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
