'use client';

import Image from 'next/image';
import { useI18n } from '../hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function HeroSection() {
	const { t } = useI18n();

	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				{/* Language Switcher */}
				<div className="flex justify-end mb-6">
					<LanguageSwitcher />
				</div>
				
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">{t('hero.name')}</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">{t('hero.title')}</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					{t('hero.description')}
				</p>
			</div>
		</section>
	);
}
