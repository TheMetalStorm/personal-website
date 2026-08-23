import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';
import { createPageMetadata } from '../metadata';

export const metadata: Metadata = createPageMetadata({
	locale: 'en',
	path: '/imprint',
	title: 'Imprint',
	description: 'Legal notice and contact details for simonarapoglu.com.',
});

export default function ImprintPage() {
	return <LegalPage kind="imprint" />;
}
