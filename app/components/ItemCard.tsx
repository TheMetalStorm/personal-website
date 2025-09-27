'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Code2, Gamepad2, Github, ExternalLink, Play } from 'lucide-react';

interface Badge {
  text: string;
  color: 'blue' | 'purple' | 'green' | 'pink' | 'gray';
}

type IconName = 'Code2' | 'Gamepad2' | 'Github' | 'ExternalLink' | 'Play';

interface ActionButton {
  href: string;
  label: string;
  icon: IconName;
  isPrimary?: boolean;
  isExternal?: boolean;
  title?: string;
}

interface ItemCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  badges: Badge[];
  technologies: string[];
  actions: ActionButton[];
  type: 'game' | 'project';
  hoverColor?: 'blue' | 'purple';
}

const badgeColors = {
  blue: 'from-blue-600 to-blue-700',
  purple: 'from-purple-600 to-purple-700',
  green: 'from-green-600 to-green-700',
  pink: 'from-pink-600 to-pink-700',
  gray: 'from-gray-600 to-gray-700',
};

const hoverGradients = {
  blue: 'group-hover:from-blue-300 group-hover:to-purple-300',
  purple: 'group-hover:from-purple-300 group-hover:to-blue-300',
};

const iconMap = {
  Code2,
  Gamepad2,
  Github,
  ExternalLink,
  Play,
};

export default function ItemCard({
  id,
  title,
  description,
  image,
  badges,
  technologies,
  actions,
  type,
  hoverColor = 'blue'
}: ItemCardProps) {
  const shadowColor = hoverColor === 'blue' ? 'hover:shadow-blue-500/10' : 'hover:shadow-purple-500/10';
  const titleHoverGradient = hoverGradients[hoverColor];

  return (
    <div className={`group bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl ${shadowColor} transform hover:scale-[1.02] transition-all duration-300 flex flex-col h-full`}>
      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-2">
          {badges.map((badge, index) => (
            <span 
              key={index}
              className={`px-3 py-1 bg-gradient-to-r ${badgeColors[badge.color]} text-white text-xs rounded-full font-medium shadow-lg backdrop-blur-sm`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3 ${titleHoverGradient} transition-all duration-300`}>
          {title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 text-xs rounded-full font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 text-xs rounded-full font-medium shadow-sm">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow"></div>
        
        {/* Action buttons - Always at the bottom */}
        <div className="flex items-center gap-3">
          {actions.map((action, index) => {
            const Icon = iconMap[action.icon];
            
            if (action.isPrimary) {
              return action.isExternal ? (
                <a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-xl transition-all text-center text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 duration-200"
                  title={action.title}
                >
                  <Icon className="w-4 h-4 inline mr-2" />
                  {action.label}
                </a>
              ) : (
                <Link
                  key={index}
                  href={action.href}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-xl transition-all text-center text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 duration-200"
                >
                  <Icon className="w-4 h-4 inline mr-2" />
                  {action.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-gray-600/20 hover:to-gray-700/20 rounded-xl transition-all duration-200 hover:scale-110"
                  title={action.title}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}