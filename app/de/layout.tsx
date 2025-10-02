import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { I18nProvider } from '../hooks/useI18n';
import Header from '../components/Header';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Simon Arapoglu - Backend-Entwickler & Spieleentwickler',
		template: '%s | Simon Arapoglu - Entwickler Portfolio',
	},
	description: 'Leidenschaftlicher Backend-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung. Entdecken Sie meine Projekte mit Desktop-Anwendungen, Terminal-Tools, Spielen und Softwarelösungen.',
	keywords: [
		'Simon Arapoglu',
		'Backend-Entwickler',
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
		'Backend-Entwicklung',
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
		title: 'Simon Arapoglu - Backend-Entwickler & Spieleentwickler',
		description: 'Leidenschaftlicher Backend-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung. Entdecken Sie meine Projekte mit Desktop-Anwendungen, Terminal-Tools, Spielen und Softwarelösungen.',
		url: 'https://simonarapoglu.com/de',
		siteName: 'Simon Arapoglu - Entwickler Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Arapoglu - Backend-Entwickler & Spieleentwickler',
			},
		],
		locale: 'de_DE',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Simon Arapoglu - Backend-Entwickler & Spieleentwickler',
		description: 'Leidenschaftlicher Backend-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung.',
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

export default function GermanLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Simon Arapoglu",
		"jobTitle": "Backend-Entwickler",
		"description": "Leidenschaftlicher Backend-Entwickler spezialisiert auf Java Spring Boot, REST-APIs und Unity-Spieleentwicklung.",
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
			"name": "Software-Entwickler",
			"occupationLocation": {
				"@type": "Country",
				"name": "Deutschland"
			}
		}
	};

	return (
		<html lang="de">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden min-h-screen`}>
				{/* Animated Background Elements */}
				<div className="fixed inset-0 pointer-events-none">
					<div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
				</div>
				
				<I18nProvider>
					<Header />
					<div className="relative z-10 pt-14 sm:pt-16">
						{children}
					</div>
				</I18nProvider>
			</body>
		</html>
	);
}