import ProfilePage from '../components/ProfilePage';
import { createPageMetadata } from '../metadata';

export const metadata = createPageMetadata({
	locale: 'en',
	path: '/profile',
	title: 'Profile',
	description: 'Simon Arapoglu\'s professional profile, technical focus and selected projects.',
});

export default function ProfileIndex() {
	return <ProfilePage />;
}
