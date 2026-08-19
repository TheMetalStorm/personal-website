import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Privacy policy for simonarapoglu.com.',
};

export default function PrivacyPage() {
	return <LegalPage kind="privacy" />;
}
