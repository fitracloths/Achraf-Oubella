const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden -mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/10 via-transparent to-[#2FD4D9]/10 opacity-30"></div>
      <div className="z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          Achraf Oubella
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-[#B7C2D6]">
          Video Editor · Motion Graphics · Designer
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="cta-button text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            Hire Me
          </a>
          <a href="#portfolio" className="secondary-cta font-semibold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            View My Work
          </a>
        </div>
      </div>
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl h-1/2 bg-gradient-to-t from-[#7C5CFF]/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
    </section>
  );
};
