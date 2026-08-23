import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from './hooks/useI18n';
import Header from './components/Header';
import HtmlLang from './components/HtmlLang';

const themeInitScript = `(function () {
	try {
		var t = localStorage.getItem('theme');
		if (t !== 'light' && t !== 'dark') t = 'dark';
		document.documentElement.setAttribute('data-theme', t);
	} catch (e) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
})();`;

export const metadata: Metadata = {
	title: {
		default: 'Simon Arapoglu - Fullstack Developer & Game Developer',
		template: '%s | Simon Arapoglu - Developer Portfolio',
	},
	description: 'Passionate fullstack developer specializing in Java Spring Boot, REST APIs, and Unity game development. Explore my projects including desktop applications, terminal tools, games, and software solutions.',
	keywords: [
		'Simon Arapoglu',
		'Fullstack Developer',
		'Software Engineer',
		'Game Developer',
		'Java',
		'Spring Boot',
		'REST API',
		'TypeScript',
		'Next.js',
		'Unity',
		'C#',
		'Web Development',
		'Game Development',
		'Portfolio',
		'Fullstack Development',
		'Frontend Development',
		'API Development',
		'Clean Code',
		'Software Architecture',
	],
	authors: [{ name: 'Simon Arapoglu' }],
	creator: 'Simon Arapoglu',
	metadataBase: new URL('https://simonarapoglu.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en': '/en',
			'de': '/de',
		},
	},
	openGraph: {
		title: 'Simon Arapoglu - Fullstack Developer & Game Developer',
		description: 'Passionate fullstack developer specializing in Java Spring Boot, REST APIs, and Unity game development. Explore my projects including desktop applications, terminal tools, games, and software solutions.',
		url: 'https://simonarapoglu.com',
		siteName: 'Simon Arapoglu - Developer Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Arapoglu - Fullstack Developer & Game Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Simon Arapoglu - Fullstack Developer & Game Developer',
		description: 'Passionate fullstack developer specializing in Java Spring Boot, REST APIs, and Unity game development.',
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Simon Arapoglu",
		"jobTitle": "Fullstack Developer",
		"description": "Passionate fullstack developer specializing in Java Spring Boot, REST APIs, and Unity game development.",
		"url": "https://simonarapoglu.com",
		"image": "https://simonarapoglu.com/portrait.jpg",
		"sameAs": [
			"https://github.com/TheMetalStorm",
			"https://linkedin.com/in/simon-arapoglu"
		],
		"knowsAbout": [
			"Java",
			"Spring Boot",
			"REST APIs",
			"TypeScript",
			"Unity",
			"C#",
			"Web Development",
			"Game Development",
			"Software Engineering"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "Fullstack Developer",
			"occupationLocation": {
				"@type": "Country",
				"name": "Germany"
			}
		}
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: "document.documentElement.lang = window.location.pathname.startsWith('/de') ? 'de' : 'en';",
					}}
				/>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body className="antialiased relative min-h-screen overflow-x-hidden">


				<I18nProvider>
					<HtmlLang />
					<a className="skip-link" href="#main-content">Skip to content</a>
					<Header />
					<div id="main-content" className="relative z-10 pt-14 sm:pt-16">
						{children}
					</div>
				</I18nProvider>
			</body>
		</html>
	);
}
