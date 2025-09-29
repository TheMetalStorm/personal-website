'use client';

import Link from 'next/link';
import { useI18n } from '../hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';
import { Home, Code2, Gamepad2, FileText, User } from 'lucide-react';

export default function Header() {
	const { t, locale } = useI18n();
	
	const homeUrl = locale === 'de' ? '/de' : '/';
	const projectsUrl = locale === 'de' ? '/de/projects' : '/projects';
	const gamesUrl = locale === 'de' ? '/de/games' : '/games';
	const resumePath = locale === 'de' ? '/resume/Resume_German.pdf' : '/resume/Resume_English.pdf';

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo/Home Link */}
					<Link 
						href={homeUrl}
						className="flex items-center gap-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
					>
						<Home className="w-5 h-5" />
						<span className="hidden sm:inline">{t('navigation.home')}</span>
					</Link>

					{/* Navigation Links */}
					<nav className="flex items-center gap-6">
						<Link 
							href={projectsUrl}
							className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<Code2 className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.projects')}</span>
						</Link>
						
						<Link 
							href={gamesUrl}
							className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<Gamepad2 className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.games')}</span>
						</Link>

						<Link 
							href={`${homeUrl}#about`}
							className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<User className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.about')}</span>
						</Link>

						<a
							href={resumePath}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<FileText className="w-4 h-4" />
							<span className="hidden sm:inline">{t('contact.resume')}</span>
						</a>

						{/* Language Switcher */}
						<LanguageSwitcher />
					</nav>
				</div>
			</div>
		</header>
	);
}