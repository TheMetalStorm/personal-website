'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';

export default function ContactSection() {
	const { t, locale } = useI18n();
	
	// Get correct resume file based on locale
	const resumePath = locale === 'de' ? '/resume/Resume_German.pdf' : '/resume/Resume_English.pdf';
	
	// Get correct LinkedIn URL based on locale
	const linkedInUrl = locale === 'de' 
		? 'https://www.linkedin.com/in/simon-arapoglu/' 
		: 'https://www.linkedin.com/in/simon-arapoglu/?locale=en_US';
	
	return (
		<section className="py-16 px-4 border-t border-gray-700/50 bg-gradient-to-b from-slate-900/50 to-slate-800/30">
			<div className="max-w-2xl mx-auto">
				<motion.div 
					initial={{ opacity: 0, y: 20 }} 
					whileInView={{ opacity: 1, y: 0 }} 
					viewport={{ once: true }} 
					className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl text-center space-y-6"
				>
					<h2 className="text-2xl font-semibold text-white">{t('contact.title')}</h2>
					<p className="text-gray-300">{t('contact.description')}</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-300">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>Fürth, Bavaria, Germany</span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href={linkedInUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center gap-2 active:scale-95"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
							{t('contact.messageLinkedIn')}
						</a>
						<button
							className="px-8 py-3 border border-gray-500/50 bg-gray-800/50 text-gray-200 font-medium rounded-xl hover:bg-gray-700/70 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/10 inline-flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95"
							onClick={() => {
								try {
									// Method 1: Try window.open (works best on mobile)
									window.open(resumePath, '_blank', 'noopener,noreferrer');
								} catch (error) {
									try {
										// Method 2: Fallback to location.href
										window.location.href = resumePath;
									} catch (error2) {
										// Method 3: Create and click temporary link
										const link = document.createElement('a');
										link.href = resumePath;
										link.target = '_blank';
										link.rel = 'noopener noreferrer';
										document.body.appendChild(link);
										link.click();
										document.body.removeChild(link);
									}
								}
							}}
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							 {t('contact.resume')}
						</button>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6">
						<a 
							href="https://github.com/TheMetalStorm" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50 active:scale-95"
							title="GitHub Profile"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>

					</div>
				</motion.div>
			</div>
		</section>
	);
}
