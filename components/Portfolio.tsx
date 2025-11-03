
import React, { useState, useMemo } from 'react';
import { PROJECTS, CATEGORIES } from '../constants';
import { Project, ProjectCategory } from '../types';
import GlassCard from './GlassCard';

interface PortfolioProps {
  onProjectSelect: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">My Portfolio</h2>
        <p className="mt-4 text-lg text-[#B7C2D6]">Explore my diverse range of video projects.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as ProjectCategory)}
            className={`filter-pill py-2 px-5 rounded-full text-sm font-semibold transition-colors duration-300 ${
              activeCategory === category ? 'active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <GlassCard key={project.id} project={project} onProjectSelect={onProjectSelect} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
