import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';

export const metadata: Metadata = {
	title: 'Impressum',
	description: 'Impressum und Kontaktdaten für simonarapoglu.com.',
};

export default function GermanImprintPage() {
	return <LegalPage kind="imprint" />;
}
