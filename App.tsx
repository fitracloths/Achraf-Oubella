
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSlider from './components/FeaturedSlider';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { PROJECTS } from './constants';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const featuredProjects = PROJECTS.filter(p => p.isFeatured);

  return (
    <div className="bg-gradient-to-br from-[#071024] to-[#0b1322] min-h-screen text-[#E6EEF8] overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <FeaturedSlider projects={featuredProjects} onProjectSelect={handleOpenModal} />
        <Portfolio onProjectSelect={handleOpenModal} />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
