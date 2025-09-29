'use client';

import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import GamesSection from '../components/GamesSection';
import ContactSection from '../components/ContactSection';

export default function GermanHomePage() {
	return (
		<main className="min-h-screen bg-gray-900 pt-16">
			<HeroSection />
			<SkillsSection />
			<AboutSection />
			<ProjectsSection />
			<GamesSection />
			<ContactSection />
		</main>
	);
}
