'use client';

import Link from 'next/link';
import { useI18n } from '../hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Home, Code2, Gamepad2 } from 'lucide-react';

export default function Header() {
	const { t, locale } = useI18n();
	
	const homeUrl = locale === 'de' ? '/de' : '/';
	const projectsUrl = locale === 'de' ? '/de/projects' : '/projects';
	const gamesUrl = locale === 'de' ? '/de/games' : '/games';

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo/Home Link */}
					<Link 
						href={homeUrl}
						className="flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-400 transition-colors"
					>
						<Home className="w-5 h-5" />
						<span className="hidden sm:inline">{t('navigation.home')}</span>
					</Link>

					{/* Navigation Links */}
					<nav className="flex items-center gap-6">
						<Link 
							href={projectsUrl}
							className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
						>
							<Code2 className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.projects')}</span>
						</Link>
						
						<Link 
							href={gamesUrl}
							className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
						>
							<Gamepad2 className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.games')}</span>
						</Link>

						{/* Language Switcher */}
						<LanguageSwitcher />
					</nav>
				</div>
			</div>
		</header>
	);
}