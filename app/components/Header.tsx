'use client';

import Link from 'next/link';
import { useI18n } from '../hooks/useI18n';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { Home, Code2, Gamepad2, FileText, User } from 'lucide-react';

export default function Header() {
	const { t, locale } = useI18n();
	const pathname = usePathname();
	
	// Check if we're on explicit /en routes
	const isExplicitEnglish = pathname.startsWith('/en');
	
	const homeUrl = locale === 'de' ? '/de' : (isExplicitEnglish ? '/en' : '/');
	const projectsUrl = locale === 'de' ? '/de/projects' : (isExplicitEnglish ? '/en/projects' : '/projects');
	const gamesUrl = locale === 'de' ? '/de/games' : (isExplicitEnglish ? '/en/games' : '/games');
	const resumePath = locale === 'de' ? '/resume/Resume_German.pdf' : '/resume/Resume_English.pdf';

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
			<div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14 sm:h-16">
					{/* Logo/Home Link */}
					<Link 
						href={homeUrl}
						className="flex items-center gap-1 sm:gap-2 font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
					>
						<Home className="w-5 h-5 text-white hover:text-blue-400 transition-colors" />
						<span className="hidden sm:inline bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-400">{t('navigation.home')}</span>
					</Link>

					{/* Navigation Links */}
					<nav className="flex items-center gap-1 sm:gap-6">
						<Link 
							href={projectsUrl}
							className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<Code2 className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.projects')}</span>
						</Link>
						
						<Link 
							href={gamesUrl}
							className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<Gamepad2 className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.games')}</span>
						</Link>

						<Link 
							href={`${homeUrl}#about`}
							className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
						>
							<User className="w-4 h-4" />
							<span className="hidden sm:inline">{t('navigation.about')}</span>
						</Link>

						<a
							href={resumePath}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
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