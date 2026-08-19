import type { Metadata } from 'next';
import GamesList from '../components/GamesList';

export const metadata: Metadata = {
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
	openGraph: {
		title: 'Games & Interactive Projects - Simon Arapoglu',
		description: 'Explore my game development projects including Unity games, interactive applications, and creative coding experiments.',
		type: 'website',
	},
};

export default function GamesPage() {
	return <GamesList />;
}
