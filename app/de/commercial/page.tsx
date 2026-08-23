import CommercialWorkList from '../../components/CommercialWorkList';
import { createPageMetadata } from '../../metadata';

export const metadata = createPageMetadata({
	locale: 'de',
	path: '/commercial',
	title: 'Kommerzielle Arbeiten',
	description: 'Ausgewählte kommerzielle Webseiten und Kundenprojekte von Simon Arapoglu.',
});

export default function GermanCommercialWorkPage() {
	return <CommercialWorkList />;
}
