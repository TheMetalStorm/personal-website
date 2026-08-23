import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';
import { createPageMetadata } from '../../metadata';

export const metadata: Metadata = createPageMetadata({
	locale: 'de',
	path: '/imprint',
	title: 'Impressum',
	description: 'Impressum und Kontaktdaten für simonarapoglu.com.',
});

export default function GermanImprintPage() {
	return <LegalPage kind="imprint" />;
}
