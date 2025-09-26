import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Project Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Projects
          </Link>
          <Link 
            href="/" 
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}