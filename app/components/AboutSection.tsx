'use client';

import { useI18n } from '../hooks/useI18n';
import { User, Code, Database, Cpu, Gamepad2 } from 'lucide-react';

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="bg-gradient-to-b from-slate-900/30 to-slate-800/30 py-16 sm:py-24 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-400" />
                    {t('about.sections.professional.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {t('about.sections.professional.description')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-400" />
                    {t('about.sections.experience.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {t('about.sections.experience.description')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    {t('about.sections.projects.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {t('about.sections.projects.description')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-orange-400" />
                    {t('about.sections.philosophy.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {t('about.sections.philosophy.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Highlight Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-700/30 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Backend Focus</h3>
              </div>
              <p className="text-gray-300 text-sm">Java/Spring, APIs, database management, and system architecture</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm border border-purple-700/30 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Systems Programming</h3>
              </div>
              <p className="text-gray-300 text-sm">Low-level programming, emulators, and performance-critical solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 backdrop-blur-sm border border-green-700/30 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Game Development</h3>
              </div>
              <p className="text-gray-300 text-sm">Unity, custom shaders, and interactive narrative systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}