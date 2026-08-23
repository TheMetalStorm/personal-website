import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';
import { createPageMetadata } from '../../metadata';

export const metadata: Metadata = createPageMetadata({
	locale: 'de',
	path: '/privacy',
	title: 'Datenschutzerklärung',
	description: 'Datenschutzerklärung für simonarapoglu.com.',
});

export default function GermanPrivacyPage() {
	return <LegalPage kind="privacy" />;
}
