const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-[#B7C2D6] text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Achraf Oubella. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" aria-label="LinkedIn" className="text-[#B7C2D6] hover:text-white transition-colors">
            <LinkedInIcon />
          </a>
          <a href="#" aria-label="Instagram" className="text-[#B7C2D6] hover:text-white transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="YouTube" className="text-[#B7C2D6] hover:text-white transition-colors">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
