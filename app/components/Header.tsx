'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useI18n } from '../hooks/useI18n';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
	const { t, locale } = useI18n();
	const pathname = usePathname();
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (document.documentElement.getAttribute('data-theme') === 'light') {
			const frame = window.requestAnimationFrame(() => setTheme('light'));
			return () => window.cancelAnimationFrame(frame);
		}
	}, []);

	useEffect(() => {
		const frame = window.requestAnimationFrame(() => setMenuOpen(false));
		return () => window.cancelAnimationFrame(frame);
	}, [pathname]);

	const toggleTheme = () => {
		const next = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('theme', next);
		} catch {
			// storage unavailable - theme still applies for this session
		}
		setTheme(next);
	};

	const isExplicitEnglish = pathname.startsWith('/en');
	const base = locale === 'de' ? '/de' : (isExplicitEnglish ? '/en' : '');
	const homeUrl = base || '/';

	const links = [
		{ href: `${base}/profile`, label: t('landing.hubs.profile.name').toLowerCase() },
		{ href: `${base}/projects`, label: t('landing.hubs.projects.name').toLowerCase() },
		{ href: `${base}/games`, label: t('landing.hubs.games.name').toLowerCase() },
		{ href: `${base}/commercial`, label: t('landing.hubs.commercial.name').toLowerCase() },
	];

	return (
		<header
			className="term-mono fixed left-0 right-0 top-0 z-50 border-b"
			style={{ background: 'var(--terminal-bg)', borderColor: 'var(--terminal-line)' }}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-[13px] sm:px-6">
				<Link href={homeUrl} className="term-link flex items-center">
					<span className="term-accent">simon@arapoglu</span>
					<span className="term-dim">:~</span>
					<span className="term-accent">$</span>
				</Link>

				<nav className="hidden items-center gap-5 md:flex">
					{links.map((link) => (
						<Link key={link.href} href={link.href} className="term-link">
							{link.label}
						</Link>
					))}
					<Link href={`${homeUrl}#contact`} className="term-link">
						{t('navigation.contact').toLowerCase()}
					</Link>
					<button type="button" onClick={toggleTheme} className="term-link" aria-label={t('navigation.themeToggle')}>
						theme:{theme}
					</button>
					<LanguageSwitcher />
				</nav>

				<button
					type="button"
					className="term-link p-1 md:hidden"
					onClick={() => setMenuOpen((open) => !open)}
					aria-expanded={menuOpen}
					aria-label={menuOpen ? t('navigation.menuClose') : t('navigation.menuOpen')}
				>
					{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{menuOpen && (
				<nav className="term-border border-t md:hidden" style={{ background: 'var(--terminal-bg)' }} aria-label="Navigation">
					<div className="flex flex-col gap-1 px-4 py-3 text-[13px]">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="term-link term-border border-b py-2"
								onClick={() => setMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<Link
							href={`${homeUrl}#contact`}
							className="term-link term-border border-b py-2"
							onClick={() => setMenuOpen(false)}
						>
							{t('navigation.contact').toLowerCase()}
						</Link>
						<div className="term-border flex items-center justify-between border-b py-2">
							<button type="button" onClick={toggleTheme} className="term-link" aria-label={t('navigation.themeToggle')}>
								theme:{theme}
							</button>
							<LanguageSwitcher />
						</div>
					</div>
				</nav>
			)}
		</header>
	);
}
