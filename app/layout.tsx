import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Simon Arapoglu - Developer',
	description:
		'TODO!',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Simon Arapoglu',
	],
	authors: [{ name: 'Simon Arapoglu' }],
	creator: 'Simon Arapoglu',
	openGraph: {
		title: 'Simon Arapoglu - Developer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://your-domain.com',
		siteName: 'Simon Arapoglu - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Arapoglu - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Simon Arapoglu - Developer',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
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
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
