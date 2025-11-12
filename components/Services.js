const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Services & Skills</h2>
        <p className="mt-4 text-lg text-[#B7C2D6]">What I can do for you.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {SERVICES.map((service) => (
          <div key={service.title} className="glass-card p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7C5CFF]/10 text-[#7C5CFF] rounded-full flex items-center justify-center mb-4">
              {React.cloneElement(service.icon, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Technical Skills</h3>
        <div className="space-y-6">
          {SKILLS.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-sm text-[#B7C2D6]">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-[#7C5CFF] to-[#2FD4D9] h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
