
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const linkClasses = "text-[#B7C2D6] hover:text-white transition-colors duration-300";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-wider text-white">
          Achraf Oubella
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={linkClasses}>{link.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={`${linkClasses} text-lg`} onClick={() => setIsMenuOpen(false)}>{link.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
