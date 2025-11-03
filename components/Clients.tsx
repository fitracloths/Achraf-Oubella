
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Trusted By</h2>
          <p className="mt-4 text-lg text-[#B7C2D6]">I've had the pleasure of working with great companies.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {CLIENTS.map(client => (
            <div key={client.name} className="flex flex-col items-center text-center">
              <img src={client.logoUrl} alt={client.name} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"/>
              <p className="text-sm mt-3 text-[#B7C2D6]">{client.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
