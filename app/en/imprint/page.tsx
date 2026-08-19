import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';

export const metadata: Metadata = {
	title: 'Imprint',
	description: 'Legal notice and contact details for simonarapoglu.com.',
};

export default function EnglishImprintPage() {
	return <LegalPage kind="imprint" />;
}
