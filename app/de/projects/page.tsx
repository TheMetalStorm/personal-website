import ProjectsList from '../../components/ProjectsList';
import { createPageMetadata } from '../../metadata';

export const metadata = createPageMetadata({
	locale: 'de',
	path: '/projects',
	title: 'Projekte',
	description: 'Entdecken Sie Simon Arapoglus Softwareprojekte, Entwicklertools, Emulatoren und Webanwendungen.',
});

export default function GermanProjectsPage() {
	return <ProjectsList />;
}
