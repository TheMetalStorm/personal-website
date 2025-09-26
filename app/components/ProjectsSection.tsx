import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '../data/projects';

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center mb-6 sm:mb-8">
					<h2 className="text-xl sm:text-2xl font-bold text-white">Featured Projects</h2>
					<Link 
						href="/projects" 
						className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
					>
						View All →
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{getFeaturedProjects().map((project) => (
						<div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-4">
									<Link 
										href={`/projects/${project.slug}`} 
										className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
									>
										View Details →
									</Link>
									{project.demoUrl && (
										<a 
											href={project.demoUrl} 
											target="_blank" 
											rel="noopener noreferrer"
											className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base"
										>
											Live Demo ↗
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
