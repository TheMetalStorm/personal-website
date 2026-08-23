import GamesList from '../../components/GamesList';
import { createPageMetadata } from '../../metadata';

export const metadata = createPageMetadata({
	locale: 'de',
	path: '/games',
	title: 'Spiele & interaktive Projekte',
	description: 'Entdecken Sie Simons Spieleentwicklungsprojekte, Unity-Spiele, interaktive Anwendungen und kreative Programmierexperimente.',
});

export default function GermanGamesPage() {
	return <GamesList />;
}
