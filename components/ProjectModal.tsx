
import React, { useEffect } from 'react';
import { Project } from '../types';
import { XIcon } from './Icons';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 flex justify-between items-center border-b border-white/10">
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <XIcon />
          </button>
        </header>

        <div className="overflow-y-auto">
          <div className="aspect-video w-full bg-black">
            <iframe
              className="w-full h-full"
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Project Description</h3>
                <p className="text-[#B7C2D6] leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Details</h4>
                <ul className="space-y-2 text-[#B7C2D6]">
                  <li><strong>Client:</strong> {project.client}</li>
                  <li><strong>Role:</strong> {project.role}</li>
                  <li><strong>Year:</strong> {project.year}</li>
                </ul>
                <h4 className="text-lg font-semibold text-white mt-6 mb-3">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="bg-[#2FD4D9]/10 text-[#2FD4D9] text-xs font-semibold px-2 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
