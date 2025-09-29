import { getAllGameSlugs, getBaseGameBySlug, localizeGame } from '../../data/gamesBase';
import GameDetail from '../../components/GameDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Load translations server-side
async function loadTranslations(locale: string) {
  try {
    const translations = await import(`../../locales/${locale}.json`);
    return translations.default;
  } catch {
    const translations = await import(`../../locales/en.json`);
    return translations.default;
  }
}

interface GameDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const locale = 'en';
  
  const baseGame = getBaseGameBySlug(slug);
  if (!baseGame) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.',
    };
  }

  const translations = await loadTranslations(locale);
  const game = localizeGame(baseGame, translations?.gamesData?.[baseGame.id]);

  return {
    title: game.title,
    description: game.description,
    keywords: [
      game.name,
      ...game.technologies,
      game.engine,
      'Game Development',
      'Simon Arapoglu',
      ...(game.genre ? [game.genre] : []),
    ],
    openGraph: {
      title: `${game.title} - Simon Arapoglu`,
      description: game.description,
      images: [
        {
          url: game.headerImage || game.image,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
      type: 'article',
    },
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const locale = 'en';
  
  const baseGame = getBaseGameBySlug(slug);

  if (!baseGame) {
    notFound();
  }

  const translations = await loadTranslations(locale);
  const game = localizeGame(baseGame, translations?.gamesData?.[baseGame.id]);

  return <GameDetail game={game} />;
}

export async function generateStaticParams() {
  const slugs = getAllGameSlugs();
  return slugs.map((slug) => ({ slug }));
}
