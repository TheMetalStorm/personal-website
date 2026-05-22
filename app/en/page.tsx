'use client';

import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import GamesSection from '../components/GamesSection';
import CtaBanner from '../components/CtaBanner';
import ContactSection from '../components/ContactSection';

export default function EnglishHomePage() {
	return (
		<main className="min-h-screen bg-gray-900 pt-16">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<GamesSection />
			<CtaBanner />
			<ContactSection />
		</main>
	);
}