'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';
import { Mail, Linkedin, Github, FileText, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
	const { t, locale } = useI18n();

	const resumePath = locale === 'de' ? '/resume/Resume_German.pdf' : '/resume/Resume_English.pdf';
	const linkedInUrl = locale === 'de'
		? 'https://www.linkedin.com/in/simon-arapoglu/'
		: 'https://www.linkedin.com/in/simon-arapoglu/?locale=en_US';

	const handleResume = () => {
		window.open(resumePath, '_blank', 'noopener,noreferrer');
	};

	return (
		<section id="contact" className="relative py-32 overflow-hidden bg-brand-navy">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl lg:text-7xl font-outfit font-bold text-white mb-8 leading-tight">
							{t('contact.title')}
						</h2>
						<p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
							{t('contact.description')}
						</p>

						<div className="flex flex-col gap-6">
							<div className="flex items-center gap-4 text-slate-300">
								<div className="p-3 bento-glass rounded-2xl">
									<MapPin className="w-6 h-6 text-brand-blue" />
								</div>
								<span className="text-lg font-medium">Fürth, Bavaria, Germany</span>
							</div>
							<div className="flex items-center gap-4 text-slate-300">
								<div className="p-3 bento-glass rounded-2xl">
									<Mail className="w-6 h-6 text-brand-violet" />
								</div>
								<span className="text-lg font-medium">arapoglu.simon@gmx.de</span>
							</div>
						</div>
					</div>

					<div className="grid gap-6">
						<motion.div
							whileHover={{ scale: 1.02 }}
							className="p-8 bento-glass border-brand-blue/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
						>
							<div className="flex items-center gap-6">
								<div className="p-4 bg-brand-blue/10 rounded-2xl">
									<Linkedin className="w-8 h-8 text-brand-blue" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white">LinkedIn</h3>
									<p className="text-slate-400 text-sm">{t('contact.messageLinkedIn')}</p>
								</div>
							</div>
							<a
								href={linkedInUrl}
								target="_blank"
								className="px-6 py-3 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
							>
								Connect <ArrowUpRight className="w-4 h-4" />
							</a>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.02 }}
							className="p-8 bento-glass border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
						>
							<div className="flex items-center gap-6">
								<div className="p-4 bg-white/5 rounded-2xl">
									<FileText className="w-8 h-8 text-slate-400" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
									<p className="text-slate-400 text-sm">Download professional resume</p>
								</div>
							</div>
							<button
								onClick={handleResume}
								className="px-6 py-3 bento-glass hover:bg-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 border-white/10"
							>
								{t('contact.resume')} <ArrowUpRight className="w-4 h-4" />
							</button>
						</motion.div>

						<div className="flex gap-6 mt-4">
							<a
								href="https://github.com/TheMetalStorm"
								target="_blank"
								className="flex-1 p-6 bento-glass border-white/5 flex items-center justify-center gap-3 text-slate-400 hover:text-white transition-all group"
							>
								<Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
								<span className="font-bold">GITHUB</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Footer Gradient */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
		</section>
	);
}
