'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '../hooks/useI18n';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Briefcase, ExternalLink } from 'lucide-react';

export default function HeroSection() {
	const { t, locale } = useI18n();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	return (
		<section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-10"
				>
					{/* Main Hero Grid */}
					<div className="grid lg:grid-cols-12 gap-8 items-center">
						{/* Left Content Column */}
						<div className="lg:col-span-7 space-y-8">
							<motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
								</span>
								{t('hero.available')}

							</motion.div>

							<motion.h1
								variants={itemVariants}
								className="text-5xl lg:text-8xl font-outfit font-bold tracking-tight text-white leading-[1.1]"
							>
								{t('hero.name')}
								<span className="block text-brand-blue mt-2">{t('hero.title')}</span>
							</motion.h1>

							<motion.p
								variants={itemVariants}
								className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed text-balance"
							>
								{t('hero.description')}
							</motion.p>

							<motion.div variants={itemVariants} className="flex flex-wrap justify-center sm:justify-start items-center gap-3 pt-4">
								<div className="flex gap-3">
									<Link href={`/${locale === 'de' ? 'de/' : ''}projects`} className="group relative px-6 py-3 bg-brand-blue text-brand-navy font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
										<span className="relative z-10 flex items-center gap-2">
											{t('hero.viewProjects')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</span>
										<div className="absolute inset-0 bg-white group-hover:opacity-20 opacity-0 transition-opacity"></div>
									</Link>
									<Link href={`/${locale === 'de' ? 'de/' : ''}games`} className="group relative px-6 py-3 bento-glass text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
										<span className="relative z-10 flex items-center gap-2">
											{t('hero.viewGames')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</span>
									</Link>
								</div>
								<div className="flex gap-3">
									<a href="https://github.com/TheMetalStorm" target="_blank" className="p-3 bento-glass rounded-2xl text-slate-400 hover:text-brand-blue hover:scale-110 transition-all">
										<Github className="w-6 h-6" />
									</a>
									<a href="https://linkedin.com/in/simon-arapoglu" target="_blank" className="p-3 bento-glass rounded-2xl text-slate-400 hover:text-brand-violet hover:scale-110 transition-all">
										<Linkedin className="w-6 h-6" />
									</a>
								</div>
							</motion.div>
						</div>

						{/* Right Profile Column */}
						<motion.div
							variants={itemVariants}
							className="lg:col-span-5 relative"
						>
							<div className="relative aspect-square max-w-md mx-auto">
								{/* Backdrop Decorative Elements */}
								<div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 rounded-3xl rotate-6 blur-2xl"></div>
								<div className="absolute inset-0 bento-glass rotate-3 border-white/5"></div>

								{/* Main Image Container */}
								<div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 p-4 bg-slate-900/50 backdrop-blur-sm">
									<Image
										src="/portrait.jpg"
										alt="Simon Arapoglu"
										fill
										className="object-cover rounded-2xl transition-all duration-700"
										priority
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
									<div className="absolute bottom-6 left-6 right-6">
										<div className="p-4 bento-glass border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
											<p className="text-white font-medium">Simon Arapoglu</p>
											<p className="text-slate-400 text-sm">Full-Stack & Game Developer</p>
										</div>
									</div>
								</div>

								{/* Stat Card — below image, always in-flow */}
								<motion.div
									animate={{ y: [0, -6, 0] }}
									transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
									className="mt-4 p-4 bento-glass border-white/10"
								>
									<div className="flex gap-6">
										<div className="flex flex-col">
											<span className="text-brand-lime text-xl font-bold font-outfit leading-tight">{t('hero.stats.professional')}</span>
											<span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">{t('hero.stats.professionalLabel')}</span>
										</div>
										<div className="w-px bg-white/10 self-stretch"></div>
										<div className="flex flex-col">
											<span className="text-brand-blue text-xl font-bold font-outfit leading-tight">{t('hero.stats.personal')}</span>
											<span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">{t('hero.stats.personalLabel')}</span>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>

					{/* Spotlight Project — Full-width below hero grid */}
					<motion.div variants={itemVariants}>
						<Link
							href={`/${locale === 'de' ? 'de/' : ''}projects/ara-commodities`}
							className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] hover:border-brand-lime/30 bg-white/[0.03] backdrop-blur-sm transition-all duration-500"
						>
							{/* Subtle gradient background */}
							<div className="absolute inset-0 bg-gradient-to-r from-brand-lime/[0.04] via-transparent to-brand-blue/[0.04] group-hover:from-brand-lime/[0.08] group-hover:to-brand-blue/[0.08] transition-all duration-500" />

							<div className="relative flex flex-col sm:flex-row items-stretch">
								{/* Screenshot preview */}
								<div className="relative sm:w-72 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
									<Image
										src="/media/ara_commodities/AraWebsiteMainPage.png"
										alt="ARA Commodities Website"
										fill
										className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/80 hidden sm:block" />
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent sm:hidden" />
								</div>

								{/* Content */}
								<div className="relative flex-1 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
									{/* Logo */}
									<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-800/80 border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
										<Image
											src="/media/ara_commodities/Ara Logo with Text.webp"
											alt="ARA Commodities"
											fill
											className="object-contain p-1.5"
										/>
									</div>

									{/* Text */}
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1.5">
											<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-[10px] font-bold uppercase tracking-wider rounded-md">
												<span className="relative flex h-1.5 w-1.5">
													<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
													<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-lime"></span>
												</span>
												{t('hero.spotlight')}
											</span>
											<span className="inline-flex items-center gap-1 text-slate-500 text-[11px] font-medium">
												<Briefcase className="w-3 h-3" />
												{locale === 'de' ? 'Freelance-Projekt' : 'Freelance'}
											</span>
										</div>
										<h3 className="font-outfit font-bold text-white text-lg group-hover:text-brand-blue transition-colors duration-300">
											ARA Commodities
										</h3>
										<p className="text-slate-400 text-sm leading-relaxed mt-0.5 line-clamp-1 sm:line-clamp-2">
											{locale === 'de'
												? 'Hochperformante, mehrsprachige Unternehmenswebseite mit Astro & Contentful CMS.'
												: 'High-performance multi-language corporate website built with Astro & Contentful CMS.'}
										</p>
									</div>

									{/* Tech tags + arrow */}
									<div className="flex items-center gap-3 flex-shrink-0">
										<div className="hidden lg:flex items-center gap-2">
											{['Astro', 'Contentful', 'TypeScript'].map((tech) => (
												<span key={tech} className="px-2.5 py-1 text-[11px] font-medium text-slate-400 bg-white/[0.04] border border-white/[0.06] rounded-lg">
													{tech}
												</span>
											))}
										</div>
										<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:bg-brand-blue group-hover:text-brand-navy group-hover:border-brand-blue transition-all duration-300">
											<ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
										</div>
									</div>
								</div>
							</div>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
