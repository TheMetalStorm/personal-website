import ProjectsList from '../components/ProjectsList';
import { createPageMetadata } from '../metadata';

export const metadata = createPageMetadata({
	locale: 'en',
	path: '/projects',
	title: 'Projects',
	description: 'Explore Simon Arapoglu\'s software projects, developer tools, emulators and web applications.',
});

export default function ProjectsPage() {
	return <ProjectsList />;
}
