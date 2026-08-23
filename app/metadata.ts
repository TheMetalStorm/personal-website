import type { Metadata } from 'next';

export const SITE_URL = 'https://simonarapoglu.com';

type Locale = 'en' | 'de';

interface PageMetadataOptions {
	locale: Locale;
	path: string;
	title: string;
	description: string;
	keywords?: string[];
	image?: string;
	type?: 'website' | 'article';
}

function localePath(locale: Locale, path: string): string {
	return locale === 'de' ? `/de${path}` : path || '/';
}

export function createPageMetadata({
	locale,
	path,
	title,
	description,
	keywords,
	image = '/portrait.jpg',
	type = 'website',
}: PageMetadataOptions): Metadata {
	const canonicalPath = localePath(locale, path);
	const englishPath = path || '/';
	const germanPath = `/de${path}` || '/de';
	const localeLabel = locale === 'de' ? 'de_DE' : 'en_US';

	return {
		title,
		description,
		...(keywords ? { keywords } : {}),
		alternates: {
			canonical: canonicalPath,
			languages: {
				en: englishPath,
				de: germanPath,
			},
		},
		openGraph: {
			title: `${title} - Simon Arapoglu`,
			description,
			url: `${SITE_URL}${canonicalPath}`,
			siteName: locale === 'de' ? 'Simon Arapoglu - Entwickler Portfolio' : 'Simon Arapoglu - Developer Portfolio',
			images: [{ url: image, width: 1200, height: 630, alt: title }],
			locale: localeLabel,
			type,
		},
	};
}
