import ProfilePage from '../../components/ProfilePage';
import { createPageMetadata } from '../../metadata';

export const metadata = createPageMetadata({
	locale: 'de',
	path: '/profile',
	title: 'Profil',
	description: 'Simons berufliches Profil, technische Schwerpunkte und ausgewählte Projekte.',
});

export default function GermanProfilePage() {
	return <ProfilePage />;
}
