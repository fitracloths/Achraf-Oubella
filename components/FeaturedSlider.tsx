
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';

interface FeaturedSliderProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ projects, onProjectSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);


  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <section id="featured" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Work</h2>
        <p className="mt-4 text-lg text-[#B7C2D6]">A selection of my best projects.</p>
      </div>
      <div className="relative h-[50vh] max-h-[500px] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden group">
        <div style={{ backgroundImage: `url(${currentProject.thumbnailUrl})` }} className="w-full h-full bg-center bg-cover duration-500 transition-transform transform group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2FD4D9]">{currentProject.category}</span>
          <h3 className="text-2xl sm:text-4xl font-bold mt-2">{currentProject.title}</h3>
          <button onClick={() => onProjectSelect(currentProject)} className="mt-4 secondary-cta font-semibold py-2 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 text-sm">
            View Case
          </button>
        </div>
        
        <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <ArrowLeftIcon />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <ArrowRightIcon />
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
