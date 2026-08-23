import CommercialWorkList from '../components/CommercialWorkList';
import { createPageMetadata } from '../metadata';

export const metadata = createPageMetadata({
	locale: 'en',
	path: '/commercial',
	title: 'Commercial Work',
	description: 'Selected commercial websites and client work by Simon Arapoglu.',
});

export default function CommercialWorkPage() {
	return <CommercialWorkList />;
}
