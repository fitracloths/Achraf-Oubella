
import React from 'react';
import { Project } from '../types';
import { PlayIcon } from './Icons';

interface GlassCardProps {
  project: Project;
  onProjectSelect: (project: Project) => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ project, onProjectSelect }) => {
  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden group glass-card-hover transition-all duration-300 cursor-pointer"
      onClick={() => onProjectSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onProjectSelect(project)}
    >
      <div className="relative">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
            <PlayIcon />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-sm text-[#B7C2D6]">{project.year}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="bg-[#7C5CFF]/10 text-[#7C5CFF] text-xs font-semibold px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
