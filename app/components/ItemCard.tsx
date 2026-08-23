'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollSlide } from '../hooks/useScrollSlide';
import { Code2, Gamepad2, Github, ExternalLink, Play, ArrowRight, ArrowUpRight } from 'lucide-react';

interface Badge {
  text: string;
  color: 'blue' | 'purple' | 'green' | 'pink' | 'gray';
}

type IconName = 'Code2' | 'Gamepad2' | 'Github' | 'ExternalLink' | 'Play' | 'ArrowRight';

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
  image?: string;
  badges: Badge[];
  technologies: string[];
  actions: ActionButton[];
  type: 'game' | 'project';
  hoverColor?: 'blue' | 'purple';
  imageContain?: boolean;
}

const iconMap = {
  Code2,
  Gamepad2,
  Github,
	ExternalLink,
	Play,
	ArrowRight,
};

export default function ItemCard({
  title,
  description,
  image,
  technologies,
  actions,
  hoverColor = 'blue',
  imageContain = false
}: ItemCardProps) {
  const glowClass = hoverColor === 'blue' ? 'bento-glow-blue' : 'bento-glow-violet';
  const primaryAction = actions.find(a => a.isPrimary);
  const { ref, style } = useScrollSlide(30);

  return (
    <div
      ref={ref}
      style={style}
      className={`group bento-glass overflow-hidden flex flex-col h-full ${glowClass}`}
    >
      {image && (
        <Link href={primaryAction?.href || '#'} className={`relative aspect-[16/10] overflow-hidden block ${imageContain ? 'bg-slate-950' : ''}`}>
          <Image
            src={image}
            alt={title}
            fill
            className={`${imageContain ? 'object-contain p-6' : 'object-cover'} group-hover:scale-110 transition-transform duration-700 ease-out`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
            <div className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <ArrowUpRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </Link>
      )}

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 2).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 text-slate-400 text-[10px] uppercase tracking-widest font-bold rounded-lg border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link href={primaryAction?.href || '#'}>
          <h3 className="text-2xl font-outfit font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex items-center gap-4">
            {actions.filter(a => !a.isPrimary).map((action, index) => {
              const Icon = iconMap[action.icon];
              return (
                <a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  title={action.title}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {actions.filter(a => a.isPrimary).map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm group/link"
            >
              {action.label}
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
