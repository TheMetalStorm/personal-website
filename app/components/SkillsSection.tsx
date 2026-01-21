'use client';

import { useI18n } from '../hooks/useI18n';
import { motion } from 'framer-motion';
import { Code2, Database, Gamepad2, Layers } from 'lucide-react';

export default function SkillsSection() {
	const { t } = useI18n();

	const categories = [
		{
			title: 'Backend',
			icon: <Database className="w-6 h-6 text-brand-blue" />,
			skills: ['Java', 'Spring Boot', 'OOP', 'MongoDB', 'PostgreSQL', 'Docker'],
			className: 'lg:col-span-2 bento-glow-blue',
		},
		{
			title: 'Game Dev',
			icon: <Gamepad2 className="w-6 h-6 text-brand-lime" />,
			skills: ['Unity', 'C#', 'HLSL', 'Shader Graph'],
			className: 'lg:col-span-1 border-brand-lime/10',
		},
		{
			title: 'Systems & Tools',
			icon: <Code2 className="w-6 h-6 text-brand-violet" />,
			skills: ['C/C++', 'Zig', 'Git', 'CI/CD', 'Bash'],
			className: 'lg:col-span-1 bento-glow-violet',
		},
		{
			title: 'Other',
			icon: <Layers className="w-6 h-6 text-white" />,
			skills: ['Ubuntu', 'PowerShell', 'REST APIs', 'Cloud'],
			className: 'lg:col-span-2',
		}
	];

	return (
		<section className="relative py-24 bg-brand-navy/50">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="mb-12">
					<h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-4">
						{t('skills.title')}
					</h2>
					<p className="text-slate-400 max-w-xl text-lg">
						Professional expertise and technical tools I use to bring ideas to life.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map((cat, i) => (
						<motion.div
							key={cat.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className={`p-8 bento-glass group ${cat.className}`}
						>
							<div className="flex items-center gap-4 mb-6">
								<div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
									{cat.icon}
								</div>
								<h3 className="text-xl font-outfit font-bold text-white uppercase tracking-tight">
									{cat.title}
								</h3>
							</div>

							<div className="flex flex-wrap gap-2">
								{cat.skills.map(skill => (
									<span
										key={skill}
										className="px-3 py-1.5 bg-white/5 rounded-xl text-sm font-medium text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
