'use client';

import Image from 'next/image';
import { useI18n } from '../hooks/useI18n';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
	const { t } = useI18n();

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
					className="grid lg:grid-cols-12 gap-8 items-center"
				>
					{/* Left Content Column */}
					<div className="lg:col-span-7 space-y-8">
						<motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
							</span>
							Available for new opportunities
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

						<motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
							<button className="group relative px-6 py-3 bg-brand-blue text-brand-navy font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
								<span className="relative z-10 flex items-center gap-2">
									View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</span>
								<div className="absolute inset-0 bg-white group-hover:opacity-20 opacity-0 transition-opacity"></div>
							</button>
							<div className="flex gap-2">
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

							{/* Floating Stat Card */}
							<motion.div
								animate={{ y: [0, -10, 0] }}
								transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
								className="absolute -right-32 top-1/2 p-4 bento-glass border-white/10 hidden md:block"
							>
								<div className="flex flex-col gap-3">
									<div className="flex flex-col">
										<span className="text-brand-lime text-xl font-bold font-outfit leading-tight">{t('hero.stats.professional')}</span>
										<span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">{t('hero.stats.professionalLabel')}</span>
									</div>
									<div className="h-px bg-white/5 w-full"></div>
									<div className="flex flex-col">
										<span className="text-brand-blue text-xl font-bold font-outfit leading-tight">{t('hero.stats.personal')}</span>
										<span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">{t('hero.stats.personalLabel')}</span>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
