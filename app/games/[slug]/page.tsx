import { getAllGameSlugs, getBaseGameBySlug, localizeGame } from '../../data/gamesBase';
import GameDetail from '../../components/GameDetail';
import { notFound } from 'next/navigation';

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
