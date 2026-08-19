import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
	title: {
		default: 'Simon Arapoglu - Fullstack-Entwickler & Spieleentwickler',
		template: '%s | Simon Arapoglu - Entwickler Portfolio',
	},
	description: 'Leidenschaftlicher Fullstack-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung. Entdecken Sie meine Projekte mit Desktop-Anwendungen, Terminal-Tools, Spielen und Softwarelösungen.',
	keywords: [
		'Simon Arapoglu',
		'Fullstack-Entwickler',
		'Software-Ingenieur',
		'Spieleentwickler',
		'Java',
		'Spring Boot',
		'REST-APIs',
		'TypeScript',
		'Next.js',
		'Unity',
		'C#',
		'Webentwicklung',
		'Spieleentwicklung',
		'Portfolio',
		'Fullstack-Entwicklung',
		'Frontend-Entwicklung',
		'API-Entwicklung',
		'Clean Code',
		'Software-Architektur',
	],
	authors: [{ name: 'Simon Arapoglu' }],
	creator: 'Simon Arapoglu',
	metadataBase: new URL('https://simonarapoglu.com'),
	alternates: {
		canonical: '/de',
		languages: {
			'en': '/en',
			'de': '/de',
		},
	},
	openGraph: {
		title: 'Simon Arapoglu - Fullstack-Entwickler & Spieleentwickler',
		description: 'Leidenschaftlicher Fullstack-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung. Entdecken Sie meine Projekte mit Desktop-Anwendungen, Terminal-Tools, Spielen und Softwarelösungen.',
		url: 'https://simonarapoglu.com/de',
		siteName: 'Simon Arapoglu - Entwickler Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Arapoglu - Fullstack-Entwickler & Spieleentwickler',
			},
		],
		locale: 'de_DE',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Simon Arapoglu - Fullstack-Entwickler & Spieleentwickler',
		description: 'Leidenschaftlicher Fullstack-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung.',
		images: ['/portrait.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Simon Arapoglu",
	"jobTitle": "Fullstack-Entwickler",
	"description": "Leidenschaftlicher Fullstack-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung.",
	"url": "https://simonarapoglu.com/de",
	"image": "https://simonarapoglu.com/portrait.jpg",
	"sameAs": [
		"https://github.com/TheMetalStorm",
		"https://linkedin.com/in/simon-arapoglu"
	],
	"knowsAbout": [
		"Java",
		"Spring Boot",
		"REST-APIs",
		"TypeScript",
		"Unity",
		"C#",
		"Webentwicklung",
		"Spieleentwicklung",
		"Software-Engineering"
	],
	"hasOccupation": {
		"@type": "Occupation",
		"name": "Fullstack-Entwickler",
		"occupationLocation": {
			"@type": "Country",
			"name": "Deutschland"
		}
	}
};

export default function GermanLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Script
				id="de-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			{children}
		</>
	);
}