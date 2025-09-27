'use client';

import Image from 'next/image';
import { useI18n } from '../hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function HeroSection() {
	const { t } = useI18n();

	return (
		<section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>
			
			<div className="relative text-center">
				<div className="mb-6 sm:mb-8">
					<div className="relative inline-block animate-float">
						<Image 
							src="/portrait.jpg" 
							alt="Profile Picture" 
							width={140} 
							height={140} 
							className="rounded-full mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 animate-glow" 
						/>
						<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/8 to-purple-400/8 blur-xl"></div>
					</div>
				</div>
				<h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6">
					{t('hero.name')}
				</h1>
				<p className="text-xl sm:text-2xl text-blue-200 mb-8 sm:mb-10 font-medium">{t('hero.title')}</p>
				<p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
					{t('hero.description')}
				</p>
			</div>
		</section>
	);
}
