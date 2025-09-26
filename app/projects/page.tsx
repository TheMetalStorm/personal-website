import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Explore my portfolio of web development projects and applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {getAllProjects().map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    View Details →
                  </Link>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 font-medium text-sm"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 font-medium text-sm"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Interested in working together or have a project in mind?
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}