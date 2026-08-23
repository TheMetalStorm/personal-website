import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';
import { createPageMetadata } from '../metadata';

export const metadata: Metadata = createPageMetadata({
	locale: 'en',
	path: '/privacy',
	title: 'Privacy Policy',
	description: 'Privacy policy for simonarapoglu.com.',
});

export default function PrivacyPage() {
	return <LegalPage kind="privacy" />;
}
