import { Geist, Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';
import { I18nProvider } from './hooks/useI18n';
import Header from './components/Header';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Simon Arapoglu - Backend Developer & Game Developer',
		template: '%s | Simon Arapoglu - Developer Portfolio',
	},
	description: 'Passionate backend developer specializing in Java Spring Boot, REST APIs, and Unity game development. Explore my projects including desktop applications, terminal tools, games, and software solutions.',
	keywords: [
		'Simon Arapoglu',
		'Backend Developer',
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
		'Backend Development',
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
		title: 'Simon Arapoglu - Backend Developer & Game Developer',
		description: 'Passionate backend developer specializing in Java Spring Boot, REST APIs, and Unity game development. Explore my projects including desktop applications, terminal tools, games, and software solutions.',
		url: 'https://simonarapoglu.com',
		siteName: 'Simon Arapoglu - Developer Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Arapoglu - Backend Developer & Game Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Simon Arapoglu - Backend Developer & Game Developer',
		description: 'Passionate backend developer specializing in Java Spring Boot, REST APIs, and Unity game development.',
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
		"jobTitle": "Backend Developer",
		"description": "Passionate backend developer specializing in Java Spring Boot, REST APIs, and Unity game development.",
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
			"name": "Software Developer",
			"occupationLocation": {
				"@type": "Country",
				"name": "Germany"
			}
		}
	};

	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden min-h-screen`}>


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
