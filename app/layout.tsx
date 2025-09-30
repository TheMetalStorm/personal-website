import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
	title: {
		default: 'Simon Arapoglu - Full-Stack Developer & Game Developer',
		template: '%s | Simon Arapoglu - Developer Portfolio',
	},
	description: 'Passionate full-stack developer specializing in Java Spring Boot, React, and Unity game development. Explore my projects including web applications, games, and software solutions.',
	keywords: [
		'Simon Arapoglu',
		'Full-Stack Developer',
		'Software Engineer',
		'Game Developer',
		'Java',
		'Spring Boot',
		'React',
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
		title: 'Simon Arapoglu - Full-Stack Developer & Game Developer',
		description: 'Passionate full-stack developer specializing in Java Spring Boot, React, and Unity game development. Explore my projects including web applications, games, and software solutions.',
		url: 'https://simonarapoglu.com',
		siteName: 'Simon Arapoglu - Developer Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Arapoglu - Full-Stack Developer & Game Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Simon Arapoglu - Full-Stack Developer & Game Developer',
		description: 'Passionate full-stack developer specializing in Java Spring Boot, React, and Unity game development.',
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
		"jobTitle": "Full-Stack Developer",
		"description": "Passionate full-stack developer specializing in Java Spring Boot, React, and Unity game development.",
		"url": "https://simonarapoglu.com",
		"image": "https://simonarapoglu.com/portrait.jpg",
		"sameAs": [
			"https://github.com/TheMetalStorm",
			"https://linkedin.com/in/simon-arapoglu"
		],
		"knowsAbout": [
			"Java",
			"Spring Boot",
			"React",
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
