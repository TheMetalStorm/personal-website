import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';

export const metadata: Metadata = {
	title: 'Datenschutzerklärung',
	description: 'Datenschutzerklärung für simonarapoglu.com.',
};

export default function GermanPrivacyPage() {
	return <LegalPage kind="privacy" />;
}
