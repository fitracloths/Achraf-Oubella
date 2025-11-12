const { useState } = React;

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
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
