
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex-shrink-0">
          <div className="glass-card p-2 rounded-full w-48 h-48 mx-auto">
             <img 
               src="https://picsum.photos/seed/profile/400/400" 
               alt="Achraf Oubella"
               className="rounded-full w-full h-full object-cover"
             />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">About Me</h2>
          <p className="mt-4 text-lg text-[#B7C2D6] leading-relaxed">
            Creative and technically strong video editor with 6 years of professional experience in storytelling across social, commercial and long-form formats. I'm skilled at editing a wide range of content and experienced in motion graphics, photography, and launching ad campaigns for e-commerce.
          </p>
          <p className="mt-2 text-md text-[#B7C2D6]">Fluent in Arabic, French and English.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#contact" className="cta-button text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
              Contact Me
            </a>
            {/* <a href="/cv.pdf" download className="secondary-cta font-semibold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
