'use client';

import { useI18n } from '../hooks/useI18n';
import { useScrollSlide } from '../hooks/useScrollSlide';
import { Code2, Database, Gamepad2, Layers, Monitor } from 'lucide-react';

function SkillCard({ cat, index }: { cat: { title: string; icon: React.ReactNode; skills: string[]; className: string }; index: number }) {
	const { ref, style } = useScrollSlide(30, index * 0.08);

	return (
		<div
			ref={ref}
			style={style}
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
		</div>
	);
}

export default function SkillsSection() {
	const { t } = useI18n();

	const categories = [
		{
			title: t('skills.backend'),
			icon: <Database className="w-6 h-6 text-brand-blue" />,
			skills: ['Java', 'C#', 'Spring Boot', 'OOP', 'MongoDB', 'PostgreSQL', 'Docker'],
			className: 'lg:col-span-2 bento-glow-blue',
		},
		{
			title: t('skills.frontend'),
			icon: <Monitor className="w-6 h-6 text-brand-blue" />,
			skills: ['HTML', 'CSS', 'Svelte', 'React', 'TypeScript'],
			className: 'lg:col-span-1 bento-glow-blue',
		},
		{
			title: t('skills.gameDev'),
			icon: <Gamepad2 className="w-6 h-6 text-brand-lime" />,
			skills: ['Unity', 'HLSL', 'Shader Graph', 'Godot'],
			className: 'lg:col-span-1 border-brand-lime/10 bento-glow-lime',
		},
		{
			title: t('skills.systems'),
			icon: <Code2 className="w-6 h-6 text-brand-violet" />,
			skills: ['C/C++', 'Zig', 'Git', 'CI/CD', 'Bash'],
			className: 'lg:col-span-1 bento-glow-violet',
		},
		{
			title: t('skills.other'),
			icon: <Layers className="w-6 h-6 text-white" />,
			skills: ['Ubuntu', 'PowerShell', 'REST APIs', 'Cloud'],
			className: 'lg:col-span-1 bento-glow-white',
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
						{t('skills.description')}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map((cat, i) => (
						<SkillCard key={cat.title} cat={cat} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
