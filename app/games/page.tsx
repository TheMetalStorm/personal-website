import type { Metadata } from 'next';
import GamesList from '../components/GamesList';
import { createPageMetadata } from '../metadata';

export const metadata: Metadata = createPageMetadata({
	locale: 'en',
	path: '/games',
	title: 'Games & Interactive Projects',
	description: 'Explore my game development projects including Unity games, interactive applications, and creative coding experiments. From bachelor thesis work to indie game prototypes.',
	keywords: [
		'Game Development',
		'Unity',
		'C#',
		'Interactive Projects',
		'Game Design',
		'Simon Arapoglu',
		'Indie Games',
		'Creative Coding',
		'Bachelor Thesis',
		'Game Portfolio',
	],
});

export default function GamesPage() {
	return <GamesList />;
}
