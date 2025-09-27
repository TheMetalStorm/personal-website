'use client';

import { useI18n } from '../hooks/useI18n';

export default function SkillsSection() {
	const { t } = useI18n();
	const skills = ['Java', 'Spring Boot', 'OOP', 'MongoDB', 'PostgreSQL', 'Git/GitHub', 'Ubuntu', 'Bash', 'PowerShell', 'C#',  'Unity', 'CI/CD', ];

	return (
		<section className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 py-16 sm:py-24 backdrop-blur-sm">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8 sm:mb-12 text-center">{t('skills.title')}</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
					{skills.map((skill, index) => (
						<div
							key={skill}
							className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/40 p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 hover:border-gray-600/60"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
								{skill}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
